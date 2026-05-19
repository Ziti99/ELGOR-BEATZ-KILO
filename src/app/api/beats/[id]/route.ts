import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const sql = 'SELECT * FROM beats WHERE id = ?';
    const beats = await query(sql, [id]) as Array<Record<string, unknown>>;
    
    if (beats.length === 0) {
      return NextResponse.json(
        { error: 'Beat not found' },
        { status: 404 }
      );
    }
    
    // Incrémenter les vues
    await query('UPDATE beats SET views = views + 1 WHERE id = ?', [id]);
    
    return NextResponse.json({ beat: beats[0] }, { status: 200 });
  } catch (error) {
    console.error('Error fetching beat:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to fetch beat', message: errorMessage },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const {
      name, artist, genre, bpm, key_signature, price, duration,
      audio_url, image_url, description, is_exclusive, is_trending, tags
    } = body;
    
    const sql = `
      UPDATE beats SET
        name = ?, artist = ?, genre = ?, bpm = ?, key_signature = ?,
        price = ?, duration = ?, audio_url = ?, image_url = ?,
        description = ?, is_exclusive = ?, is_trending = ?, tags = ?
      WHERE id = ?
    `;
    
    const params_array = [
      name, artist, genre, bpm, key_signature, price, duration,
      audio_url, image_url, description, is_exclusive, is_trending,
      tags ? JSON.stringify(tags) : null, id
    ];
    
    await query(sql, params_array);
    
    return NextResponse.json(
      { message: 'Beat updated successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating beat:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to update beat', message: errorMessage },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await query('DELETE FROM beats WHERE id = ?', [id]);
    
    return NextResponse.json(
      { message: 'Beat deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting beat:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to delete beat', message: errorMessage },
      { status: 500 }
    );
  }
}

