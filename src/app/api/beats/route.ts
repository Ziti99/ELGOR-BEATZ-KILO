import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const genre = searchParams.get('genre');
    const limit = searchParams.get('limit');
    const offset = searchParams.get('offset');
    
    let sql = 'SELECT * FROM beats WHERE 1=1';
    const params: (string | number)[] = [];
    
    if (genre && genre !== 'All') {
      sql += ' AND genre = ?';
      params.push(genre);
    }
    
    sql += ' ORDER BY created_at DESC';
    
    if (limit) {
      sql += ' LIMIT ?';
      params.push(parseInt(limit));
      
      if (offset) {
        sql += ' OFFSET ?';
        params.push(parseInt(offset));
      }
    }
    
    const beats = await query(sql, params);
    
    return NextResponse.json({ beats }, { status: 200 });
  } catch (error) {
    console.error('Error fetching beats:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to fetch beats', message: errorMessage },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      artist = 'Elgor Beatz',
      genre,
      bpm,
      key_signature,
      price,
      duration,
      audio_url,
      image_url,
      description,
      is_exclusive = false,
      is_trending = false,
      tags
    } = body;
    
    const sql = `
      INSERT INTO beats (
        name, artist, genre, bpm, key_signature, price, duration,
        audio_url, image_url, description, is_exclusive, is_trending, tags
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const params = [
      name, artist, genre, bpm, key_signature, price, duration,
      audio_url, image_url, description || null, is_exclusive, is_trending,
      tags ? JSON.stringify(tags) : null
    ];
    
    const result = await query(sql, params) as { insertId: number };
    
    return NextResponse.json(
      { id: result.insertId, message: 'Beat created successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating beat:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to create beat', message: errorMessage },
      { status: 500 }
    );
  }
}

