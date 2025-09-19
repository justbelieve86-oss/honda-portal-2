import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'API çalışıyor' });
}

export async function POST() {
  return NextResponse.json({ message: 'POST isteği alındı' });
} 