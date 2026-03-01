// Turkish cities and districts data

export interface City {
  id: number;
  name: string;
  districts: District[];
}

export interface District {
  id: number;
  name: string;
  cityId: number;
}

// Complete Turkish cities data with all 81 provinces
export const turkishCities: City[] = [
  {
    id: 1,
    name: 'Adana',
    districts: [
      { id: 1, name: 'Seyhan', cityId: 1 },
      { id: 2, name: 'Yüreğir', cityId: 1 },
      { id: 3, name: 'Çukurova', cityId: 1 },
      { id: 4, name: 'Sarıçam', cityId: 1 },
      { id: 5, name: 'Aladağ', cityId: 1 },
      { id: 6, name: 'Ceyhan', cityId: 1 },
      { id: 7, name: 'Feke', cityId: 1 },
      { id: 8, name: 'İmamoğlu', cityId: 1 },
      { id: 9, name: 'Karaisalı', cityId: 1 },
      { id: 10, name: 'Karataş', cityId: 1 },
      { id: 11, name: 'Kozan', cityId: 1 },
      { id: 12, name: 'Pozantı', cityId: 1 },
      { id: 13, name: 'Saimbeyli', cityId: 1 },
      { id: 14, name: 'Tufanbeyli', cityId: 1 },
      { id: 15, name: 'Yumurtalık', cityId: 1 }
    ]
  },
  {
    id: 2,
    name: 'Adıyaman',
    districts: [
      { id: 16, name: 'Merkez', cityId: 2 },
      { id: 17, name: 'Besni', cityId: 2 },
      { id: 18, name: 'Çelikhan', cityId: 2 },
      { id: 19, name: 'Gerger', cityId: 2 },
      { id: 20, name: 'Gölbaşı', cityId: 2 },
      { id: 21, name: 'Kahta', cityId: 2 },
      { id: 22, name: 'Samsat', cityId: 2 },
      { id: 23, name: 'Sincik', cityId: 2 },
      { id: 24, name: 'Tut', cityId: 2 }
    ]
  },
  {
    id: 3,
    name: 'Afyonkarahisar',
    districts: [
      { id: 25, name: 'Merkez', cityId: 3 },
      { id: 26, name: 'Bolvadin', cityId: 3 },
      { id: 27, name: 'Çay', cityId: 3 },
      { id: 28, name: 'Dazkırı', cityId: 3 },
      { id: 29, name: 'Dinar', cityId: 3 },
      { id: 30, name: 'Emirdağ', cityId: 3 },
      { id: 31, name: 'Hocalar', cityId: 3 },
      { id: 32, name: 'İhsaniye', cityId: 3 },
      { id: 33, name: 'İscehisar', cityId: 3 },
      { id: 34, name: 'Kızılören', cityId: 3 },
      { id: 35, name: 'Sandıklı', cityId: 3 },
      { id: 36, name: 'Sinanpaşa', cityId: 3 },
      { id: 37, name: 'Sultandağı', cityId: 3 },
      { id: 38, name: 'Şuhut', cityId: 3 }
    ]
  },
  {
    id: 4,
    name: 'Ağrı',
    districts: [
      { id: 39, name: 'Merkez', cityId: 4 },
      { id: 40, name: 'Diyadin', cityId: 4 },
      { id: 41, name: 'Doğubayazıt', cityId: 4 },
      { id: 42, name: 'Eleşkirt', cityId: 4 },
      { id: 43, name: 'Hamur', cityId: 4 },
      { id: 44, name: 'Patnos', cityId: 4 },
      { id: 45, name: 'Taşlıçay', cityId: 4 },
      { id: 46, name: 'Tutak', cityId: 4 }
    ]
  },
  {
    id: 5,
    name: 'Amasya',
    districts: [
      { id: 47, name: 'Merkez', cityId: 5 },
      { id: 48, name: 'Göynücek', cityId: 5 },
      { id: 49, name: 'Gümüşhacıköy', cityId: 5 },
      { id: 50, name: 'Hamamözü', cityId: 5 },
      { id: 51, name: 'Merzifon', cityId: 5 },
      { id: 52, name: 'Suluova', cityId: 5 },
      { id: 53, name: 'Taşova', cityId: 5 }
    ]
  },
  {
    id: 6,
    name: 'Ankara',
    districts: [
      { id: 54, name: 'Altındağ', cityId: 6 },
      { id: 55, name: 'Ayaş', cityId: 6 },
      { id: 56, name: 'Bala', cityId: 6 },
      { id: 57, name: 'Beypazarı', cityId: 6 },
      { id: 58, name: 'Çamlıdere', cityId: 6 },
      { id: 59, name: 'Çankaya', cityId: 6 },
      { id: 60, name: 'Çubuk', cityId: 6 },
      { id: 61, name: 'Elmadağ', cityId: 6 },
      { id: 62, name: 'Etimesgut', cityId: 6 },
      { id: 63, name: 'Evren', cityId: 6 },
      { id: 64, name: 'Gölbaşı', cityId: 6 },
      { id: 65, name: 'Güdül', cityId: 6 },
      { id: 66, name: 'Haymana', cityId: 6 },
      { id: 67, name: 'Kalecik', cityId: 6 },
      { id: 68, name: 'Kazan', cityId: 6 },
      { id: 69, name: 'Keçiören', cityId: 6 },
      { id: 70, name: 'Kızılcahamam', cityId: 6 },
      { id: 71, name: 'Mamak', cityId: 6 },
      { id: 72, name: 'Nallıhan', cityId: 6 },
      { id: 73, name: 'Polatlı', cityId: 6 },
      { id: 74, name: 'Pursaklar', cityId: 6 },
      { id: 75, name: 'Sincan', cityId: 6 },
      { id: 76, name: 'Şereflikoçhisar', cityId: 6 },
      { id: 77, name: 'Yenimahalle', cityId: 6 }
    ]
  },
  {
    id: 7,
    name: 'Antalya',
    districts: [
      { id: 78, name: 'Aksu', cityId: 7 },
      { id: 79, name: 'Alanya', cityId: 7 },
      { id: 80, name: 'Demre', cityId: 7 },
      { id: 81, name: 'Döşemealtı', cityId: 7 },
      { id: 82, name: 'Elmalı', cityId: 7 },
      { id: 83, name: 'Finike', cityId: 7 },
      { id: 84, name: 'Gazipaşa', cityId: 7 },
      { id: 85, name: 'Gündoğmuş', cityId: 7 },
      { id: 86, name: 'İbradı', cityId: 7 },
      { id: 87, name: 'Kaş', cityId: 7 },
      { id: 88, name: 'Kemer', cityId: 7 },
      { id: 89, name: 'Kepez', cityId: 7 },
      { id: 90, name: 'Konyaaltı', cityId: 7 },
      { id: 91, name: 'Korkuteli', cityId: 7 },
      { id: 92, name: 'Kumluca', cityId: 7 },
      { id: 93, name: 'Manavgat', cityId: 7 },
      { id: 94, name: 'Muratpaşa', cityId: 7 },
      { id: 95, name: 'Serik', cityId: 7 }
    ]
  },
  {
    id: 8,
    name: 'Artvin',
    districts: [
      { id: 96, name: 'Merkez', cityId: 8 },
      { id: 97, name: 'Ardanuç', cityId: 8 },
      { id: 98, name: 'Arhavi', cityId: 8 },
      { id: 99, name: 'Borçka', cityId: 8 },
      { id: 100, name: 'Hopa', cityId: 8 },
      { id: 101, name: 'Murgul', cityId: 8 },
      { id: 102, name: 'Şavşat', cityId: 8 },
      { id: 103, name: 'Yusufeli', cityId: 8 }
    ]
  },
  {
    id: 9,
    name: 'Aydın',
    districts: [
      { id: 104, name: 'Efeler', cityId: 9 },
      { id: 105, name: 'Bozdoğan', cityId: 9 },
      { id: 106, name: 'Buharkent', cityId: 9 },
      { id: 107, name: 'Çine', cityId: 9 },
      { id: 108, name: 'Didim', cityId: 9 },
      { id: 109, name: 'Germencik', cityId: 9 },
      { id: 110, name: 'İncirliova', cityId: 9 },
      { id: 111, name: 'Karacasu', cityId: 9 },
      { id: 112, name: 'Karpuzlu', cityId: 9 },
      { id: 113, name: 'Koçarlı', cityId: 9 },
      { id: 114, name: 'Köşk', cityId: 9 },
      { id: 115, name: 'Kuşadası', cityId: 9 },
      { id: 116, name: 'Kuyucak', cityId: 9 },
      { id: 117, name: 'Nazilli', cityId: 9 },
      { id: 118, name: 'Söke', cityId: 9 },
      { id: 119, name: 'Sultanhisar', cityId: 9 },
      { id: 120, name: 'Yenipazar', cityId: 9 }
    ]
  },
  {
    id: 10,
    name: 'Balıkesir',
    districts: [
      { id: 121, name: 'Altıeylül', cityId: 10 },
      { id: 122, name: 'Karesi', cityId: 10 },
      { id: 123, name: 'Ayvalık', cityId: 10 },
      { id: 124, name: 'Balya', cityId: 10 },
      { id: 125, name: 'Bandırma', cityId: 10 },
      { id: 126, name: 'Bigadiç', cityId: 10 },
      { id: 127, name: 'Burhaniye', cityId: 10 },
      { id: 128, name: 'Dursunbey', cityId: 10 },
      { id: 129, name: 'Edremit', cityId: 10 },
      { id: 130, name: 'Erdek', cityId: 10 },
      { id: 131, name: 'Gömeç', cityId: 10 },
      { id: 132, name: 'Gönen', cityId: 10 },
      { id: 133, name: 'Havran', cityId: 10 },
      { id: 134, name: 'İvrindi', cityId: 10 },
      { id: 135, name: 'Kepsut', cityId: 10 },
      { id: 136, name: 'Manyas', cityId: 10 },
      { id: 137, name: 'Marmara', cityId: 10 },
      { id: 138, name: 'Savaştepe', cityId: 10 },
      { id: 139, name: 'Sındırgı', cityId: 10 },
      { id: 140, name: 'Susurluk', cityId: 10 }
    ]
  },
  {
    id: 11,
    name: 'Bilecik',
    districts: [
      { id: 141, name: 'Merkez', cityId: 11 },
      { id: 142, name: 'Bozüyük', cityId: 11 },
      { id: 143, name: 'Gölpazarı', cityId: 11 },
      { id: 144, name: 'İnhisar', cityId: 11 },
      { id: 145, name: 'Osmaneli', cityId: 11 },
      { id: 146, name: 'Pazaryeri', cityId: 11 },
      { id: 147, name: 'Söğüt', cityId: 11 },
      { id: 148, name: 'Yenipazar', cityId: 11 }
    ]
  },
  {
    id: 12,
    name: 'Bingöl',
    districts: [
      { id: 149, name: 'Merkez', cityId: 12 },
      { id: 150, name: 'Adaklı', cityId: 12 },
      { id: 151, name: 'Genç', cityId: 12 },
      { id: 152, name: 'Karlıova', cityId: 12 },
      { id: 153, name: 'Kiğı', cityId: 12 },
      { id: 154, name: 'Solhan', cityId: 12 },
      { id: 155, name: 'Yayladere', cityId: 12 },
      { id: 156, name: 'Yedisu', cityId: 12 }
    ]
  },
  {
    id: 13,
    name: 'Bitlis',
    districts: [
      { id: 157, name: 'Merkez', cityId: 13 },
      { id: 158, name: 'Adilcevaz', cityId: 13 },
      { id: 159, name: 'Ahlat', cityId: 13 },
      { id: 160, name: 'Güroymak', cityId: 13 },
      { id: 161, name: 'Hizan', cityId: 13 },
      { id: 162, name: 'Mutki', cityId: 13 },
      { id: 163, name: 'Tatvan', cityId: 13 }
    ]
  },
  {
    id: 14,
    name: 'Bolu',
    districts: [
      { id: 164, name: 'Merkez', cityId: 14 },
      { id: 165, name: 'Dörtdivan', cityId: 14 },
      { id: 166, name: 'Gerede', cityId: 14 },
      { id: 167, name: 'Göynük', cityId: 14 },
      { id: 168, name: 'Kıbrıscık', cityId: 14 },
      { id: 169, name: 'Mengen', cityId: 14 },
      { id: 170, name: 'Mudurnu', cityId: 14 },
      { id: 171, name: 'Seben', cityId: 14 },
      { id: 172, name: 'Yeniçağa', cityId: 14 }
    ]
  },
  {
    id: 15,
    name: 'Burdur',
    districts: [
      { id: 173, name: 'Merkez', cityId: 15 },
      { id: 174, name: 'Ağlasun', cityId: 15 },
      { id: 175, name: 'Altınyayla', cityId: 15 },
      { id: 176, name: 'Bucak', cityId: 15 },
      { id: 177, name: 'Çavdır', cityId: 15 },
      { id: 178, name: 'Çeltikçi', cityId: 15 },
      { id: 179, name: 'Gölhisar', cityId: 15 },
      { id: 180, name: 'Karamanlı', cityId: 15 },
      { id: 181, name: 'Kemer', cityId: 15 },
      { id: 182, name: 'Tefenni', cityId: 15 },
      { id: 183, name: 'Yeşilova', cityId: 15 }
    ]
  },
  {
    id: 16,
    name: 'Bursa',
    districts: [
      { id: 184, name: 'Osmangazi', cityId: 16 },
      { id: 185, name: 'Nilüfer', cityId: 16 },
      { id: 186, name: 'Yıldırım', cityId: 16 },
      { id: 187, name: 'Büyükorhan', cityId: 16 },
      { id: 188, name: 'Gemlik', cityId: 16 },
      { id: 189, name: 'Gürsu', cityId: 16 },
      { id: 190, name: 'Harmancık', cityId: 16 },
      { id: 191, name: 'İnegöl', cityId: 16 },
      { id: 192, name: 'İznik', cityId: 16 },
      { id: 193, name: 'Karacabey', cityId: 16 },
      { id: 194, name: 'Keles', cityId: 16 },
      { id: 195, name: 'Kestel', cityId: 16 },
      { id: 196, name: 'Mudanya', cityId: 16 },
      { id: 197, name: 'Mustafakemalpaşa', cityId: 16 },
      { id: 198, name: 'Orhaneli', cityId: 16 },
      { id: 199, name: 'Orhangazi', cityId: 16 },
      { id: 200, name: 'Yenişehir', cityId: 16 }
    ]
  },
  {
    id: 17,
    name: 'Çanakkale',
    districts: [
      { id: 201, name: 'Merkez', cityId: 17 },
      { id: 202, name: 'Ayvacık', cityId: 17 },
      { id: 203, name: 'Bayramiç', cityId: 17 },
      { id: 204, name: 'Biga', cityId: 17 },
      { id: 205, name: 'Bozcaada', cityId: 17 },
      { id: 206, name: 'Çan', cityId: 17 },
      { id: 207, name: 'Eceabat', cityId: 17 },
      { id: 208, name: 'Ezine', cityId: 17 },
      { id: 209, name: 'Gelibolu', cityId: 17 },
      { id: 210, name: 'Gökçeada', cityId: 17 },
      { id: 211, name: 'Lapseki', cityId: 17 },
      { id: 212, name: 'Yenice', cityId: 17 }
    ]
  },
  {
    id: 18,
    name: 'Çankırı',
    districts: [
      { id: 213, name: 'Merkez', cityId: 18 },
      { id: 214, name: 'Atkaracalar', cityId: 18 },
      { id: 215, name: 'Bayramören', cityId: 18 },
      { id: 216, name: 'Çerkeş', cityId: 18 },
      { id: 217, name: 'Eldivan', cityId: 18 },
      { id: 218, name: 'Ilgaz', cityId: 18 },
      { id: 219, name: 'Kızılırmak', cityId: 18 },
      { id: 220, name: 'Korgun', cityId: 18 },
      { id: 221, name: 'Kurşunlu', cityId: 18 },
      { id: 222, name: 'Orta', cityId: 18 },
      { id: 223, name: 'Şabanözü', cityId: 18 },
      { id: 224, name: 'Yapraklı', cityId: 18 }
    ]
  },
  {
    id: 19,
    name: 'Çorum',
    districts: [
      { id: 225, name: 'Merkez', cityId: 19 },
      { id: 226, name: 'Alaca', cityId: 19 },
      { id: 227, name: 'Bayat', cityId: 19 },
      { id: 228, name: 'Boğazkale', cityId: 19 },
      { id: 229, name: 'Dodurga', cityId: 19 },
      { id: 230, name: 'İskilip', cityId: 19 },
      { id: 231, name: 'Kargı', cityId: 19 },
      { id: 232, name: 'Laçin', cityId: 19 },
      { id: 233, name: 'Mecitözü', cityId: 19 },
      { id: 234, name: 'Oğuzlar', cityId: 19 },
      { id: 235, name: 'Ortaköy', cityId: 19 },
      { id: 236, name: 'Osmancık', cityId: 19 },
      { id: 237, name: 'Sungurlu', cityId: 19 },
      { id: 238, name: 'Uğurludağ', cityId: 19 }
    ]
  },
  {
    id: 20,
    name: 'Denizli',
    districts: [
      { id: 239, name: 'Pamukkale', cityId: 20 },
      { id: 240, name: 'Merkezefendi', cityId: 20 },
      { id: 241, name: 'Acıpayam', cityId: 20 },
      { id: 242, name: 'Babadağ', cityId: 20 },
      { id: 243, name: 'Baklan', cityId: 20 },
      { id: 244, name: 'Bekilli', cityId: 20 },
      { id: 245, name: 'Beyağaç', cityId: 20 },
      { id: 246, name: 'Bozkurt', cityId: 20 },
      { id: 247, name: 'Buldan', cityId: 20 },
      { id: 248, name: 'Çal', cityId: 20 },
      { id: 249, name: 'Çameli', cityId: 20 },
      { id: 250, name: 'Çardak', cityId: 20 },
      { id: 251, name: 'Çivril', cityId: 20 },
      { id: 252, name: 'Güney', cityId: 20 },
      { id: 253, name: 'Honaz', cityId: 20 },
      { id: 254, name: 'Kale', cityId: 20 },
      { id: 255, name: 'Sarayköy', cityId: 20 },
      { id: 256, name: 'Serinhisar', cityId: 20 },
      { id: 257, name: 'Tavas', cityId: 20 }
    ]
  },
  {
    id: 21,
    name: 'Diyarbakır',
    districts: [
      { id: 258, name: 'Bağlar', cityId: 21 },
      { id: 259, name: 'Kayapınar', cityId: 21 },
      { id: 260, name: 'Sur', cityId: 21 },
      { id: 261, name: 'Yenişehir', cityId: 21 },
      { id: 262, name: 'Bismil', cityId: 21 },
      { id: 263, name: 'Çermik', cityId: 21 },
      { id: 264, name: 'Çınar', cityId: 21 },
      { id: 265, name: 'Çüngüş', cityId: 21 },
      { id: 266, name: 'Dicle', cityId: 21 },
      { id: 267, name: 'Eğil', cityId: 21 },
      { id: 268, name: 'Ergani', cityId: 21 },
      { id: 269, name: 'Hani', cityId: 21 },
      { id: 270, name: 'Hazro', cityId: 21 },
      { id: 271, name: 'Kulp', cityId: 21 },
      { id: 272, name: 'Kocaköy', cityId: 21 },
      { id: 273, name: 'Lice', cityId: 21 },
      { id: 274, name: 'Silvan', cityId: 21 }
    ]
  },
  {
    id: 22,
    name: 'Edirne',
    districts: [
      { id: 275, name: 'Merkez', cityId: 22 },
      { id: 276, name: 'Enez', cityId: 22 },
      { id: 277, name: 'Havsa', cityId: 22 },
      { id: 278, name: 'İpsala', cityId: 22 },
      { id: 279, name: 'Keşan', cityId: 22 },
      { id: 280, name: 'Lalapaşa', cityId: 22 },
      { id: 281, name: 'Meriç', cityId: 22 },
      { id: 282, name: 'Süloğlu', cityId: 22 },
      { id: 283, name: 'Uzunköprü', cityId: 22 }
    ]
  },
  {
    id: 23,
    name: 'Elazığ',
    districts: [
      { id: 284, name: 'Merkez', cityId: 23 },
      { id: 285, name: 'Ağın', cityId: 23 },
      { id: 286, name: 'Alacakaya', cityId: 23 },
      { id: 287, name: 'Arıcak', cityId: 23 },
      { id: 288, name: 'Baskil', cityId: 23 },
      { id: 289, name: 'Karakoçan', cityId: 23 },
      { id: 290, name: 'Keban', cityId: 23 },
      { id: 291, name: 'Kovancılar', cityId: 23 },
      { id: 292, name: 'Maden', cityId: 23 },
      { id: 293, name: 'Palu', cityId: 23 },
      { id: 294, name: 'Sivrice', cityId: 23 }
    ]
  },
  {
    id: 24,
    name: 'Erzincan',
    districts: [
      { id: 295, name: 'Merkez', cityId: 24 },
      { id: 296, name: 'Çayırlı', cityId: 24 },
      { id: 297, name: 'İliç', cityId: 24 },
      { id: 298, name: 'Kemah', cityId: 24 },
      { id: 299, name: 'Kemaliye', cityId: 24 },
      { id: 300, name: 'Otlukbeli', cityId: 24 },
      { id: 301, name: 'Refahiye', cityId: 24 },
      { id: 302, name: 'Tercan', cityId: 24 },
      { id: 303, name: 'Üzümlü', cityId: 24 }
    ]
  },
  {
    id: 25,
    name: 'Erzurum',
    districts: [
      { id: 304, name: 'Aziziye', cityId: 25 },
      { id: 305, name: 'Palandöken', cityId: 25 },
      { id: 306, name: 'Yakutiye', cityId: 25 },
      { id: 307, name: 'Aşkale', cityId: 25 },
      { id: 308, name: 'Çat', cityId: 25 },
      { id: 309, name: 'Hınıs', cityId: 25 },
      { id: 310, name: 'Horasan', cityId: 25 },
      { id: 311, name: 'İspir', cityId: 25 },
      { id: 312, name: 'Karaçoban', cityId: 25 },
      { id: 313, name: 'Karayazı', cityId: 25 },
      { id: 314, name: 'Köprüköy', cityId: 25 },
      { id: 315, name: 'Narman', cityId: 25 },
      { id: 316, name: 'Oltu', cityId: 25 },
      { id: 317, name: 'Olur', cityId: 25 },
      { id: 318, name: 'Pasinler', cityId: 25 },
      { id: 319, name: 'Pazaryolu', cityId: 25 },
      { id: 320, name: 'Şenkaya', cityId: 25 },
      { id: 321, name: 'Tekman', cityId: 25 },
      { id: 322, name: 'Tortum', cityId: 25 },
      { id: 323, name: 'Uzundere', cityId: 25 }
    ]
  },
  {
    id: 26,
    name: 'Eskişehir',
    districts: [
      { id: 324, name: 'Odunpazarı', cityId: 26 },
      { id: 325, name: 'Tepebaşı', cityId: 26 },
      { id: 326, name: 'Alpu', cityId: 26 },
      { id: 327, name: 'Beylikova', cityId: 26 },
      { id: 328, name: 'Çifteler', cityId: 26 },
      { id: 329, name: 'Günyüzü', cityId: 26 },
      { id: 330, name: 'Han', cityId: 26 },
      { id: 331, name: 'İnönü', cityId: 26 },
      { id: 332, name: 'Mahmudiye', cityId: 26 },
      { id: 333, name: 'Mihalgazi', cityId: 26 },
      { id: 334, name: 'Mihalıççık', cityId: 26 },
      { id: 335, name: 'Sarıcakaya', cityId: 26 },
      { id: 336, name: 'Seyitgazi', cityId: 26 },
      { id: 337, name: 'Sivrihisar', cityId: 26 }
    ]
  },
  {
    id: 27,
    name: 'Gaziantep',
    districts: [
      { id: 338, name: 'Şahinbey', cityId: 27 },
      { id: 339, name: 'Şehitkamil', cityId: 27 },
      { id: 340, name: 'Araban', cityId: 27 },
      { id: 341, name: 'İslahiye', cityId: 27 },
      { id: 342, name: 'Karkamış', cityId: 27 },
      { id: 343, name: 'Nizip', cityId: 27 },
      { id: 344, name: 'Nurdağı', cityId: 27 },
      { id: 345, name: 'Oğuzeli', cityId: 27 },
      { id: 346, name: 'Yavuzeli', cityId: 27 }
    ]
  },
  {
    id: 28,
    name: 'Giresun',
    districts: [
      { id: 347, name: 'Merkez', cityId: 28 },
      { id: 348, name: 'Alucra', cityId: 28 },
      { id: 349, name: 'Bulancak', cityId: 28 },
      { id: 350, name: 'Çamoluk', cityId: 28 },
      { id: 351, name: 'Çanakçı', cityId: 28 },
      { id: 352, name: 'Dereli', cityId: 28 },
      { id: 353, name: 'Doğankent', cityId: 28 },
      { id: 354, name: 'Espiye', cityId: 28 },
      { id: 355, name: 'Eynesil', cityId: 28 },
      { id: 356, name: 'Görele', cityId: 28 },
      { id: 357, name: 'Güce', cityId: 28 },
      { id: 358, name: 'Keşap', cityId: 28 },
      { id: 359, name: 'Piraziz', cityId: 28 },
      { id: 360, name: 'Şebinkarahisar', cityId: 28 },
      { id: 361, name: 'Tirebolu', cityId: 28 },
      { id: 362, name: 'Yağlıdere', cityId: 28 }
    ]
  },
  {
    id: 29,
    name: 'Gümüşhane',
    districts: [
      { id: 363, name: 'Merkez', cityId: 29 },
      { id: 364, name: 'Kelkit', cityId: 29 },
      { id: 365, name: 'Köse', cityId: 29 },
      { id: 366, name: 'Kürtün', cityId: 29 },
      { id: 367, name: 'Şiran', cityId: 29 },
      { id: 368, name: 'Torul', cityId: 29 }
    ]
  },
  {
    id: 30,
    name: 'Hakkari',
    districts: [
      { id: 369, name: 'Merkez', cityId: 30 },
      { id: 370, name: 'Çukurca', cityId: 30 },
      { id: 371, name: 'Şemdinli', cityId: 30 },
      { id: 372, name: 'Yüksekova', cityId: 30 }
    ]
  },
  {
    id: 31,
    name: 'Hatay',
    districts: [
      { id: 373, name: 'Antakya', cityId: 31 },
      { id: 374, name: 'Defne', cityId: 31 },
      { id: 375, name: 'Arsuz', cityId: 31 },
      { id: 376, name: 'Belen', cityId: 31 },
      { id: 377, name: 'Dörtyol', cityId: 31 },
      { id: 378, name: 'Erzin', cityId: 31 },
      { id: 379, name: 'Hassa', cityId: 31 },
      { id: 380, name: 'İskenderun', cityId: 31 },
      { id: 381, name: 'Kırıkhan', cityId: 31 },
      { id: 382, name: 'Kumlu', cityId: 31 },
      { id: 383, name: 'Payas', cityId: 31 },
      { id: 384, name: 'Reyhanlı', cityId: 31 },
      { id: 385, name: 'Samandağ', cityId: 31 },
      { id: 386, name: 'Yayladağı', cityId: 31 },
      { id: 387, name: 'Altınözü', cityId: 31 }
    ]
  },
  {
    id: 32,
    name: 'Isparta',
    districts: [
      { id: 388, name: 'Merkez', cityId: 32 },
      { id: 389, name: 'Aksu', cityId: 32 },
      { id: 390, name: 'Atabey', cityId: 32 },
      { id: 391, name: 'Eğirdir', cityId: 32 },
      { id: 392, name: 'Gelendost', cityId: 32 },
      { id: 393, name: 'Gönen', cityId: 32 },
      { id: 394, name: 'Keçiborlu', cityId: 32 },
      { id: 395, name: 'Senirkent', cityId: 32 },
      { id: 396, name: 'Sütçüler', cityId: 32 },
      { id: 397, name: 'Şarkikaraağaç', cityId: 32 },
      { id: 398, name: 'Uluborlu', cityId: 32 },
      { id: 399, name: 'Yalvaç', cityId: 32 },
      { id: 400, name: 'Yenişarbademli', cityId: 32 }
    ]
  },
  {
    id: 33,
    name: 'Mersin',
    districts: [
      { id: 401, name: 'Akdeniz', cityId: 33 },
      { id: 402, name: 'Mezitli', cityId: 33 },
      { id: 403, name: 'Toroslar', cityId: 33 },
      { id: 404, name: 'Yenişehir', cityId: 33 },
      { id: 405, name: 'Anamur', cityId: 33 },
      { id: 406, name: 'Aydıncık', cityId: 33 },
      { id: 407, name: 'Bozyazı', cityId: 33 },
      { id: 408, name: 'Çamlıyayla', cityId: 33 },
      { id: 409, name: 'Erdemli', cityId: 33 },
      { id: 410, name: 'Gülnar', cityId: 33 },
      { id: 411, name: 'Mut', cityId: 33 },
      { id: 412, name: 'Silifke', cityId: 33 },
      { id: 413, name: 'Tarsus', cityId: 33 }
    ]
  },
  {
    id: 34,
    name: 'İzmir',
    districts: [
      { id: 414, name: 'Konak', cityId: 34 },
      { id: 415, name: 'Bornova', cityId: 34 },
      { id: 416, name: 'Buca', cityId: 34 },
      { id: 417, name: 'Çiğli', cityId: 34 },
      { id: 418, name: 'Gaziemir', cityId: 34 },
      { id: 419, name: 'Narlıdere', cityId: 34 },
      { id: 420, name: 'Balçova', cityId: 34 },
      { id: 421, name: 'Bayraklı', cityId: 34 },
      { id: 422, name: 'Karşıyaka', cityId: 34 },
      { id: 423, name: 'Aliağa', cityId: 34 },
      { id: 424, name: 'Bayındır', cityId: 34 },
      { id: 425, name: 'Bergama', cityId: 34 },
      { id: 426, name: 'Beydağ', cityId: 34 },
      { id: 427, name: 'Çeşme', cityId: 34 },
      { id: 428, name: 'Dikili', cityId: 34 },
      { id: 429, name: 'Foça', cityId: 34 },
      { id: 430, name: 'Karaburun', cityId: 34 },
      { id: 431, name: 'Kınık', cityId: 34 },
      { id: 432, name: 'Kiraz', cityId: 34 },
      { id: 433, name: 'Menemen', cityId: 34 },
      { id: 434, name: 'Ödemiş', cityId: 34 },
      { id: 435, name: 'Seferihisar', cityId: 34 },
      { id: 436, name: 'Selçuk', cityId: 34 },
      { id: 437, name: 'Tire', cityId: 34 },
      { id: 438, name: 'Torbalı', cityId: 34 },
      { id: 439, name: 'Urla', cityId: 34 },
      { id: 440, name: 'Güzelbahçe', cityId: 34 },
      { id: 441, name: 'Menderes', cityId: 34 },
      { id: 442, name: 'Kemalpaşa', cityId: 34 }
    ]
  },
  {
    id: 35,
    name: 'Kars',
    districts: [
      { id: 443, name: 'Merkez', cityId: 35 },
      { id: 444, name: 'Akyaka', cityId: 35 },
      { id: 445, name: 'Arpaçay', cityId: 35 },
      { id: 446, name: 'Digor', cityId: 35 },
      { id: 447, name: 'Kağızman', cityId: 35 },
      { id: 448, name: 'Sarıkamış', cityId: 35 },
      { id: 449, name: 'Selim', cityId: 35 },
      { id: 450, name: 'Susuz', cityId: 35 }
    ]
  },
  {
    id: 36,
    name: 'Kastamonu',
    districts: [
      { id: 451, name: 'Merkez', cityId: 36 },
      { id: 452, name: 'Abana', cityId: 36 },
      { id: 453, name: 'Ağlı', cityId: 36 },
      { id: 454, name: 'Araç', cityId: 36 },
      { id: 455, name: 'Azdavay', cityId: 36 },
      { id: 456, name: 'Bozkurt', cityId: 36 },
      { id: 457, name: 'Cide', cityId: 36 },
      { id: 458, name: 'Çatalzeytin', cityId: 36 },
      { id: 459, name: 'Daday', cityId: 36 },
      { id: 460, name: 'Devrekani', cityId: 36 },
      { id: 461, name: 'Doğanyurt', cityId: 36 },
      { id: 462, name: 'Hanönü', cityId: 36 },
      { id: 463, name: 'İhsangazi', cityId: 36 },
      { id: 464, name: 'İnebolu', cityId: 36 },
      { id: 465, name: 'Küre', cityId: 36 },
      { id: 466, name: 'Pınarbaşı', cityId: 36 },
      { id: 467, name: 'Seydiler', cityId: 36 },
      { id: 468, name: 'Şenpazar', cityId: 36 },
      { id: 469, name: 'Taşköprü', cityId: 36 },
      { id: 470, name: 'Tosya', cityId: 36 }
    ]
  },
  {
    id: 37,
    name: 'Kayseri',
    districts: [
      { id: 471, name: 'Kocasinan', cityId: 37 },
      { id: 472, name: 'Melikgazi', cityId: 37 },
      { id: 473, name: 'Talas', cityId: 37 },
      { id: 474, name: 'Hacılar', cityId: 37 },
      { id: 475, name: 'Akkışla', cityId: 37 },
      { id: 476, name: 'Bünyan', cityId: 37 },
      { id: 477, name: 'Develi', cityId: 37 },
      { id: 478, name: 'Felahiye', cityId: 37 },
      { id: 479, name: 'İncesu', cityId: 37 },
      { id: 480, name: 'Pınarbaşı', cityId: 37 },
      { id: 481, name: 'Sarıoğlan', cityId: 37 },
      { id: 482, name: 'Sarız', cityId: 37 },
      { id: 483, name: 'Tomarza', cityId: 37 },
      { id: 484, name: 'Yahyalı', cityId: 37 },
      { id: 485, name: 'Yeşilhisar', cityId: 37 },
      { id: 486, name: 'Özvatan', cityId: 37 }
    ]
  },
  {
    id: 38,
    name: 'Kırklareli',
    districts: [
      { id: 487, name: 'Merkez', cityId: 38 },
      { id: 488, name: 'Babaeski', cityId: 38 },
      { id: 489, name: 'Demirköy', cityId: 38 },
      { id: 490, name: 'Kofçaz', cityId: 38 },
      { id: 491, name: 'Lüleburgaz', cityId: 38 },
      { id: 492, name: 'Pehlivanköy', cityId: 38 },
      { id: 493, name: 'Pınarhisar', cityId: 38 },
      { id: 494, name: 'Vize', cityId: 38 }
    ]
  },
  {
    id: 39,
    name: 'Kırşehir',
    districts: [
      { id: 495, name: 'Merkez', cityId: 39 },
      { id: 496, name: 'Akçakent', cityId: 39 },
      { id: 497, name: 'Akpınar', cityId: 39 },
      { id: 498, name: 'Boztepe', cityId: 39 },
      { id: 499, name: 'Çiçekdağı', cityId: 39 },
      { id: 500, name: 'Kaman', cityId: 39 },
      { id: 501, name: 'Mucur', cityId: 39 }
    ]
  },
  {
    id: 40,
    name: 'Kocaeli',
    districts: [
      { id: 502, name: 'İzmit', cityId: 40 },
      { id: 503, name: 'Başiskele', cityId: 40 },
      { id: 504, name: 'Çayırova', cityId: 40 },
      { id: 505, name: 'Darıca', cityId: 40 },
      { id: 506, name: 'Derince', cityId: 40 },
      { id: 507, name: 'Dilovası', cityId: 40 },
      { id: 508, name: 'Gebze', cityId: 40 },
      { id: 509, name: 'Gölcük', cityId: 40 },
      { id: 510, name: 'Kandıra', cityId: 40 },
      { id: 511, name: 'Karamürsel', cityId: 40 },
      { id: 512, name: 'Kartepe', cityId: 40 },
      { id: 513, name: 'Körfez', cityId: 40 }
    ]
  },
  {
    id: 41,
    name: 'Konya',
    districts: [
      { id: 514, name: 'Meram', cityId: 41 },
      { id: 515, name: 'Karatay', cityId: 41 },
      { id: 516, name: 'Selçuklu', cityId: 41 },
      { id: 517, name: 'Ahırlı', cityId: 41 },
      { id: 518, name: 'Akören', cityId: 41 },
      { id: 519, name: 'Akşehir', cityId: 41 },
      { id: 520, name: 'Altınekin', cityId: 41 },
      { id: 521, name: 'Beyşehir', cityId: 41 },
      { id: 522, name: 'Bozkır', cityId: 41 },
      { id: 523, name: 'Cihanbeyli', cityId: 41 },
      { id: 524, name: 'Çeltik', cityId: 41 },
      { id: 525, name: 'Çumra', cityId: 41 },
      { id: 526, name: 'Derbent', cityId: 41 },
      { id: 527, name: 'Derebucak', cityId: 41 },
      { id: 528, name: 'Doğanhisar', cityId: 41 },
      { id: 529, name: 'Emirgazi', cityId: 41 },
      { id: 530, name: 'Ereğli', cityId: 41 },
      { id: 531, name: 'Güneysınır', cityId: 41 },
      { id: 532, name: 'Hadim', cityId: 41 },
      { id: 533, name: 'Halkapınar', cityId: 41 },
      { id: 534, name: 'Hüyük', cityId: 41 },
      { id: 535, name: 'Ilgın', cityId: 41 },
      { id: 536, name: 'Kadınhanı', cityId: 41 },
      { id: 537, name: 'Karapınar', cityId: 41 },
      { id: 538, name: 'Kulu', cityId: 41 },
      { id: 539, name: 'Sarayönü', cityId: 41 },
      { id: 540, name: 'Seydişehir', cityId: 41 },
      { id: 541, name: 'Taşkent', cityId: 41 },
      { id: 542, name: 'Tuzlukçu', cityId: 41 },
      { id: 543, name: 'Yalıhüyük', cityId: 41 },
      { id: 544, name: 'Yunak', cityId: 41 }
    ]
  },
  {
    id: 42,
    name: 'Kütahya',
    districts: [
      { id: 545, name: 'Merkez', cityId: 42 },
      { id: 546, name: 'Altıntaş', cityId: 42 },
      { id: 547, name: 'Aslanapa', cityId: 42 },
      { id: 548, name: 'Çavdarhisar', cityId: 42 },
      { id: 549, name: 'Domaniç', cityId: 42 },
      { id: 550, name: 'Dumlupınar', cityId: 42 },
      { id: 551, name: 'Emet', cityId: 42 },
      { id: 552, name: 'Gediz', cityId: 42 },
      { id: 553, name: 'Hisarcık', cityId: 42 },
      { id: 554, name: 'Pazarlar', cityId: 42 },
      { id: 555, name: 'Simav', cityId: 42 },
      { id: 556, name: 'Şaphane', cityId: 42 },
      { id: 557, name: 'Tavşanlı', cityId: 42 }
    ]
  },
  {
    id: 43,
    name: 'Malatya',
    districts: [
      { id: 558, name: 'Battalgazi', cityId: 43 },
      { id: 559, name: 'Yeşilyurt', cityId: 43 },
      { id: 560, name: 'Akçadağ', cityId: 43 },
      { id: 561, name: 'Arapgir', cityId: 43 },
      { id: 562, name: 'Arguvan', cityId: 43 },
      { id: 563, name: 'Darende', cityId: 43 },
      { id: 564, name: 'Doğanşehir', cityId: 43 },
      { id: 565, name: 'Doğanyol', cityId: 43 },
      { id: 566, name: 'Hekimhan', cityId: 43 },
      { id: 567, name: 'Kale', cityId: 43 },
      { id: 568, name: 'Kuluncak', cityId: 43 },
      { id: 569, name: 'Pütürge', cityId: 43 },
      { id: 570, name: 'Yazıhan', cityId: 43 }
    ]
  },
  {
    id: 44,
    name: 'Manisa',
    districts: [
      { id: 571, name: 'Yunusemre', cityId: 44 },
      { id: 572, name: 'Şehzadeler', cityId: 44 },
      { id: 573, name: 'Ahmetli', cityId: 44 },
      { id: 574, name: 'Akhisar', cityId: 44 },
      { id: 575, name: 'Alaşehir', cityId: 44 },
      { id: 576, name: 'Demirci', cityId: 44 },
      { id: 577, name: 'Gölmarmara', cityId: 44 },
      { id: 578, name: 'Gördes', cityId: 44 },
      { id: 579, name: 'Kırkağaç', cityId: 44 },
      { id: 580, name: 'Köprübaşı', cityId: 44 },
      { id: 581, name: 'Kula', cityId: 44 },
      { id: 582, name: 'Salihli', cityId: 44 },
      { id: 583, name: 'Sarıgöl', cityId: 44 },
      { id: 584, name: 'Saruhanlı', cityId: 44 },
      { id: 585, name: 'Selendi', cityId: 44 },
      { id: 586, name: 'Soma', cityId: 44 },
      { id: 587, name: 'Turgutlu', cityId: 44 }
    ]
  },
  {
    id: 45,
    name: 'Kahramanmaraş',
    districts: [
      { id: 588, name: 'Dulkadiroğlu', cityId: 45 },
      { id: 589, name: 'Onikişubat', cityId: 45 },
      { id: 590, name: 'Afşin', cityId: 45 },
      { id: 591, name: 'Andırın', cityId: 45 },
      { id: 592, name: 'Çağlayancerit', cityId: 45 },
      { id: 593, name: 'Ekinözü', cityId: 45 },
      { id: 594, name: 'Elbistan', cityId: 45 },
      { id: 595, name: 'Göksun', cityId: 45 },
      { id: 596, name: 'Nurhak', cityId: 45 },
      { id: 597, name: 'Pazarcık', cityId: 45 },
      { id: 598, name: 'Türkoğlu', cityId: 45 }
    ]
  },
  {
    id: 46,
    name: 'Mardin',
    districts: [
      { id: 599, name: 'Artuklu', cityId: 46 },
      { id: 600, name: 'Dargeçit', cityId: 46 },
      { id: 601, name: 'Derik', cityId: 46 },
      { id: 602, name: 'Kızıltepe', cityId: 46 },
      { id: 603, name: 'Mazıdağı', cityId: 46 },
      { id: 604, name: 'Midyat', cityId: 46 },
      { id: 605, name: 'Nusaybin', cityId: 46 },
      { id: 606, name: 'Ömerli', cityId: 46 },
      { id: 607, name: 'Savur', cityId: 46 },
      { id: 608, name: 'Yeşilli', cityId: 46 }
    ]
  },
  {
    id: 47,
    name: 'Muğla',
    districts: [
      { id: 609, name: 'Menteşe', cityId: 47 },
      { id: 610, name: 'Bodrum', cityId: 47 },
      { id: 611, name: 'Datça', cityId: 47 },
      { id: 612, name: 'Fethiye', cityId: 47 },
      { id: 613, name: 'Kavaklıdere', cityId: 47 },
      { id: 614, name: 'Köyceğiz', cityId: 47 },
      { id: 615, name: 'Marmaris', cityId: 47 },
      { id: 616, name: 'Milas', cityId: 47 },
      { id: 617, name: 'Ortaca', cityId: 47 },
      { id: 618, name: 'Seydikemer', cityId: 47 },
      { id: 619, name: 'Ula', cityId: 47 },
      { id: 620, name: 'Yatağan', cityId: 47 },
      { id: 621, name: 'Dalaman', cityId: 47 }
    ]
  },
  {
    id: 48,
    name: 'Muş',
    districts: [
      { id: 622, name: 'Merkez', cityId: 48 },
      { id: 623, name: 'Bulanık', cityId: 48 },
      { id: 624, name: 'Hasköy', cityId: 48 },
      { id: 625, name: 'Korkut', cityId: 48 },
      { id: 626, name: 'Malazgirt', cityId: 48 },
      { id: 627, name: 'Varto', cityId: 48 }
    ]
  },
  {
    id: 49,
    name: 'Nevşehir',
    districts: [
      { id: 628, name: 'Merkez', cityId: 49 },
      { id: 629, name: 'Acıgöl', cityId: 49 },
      { id: 630, name: 'Avanos', cityId: 49 },
      { id: 631, name: 'Derinkuyu', cityId: 49 },
      { id: 632, name: 'Gülşehir', cityId: 49 },
      { id: 633, name: 'Hacıbektaş', cityId: 49 },
      { id: 634, name: 'Kozaklı', cityId: 49 },
      { id: 635, name: 'Ürgüp', cityId: 49 }
    ]
  },
  {
    id: 50,
    name: 'Niğde',
    districts: [
      { id: 636, name: 'Merkez', cityId: 50 },
      { id: 637, name: 'Altunhisar', cityId: 50 },
      { id: 638, name: 'Bor', cityId: 50 },
      { id: 639, name: 'Çamardı', cityId: 50 },
      { id: 640, name: 'Çiftlik', cityId: 50 },
      { id: 641, name: 'Ulukışla', cityId: 50 }
    ]
  },
  {
    id: 51,
    name: 'Ordu',
    districts: [
      { id: 642, name: 'Altınordu', cityId: 51 },
      { id: 643, name: 'Akkuş', cityId: 51 },
      { id: 644, name: 'Aybastı', cityId: 51 },
      { id: 645, name: 'Çamaş', cityId: 51 },
      { id: 646, name: 'Çatalpınar', cityId: 51 },
      { id: 647, name: 'Çaybaşı', cityId: 51 },
      { id: 648, name: 'Fatsa', cityId: 51 },
      { id: 649, name: 'Gölköy', cityId: 51 },
      { id: 650, name: 'Gülyalı', cityId: 51 },
      { id: 651, name: 'Gürgentepe', cityId: 51 },
      { id: 652, name: 'İkizce', cityId: 51 },
      { id: 653, name: 'Kabadüz', cityId: 51 },
      { id: 654, name: 'Kabataş', cityId: 51 },
      { id: 655, name: 'Korgan', cityId: 51 },
      { id: 656, name: 'Kumru', cityId: 51 },
      { id: 657, name: 'Mesudiye', cityId: 51 },
      { id: 658, name: 'Perşembe', cityId: 51 },
      { id: 659, name: 'Ulubey', cityId: 51 },
      { id: 660, name: 'Ünye', cityId: 51 }
    ]
  },
  {
    id: 52,
    name: 'Rize',
    districts: [
      { id: 661, name: 'Merkez', cityId: 52 },
      { id: 662, name: 'Ardeşen', cityId: 52 },
      { id: 663, name: 'Çamlıhemşin', cityId: 52 },
      { id: 664, name: 'Çayeli', cityId: 52 },
      { id: 665, name: 'Derepazarı', cityId: 52 },
      { id: 666, name: 'Fındıklı', cityId: 52 },
      { id: 667, name: 'Güneysu', cityId: 52 },
      { id: 668, name: 'Hemşin', cityId: 52 },
      { id: 669, name: 'İkizdere', cityId: 52 },
      { id: 670, name: 'İyidere', cityId: 52 },
      { id: 671, name: 'Kalkandere', cityId: 52 },
      { id: 672, name: 'Pazar', cityId: 52 }
    ]
  },
  {
    id: 53,
    name: 'Sakarya',
    districts: [
      { id: 673, name: 'Adapazarı', cityId: 53 },
      { id: 674, name: 'Serdivan', cityId: 53 },
      { id: 675, name: 'Akyazı', cityId: 53 },
      { id: 676, name: 'Arifiye', cityId: 53 },
      { id: 677, name: 'Erenler', cityId: 53 },
      { id: 678, name: 'Ferizli', cityId: 53 },
      { id: 679, name: 'Geyve', cityId: 53 },
      { id: 680, name: 'Hendek', cityId: 53 },
      { id: 681, name: 'Karapürçek', cityId: 53 },
      { id: 682, name: 'Karasu', cityId: 53 },
      { id: 683, name: 'Kaynarca', cityId: 53 },
      { id: 684, name: 'Kocaali', cityId: 53 },
      { id: 685, name: 'Pamukova', cityId: 53 },
      { id: 686, name: 'Sapanca', cityId: 53 },
      { id: 687, name: 'Söğütlü', cityId: 53 },
      { id: 688, name: 'Taraklı', cityId: 53 }
    ]
  },
  {
    id: 54,
    name: 'Samsun',
    districts: [
      { id: 689, name: 'İlkadım', cityId: 54 },
      { id: 690, name: 'Atakum', cityId: 54 },
      { id: 691, name: 'Canik', cityId: 54 },
      { id: 692, name: 'Tekkeköy', cityId: 54 },
      { id: 693, name: 'Alaçam', cityId: 54 },
      { id: 694, name: 'Asarcık', cityId: 54 },
      { id: 695, name: 'Ayvacık', cityId: 54 },
      { id: 696, name: 'Bafra', cityId: 54 },
      { id: 697, name: 'Çarşamba', cityId: 54 },
      { id: 698, name: 'Havza', cityId: 54 },
      { id: 699, name: 'Kavak', cityId: 54 },
      { id: 700, name: 'Ladik', cityId: 54 },
      { id: 701, name: 'Ondokuzmayıs', cityId: 54 },
      { id: 702, name: 'Salıpazarı', cityId: 54 },
      { id: 703, name: 'Terme', cityId: 54 },
      { id: 704, name: 'Vezirköprü', cityId: 54 },
      { id: 705, name: 'Yakakent', cityId: 54 }
    ]
  },
  {
    id: 55,
    name: 'Siirt',
    districts: [
      { id: 706, name: 'Merkez', cityId: 55 },
      { id: 707, name: 'Baykan', cityId: 55 },
      { id: 708, name: 'Eruh', cityId: 55 },
      { id: 709, name: 'Kurtalan', cityId: 55 },
      { id: 710, name: 'Pervari', cityId: 55 },
      { id: 711, name: 'Şirvan', cityId: 55 },
      { id: 712, name: 'Tillo', cityId: 55 }
    ]
  },
  {
    id: 56,
    name: 'Sinop',
    districts: [
      { id: 713, name: 'Merkez', cityId: 56 },
      { id: 714, name: 'Ayancık', cityId: 56 },
      { id: 715, name: 'Boyabat', cityId: 56 },
      { id: 716, name: 'Dikmen', cityId: 56 },
      { id: 717, name: 'Durağan', cityId: 56 },
      { id: 718, name: 'Erfelek', cityId: 56 },
      { id: 719, name: 'Gerze', cityId: 56 },
      { id: 720, name: 'Saraydüzü', cityId: 56 },
      { id: 721, name: 'Türkeli', cityId: 56 }
    ]
  },
  {
    id: 57,
    name: 'Sivas',
    districts: [
      { id: 722, name: 'Merkez', cityId: 57 },
      { id: 723, name: 'Akıncılar', cityId: 57 },
      { id: 724, name: 'Altınyayla', cityId: 57 },
      { id: 725, name: 'Divriği', cityId: 57 },
      { id: 726, name: 'Doğanşar', cityId: 57 },
      { id: 727, name: 'Gemerek', cityId: 57 },
      { id: 728, name: 'Gölova', cityId: 57 },
      { id: 729, name: 'Gürün', cityId: 57 },
      { id: 730, name: 'Hafik', cityId: 57 },
      { id: 731, name: 'İmranlı', cityId: 57 },
      { id: 732, name: 'Kangal', cityId: 57 },
      { id: 733, name: 'Koyulhisar', cityId: 57 },
      { id: 734, name: 'Suşehri', cityId: 57 },
      { id: 735, name: 'Şarkışla', cityId: 57 },
      { id: 736, name: 'Ulaş', cityId: 57 },
      { id: 737, name: 'Yıldızeli', cityId: 57 },
      { id: 738, name: 'Zara', cityId: 57 }
    ]
  },
  {
    id: 58,
    name: 'Tekirdağ',
    districts: [
      { id: 739, name: 'Süleymanpaşa', cityId: 58 },
      { id: 740, name: 'Çerkezköy', cityId: 58 },
      { id: 741, name: 'Çorlu', cityId: 58 },
      { id: 742, name: 'Ergene', cityId: 58 },
      { id: 743, name: 'Hayrabolu', cityId: 58 },
      { id: 744, name: 'Malkara', cityId: 58 },
      { id: 745, name: 'Marmaraereğlisi', cityId: 58 },
      { id: 746, name: 'Muratlı', cityId: 58 },
      { id: 747, name: 'Saray', cityId: 58 },
      { id: 748, name: 'Şarköy', cityId: 58 },
      { id: 749, name: 'Kapakli', cityId: 58 }
    ]
  },
  {
    id: 59,
    name: 'Tokat',
    districts: [
      { id: 750, name: 'Merkez', cityId: 59 },
      { id: 751, name: 'Almus', cityId: 59 },
      { id: 752, name: 'Artova', cityId: 59 },
      { id: 753, name: 'Başçiftlik', cityId: 59 },
      { id: 754, name: 'Erbaa', cityId: 59 },
      { id: 755, name: 'Niksar', cityId: 59 },
      { id: 756, name: 'Pazar', cityId: 59 },
      { id: 757, name: 'Reşadiye', cityId: 59 },
      { id: 758, name: 'Sulusaray', cityId: 59 },
      { id: 759, name: 'Turhal', cityId: 59 },
      { id: 760, name: 'Yeşilyurt', cityId: 59 },
      { id: 761, name: 'Zile', cityId: 59 }
    ]
  },
  {
    id: 60,
    name: 'Trabzon',
    districts: [
      { id: 762, name: 'Ortahisar', cityId: 60 },
      { id: 763, name: 'Akçaabat', cityId: 60 },
      { id: 764, name: 'Araklı', cityId: 60 },
      { id: 765, name: 'Arsin', cityId: 60 },
      { id: 766, name: 'Beşikdüzü', cityId: 60 },
      { id: 767, name: 'Çarşıbaşı', cityId: 60 },
      { id: 768, name: 'Çaykara', cityId: 60 },
      { id: 769, name: 'Dernekpazarı', cityId: 60 },
      { id: 770, name: 'Düzköy', cityId: 60 },
      { id: 771, name: 'Hayrat', cityId: 60 },
      { id: 772, name: 'Köprübaşı', cityId: 60 },
      { id: 773, name: 'Maçka', cityId: 60 },
      { id: 774, name: 'Of', cityId: 60 },
      { id: 775, name: 'Sürmene', cityId: 60 },
      { id: 776, name: 'Şalpazarı', cityId: 60 },
      { id: 777, name: 'Tonya', cityId: 60 },
      { id: 778, name: 'Vakfıkebir', cityId: 60 },
      { id: 779, name: 'Yomra', cityId: 60 }
    ]
  },
  {
    id: 61,
    name: 'Tunceli',
    districts: [
      { id: 780, name: 'Merkez', cityId: 61 },
      { id: 781, name: 'Çemişgezek', cityId: 61 },
      { id: 782, name: 'Hozat', cityId: 61 },
      { id: 783, name: 'Mazgirt', cityId: 61 },
      { id: 784, name: 'Nazımiye', cityId: 61 },
      { id: 785, name: 'Ovacık', cityId: 61 },
      { id: 786, name: 'Pertek', cityId: 61 },
      { id: 787, name: 'Pülümür', cityId: 61 }
    ]
  },
  {
    id: 62,
    name: 'Şanlıurfa',
    districts: [
      { id: 788, name: 'Eyyübiye', cityId: 62 },
      { id: 789, name: 'Haliliye', cityId: 62 },
      { id: 790, name: 'Karaköprü', cityId: 62 },
      { id: 791, name: 'Akçakale', cityId: 62 },
      { id: 792, name: 'Birecik', cityId: 62 },
      { id: 793, name: 'Bozova', cityId: 62 },
      { id: 794, name: 'Ceylanpınar', cityId: 62 },
      { id: 795, name: 'Halfeti', cityId: 62 },
      { id: 796, name: 'Harran', cityId: 62 },
      { id: 797, name: 'Hilvan', cityId: 62 },
      { id: 798, name: 'Siverek', cityId: 62 },
      { id: 799, name: 'Suruç', cityId: 62 },
      { id: 800, name: 'Viranşehir', cityId: 62 }
    ]
  },
  {
    id: 63,
    name: 'Uşak',
    districts: [
      { id: 801, name: 'Merkez', cityId: 63 },
      { id: 802, name: 'Banaz', cityId: 63 },
      { id: 803, name: 'Eşme', cityId: 63 },
      { id: 804, name: 'Karahallı', cityId: 63 },
      { id: 805, name: 'Sivaslı', cityId: 63 },
      { id: 806, name: 'Ulubey', cityId: 63 }
    ]
  },
  {
    id: 64,
    name: 'Van',
    districts: [
      { id: 807, name: 'İpekyolu', cityId: 64 },
      { id: 808, name: 'Tuşba', cityId: 64 },
      { id: 809, name: 'Bahçesaray', cityId: 64 },
      { id: 810, name: 'Başkale', cityId: 64 },
      { id: 811, name: 'Çaldıran', cityId: 64 },
      { id: 812, name: 'Çatak', cityId: 64 },
      { id: 813, name: 'Edremit', cityId: 64 },
      { id: 814, name: 'Erciş', cityId: 64 },
      { id: 815, name: 'Gevaş', cityId: 64 },
      { id: 816, name: 'Gürpınar', cityId: 64 },
      { id: 817, name: 'Muradiye', cityId: 64 },
      { id: 818, name: 'Özalp', cityId: 64 },
      { id: 819, name: 'Saray', cityId: 64 }
    ]
  },
  {
    id: 65,
    name: 'Yozgat',
    districts: [
      { id: 820, name: 'Merkez', cityId: 65 },
      { id: 821, name: 'Akdağmadeni', cityId: 65 },
      { id: 822, name: 'Aydıncık', cityId: 65 },
      { id: 823, name: 'Boğazlıyan', cityId: 65 },
      { id: 824, name: 'Çandır', cityId: 65 },
      { id: 825, name: 'Çayıralan', cityId: 65 },
      { id: 826, name: 'Çekerek', cityId: 65 },
      { id: 827, name: 'Kadışehri', cityId: 65 },
      { id: 828, name: 'Saraykent', cityId: 65 },
      { id: 829, name: 'Sarıkaya', cityId: 65 },
      { id: 830, name: 'Sorgun', cityId: 65 },
      { id: 831, name: 'Şefaatli', cityId: 65 },
      { id: 832, name: 'Yerköy', cityId: 65 },
      { id: 833, name: 'Yenifakılı', cityId: 65 }
    ]
  },
  {
    id: 66,
    name: 'Zonguldak',
    districts: [
      { id: 834, name: 'Merkez', cityId: 66 },
      { id: 835, name: 'Alaplı', cityId: 66 },
      { id: 836, name: 'Çaycuma', cityId: 66 },
      { id: 837, name: 'Devrek', cityId: 66 },
      { id: 838, name: 'Gökçebey', cityId: 66 },
      { id: 839, name: 'Kilimli', cityId: 66 },
      { id: 840, name: 'Kozlu', cityId: 66 },
      { id: 841, name: 'Kdz. Ereğli', cityId: 66 }
    ]
  },
  {
    id: 67,
    name: 'Aksaray',
    districts: [
      { id: 842, name: 'Merkez', cityId: 67 },
      { id: 843, name: 'Ağaçören', cityId: 67 },
      { id: 844, name: 'Eskil', cityId: 67 },
      { id: 845, name: 'Gülağaç', cityId: 67 },
      { id: 846, name: 'Güzelyurt', cityId: 67 },
      { id: 847, name: 'Ortaköy', cityId: 67 },
      { id: 848, name: 'Sarıyahşi', cityId: 67 }
    ]
  },
  {
    id: 68,
    name: 'Bayburt',
    districts: [
      { id: 849, name: 'Merkez', cityId: 68 },
      { id: 850, name: 'Aydıntepe', cityId: 68 },
      { id: 851, name: 'Demirözü', cityId: 68 }
    ]
  },
  {
    id: 69,
    name: 'Karaman',
    districts: [
      { id: 852, name: 'Merkez', cityId: 69 },
      { id: 853, name: 'Ayrancı', cityId: 69 },
      { id: 854, name: 'Başyayla', cityId: 69 },
      { id: 855, name: 'Ermenek', cityId: 69 },
      { id: 856, name: 'Kazımkarabekir', cityId: 69 },
      { id: 857, name: 'Sarıveliler', cityId: 69 }
    ]
  },
  {
    id: 70,
    name: 'Kırıkkale',
    districts: [
      { id: 858, name: 'Merkez', cityId: 70 },
      { id: 859, name: 'Bahşılı', cityId: 70 },
      { id: 860, name: 'Balışeyh', cityId: 70 },
      { id: 861, name: 'Çelebi', cityId: 70 },
      { id: 862, name: 'Delice', cityId: 70 },
      { id: 863, name: 'Karakeçili', cityId: 70 },
      { id: 864, name: 'Keskin', cityId: 70 },
      { id: 865, name: 'Sulakyurt', cityId: 70 },
      { id: 866, name: 'Yahşihan', cityId: 70 }
    ]
  },
  {
    id: 71,
    name: 'Batman',
    districts: [
      { id: 867, name: 'Merkez', cityId: 71 },
      { id: 868, name: 'Beşiri', cityId: 71 },
      { id: 869, name: 'Gercüş', cityId: 71 },
      { id: 870, name: 'Hasankeyf', cityId: 71 },
      { id: 871, name: 'Kozluk', cityId: 71 },
      { id: 872, name: 'Sason', cityId: 71 }
    ]
  },
  {
    id: 72,
    name: 'Şırnak',
    districts: [
      { id: 873, name: 'Merkez', cityId: 72 },
      { id: 874, name: 'Beytüşşebap', cityId: 72 },
      { id: 875, name: 'Cizre', cityId: 72 },
      { id: 876, name: 'Güçlükonak', cityId: 72 },
      { id: 877, name: 'İdil', cityId: 72 },
      { id: 878, name: 'Silopi', cityId: 72 },
      { id: 879, name: 'Uludere', cityId: 72 }
    ]
  },
  {
    id: 73,
    name: 'Bartın',
    districts: [
      { id: 880, name: 'Merkez', cityId: 73 },
      { id: 881, name: 'Amasra', cityId: 73 },
      { id: 882, name: 'Kurucaşile', cityId: 73 },
      { id: 883, name: 'Ulus', cityId: 73 }
    ]
  },
  {
    id: 74,
    name: 'Ardahan',
    districts: [
      { id: 884, name: 'Merkez', cityId: 74 },
      { id: 885, name: 'Çıldır', cityId: 74 },
      { id: 886, name: 'Damal', cityId: 74 },
      { id: 887, name: 'Göle', cityId: 74 },
      { id: 888, name: 'Hanak', cityId: 74 },
      { id: 889, name: 'Posof', cityId: 74 }
    ]
  },
  {
    id: 75,
    name: 'Iğdır',
    districts: [
      { id: 890, name: 'Merkez', cityId: 75 },
      { id: 891, name: 'Aralık', cityId: 75 },
      { id: 892, name: 'Karakoyunlu', cityId: 75 },
      { id: 893, name: 'Tuzluca', cityId: 75 }
    ]
  },
  {
    id: 76,
    name: 'Yalova',
    districts: [
      { id: 894, name: 'Merkez', cityId: 76 },
      { id: 895, name: 'Altınova', cityId: 76 },
      { id: 896, name: 'Armutlu', cityId: 76 },
      { id: 897, name: 'Çınarcık', cityId: 76 },
      { id: 898, name: 'Çiftlikköy', cityId: 76 },
      { id: 899, name: 'Termal', cityId: 76 }
    ]
  },
  {
    id: 77,
    name: 'Karabük',
    districts: [
      { id: 900, name: 'Merkez', cityId: 77 },
      { id: 901, name: 'Eflani', cityId: 77 },
      { id: 902, name: 'Eskipazar', cityId: 77 },
      { id: 903, name: 'Ovacık', cityId: 77 },
      { id: 904, name: 'Safranbolu', cityId: 77 },
      { id: 905, name: 'Yenice', cityId: 77 }
    ]
  },
  {
    id: 78,
    name: 'Kilis',
    districts: [
      { id: 906, name: 'Merkez', cityId: 78 },
      { id: 907, name: 'Elbeyli', cityId: 78 },
      { id: 908, name: 'Musabeyli', cityId: 78 },
      { id: 909, name: 'Polateli', cityId: 78 }
    ]
  },
  {
    id: 79,
    name: 'Osmaniye',
    districts: [
      { id: 910, name: 'Merkez', cityId: 79 },
      { id: 911, name: 'Bahçe', cityId: 79 },
      { id: 912, name: 'Düziçi', cityId: 79 },
      { id: 913, name: 'Hasanbeyli', cityId: 79 },
      { id: 914, name: 'Kadirli', cityId: 79 },
      { id: 915, name: 'Sumbas', cityId: 79 },
      { id: 916, name: 'Toprakkale', cityId: 79 }
    ]
  },
  {
    id: 80,
    name: 'Düzce',
    districts: [
      { id: 917, name: 'Merkez', cityId: 80 },
      { id: 918, name: 'Akçakoca', cityId: 80 },
      { id: 919, name: 'Cumayeri', cityId: 80 },
      { id: 920, name: 'Çilimli', cityId: 80 },
      { id: 921, name: 'Gölyaka', cityId: 80 },
      { id: 922, name: 'Gümüşova', cityId: 80 },
      { id: 923, name: 'Kaynaşlı', cityId: 80 },
      { id: 924, name: 'Yığılca', cityId: 80 }
    ]
  },
  {
    id: 81,
    name: 'Gümüşhane',
    districts: [
      { id: 925, name: 'Merkez', cityId: 81 },
      { id: 926, name: 'Kelkit', cityId: 81 },
      { id: 927, name: 'Köse', cityId: 81 },
      { id: 928, name: 'Kürtün', cityId: 81 },
      { id: 929, name: 'Şiran', cityId: 81 },
      { id: 930, name: 'Torul', cityId: 81 }
    ]
  }
];

export const getDistrictsByCity = (cityId: number): District[] => {
  const city = turkishCities.find(c => c.id === cityId);
  return city ? city.districts : [];
};

export const getCityNameById = (cityId: number): string => {
  const city = turkishCities.find(c => c.id === cityId);
  return city ? city.name : '';
};

export const getDistrictNameById = (districtId: number): string => {
  for (const city of turkishCities) {
    const district = city.districts.find(d => d.id === districtId);
    if (district) {
      return district.name;
    }
  }
  return '';
};

export const getSortedCities = (): City[] => {
  return [...turkishCities].sort((a, b) => a.name.localeCompare(b.name, 'tr'));
};

export const getSortedDistricts = (cityId: number): District[] => {
  const districts = getDistrictsByCity(cityId);
  return districts.sort((a, b) => a.name.localeCompare(b.name, 'tr'));
};