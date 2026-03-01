import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Normalde bu veriler bir veritabanından çekilirdi
    // Şu an için sabit değerler kullanıyoruz
    // Gerçek uygulamada bu değerler veritabanından alınmalı
    const taxRates = {
      vatRate: 0.20, // KDV oranı (%20)
      sctRate: 0.18, // ÖTV oranı (%18)
    };
    
    return NextResponse.json(taxRates, { status: 200 });
  } catch (error) {
    console.error('Vergi oranları alınırken hata:', error);
    return NextResponse.json(
      { error: 'Vergi oranları alınamadı' },
      { status: 500 }
    );
  }
} 