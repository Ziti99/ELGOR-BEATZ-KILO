import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { user_id, user_ip } = body;
    
    // Vérifier si le like existe déjà
    const checkSql = user_id 
      ? 'SELECT * FROM beat_likes WHERE beat_id = ? AND user_id = ?'
      : 'SELECT * FROM beat_likes WHERE beat_id = ? AND user_ip = ?';
    
    const checkParams = user_id ? [id, user_id] : [id, user_ip];
    const existing = await query(checkSql, checkParams) as Array<{ id: number; beat_id: string; user_id: string | null; user_ip: string | null }>;
    
    if (existing.length > 0) {
      // Retirer le like
      const deleteSql = user_id
        ? 'DELETE FROM beat_likes WHERE beat_id = ? AND user_id = ?'
        : 'DELETE FROM beat_likes WHERE beat_id = ? AND user_ip = ?';
      
      await query(deleteSql, checkParams);
      await query('UPDATE beats SET likes = GREATEST(0, likes - 1) WHERE id = ?', [id]);
      
      return NextResponse.json({ liked: false, message: 'Like removed' }, { status: 200 });
    } else {
      // Ajouter le like
      const insertSql = 'INSERT INTO beat_likes (beat_id, user_id, user_ip) VALUES (?, ?, ?)';
      await query(insertSql, [id, user_id || null, user_ip || null]);
      await query('UPDATE beats SET likes = likes + 1 WHERE id = ?', [id]);
      
      return NextResponse.json({ liked: true, message: 'Like added' }, { status: 200 });
    }
  } catch (error) {
    console.error('Error toggling like:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to toggle like', message: errorMessage },
      { status: 500 }
    );
  }
}

