module.exports = {

"[project]/lib/tr-cities.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Turkish cities and districts data
__turbopack_context__.s({
    "getCityNameById": (()=>getCityNameById),
    "getDistrictNameById": (()=>getDistrictNameById),
    "getDistrictsByCity": (()=>getDistrictsByCity),
    "getSortedCities": (()=>getSortedCities),
    "getSortedDistricts": (()=>getSortedDistricts),
    "turkishCities": (()=>turkishCities)
});
const turkishCities = [
    {
        id: 1,
        name: 'Adana',
        districts: [
            {
                id: 1,
                name: 'Seyhan',
                cityId: 1
            },
            {
                id: 2,
                name: 'Yüreğir',
                cityId: 1
            },
            {
                id: 3,
                name: 'Çukurova',
                cityId: 1
            },
            {
                id: 4,
                name: 'Sarıçam',
                cityId: 1
            },
            {
                id: 5,
                name: 'Aladağ',
                cityId: 1
            },
            {
                id: 6,
                name: 'Ceyhan',
                cityId: 1
            },
            {
                id: 7,
                name: 'Feke',
                cityId: 1
            },
            {
                id: 8,
                name: 'İmamoğlu',
                cityId: 1
            },
            {
                id: 9,
                name: 'Karaisalı',
                cityId: 1
            },
            {
                id: 10,
                name: 'Karataş',
                cityId: 1
            },
            {
                id: 11,
                name: 'Kozan',
                cityId: 1
            },
            {
                id: 12,
                name: 'Pozantı',
                cityId: 1
            },
            {
                id: 13,
                name: 'Saimbeyli',
                cityId: 1
            },
            {
                id: 14,
                name: 'Tufanbeyli',
                cityId: 1
            },
            {
                id: 15,
                name: 'Yumurtalık',
                cityId: 1
            }
        ]
    },
    {
        id: 2,
        name: 'Adıyaman',
        districts: [
            {
                id: 16,
                name: 'Merkez',
                cityId: 2
            },
            {
                id: 17,
                name: 'Besni',
                cityId: 2
            },
            {
                id: 18,
                name: 'Çelikhan',
                cityId: 2
            },
            {
                id: 19,
                name: 'Gerger',
                cityId: 2
            },
            {
                id: 20,
                name: 'Gölbaşı',
                cityId: 2
            },
            {
                id: 21,
                name: 'Kahta',
                cityId: 2
            },
            {
                id: 22,
                name: 'Samsat',
                cityId: 2
            },
            {
                id: 23,
                name: 'Sincik',
                cityId: 2
            },
            {
                id: 24,
                name: 'Tut',
                cityId: 2
            }
        ]
    },
    {
        id: 3,
        name: 'Afyonkarahisar',
        districts: [
            {
                id: 25,
                name: 'Merkez',
                cityId: 3
            },
            {
                id: 26,
                name: 'Bolvadin',
                cityId: 3
            },
            {
                id: 27,
                name: 'Çay',
                cityId: 3
            },
            {
                id: 28,
                name: 'Dazkırı',
                cityId: 3
            },
            {
                id: 29,
                name: 'Dinar',
                cityId: 3
            },
            {
                id: 30,
                name: 'Emirdağ',
                cityId: 3
            },
            {
                id: 31,
                name: 'Hocalar',
                cityId: 3
            },
            {
                id: 32,
                name: 'İhsaniye',
                cityId: 3
            },
            {
                id: 33,
                name: 'İscehisar',
                cityId: 3
            },
            {
                id: 34,
                name: 'Kızılören',
                cityId: 3
            },
            {
                id: 35,
                name: 'Sandıklı',
                cityId: 3
            },
            {
                id: 36,
                name: 'Sinanpaşa',
                cityId: 3
            },
            {
                id: 37,
                name: 'Sultandağı',
                cityId: 3
            },
            {
                id: 38,
                name: 'Şuhut',
                cityId: 3
            }
        ]
    },
    {
        id: 4,
        name: 'Ağrı',
        districts: [
            {
                id: 39,
                name: 'Merkez',
                cityId: 4
            },
            {
                id: 40,
                name: 'Diyadin',
                cityId: 4
            },
            {
                id: 41,
                name: 'Doğubayazıt',
                cityId: 4
            },
            {
                id: 42,
                name: 'Eleşkirt',
                cityId: 4
            },
            {
                id: 43,
                name: 'Hamur',
                cityId: 4
            },
            {
                id: 44,
                name: 'Patnos',
                cityId: 4
            },
            {
                id: 45,
                name: 'Taşlıçay',
                cityId: 4
            },
            {
                id: 46,
                name: 'Tutak',
                cityId: 4
            }
        ]
    },
    {
        id: 5,
        name: 'Amasya',
        districts: [
            {
                id: 47,
                name: 'Merkez',
                cityId: 5
            },
            {
                id: 48,
                name: 'Göynücek',
                cityId: 5
            },
            {
                id: 49,
                name: 'Gümüşhacıköy',
                cityId: 5
            },
            {
                id: 50,
                name: 'Hamamözü',
                cityId: 5
            },
            {
                id: 51,
                name: 'Merzifon',
                cityId: 5
            },
            {
                id: 52,
                name: 'Suluova',
                cityId: 5
            },
            {
                id: 53,
                name: 'Taşova',
                cityId: 5
            }
        ]
    },
    {
        id: 6,
        name: 'Ankara',
        districts: [
            {
                id: 54,
                name: 'Altındağ',
                cityId: 6
            },
            {
                id: 55,
                name: 'Ayaş',
                cityId: 6
            },
            {
                id: 56,
                name: 'Bala',
                cityId: 6
            },
            {
                id: 57,
                name: 'Beypazarı',
                cityId: 6
            },
            {
                id: 58,
                name: 'Çamlıdere',
                cityId: 6
            },
            {
                id: 59,
                name: 'Çankaya',
                cityId: 6
            },
            {
                id: 60,
                name: 'Çubuk',
                cityId: 6
            },
            {
                id: 61,
                name: 'Elmadağ',
                cityId: 6
            },
            {
                id: 62,
                name: 'Etimesgut',
                cityId: 6
            },
            {
                id: 63,
                name: 'Evren',
                cityId: 6
            },
            {
                id: 64,
                name: 'Gölbaşı',
                cityId: 6
            },
            {
                id: 65,
                name: 'Güdül',
                cityId: 6
            },
            {
                id: 66,
                name: 'Haymana',
                cityId: 6
            },
            {
                id: 67,
                name: 'Kalecik',
                cityId: 6
            },
            {
                id: 68,
                name: 'Kazan',
                cityId: 6
            },
            {
                id: 69,
                name: 'Keçiören',
                cityId: 6
            },
            {
                id: 70,
                name: 'Kızılcahamam',
                cityId: 6
            },
            {
                id: 71,
                name: 'Mamak',
                cityId: 6
            },
            {
                id: 72,
                name: 'Nallıhan',
                cityId: 6
            },
            {
                id: 73,
                name: 'Polatlı',
                cityId: 6
            },
            {
                id: 74,
                name: 'Pursaklar',
                cityId: 6
            },
            {
                id: 75,
                name: 'Sincan',
                cityId: 6
            },
            {
                id: 76,
                name: 'Şereflikoçhisar',
                cityId: 6
            },
            {
                id: 77,
                name: 'Yenimahalle',
                cityId: 6
            }
        ]
    },
    {
        id: 7,
        name: 'Antalya',
        districts: [
            {
                id: 78,
                name: 'Aksu',
                cityId: 7
            },
            {
                id: 79,
                name: 'Alanya',
                cityId: 7
            },
            {
                id: 80,
                name: 'Demre',
                cityId: 7
            },
            {
                id: 81,
                name: 'Döşemealtı',
                cityId: 7
            },
            {
                id: 82,
                name: 'Elmalı',
                cityId: 7
            },
            {
                id: 83,
                name: 'Finike',
                cityId: 7
            },
            {
                id: 84,
                name: 'Gazipaşa',
                cityId: 7
            },
            {
                id: 85,
                name: 'Gündoğmuş',
                cityId: 7
            },
            {
                id: 86,
                name: 'İbradı',
                cityId: 7
            },
            {
                id: 87,
                name: 'Kaş',
                cityId: 7
            },
            {
                id: 88,
                name: 'Kemer',
                cityId: 7
            },
            {
                id: 89,
                name: 'Kepez',
                cityId: 7
            },
            {
                id: 90,
                name: 'Konyaaltı',
                cityId: 7
            },
            {
                id: 91,
                name: 'Korkuteli',
                cityId: 7
            },
            {
                id: 92,
                name: 'Kumluca',
                cityId: 7
            },
            {
                id: 93,
                name: 'Manavgat',
                cityId: 7
            },
            {
                id: 94,
                name: 'Muratpaşa',
                cityId: 7
            },
            {
                id: 95,
                name: 'Serik',
                cityId: 7
            }
        ]
    },
    {
        id: 8,
        name: 'Artvin',
        districts: [
            {
                id: 96,
                name: 'Merkez',
                cityId: 8
            },
            {
                id: 97,
                name: 'Ardanuç',
                cityId: 8
            },
            {
                id: 98,
                name: 'Arhavi',
                cityId: 8
            },
            {
                id: 99,
                name: 'Borçka',
                cityId: 8
            },
            {
                id: 100,
                name: 'Hopa',
                cityId: 8
            },
            {
                id: 101,
                name: 'Murgul',
                cityId: 8
            },
            {
                id: 102,
                name: 'Şavşat',
                cityId: 8
            },
            {
                id: 103,
                name: 'Yusufeli',
                cityId: 8
            }
        ]
    },
    {
        id: 9,
        name: 'Aydın',
        districts: [
            {
                id: 104,
                name: 'Efeler',
                cityId: 9
            },
            {
                id: 105,
                name: 'Bozdoğan',
                cityId: 9
            },
            {
                id: 106,
                name: 'Buharkent',
                cityId: 9
            },
            {
                id: 107,
                name: 'Çine',
                cityId: 9
            },
            {
                id: 108,
                name: 'Didim',
                cityId: 9
            },
            {
                id: 109,
                name: 'Germencik',
                cityId: 9
            },
            {
                id: 110,
                name: 'İncirliova',
                cityId: 9
            },
            {
                id: 111,
                name: 'Karacasu',
                cityId: 9
            },
            {
                id: 112,
                name: 'Karpuzlu',
                cityId: 9
            },
            {
                id: 113,
                name: 'Koçarlı',
                cityId: 9
            },
            {
                id: 114,
                name: 'Köşk',
                cityId: 9
            },
            {
                id: 115,
                name: 'Kuşadası',
                cityId: 9
            },
            {
                id: 116,
                name: 'Kuyucak',
                cityId: 9
            },
            {
                id: 117,
                name: 'Nazilli',
                cityId: 9
            },
            {
                id: 118,
                name: 'Söke',
                cityId: 9
            },
            {
                id: 119,
                name: 'Sultanhisar',
                cityId: 9
            },
            {
                id: 120,
                name: 'Yenipazar',
                cityId: 9
            }
        ]
    },
    {
        id: 10,
        name: 'Balıkesir',
        districts: [
            {
                id: 121,
                name: 'Altıeylül',
                cityId: 10
            },
            {
                id: 122,
                name: 'Karesi',
                cityId: 10
            },
            {
                id: 123,
                name: 'Ayvalık',
                cityId: 10
            },
            {
                id: 124,
                name: 'Balya',
                cityId: 10
            },
            {
                id: 125,
                name: 'Bandırma',
                cityId: 10
            },
            {
                id: 126,
                name: 'Bigadiç',
                cityId: 10
            },
            {
                id: 127,
                name: 'Burhaniye',
                cityId: 10
            },
            {
                id: 128,
                name: 'Dursunbey',
                cityId: 10
            },
            {
                id: 129,
                name: 'Edremit',
                cityId: 10
            },
            {
                id: 130,
                name: 'Erdek',
                cityId: 10
            },
            {
                id: 131,
                name: 'Gömeç',
                cityId: 10
            },
            {
                id: 132,
                name: 'Gönen',
                cityId: 10
            },
            {
                id: 133,
                name: 'Havran',
                cityId: 10
            },
            {
                id: 134,
                name: 'İvrindi',
                cityId: 10
            },
            {
                id: 135,
                name: 'Kepsut',
                cityId: 10
            },
            {
                id: 136,
                name: 'Manyas',
                cityId: 10
            },
            {
                id: 137,
                name: 'Marmara',
                cityId: 10
            },
            {
                id: 138,
                name: 'Savaştepe',
                cityId: 10
            },
            {
                id: 139,
                name: 'Sındırgı',
                cityId: 10
            },
            {
                id: 140,
                name: 'Susurluk',
                cityId: 10
            }
        ]
    },
    {
        id: 11,
        name: 'Bilecik',
        districts: [
            {
                id: 141,
                name: 'Merkez',
                cityId: 11
            },
            {
                id: 142,
                name: 'Bozüyük',
                cityId: 11
            },
            {
                id: 143,
                name: 'Gölpazarı',
                cityId: 11
            },
            {
                id: 144,
                name: 'İnhisar',
                cityId: 11
            },
            {
                id: 145,
                name: 'Osmaneli',
                cityId: 11
            },
            {
                id: 146,
                name: 'Pazaryeri',
                cityId: 11
            },
            {
                id: 147,
                name: 'Söğüt',
                cityId: 11
            },
            {
                id: 148,
                name: 'Yenipazar',
                cityId: 11
            }
        ]
    },
    {
        id: 12,
        name: 'Bingöl',
        districts: [
            {
                id: 149,
                name: 'Merkez',
                cityId: 12
            },
            {
                id: 150,
                name: 'Adaklı',
                cityId: 12
            },
            {
                id: 151,
                name: 'Genç',
                cityId: 12
            },
            {
                id: 152,
                name: 'Karlıova',
                cityId: 12
            },
            {
                id: 153,
                name: 'Kiğı',
                cityId: 12
            },
            {
                id: 154,
                name: 'Solhan',
                cityId: 12
            },
            {
                id: 155,
                name: 'Yayladere',
                cityId: 12
            },
            {
                id: 156,
                name: 'Yedisu',
                cityId: 12
            }
        ]
    },
    {
        id: 13,
        name: 'Bitlis',
        districts: [
            {
                id: 157,
                name: 'Merkez',
                cityId: 13
            },
            {
                id: 158,
                name: 'Adilcevaz',
                cityId: 13
            },
            {
                id: 159,
                name: 'Ahlat',
                cityId: 13
            },
            {
                id: 160,
                name: 'Güroymak',
                cityId: 13
            },
            {
                id: 161,
                name: 'Hizan',
                cityId: 13
            },
            {
                id: 162,
                name: 'Mutki',
                cityId: 13
            },
            {
                id: 163,
                name: 'Tatvan',
                cityId: 13
            }
        ]
    },
    {
        id: 14,
        name: 'Bolu',
        districts: [
            {
                id: 164,
                name: 'Merkez',
                cityId: 14
            },
            {
                id: 165,
                name: 'Dörtdivan',
                cityId: 14
            },
            {
                id: 166,
                name: 'Gerede',
                cityId: 14
            },
            {
                id: 167,
                name: 'Göynük',
                cityId: 14
            },
            {
                id: 168,
                name: 'Kıbrıscık',
                cityId: 14
            },
            {
                id: 169,
                name: 'Mengen',
                cityId: 14
            },
            {
                id: 170,
                name: 'Mudurnu',
                cityId: 14
            },
            {
                id: 171,
                name: 'Seben',
                cityId: 14
            },
            {
                id: 172,
                name: 'Yeniçağa',
                cityId: 14
            }
        ]
    },
    {
        id: 15,
        name: 'Burdur',
        districts: [
            {
                id: 173,
                name: 'Merkez',
                cityId: 15
            },
            {
                id: 174,
                name: 'Ağlasun',
                cityId: 15
            },
            {
                id: 175,
                name: 'Altınyayla',
                cityId: 15
            },
            {
                id: 176,
                name: 'Bucak',
                cityId: 15
            },
            {
                id: 177,
                name: 'Çavdır',
                cityId: 15
            },
            {
                id: 178,
                name: 'Çeltikçi',
                cityId: 15
            },
            {
                id: 179,
                name: 'Gölhisar',
                cityId: 15
            },
            {
                id: 180,
                name: 'Karamanlı',
                cityId: 15
            },
            {
                id: 181,
                name: 'Kemer',
                cityId: 15
            },
            {
                id: 182,
                name: 'Tefenni',
                cityId: 15
            },
            {
                id: 183,
                name: 'Yeşilova',
                cityId: 15
            }
        ]
    },
    {
        id: 16,
        name: 'Bursa',
        districts: [
            {
                id: 184,
                name: 'Osmangazi',
                cityId: 16
            },
            {
                id: 185,
                name: 'Nilüfer',
                cityId: 16
            },
            {
                id: 186,
                name: 'Yıldırım',
                cityId: 16
            },
            {
                id: 187,
                name: 'Büyükorhan',
                cityId: 16
            },
            {
                id: 188,
                name: 'Gemlik',
                cityId: 16
            },
            {
                id: 189,
                name: 'Gürsu',
                cityId: 16
            },
            {
                id: 190,
                name: 'Harmancık',
                cityId: 16
            },
            {
                id: 191,
                name: 'İnegöl',
                cityId: 16
            },
            {
                id: 192,
                name: 'İznik',
                cityId: 16
            },
            {
                id: 193,
                name: 'Karacabey',
                cityId: 16
            },
            {
                id: 194,
                name: 'Keles',
                cityId: 16
            },
            {
                id: 195,
                name: 'Kestel',
                cityId: 16
            },
            {
                id: 196,
                name: 'Mudanya',
                cityId: 16
            },
            {
                id: 197,
                name: 'Mustafakemalpaşa',
                cityId: 16
            },
            {
                id: 198,
                name: 'Orhaneli',
                cityId: 16
            },
            {
                id: 199,
                name: 'Orhangazi',
                cityId: 16
            },
            {
                id: 200,
                name: 'Yenişehir',
                cityId: 16
            }
        ]
    },
    {
        id: 17,
        name: 'Çanakkale',
        districts: [
            {
                id: 201,
                name: 'Merkez',
                cityId: 17
            },
            {
                id: 202,
                name: 'Ayvacık',
                cityId: 17
            },
            {
                id: 203,
                name: 'Bayramiç',
                cityId: 17
            },
            {
                id: 204,
                name: 'Biga',
                cityId: 17
            },
            {
                id: 205,
                name: 'Bozcaada',
                cityId: 17
            },
            {
                id: 206,
                name: 'Çan',
                cityId: 17
            },
            {
                id: 207,
                name: 'Eceabat',
                cityId: 17
            },
            {
                id: 208,
                name: 'Ezine',
                cityId: 17
            },
            {
                id: 209,
                name: 'Gelibolu',
                cityId: 17
            },
            {
                id: 210,
                name: 'Gökçeada',
                cityId: 17
            },
            {
                id: 211,
                name: 'Lapseki',
                cityId: 17
            },
            {
                id: 212,
                name: 'Yenice',
                cityId: 17
            }
        ]
    },
    {
        id: 18,
        name: 'Çankırı',
        districts: [
            {
                id: 213,
                name: 'Merkez',
                cityId: 18
            },
            {
                id: 214,
                name: 'Atkaracalar',
                cityId: 18
            },
            {
                id: 215,
                name: 'Bayramören',
                cityId: 18
            },
            {
                id: 216,
                name: 'Çerkeş',
                cityId: 18
            },
            {
                id: 217,
                name: 'Eldivan',
                cityId: 18
            },
            {
                id: 218,
                name: 'Ilgaz',
                cityId: 18
            },
            {
                id: 219,
                name: 'Kızılırmak',
                cityId: 18
            },
            {
                id: 220,
                name: 'Korgun',
                cityId: 18
            },
            {
                id: 221,
                name: 'Kurşunlu',
                cityId: 18
            },
            {
                id: 222,
                name: 'Orta',
                cityId: 18
            },
            {
                id: 223,
                name: 'Şabanözü',
                cityId: 18
            },
            {
                id: 224,
                name: 'Yapraklı',
                cityId: 18
            }
        ]
    },
    {
        id: 19,
        name: 'Çorum',
        districts: [
            {
                id: 225,
                name: 'Merkez',
                cityId: 19
            },
            {
                id: 226,
                name: 'Alaca',
                cityId: 19
            },
            {
                id: 227,
                name: 'Bayat',
                cityId: 19
            },
            {
                id: 228,
                name: 'Boğazkale',
                cityId: 19
            },
            {
                id: 229,
                name: 'Dodurga',
                cityId: 19
            },
            {
                id: 230,
                name: 'İskilip',
                cityId: 19
            },
            {
                id: 231,
                name: 'Kargı',
                cityId: 19
            },
            {
                id: 232,
                name: 'Laçin',
                cityId: 19
            },
            {
                id: 233,
                name: 'Mecitözü',
                cityId: 19
            },
            {
                id: 234,
                name: 'Oğuzlar',
                cityId: 19
            },
            {
                id: 235,
                name: 'Ortaköy',
                cityId: 19
            },
            {
                id: 236,
                name: 'Osmancık',
                cityId: 19
            },
            {
                id: 237,
                name: 'Sungurlu',
                cityId: 19
            },
            {
                id: 238,
                name: 'Uğurludağ',
                cityId: 19
            }
        ]
    },
    {
        id: 20,
        name: 'Denizli',
        districts: [
            {
                id: 239,
                name: 'Pamukkale',
                cityId: 20
            },
            {
                id: 240,
                name: 'Merkezefendi',
                cityId: 20
            },
            {
                id: 241,
                name: 'Acıpayam',
                cityId: 20
            },
            {
                id: 242,
                name: 'Babadağ',
                cityId: 20
            },
            {
                id: 243,
                name: 'Baklan',
                cityId: 20
            },
            {
                id: 244,
                name: 'Bekilli',
                cityId: 20
            },
            {
                id: 245,
                name: 'Beyağaç',
                cityId: 20
            },
            {
                id: 246,
                name: 'Bozkurt',
                cityId: 20
            },
            {
                id: 247,
                name: 'Buldan',
                cityId: 20
            },
            {
                id: 248,
                name: 'Çal',
                cityId: 20
            },
            {
                id: 249,
                name: 'Çameli',
                cityId: 20
            },
            {
                id: 250,
                name: 'Çardak',
                cityId: 20
            },
            {
                id: 251,
                name: 'Çivril',
                cityId: 20
            },
            {
                id: 252,
                name: 'Güney',
                cityId: 20
            },
            {
                id: 253,
                name: 'Honaz',
                cityId: 20
            },
            {
                id: 254,
                name: 'Kale',
                cityId: 20
            },
            {
                id: 255,
                name: 'Sarayköy',
                cityId: 20
            },
            {
                id: 256,
                name: 'Serinhisar',
                cityId: 20
            },
            {
                id: 257,
                name: 'Tavas',
                cityId: 20
            }
        ]
    },
    {
        id: 21,
        name: 'Diyarbakır',
        districts: [
            {
                id: 258,
                name: 'Bağlar',
                cityId: 21
            },
            {
                id: 259,
                name: 'Kayapınar',
                cityId: 21
            },
            {
                id: 260,
                name: 'Sur',
                cityId: 21
            },
            {
                id: 261,
                name: 'Yenişehir',
                cityId: 21
            },
            {
                id: 262,
                name: 'Bismil',
                cityId: 21
            },
            {
                id: 263,
                name: 'Çermik',
                cityId: 21
            },
            {
                id: 264,
                name: 'Çınar',
                cityId: 21
            },
            {
                id: 265,
                name: 'Çüngüş',
                cityId: 21
            },
            {
                id: 266,
                name: 'Dicle',
                cityId: 21
            },
            {
                id: 267,
                name: 'Eğil',
                cityId: 21
            },
            {
                id: 268,
                name: 'Ergani',
                cityId: 21
            },
            {
                id: 269,
                name: 'Hani',
                cityId: 21
            },
            {
                id: 270,
                name: 'Hazro',
                cityId: 21
            },
            {
                id: 271,
                name: 'Kulp',
                cityId: 21
            },
            {
                id: 272,
                name: 'Kocaköy',
                cityId: 21
            },
            {
                id: 273,
                name: 'Lice',
                cityId: 21
            },
            {
                id: 274,
                name: 'Silvan',
                cityId: 21
            }
        ]
    },
    {
        id: 22,
        name: 'Edirne',
        districts: [
            {
                id: 275,
                name: 'Merkez',
                cityId: 22
            },
            {
                id: 276,
                name: 'Enez',
                cityId: 22
            },
            {
                id: 277,
                name: 'Havsa',
                cityId: 22
            },
            {
                id: 278,
                name: 'İpsala',
                cityId: 22
            },
            {
                id: 279,
                name: 'Keşan',
                cityId: 22
            },
            {
                id: 280,
                name: 'Lalapaşa',
                cityId: 22
            },
            {
                id: 281,
                name: 'Meriç',
                cityId: 22
            },
            {
                id: 282,
                name: 'Süloğlu',
                cityId: 22
            },
            {
                id: 283,
                name: 'Uzunköprü',
                cityId: 22
            }
        ]
    },
    {
        id: 23,
        name: 'Elazığ',
        districts: [
            {
                id: 284,
                name: 'Merkez',
                cityId: 23
            },
            {
                id: 285,
                name: 'Ağın',
                cityId: 23
            },
            {
                id: 286,
                name: 'Alacakaya',
                cityId: 23
            },
            {
                id: 287,
                name: 'Arıcak',
                cityId: 23
            },
            {
                id: 288,
                name: 'Baskil',
                cityId: 23
            },
            {
                id: 289,
                name: 'Karakoçan',
                cityId: 23
            },
            {
                id: 290,
                name: 'Keban',
                cityId: 23
            },
            {
                id: 291,
                name: 'Kovancılar',
                cityId: 23
            },
            {
                id: 292,
                name: 'Maden',
                cityId: 23
            },
            {
                id: 293,
                name: 'Palu',
                cityId: 23
            },
            {
                id: 294,
                name: 'Sivrice',
                cityId: 23
            }
        ]
    },
    {
        id: 24,
        name: 'Erzincan',
        districts: [
            {
                id: 295,
                name: 'Merkez',
                cityId: 24
            },
            {
                id: 296,
                name: 'Çayırlı',
                cityId: 24
            },
            {
                id: 297,
                name: 'İliç',
                cityId: 24
            },
            {
                id: 298,
                name: 'Kemah',
                cityId: 24
            },
            {
                id: 299,
                name: 'Kemaliye',
                cityId: 24
            },
            {
                id: 300,
                name: 'Otlukbeli',
                cityId: 24
            },
            {
                id: 301,
                name: 'Refahiye',
                cityId: 24
            },
            {
                id: 302,
                name: 'Tercan',
                cityId: 24
            },
            {
                id: 303,
                name: 'Üzümlü',
                cityId: 24
            }
        ]
    },
    {
        id: 25,
        name: 'Erzurum',
        districts: [
            {
                id: 304,
                name: 'Aziziye',
                cityId: 25
            },
            {
                id: 305,
                name: 'Palandöken',
                cityId: 25
            },
            {
                id: 306,
                name: 'Yakutiye',
                cityId: 25
            },
            {
                id: 307,
                name: 'Aşkale',
                cityId: 25
            },
            {
                id: 308,
                name: 'Çat',
                cityId: 25
            },
            {
                id: 309,
                name: 'Hınıs',
                cityId: 25
            },
            {
                id: 310,
                name: 'Horasan',
                cityId: 25
            },
            {
                id: 311,
                name: 'İspir',
                cityId: 25
            },
            {
                id: 312,
                name: 'Karaçoban',
                cityId: 25
            },
            {
                id: 313,
                name: 'Karayazı',
                cityId: 25
            },
            {
                id: 314,
                name: 'Köprüköy',
                cityId: 25
            },
            {
                id: 315,
                name: 'Narman',
                cityId: 25
            },
            {
                id: 316,
                name: 'Oltu',
                cityId: 25
            },
            {
                id: 317,
                name: 'Olur',
                cityId: 25
            },
            {
                id: 318,
                name: 'Pasinler',
                cityId: 25
            },
            {
                id: 319,
                name: 'Pazaryolu',
                cityId: 25
            },
            {
                id: 320,
                name: 'Şenkaya',
                cityId: 25
            },
            {
                id: 321,
                name: 'Tekman',
                cityId: 25
            },
            {
                id: 322,
                name: 'Tortum',
                cityId: 25
            },
            {
                id: 323,
                name: 'Uzundere',
                cityId: 25
            }
        ]
    },
    {
        id: 26,
        name: 'Eskişehir',
        districts: [
            {
                id: 324,
                name: 'Odunpazarı',
                cityId: 26
            },
            {
                id: 325,
                name: 'Tepebaşı',
                cityId: 26
            },
            {
                id: 326,
                name: 'Alpu',
                cityId: 26
            },
            {
                id: 327,
                name: 'Beylikova',
                cityId: 26
            },
            {
                id: 328,
                name: 'Çifteler',
                cityId: 26
            },
            {
                id: 329,
                name: 'Günyüzü',
                cityId: 26
            },
            {
                id: 330,
                name: 'Han',
                cityId: 26
            },
            {
                id: 331,
                name: 'İnönü',
                cityId: 26
            },
            {
                id: 332,
                name: 'Mahmudiye',
                cityId: 26
            },
            {
                id: 333,
                name: 'Mihalgazi',
                cityId: 26
            },
            {
                id: 334,
                name: 'Mihalıççık',
                cityId: 26
            },
            {
                id: 335,
                name: 'Sarıcakaya',
                cityId: 26
            },
            {
                id: 336,
                name: 'Seyitgazi',
                cityId: 26
            },
            {
                id: 337,
                name: 'Sivrihisar',
                cityId: 26
            }
        ]
    },
    {
        id: 27,
        name: 'Gaziantep',
        districts: [
            {
                id: 338,
                name: 'Şahinbey',
                cityId: 27
            },
            {
                id: 339,
                name: 'Şehitkamil',
                cityId: 27
            },
            {
                id: 340,
                name: 'Araban',
                cityId: 27
            },
            {
                id: 341,
                name: 'İslahiye',
                cityId: 27
            },
            {
                id: 342,
                name: 'Karkamış',
                cityId: 27
            },
            {
                id: 343,
                name: 'Nizip',
                cityId: 27
            },
            {
                id: 344,
                name: 'Nurdağı',
                cityId: 27
            },
            {
                id: 345,
                name: 'Oğuzeli',
                cityId: 27
            },
            {
                id: 346,
                name: 'Yavuzeli',
                cityId: 27
            }
        ]
    },
    {
        id: 28,
        name: 'Giresun',
        districts: [
            {
                id: 347,
                name: 'Merkez',
                cityId: 28
            },
            {
                id: 348,
                name: 'Alucra',
                cityId: 28
            },
            {
                id: 349,
                name: 'Bulancak',
                cityId: 28
            },
            {
                id: 350,
                name: 'Çamoluk',
                cityId: 28
            },
            {
                id: 351,
                name: 'Çanakçı',
                cityId: 28
            },
            {
                id: 352,
                name: 'Dereli',
                cityId: 28
            },
            {
                id: 353,
                name: 'Doğankent',
                cityId: 28
            },
            {
                id: 354,
                name: 'Espiye',
                cityId: 28
            },
            {
                id: 355,
                name: 'Eynesil',
                cityId: 28
            },
            {
                id: 356,
                name: 'Görele',
                cityId: 28
            },
            {
                id: 357,
                name: 'Güce',
                cityId: 28
            },
            {
                id: 358,
                name: 'Keşap',
                cityId: 28
            },
            {
                id: 359,
                name: 'Piraziz',
                cityId: 28
            },
            {
                id: 360,
                name: 'Şebinkarahisar',
                cityId: 28
            },
            {
                id: 361,
                name: 'Tirebolu',
                cityId: 28
            },
            {
                id: 362,
                name: 'Yağlıdere',
                cityId: 28
            }
        ]
    },
    {
        id: 29,
        name: 'Gümüşhane',
        districts: [
            {
                id: 363,
                name: 'Merkez',
                cityId: 29
            },
            {
                id: 364,
                name: 'Kelkit',
                cityId: 29
            },
            {
                id: 365,
                name: 'Köse',
                cityId: 29
            },
            {
                id: 366,
                name: 'Kürtün',
                cityId: 29
            },
            {
                id: 367,
                name: 'Şiran',
                cityId: 29
            },
            {
                id: 368,
                name: 'Torul',
                cityId: 29
            }
        ]
    },
    {
        id: 30,
        name: 'Hakkari',
        districts: [
            {
                id: 369,
                name: 'Merkez',
                cityId: 30
            },
            {
                id: 370,
                name: 'Çukurca',
                cityId: 30
            },
            {
                id: 371,
                name: 'Şemdinli',
                cityId: 30
            },
            {
                id: 372,
                name: 'Yüksekova',
                cityId: 30
            }
        ]
    },
    {
        id: 31,
        name: 'Hatay',
        districts: [
            {
                id: 373,
                name: 'Antakya',
                cityId: 31
            },
            {
                id: 374,
                name: 'Defne',
                cityId: 31
            },
            {
                id: 375,
                name: 'Arsuz',
                cityId: 31
            },
            {
                id: 376,
                name: 'Belen',
                cityId: 31
            },
            {
                id: 377,
                name: 'Dörtyol',
                cityId: 31
            },
            {
                id: 378,
                name: 'Erzin',
                cityId: 31
            },
            {
                id: 379,
                name: 'Hassa',
                cityId: 31
            },
            {
                id: 380,
                name: 'İskenderun',
                cityId: 31
            },
            {
                id: 381,
                name: 'Kırıkhan',
                cityId: 31
            },
            {
                id: 382,
                name: 'Kumlu',
                cityId: 31
            },
            {
                id: 383,
                name: 'Payas',
                cityId: 31
            },
            {
                id: 384,
                name: 'Reyhanlı',
                cityId: 31
            },
            {
                id: 385,
                name: 'Samandağ',
                cityId: 31
            },
            {
                id: 386,
                name: 'Yayladağı',
                cityId: 31
            },
            {
                id: 387,
                name: 'Altınözü',
                cityId: 31
            }
        ]
    },
    {
        id: 32,
        name: 'Isparta',
        districts: [
            {
                id: 388,
                name: 'Merkez',
                cityId: 32
            },
            {
                id: 389,
                name: 'Aksu',
                cityId: 32
            },
            {
                id: 390,
                name: 'Atabey',
                cityId: 32
            },
            {
                id: 391,
                name: 'Eğirdir',
                cityId: 32
            },
            {
                id: 392,
                name: 'Gelendost',
                cityId: 32
            },
            {
                id: 393,
                name: 'Gönen',
                cityId: 32
            },
            {
                id: 394,
                name: 'Keçiborlu',
                cityId: 32
            },
            {
                id: 395,
                name: 'Senirkent',
                cityId: 32
            },
            {
                id: 396,
                name: 'Sütçüler',
                cityId: 32
            },
            {
                id: 397,
                name: 'Şarkikaraağaç',
                cityId: 32
            },
            {
                id: 398,
                name: 'Uluborlu',
                cityId: 32
            },
            {
                id: 399,
                name: 'Yalvaç',
                cityId: 32
            },
            {
                id: 400,
                name: 'Yenişarbademli',
                cityId: 32
            }
        ]
    },
    {
        id: 33,
        name: 'Mersin',
        districts: [
            {
                id: 401,
                name: 'Akdeniz',
                cityId: 33
            },
            {
                id: 402,
                name: 'Mezitli',
                cityId: 33
            },
            {
                id: 403,
                name: 'Toroslar',
                cityId: 33
            },
            {
                id: 404,
                name: 'Yenişehir',
                cityId: 33
            },
            {
                id: 405,
                name: 'Anamur',
                cityId: 33
            },
            {
                id: 406,
                name: 'Aydıncık',
                cityId: 33
            },
            {
                id: 407,
                name: 'Bozyazı',
                cityId: 33
            },
            {
                id: 408,
                name: 'Çamlıyayla',
                cityId: 33
            },
            {
                id: 409,
                name: 'Erdemli',
                cityId: 33
            },
            {
                id: 410,
                name: 'Gülnar',
                cityId: 33
            },
            {
                id: 411,
                name: 'Mut',
                cityId: 33
            },
            {
                id: 412,
                name: 'Silifke',
                cityId: 33
            },
            {
                id: 413,
                name: 'Tarsus',
                cityId: 33
            }
        ]
    },
    {
        id: 34,
        name: 'İzmir',
        districts: [
            {
                id: 414,
                name: 'Konak',
                cityId: 34
            },
            {
                id: 415,
                name: 'Bornova',
                cityId: 34
            },
            {
                id: 416,
                name: 'Buca',
                cityId: 34
            },
            {
                id: 417,
                name: 'Çiğli',
                cityId: 34
            },
            {
                id: 418,
                name: 'Gaziemir',
                cityId: 34
            },
            {
                id: 419,
                name: 'Narlıdere',
                cityId: 34
            },
            {
                id: 420,
                name: 'Balçova',
                cityId: 34
            },
            {
                id: 421,
                name: 'Bayraklı',
                cityId: 34
            },
            {
                id: 422,
                name: 'Karşıyaka',
                cityId: 34
            },
            {
                id: 423,
                name: 'Aliağa',
                cityId: 34
            },
            {
                id: 424,
                name: 'Bayındır',
                cityId: 34
            },
            {
                id: 425,
                name: 'Bergama',
                cityId: 34
            },
            {
                id: 426,
                name: 'Beydağ',
                cityId: 34
            },
            {
                id: 427,
                name: 'Çeşme',
                cityId: 34
            },
            {
                id: 428,
                name: 'Dikili',
                cityId: 34
            },
            {
                id: 429,
                name: 'Foça',
                cityId: 34
            },
            {
                id: 430,
                name: 'Karaburun',
                cityId: 34
            },
            {
                id: 431,
                name: 'Kınık',
                cityId: 34
            },
            {
                id: 432,
                name: 'Kiraz',
                cityId: 34
            },
            {
                id: 433,
                name: 'Menemen',
                cityId: 34
            },
            {
                id: 434,
                name: 'Ödemiş',
                cityId: 34
            },
            {
                id: 435,
                name: 'Seferihisar',
                cityId: 34
            },
            {
                id: 436,
                name: 'Selçuk',
                cityId: 34
            },
            {
                id: 437,
                name: 'Tire',
                cityId: 34
            },
            {
                id: 438,
                name: 'Torbalı',
                cityId: 34
            },
            {
                id: 439,
                name: 'Urla',
                cityId: 34
            },
            {
                id: 440,
                name: 'Güzelbahçe',
                cityId: 34
            },
            {
                id: 441,
                name: 'Menderes',
                cityId: 34
            },
            {
                id: 442,
                name: 'Kemalpaşa',
                cityId: 34
            }
        ]
    },
    {
        id: 35,
        name: 'Kars',
        districts: [
            {
                id: 443,
                name: 'Merkez',
                cityId: 35
            },
            {
                id: 444,
                name: 'Akyaka',
                cityId: 35
            },
            {
                id: 445,
                name: 'Arpaçay',
                cityId: 35
            },
            {
                id: 446,
                name: 'Digor',
                cityId: 35
            },
            {
                id: 447,
                name: 'Kağızman',
                cityId: 35
            },
            {
                id: 448,
                name: 'Sarıkamış',
                cityId: 35
            },
            {
                id: 449,
                name: 'Selim',
                cityId: 35
            },
            {
                id: 450,
                name: 'Susuz',
                cityId: 35
            }
        ]
    },
    {
        id: 36,
        name: 'Kastamonu',
        districts: [
            {
                id: 451,
                name: 'Merkez',
                cityId: 36
            },
            {
                id: 452,
                name: 'Abana',
                cityId: 36
            },
            {
                id: 453,
                name: 'Ağlı',
                cityId: 36
            },
            {
                id: 454,
                name: 'Araç',
                cityId: 36
            },
            {
                id: 455,
                name: 'Azdavay',
                cityId: 36
            },
            {
                id: 456,
                name: 'Bozkurt',
                cityId: 36
            },
            {
                id: 457,
                name: 'Cide',
                cityId: 36
            },
            {
                id: 458,
                name: 'Çatalzeytin',
                cityId: 36
            },
            {
                id: 459,
                name: 'Daday',
                cityId: 36
            },
            {
                id: 460,
                name: 'Devrekani',
                cityId: 36
            },
            {
                id: 461,
                name: 'Doğanyurt',
                cityId: 36
            },
            {
                id: 462,
                name: 'Hanönü',
                cityId: 36
            },
            {
                id: 463,
                name: 'İhsangazi',
                cityId: 36
            },
            {
                id: 464,
                name: 'İnebolu',
                cityId: 36
            },
            {
                id: 465,
                name: 'Küre',
                cityId: 36
            },
            {
                id: 466,
                name: 'Pınarbaşı',
                cityId: 36
            },
            {
                id: 467,
                name: 'Seydiler',
                cityId: 36
            },
            {
                id: 468,
                name: 'Şenpazar',
                cityId: 36
            },
            {
                id: 469,
                name: 'Taşköprü',
                cityId: 36
            },
            {
                id: 470,
                name: 'Tosya',
                cityId: 36
            }
        ]
    },
    {
        id: 37,
        name: 'Kayseri',
        districts: [
            {
                id: 471,
                name: 'Kocasinan',
                cityId: 37
            },
            {
                id: 472,
                name: 'Melikgazi',
                cityId: 37
            },
            {
                id: 473,
                name: 'Talas',
                cityId: 37
            },
            {
                id: 474,
                name: 'Hacılar',
                cityId: 37
            },
            {
                id: 475,
                name: 'Akkışla',
                cityId: 37
            },
            {
                id: 476,
                name: 'Bünyan',
                cityId: 37
            },
            {
                id: 477,
                name: 'Develi',
                cityId: 37
            },
            {
                id: 478,
                name: 'Felahiye',
                cityId: 37
            },
            {
                id: 479,
                name: 'İncesu',
                cityId: 37
            },
            {
                id: 480,
                name: 'Pınarbaşı',
                cityId: 37
            },
            {
                id: 481,
                name: 'Sarıoğlan',
                cityId: 37
            },
            {
                id: 482,
                name: 'Sarız',
                cityId: 37
            },
            {
                id: 483,
                name: 'Tomarza',
                cityId: 37
            },
            {
                id: 484,
                name: 'Yahyalı',
                cityId: 37
            },
            {
                id: 485,
                name: 'Yeşilhisar',
                cityId: 37
            },
            {
                id: 486,
                name: 'Özvatan',
                cityId: 37
            }
        ]
    },
    {
        id: 38,
        name: 'Kırklareli',
        districts: [
            {
                id: 487,
                name: 'Merkez',
                cityId: 38
            },
            {
                id: 488,
                name: 'Babaeski',
                cityId: 38
            },
            {
                id: 489,
                name: 'Demirköy',
                cityId: 38
            },
            {
                id: 490,
                name: 'Kofçaz',
                cityId: 38
            },
            {
                id: 491,
                name: 'Lüleburgaz',
                cityId: 38
            },
            {
                id: 492,
                name: 'Pehlivanköy',
                cityId: 38
            },
            {
                id: 493,
                name: 'Pınarhisar',
                cityId: 38
            },
            {
                id: 494,
                name: 'Vize',
                cityId: 38
            }
        ]
    },
    {
        id: 39,
        name: 'Kırşehir',
        districts: [
            {
                id: 495,
                name: 'Merkez',
                cityId: 39
            },
            {
                id: 496,
                name: 'Akçakent',
                cityId: 39
            },
            {
                id: 497,
                name: 'Akpınar',
                cityId: 39
            },
            {
                id: 498,
                name: 'Boztepe',
                cityId: 39
            },
            {
                id: 499,
                name: 'Çiçekdağı',
                cityId: 39
            },
            {
                id: 500,
                name: 'Kaman',
                cityId: 39
            },
            {
                id: 501,
                name: 'Mucur',
                cityId: 39
            }
        ]
    },
    {
        id: 40,
        name: 'Kocaeli',
        districts: [
            {
                id: 502,
                name: 'İzmit',
                cityId: 40
            },
            {
                id: 503,
                name: 'Başiskele',
                cityId: 40
            },
            {
                id: 504,
                name: 'Çayırova',
                cityId: 40
            },
            {
                id: 505,
                name: 'Darıca',
                cityId: 40
            },
            {
                id: 506,
                name: 'Derince',
                cityId: 40
            },
            {
                id: 507,
                name: 'Dilovası',
                cityId: 40
            },
            {
                id: 508,
                name: 'Gebze',
                cityId: 40
            },
            {
                id: 509,
                name: 'Gölcük',
                cityId: 40
            },
            {
                id: 510,
                name: 'Kandıra',
                cityId: 40
            },
            {
                id: 511,
                name: 'Karamürsel',
                cityId: 40
            },
            {
                id: 512,
                name: 'Kartepe',
                cityId: 40
            },
            {
                id: 513,
                name: 'Körfez',
                cityId: 40
            }
        ]
    },
    {
        id: 41,
        name: 'Konya',
        districts: [
            {
                id: 514,
                name: 'Meram',
                cityId: 41
            },
            {
                id: 515,
                name: 'Karatay',
                cityId: 41
            },
            {
                id: 516,
                name: 'Selçuklu',
                cityId: 41
            },
            {
                id: 517,
                name: 'Ahırlı',
                cityId: 41
            },
            {
                id: 518,
                name: 'Akören',
                cityId: 41
            },
            {
                id: 519,
                name: 'Akşehir',
                cityId: 41
            },
            {
                id: 520,
                name: 'Altınekin',
                cityId: 41
            },
            {
                id: 521,
                name: 'Beyşehir',
                cityId: 41
            },
            {
                id: 522,
                name: 'Bozkır',
                cityId: 41
            },
            {
                id: 523,
                name: 'Cihanbeyli',
                cityId: 41
            },
            {
                id: 524,
                name: 'Çeltik',
                cityId: 41
            },
            {
                id: 525,
                name: 'Çumra',
                cityId: 41
            },
            {
                id: 526,
                name: 'Derbent',
                cityId: 41
            },
            {
                id: 527,
                name: 'Derebucak',
                cityId: 41
            },
            {
                id: 528,
                name: 'Doğanhisar',
                cityId: 41
            },
            {
                id: 529,
                name: 'Emirgazi',
                cityId: 41
            },
            {
                id: 530,
                name: 'Ereğli',
                cityId: 41
            },
            {
                id: 531,
                name: 'Güneysınır',
                cityId: 41
            },
            {
                id: 532,
                name: 'Hadim',
                cityId: 41
            },
            {
                id: 533,
                name: 'Halkapınar',
                cityId: 41
            },
            {
                id: 534,
                name: 'Hüyük',
                cityId: 41
            },
            {
                id: 535,
                name: 'Ilgın',
                cityId: 41
            },
            {
                id: 536,
                name: 'Kadınhanı',
                cityId: 41
            },
            {
                id: 537,
                name: 'Karapınar',
                cityId: 41
            },
            {
                id: 538,
                name: 'Kulu',
                cityId: 41
            },
            {
                id: 539,
                name: 'Sarayönü',
                cityId: 41
            },
            {
                id: 540,
                name: 'Seydişehir',
                cityId: 41
            },
            {
                id: 541,
                name: 'Taşkent',
                cityId: 41
            },
            {
                id: 542,
                name: 'Tuzlukçu',
                cityId: 41
            },
            {
                id: 543,
                name: 'Yalıhüyük',
                cityId: 41
            },
            {
                id: 544,
                name: 'Yunak',
                cityId: 41
            }
        ]
    },
    {
        id: 42,
        name: 'Kütahya',
        districts: [
            {
                id: 545,
                name: 'Merkez',
                cityId: 42
            },
            {
                id: 546,
                name: 'Altıntaş',
                cityId: 42
            },
            {
                id: 547,
                name: 'Aslanapa',
                cityId: 42
            },
            {
                id: 548,
                name: 'Çavdarhisar',
                cityId: 42
            },
            {
                id: 549,
                name: 'Domaniç',
                cityId: 42
            },
            {
                id: 550,
                name: 'Dumlupınar',
                cityId: 42
            },
            {
                id: 551,
                name: 'Emet',
                cityId: 42
            },
            {
                id: 552,
                name: 'Gediz',
                cityId: 42
            },
            {
                id: 553,
                name: 'Hisarcık',
                cityId: 42
            },
            {
                id: 554,
                name: 'Pazarlar',
                cityId: 42
            },
            {
                id: 555,
                name: 'Simav',
                cityId: 42
            },
            {
                id: 556,
                name: 'Şaphane',
                cityId: 42
            },
            {
                id: 557,
                name: 'Tavşanlı',
                cityId: 42
            }
        ]
    },
    {
        id: 43,
        name: 'Malatya',
        districts: [
            {
                id: 558,
                name: 'Battalgazi',
                cityId: 43
            },
            {
                id: 559,
                name: 'Yeşilyurt',
                cityId: 43
            },
            {
                id: 560,
                name: 'Akçadağ',
                cityId: 43
            },
            {
                id: 561,
                name: 'Arapgir',
                cityId: 43
            },
            {
                id: 562,
                name: 'Arguvan',
                cityId: 43
            },
            {
                id: 563,
                name: 'Darende',
                cityId: 43
            },
            {
                id: 564,
                name: 'Doğanşehir',
                cityId: 43
            },
            {
                id: 565,
                name: 'Doğanyol',
                cityId: 43
            },
            {
                id: 566,
                name: 'Hekimhan',
                cityId: 43
            },
            {
                id: 567,
                name: 'Kale',
                cityId: 43
            },
            {
                id: 568,
                name: 'Kuluncak',
                cityId: 43
            },
            {
                id: 569,
                name: 'Pütürge',
                cityId: 43
            },
            {
                id: 570,
                name: 'Yazıhan',
                cityId: 43
            }
        ]
    },
    {
        id: 44,
        name: 'Manisa',
        districts: [
            {
                id: 571,
                name: 'Yunusemre',
                cityId: 44
            },
            {
                id: 572,
                name: 'Şehzadeler',
                cityId: 44
            },
            {
                id: 573,
                name: 'Ahmetli',
                cityId: 44
            },
            {
                id: 574,
                name: 'Akhisar',
                cityId: 44
            },
            {
                id: 575,
                name: 'Alaşehir',
                cityId: 44
            },
            {
                id: 576,
                name: 'Demirci',
                cityId: 44
            },
            {
                id: 577,
                name: 'Gölmarmara',
                cityId: 44
            },
            {
                id: 578,
                name: 'Gördes',
                cityId: 44
            },
            {
                id: 579,
                name: 'Kırkağaç',
                cityId: 44
            },
            {
                id: 580,
                name: 'Köprübaşı',
                cityId: 44
            },
            {
                id: 581,
                name: 'Kula',
                cityId: 44
            },
            {
                id: 582,
                name: 'Salihli',
                cityId: 44
            },
            {
                id: 583,
                name: 'Sarıgöl',
                cityId: 44
            },
            {
                id: 584,
                name: 'Saruhanlı',
                cityId: 44
            },
            {
                id: 585,
                name: 'Selendi',
                cityId: 44
            },
            {
                id: 586,
                name: 'Soma',
                cityId: 44
            },
            {
                id: 587,
                name: 'Turgutlu',
                cityId: 44
            }
        ]
    },
    {
        id: 45,
        name: 'Kahramanmaraş',
        districts: [
            {
                id: 588,
                name: 'Dulkadiroğlu',
                cityId: 45
            },
            {
                id: 589,
                name: 'Onikişubat',
                cityId: 45
            },
            {
                id: 590,
                name: 'Afşin',
                cityId: 45
            },
            {
                id: 591,
                name: 'Andırın',
                cityId: 45
            },
            {
                id: 592,
                name: 'Çağlayancerit',
                cityId: 45
            },
            {
                id: 593,
                name: 'Ekinözü',
                cityId: 45
            },
            {
                id: 594,
                name: 'Elbistan',
                cityId: 45
            },
            {
                id: 595,
                name: 'Göksun',
                cityId: 45
            },
            {
                id: 596,
                name: 'Nurhak',
                cityId: 45
            },
            {
                id: 597,
                name: 'Pazarcık',
                cityId: 45
            },
            {
                id: 598,
                name: 'Türkoğlu',
                cityId: 45
            }
        ]
    },
    {
        id: 46,
        name: 'Mardin',
        districts: [
            {
                id: 599,
                name: 'Artuklu',
                cityId: 46
            },
            {
                id: 600,
                name: 'Dargeçit',
                cityId: 46
            },
            {
                id: 601,
                name: 'Derik',
                cityId: 46
            },
            {
                id: 602,
                name: 'Kızıltepe',
                cityId: 46
            },
            {
                id: 603,
                name: 'Mazıdağı',
                cityId: 46
            },
            {
                id: 604,
                name: 'Midyat',
                cityId: 46
            },
            {
                id: 605,
                name: 'Nusaybin',
                cityId: 46
            },
            {
                id: 606,
                name: 'Ömerli',
                cityId: 46
            },
            {
                id: 607,
                name: 'Savur',
                cityId: 46
            },
            {
                id: 608,
                name: 'Yeşilli',
                cityId: 46
            }
        ]
    },
    {
        id: 47,
        name: 'Muğla',
        districts: [
            {
                id: 609,
                name: 'Menteşe',
                cityId: 47
            },
            {
                id: 610,
                name: 'Bodrum',
                cityId: 47
            },
            {
                id: 611,
                name: 'Datça',
                cityId: 47
            },
            {
                id: 612,
                name: 'Fethiye',
                cityId: 47
            },
            {
                id: 613,
                name: 'Kavaklıdere',
                cityId: 47
            },
            {
                id: 614,
                name: 'Köyceğiz',
                cityId: 47
            },
            {
                id: 615,
                name: 'Marmaris',
                cityId: 47
            },
            {
                id: 616,
                name: 'Milas',
                cityId: 47
            },
            {
                id: 617,
                name: 'Ortaca',
                cityId: 47
            },
            {
                id: 618,
                name: 'Seydikemer',
                cityId: 47
            },
            {
                id: 619,
                name: 'Ula',
                cityId: 47
            },
            {
                id: 620,
                name: 'Yatağan',
                cityId: 47
            },
            {
                id: 621,
                name: 'Dalaman',
                cityId: 47
            }
        ]
    },
    {
        id: 48,
        name: 'Muş',
        districts: [
            {
                id: 622,
                name: 'Merkez',
                cityId: 48
            },
            {
                id: 623,
                name: 'Bulanık',
                cityId: 48
            },
            {
                id: 624,
                name: 'Hasköy',
                cityId: 48
            },
            {
                id: 625,
                name: 'Korkut',
                cityId: 48
            },
            {
                id: 626,
                name: 'Malazgirt',
                cityId: 48
            },
            {
                id: 627,
                name: 'Varto',
                cityId: 48
            }
        ]
    },
    {
        id: 49,
        name: 'Nevşehir',
        districts: [
            {
                id: 628,
                name: 'Merkez',
                cityId: 49
            },
            {
                id: 629,
                name: 'Acıgöl',
                cityId: 49
            },
            {
                id: 630,
                name: 'Avanos',
                cityId: 49
            },
            {
                id: 631,
                name: 'Derinkuyu',
                cityId: 49
            },
            {
                id: 632,
                name: 'Gülşehir',
                cityId: 49
            },
            {
                id: 633,
                name: 'Hacıbektaş',
                cityId: 49
            },
            {
                id: 634,
                name: 'Kozaklı',
                cityId: 49
            },
            {
                id: 635,
                name: 'Ürgüp',
                cityId: 49
            }
        ]
    },
    {
        id: 50,
        name: 'Niğde',
        districts: [
            {
                id: 636,
                name: 'Merkez',
                cityId: 50
            },
            {
                id: 637,
                name: 'Altunhisar',
                cityId: 50
            },
            {
                id: 638,
                name: 'Bor',
                cityId: 50
            },
            {
                id: 639,
                name: 'Çamardı',
                cityId: 50
            },
            {
                id: 640,
                name: 'Çiftlik',
                cityId: 50
            },
            {
                id: 641,
                name: 'Ulukışla',
                cityId: 50
            }
        ]
    },
    {
        id: 51,
        name: 'Ordu',
        districts: [
            {
                id: 642,
                name: 'Altınordu',
                cityId: 51
            },
            {
                id: 643,
                name: 'Akkuş',
                cityId: 51
            },
            {
                id: 644,
                name: 'Aybastı',
                cityId: 51
            },
            {
                id: 645,
                name: 'Çamaş',
                cityId: 51
            },
            {
                id: 646,
                name: 'Çatalpınar',
                cityId: 51
            },
            {
                id: 647,
                name: 'Çaybaşı',
                cityId: 51
            },
            {
                id: 648,
                name: 'Fatsa',
                cityId: 51
            },
            {
                id: 649,
                name: 'Gölköy',
                cityId: 51
            },
            {
                id: 650,
                name: 'Gülyalı',
                cityId: 51
            },
            {
                id: 651,
                name: 'Gürgentepe',
                cityId: 51
            },
            {
                id: 652,
                name: 'İkizce',
                cityId: 51
            },
            {
                id: 653,
                name: 'Kabadüz',
                cityId: 51
            },
            {
                id: 654,
                name: 'Kabataş',
                cityId: 51
            },
            {
                id: 655,
                name: 'Korgan',
                cityId: 51
            },
            {
                id: 656,
                name: 'Kumru',
                cityId: 51
            },
            {
                id: 657,
                name: 'Mesudiye',
                cityId: 51
            },
            {
                id: 658,
                name: 'Perşembe',
                cityId: 51
            },
            {
                id: 659,
                name: 'Ulubey',
                cityId: 51
            },
            {
                id: 660,
                name: 'Ünye',
                cityId: 51
            }
        ]
    },
    {
        id: 52,
        name: 'Rize',
        districts: [
            {
                id: 661,
                name: 'Merkez',
                cityId: 52
            },
            {
                id: 662,
                name: 'Ardeşen',
                cityId: 52
            },
            {
                id: 663,
                name: 'Çamlıhemşin',
                cityId: 52
            },
            {
                id: 664,
                name: 'Çayeli',
                cityId: 52
            },
            {
                id: 665,
                name: 'Derepazarı',
                cityId: 52
            },
            {
                id: 666,
                name: 'Fındıklı',
                cityId: 52
            },
            {
                id: 667,
                name: 'Güneysu',
                cityId: 52
            },
            {
                id: 668,
                name: 'Hemşin',
                cityId: 52
            },
            {
                id: 669,
                name: 'İkizdere',
                cityId: 52
            },
            {
                id: 670,
                name: 'İyidere',
                cityId: 52
            },
            {
                id: 671,
                name: 'Kalkandere',
                cityId: 52
            },
            {
                id: 672,
                name: 'Pazar',
                cityId: 52
            }
        ]
    },
    {
        id: 53,
        name: 'Sakarya',
        districts: [
            {
                id: 673,
                name: 'Adapazarı',
                cityId: 53
            },
            {
                id: 674,
                name: 'Serdivan',
                cityId: 53
            },
            {
                id: 675,
                name: 'Akyazı',
                cityId: 53
            },
            {
                id: 676,
                name: 'Arifiye',
                cityId: 53
            },
            {
                id: 677,
                name: 'Erenler',
                cityId: 53
            },
            {
                id: 678,
                name: 'Ferizli',
                cityId: 53
            },
            {
                id: 679,
                name: 'Geyve',
                cityId: 53
            },
            {
                id: 680,
                name: 'Hendek',
                cityId: 53
            },
            {
                id: 681,
                name: 'Karapürçek',
                cityId: 53
            },
            {
                id: 682,
                name: 'Karasu',
                cityId: 53
            },
            {
                id: 683,
                name: 'Kaynarca',
                cityId: 53
            },
            {
                id: 684,
                name: 'Kocaali',
                cityId: 53
            },
            {
                id: 685,
                name: 'Pamukova',
                cityId: 53
            },
            {
                id: 686,
                name: 'Sapanca',
                cityId: 53
            },
            {
                id: 687,
                name: 'Söğütlü',
                cityId: 53
            },
            {
                id: 688,
                name: 'Taraklı',
                cityId: 53
            }
        ]
    },
    {
        id: 54,
        name: 'Samsun',
        districts: [
            {
                id: 689,
                name: 'İlkadım',
                cityId: 54
            },
            {
                id: 690,
                name: 'Atakum',
                cityId: 54
            },
            {
                id: 691,
                name: 'Canik',
                cityId: 54
            },
            {
                id: 692,
                name: 'Tekkeköy',
                cityId: 54
            },
            {
                id: 693,
                name: 'Alaçam',
                cityId: 54
            },
            {
                id: 694,
                name: 'Asarcık',
                cityId: 54
            },
            {
                id: 695,
                name: 'Ayvacık',
                cityId: 54
            },
            {
                id: 696,
                name: 'Bafra',
                cityId: 54
            },
            {
                id: 697,
                name: 'Çarşamba',
                cityId: 54
            },
            {
                id: 698,
                name: 'Havza',
                cityId: 54
            },
            {
                id: 699,
                name: 'Kavak',
                cityId: 54
            },
            {
                id: 700,
                name: 'Ladik',
                cityId: 54
            },
            {
                id: 701,
                name: 'Ondokuzmayıs',
                cityId: 54
            },
            {
                id: 702,
                name: 'Salıpazarı',
                cityId: 54
            },
            {
                id: 703,
                name: 'Terme',
                cityId: 54
            },
            {
                id: 704,
                name: 'Vezirköprü',
                cityId: 54
            },
            {
                id: 705,
                name: 'Yakakent',
                cityId: 54
            }
        ]
    },
    {
        id: 55,
        name: 'Siirt',
        districts: [
            {
                id: 706,
                name: 'Merkez',
                cityId: 55
            },
            {
                id: 707,
                name: 'Baykan',
                cityId: 55
            },
            {
                id: 708,
                name: 'Eruh',
                cityId: 55
            },
            {
                id: 709,
                name: 'Kurtalan',
                cityId: 55
            },
            {
                id: 710,
                name: 'Pervari',
                cityId: 55
            },
            {
                id: 711,
                name: 'Şirvan',
                cityId: 55
            },
            {
                id: 712,
                name: 'Tillo',
                cityId: 55
            }
        ]
    },
    {
        id: 56,
        name: 'Sinop',
        districts: [
            {
                id: 713,
                name: 'Merkez',
                cityId: 56
            },
            {
                id: 714,
                name: 'Ayancık',
                cityId: 56
            },
            {
                id: 715,
                name: 'Boyabat',
                cityId: 56
            },
            {
                id: 716,
                name: 'Dikmen',
                cityId: 56
            },
            {
                id: 717,
                name: 'Durağan',
                cityId: 56
            },
            {
                id: 718,
                name: 'Erfelek',
                cityId: 56
            },
            {
                id: 719,
                name: 'Gerze',
                cityId: 56
            },
            {
                id: 720,
                name: 'Saraydüzü',
                cityId: 56
            },
            {
                id: 721,
                name: 'Türkeli',
                cityId: 56
            }
        ]
    },
    {
        id: 57,
        name: 'Sivas',
        districts: [
            {
                id: 722,
                name: 'Merkez',
                cityId: 57
            },
            {
                id: 723,
                name: 'Akıncılar',
                cityId: 57
            },
            {
                id: 724,
                name: 'Altınyayla',
                cityId: 57
            },
            {
                id: 725,
                name: 'Divriği',
                cityId: 57
            },
            {
                id: 726,
                name: 'Doğanşar',
                cityId: 57
            },
            {
                id: 727,
                name: 'Gemerek',
                cityId: 57
            },
            {
                id: 728,
                name: 'Gölova',
                cityId: 57
            },
            {
                id: 729,
                name: 'Gürün',
                cityId: 57
            },
            {
                id: 730,
                name: 'Hafik',
                cityId: 57
            },
            {
                id: 731,
                name: 'İmranlı',
                cityId: 57
            },
            {
                id: 732,
                name: 'Kangal',
                cityId: 57
            },
            {
                id: 733,
                name: 'Koyulhisar',
                cityId: 57
            },
            {
                id: 734,
                name: 'Suşehri',
                cityId: 57
            },
            {
                id: 735,
                name: 'Şarkışla',
                cityId: 57
            },
            {
                id: 736,
                name: 'Ulaş',
                cityId: 57
            },
            {
                id: 737,
                name: 'Yıldızeli',
                cityId: 57
            },
            {
                id: 738,
                name: 'Zara',
                cityId: 57
            }
        ]
    },
    {
        id: 58,
        name: 'Tekirdağ',
        districts: [
            {
                id: 739,
                name: 'Süleymanpaşa',
                cityId: 58
            },
            {
                id: 740,
                name: 'Çerkezköy',
                cityId: 58
            },
            {
                id: 741,
                name: 'Çorlu',
                cityId: 58
            },
            {
                id: 742,
                name: 'Ergene',
                cityId: 58
            },
            {
                id: 743,
                name: 'Hayrabolu',
                cityId: 58
            },
            {
                id: 744,
                name: 'Malkara',
                cityId: 58
            },
            {
                id: 745,
                name: 'Marmaraereğlisi',
                cityId: 58
            },
            {
                id: 746,
                name: 'Muratlı',
                cityId: 58
            },
            {
                id: 747,
                name: 'Saray',
                cityId: 58
            },
            {
                id: 748,
                name: 'Şarköy',
                cityId: 58
            },
            {
                id: 749,
                name: 'Kapakli',
                cityId: 58
            }
        ]
    },
    {
        id: 59,
        name: 'Tokat',
        districts: [
            {
                id: 750,
                name: 'Merkez',
                cityId: 59
            },
            {
                id: 751,
                name: 'Almus',
                cityId: 59
            },
            {
                id: 752,
                name: 'Artova',
                cityId: 59
            },
            {
                id: 753,
                name: 'Başçiftlik',
                cityId: 59
            },
            {
                id: 754,
                name: 'Erbaa',
                cityId: 59
            },
            {
                id: 755,
                name: 'Niksar',
                cityId: 59
            },
            {
                id: 756,
                name: 'Pazar',
                cityId: 59
            },
            {
                id: 757,
                name: 'Reşadiye',
                cityId: 59
            },
            {
                id: 758,
                name: 'Sulusaray',
                cityId: 59
            },
            {
                id: 759,
                name: 'Turhal',
                cityId: 59
            },
            {
                id: 760,
                name: 'Yeşilyurt',
                cityId: 59
            },
            {
                id: 761,
                name: 'Zile',
                cityId: 59
            }
        ]
    },
    {
        id: 60,
        name: 'Trabzon',
        districts: [
            {
                id: 762,
                name: 'Ortahisar',
                cityId: 60
            },
            {
                id: 763,
                name: 'Akçaabat',
                cityId: 60
            },
            {
                id: 764,
                name: 'Araklı',
                cityId: 60
            },
            {
                id: 765,
                name: 'Arsin',
                cityId: 60
            },
            {
                id: 766,
                name: 'Beşikdüzü',
                cityId: 60
            },
            {
                id: 767,
                name: 'Çarşıbaşı',
                cityId: 60
            },
            {
                id: 768,
                name: 'Çaykara',
                cityId: 60
            },
            {
                id: 769,
                name: 'Dernekpazarı',
                cityId: 60
            },
            {
                id: 770,
                name: 'Düzköy',
                cityId: 60
            },
            {
                id: 771,
                name: 'Hayrat',
                cityId: 60
            },
            {
                id: 772,
                name: 'Köprübaşı',
                cityId: 60
            },
            {
                id: 773,
                name: 'Maçka',
                cityId: 60
            },
            {
                id: 774,
                name: 'Of',
                cityId: 60
            },
            {
                id: 775,
                name: 'Sürmene',
                cityId: 60
            },
            {
                id: 776,
                name: 'Şalpazarı',
                cityId: 60
            },
            {
                id: 777,
                name: 'Tonya',
                cityId: 60
            },
            {
                id: 778,
                name: 'Vakfıkebir',
                cityId: 60
            },
            {
                id: 779,
                name: 'Yomra',
                cityId: 60
            }
        ]
    },
    {
        id: 61,
        name: 'Tunceli',
        districts: [
            {
                id: 780,
                name: 'Merkez',
                cityId: 61
            },
            {
                id: 781,
                name: 'Çemişgezek',
                cityId: 61
            },
            {
                id: 782,
                name: 'Hozat',
                cityId: 61
            },
            {
                id: 783,
                name: 'Mazgirt',
                cityId: 61
            },
            {
                id: 784,
                name: 'Nazımiye',
                cityId: 61
            },
            {
                id: 785,
                name: 'Ovacık',
                cityId: 61
            },
            {
                id: 786,
                name: 'Pertek',
                cityId: 61
            },
            {
                id: 787,
                name: 'Pülümür',
                cityId: 61
            }
        ]
    },
    {
        id: 62,
        name: 'Şanlıurfa',
        districts: [
            {
                id: 788,
                name: 'Eyyübiye',
                cityId: 62
            },
            {
                id: 789,
                name: 'Haliliye',
                cityId: 62
            },
            {
                id: 790,
                name: 'Karaköprü',
                cityId: 62
            },
            {
                id: 791,
                name: 'Akçakale',
                cityId: 62
            },
            {
                id: 792,
                name: 'Birecik',
                cityId: 62
            },
            {
                id: 793,
                name: 'Bozova',
                cityId: 62
            },
            {
                id: 794,
                name: 'Ceylanpınar',
                cityId: 62
            },
            {
                id: 795,
                name: 'Halfeti',
                cityId: 62
            },
            {
                id: 796,
                name: 'Harran',
                cityId: 62
            },
            {
                id: 797,
                name: 'Hilvan',
                cityId: 62
            },
            {
                id: 798,
                name: 'Siverek',
                cityId: 62
            },
            {
                id: 799,
                name: 'Suruç',
                cityId: 62
            },
            {
                id: 800,
                name: 'Viranşehir',
                cityId: 62
            }
        ]
    },
    {
        id: 63,
        name: 'Uşak',
        districts: [
            {
                id: 801,
                name: 'Merkez',
                cityId: 63
            },
            {
                id: 802,
                name: 'Banaz',
                cityId: 63
            },
            {
                id: 803,
                name: 'Eşme',
                cityId: 63
            },
            {
                id: 804,
                name: 'Karahallı',
                cityId: 63
            },
            {
                id: 805,
                name: 'Sivaslı',
                cityId: 63
            },
            {
                id: 806,
                name: 'Ulubey',
                cityId: 63
            }
        ]
    },
    {
        id: 64,
        name: 'Van',
        districts: [
            {
                id: 807,
                name: 'İpekyolu',
                cityId: 64
            },
            {
                id: 808,
                name: 'Tuşba',
                cityId: 64
            },
            {
                id: 809,
                name: 'Bahçesaray',
                cityId: 64
            },
            {
                id: 810,
                name: 'Başkale',
                cityId: 64
            },
            {
                id: 811,
                name: 'Çaldıran',
                cityId: 64
            },
            {
                id: 812,
                name: 'Çatak',
                cityId: 64
            },
            {
                id: 813,
                name: 'Edremit',
                cityId: 64
            },
            {
                id: 814,
                name: 'Erciş',
                cityId: 64
            },
            {
                id: 815,
                name: 'Gevaş',
                cityId: 64
            },
            {
                id: 816,
                name: 'Gürpınar',
                cityId: 64
            },
            {
                id: 817,
                name: 'Muradiye',
                cityId: 64
            },
            {
                id: 818,
                name: 'Özalp',
                cityId: 64
            },
            {
                id: 819,
                name: 'Saray',
                cityId: 64
            }
        ]
    },
    {
        id: 65,
        name: 'Yozgat',
        districts: [
            {
                id: 820,
                name: 'Merkez',
                cityId: 65
            },
            {
                id: 821,
                name: 'Akdağmadeni',
                cityId: 65
            },
            {
                id: 822,
                name: 'Aydıncık',
                cityId: 65
            },
            {
                id: 823,
                name: 'Boğazlıyan',
                cityId: 65
            },
            {
                id: 824,
                name: 'Çandır',
                cityId: 65
            },
            {
                id: 825,
                name: 'Çayıralan',
                cityId: 65
            },
            {
                id: 826,
                name: 'Çekerek',
                cityId: 65
            },
            {
                id: 827,
                name: 'Kadışehri',
                cityId: 65
            },
            {
                id: 828,
                name: 'Saraykent',
                cityId: 65
            },
            {
                id: 829,
                name: 'Sarıkaya',
                cityId: 65
            },
            {
                id: 830,
                name: 'Sorgun',
                cityId: 65
            },
            {
                id: 831,
                name: 'Şefaatli',
                cityId: 65
            },
            {
                id: 832,
                name: 'Yerköy',
                cityId: 65
            },
            {
                id: 833,
                name: 'Yenifakılı',
                cityId: 65
            }
        ]
    },
    {
        id: 66,
        name: 'Zonguldak',
        districts: [
            {
                id: 834,
                name: 'Merkez',
                cityId: 66
            },
            {
                id: 835,
                name: 'Alaplı',
                cityId: 66
            },
            {
                id: 836,
                name: 'Çaycuma',
                cityId: 66
            },
            {
                id: 837,
                name: 'Devrek',
                cityId: 66
            },
            {
                id: 838,
                name: 'Gökçebey',
                cityId: 66
            },
            {
                id: 839,
                name: 'Kilimli',
                cityId: 66
            },
            {
                id: 840,
                name: 'Kozlu',
                cityId: 66
            },
            {
                id: 841,
                name: 'Kdz. Ereğli',
                cityId: 66
            }
        ]
    },
    {
        id: 67,
        name: 'Aksaray',
        districts: [
            {
                id: 842,
                name: 'Merkez',
                cityId: 67
            },
            {
                id: 843,
                name: 'Ağaçören',
                cityId: 67
            },
            {
                id: 844,
                name: 'Eskil',
                cityId: 67
            },
            {
                id: 845,
                name: 'Gülağaç',
                cityId: 67
            },
            {
                id: 846,
                name: 'Güzelyurt',
                cityId: 67
            },
            {
                id: 847,
                name: 'Ortaköy',
                cityId: 67
            },
            {
                id: 848,
                name: 'Sarıyahşi',
                cityId: 67
            }
        ]
    },
    {
        id: 68,
        name: 'Bayburt',
        districts: [
            {
                id: 849,
                name: 'Merkez',
                cityId: 68
            },
            {
                id: 850,
                name: 'Aydıntepe',
                cityId: 68
            },
            {
                id: 851,
                name: 'Demirözü',
                cityId: 68
            }
        ]
    },
    {
        id: 69,
        name: 'Karaman',
        districts: [
            {
                id: 852,
                name: 'Merkez',
                cityId: 69
            },
            {
                id: 853,
                name: 'Ayrancı',
                cityId: 69
            },
            {
                id: 854,
                name: 'Başyayla',
                cityId: 69
            },
            {
                id: 855,
                name: 'Ermenek',
                cityId: 69
            },
            {
                id: 856,
                name: 'Kazımkarabekir',
                cityId: 69
            },
            {
                id: 857,
                name: 'Sarıveliler',
                cityId: 69
            }
        ]
    },
    {
        id: 70,
        name: 'Kırıkkale',
        districts: [
            {
                id: 858,
                name: 'Merkez',
                cityId: 70
            },
            {
                id: 859,
                name: 'Bahşılı',
                cityId: 70
            },
            {
                id: 860,
                name: 'Balışeyh',
                cityId: 70
            },
            {
                id: 861,
                name: 'Çelebi',
                cityId: 70
            },
            {
                id: 862,
                name: 'Delice',
                cityId: 70
            },
            {
                id: 863,
                name: 'Karakeçili',
                cityId: 70
            },
            {
                id: 864,
                name: 'Keskin',
                cityId: 70
            },
            {
                id: 865,
                name: 'Sulakyurt',
                cityId: 70
            },
            {
                id: 866,
                name: 'Yahşihan',
                cityId: 70
            }
        ]
    },
    {
        id: 71,
        name: 'Batman',
        districts: [
            {
                id: 867,
                name: 'Merkez',
                cityId: 71
            },
            {
                id: 868,
                name: 'Beşiri',
                cityId: 71
            },
            {
                id: 869,
                name: 'Gercüş',
                cityId: 71
            },
            {
                id: 870,
                name: 'Hasankeyf',
                cityId: 71
            },
            {
                id: 871,
                name: 'Kozluk',
                cityId: 71
            },
            {
                id: 872,
                name: 'Sason',
                cityId: 71
            }
        ]
    },
    {
        id: 72,
        name: 'Şırnak',
        districts: [
            {
                id: 873,
                name: 'Merkez',
                cityId: 72
            },
            {
                id: 874,
                name: 'Beytüşşebap',
                cityId: 72
            },
            {
                id: 875,
                name: 'Cizre',
                cityId: 72
            },
            {
                id: 876,
                name: 'Güçlükonak',
                cityId: 72
            },
            {
                id: 877,
                name: 'İdil',
                cityId: 72
            },
            {
                id: 878,
                name: 'Silopi',
                cityId: 72
            },
            {
                id: 879,
                name: 'Uludere',
                cityId: 72
            }
        ]
    },
    {
        id: 73,
        name: 'Bartın',
        districts: [
            {
                id: 880,
                name: 'Merkez',
                cityId: 73
            },
            {
                id: 881,
                name: 'Amasra',
                cityId: 73
            },
            {
                id: 882,
                name: 'Kurucaşile',
                cityId: 73
            },
            {
                id: 883,
                name: 'Ulus',
                cityId: 73
            }
        ]
    },
    {
        id: 74,
        name: 'Ardahan',
        districts: [
            {
                id: 884,
                name: 'Merkez',
                cityId: 74
            },
            {
                id: 885,
                name: 'Çıldır',
                cityId: 74
            },
            {
                id: 886,
                name: 'Damal',
                cityId: 74
            },
            {
                id: 887,
                name: 'Göle',
                cityId: 74
            },
            {
                id: 888,
                name: 'Hanak',
                cityId: 74
            },
            {
                id: 889,
                name: 'Posof',
                cityId: 74
            }
        ]
    },
    {
        id: 75,
        name: 'Iğdır',
        districts: [
            {
                id: 890,
                name: 'Merkez',
                cityId: 75
            },
            {
                id: 891,
                name: 'Aralık',
                cityId: 75
            },
            {
                id: 892,
                name: 'Karakoyunlu',
                cityId: 75
            },
            {
                id: 893,
                name: 'Tuzluca',
                cityId: 75
            }
        ]
    },
    {
        id: 76,
        name: 'Yalova',
        districts: [
            {
                id: 894,
                name: 'Merkez',
                cityId: 76
            },
            {
                id: 895,
                name: 'Altınova',
                cityId: 76
            },
            {
                id: 896,
                name: 'Armutlu',
                cityId: 76
            },
            {
                id: 897,
                name: 'Çınarcık',
                cityId: 76
            },
            {
                id: 898,
                name: 'Çiftlikköy',
                cityId: 76
            },
            {
                id: 899,
                name: 'Termal',
                cityId: 76
            }
        ]
    },
    {
        id: 77,
        name: 'Karabük',
        districts: [
            {
                id: 900,
                name: 'Merkez',
                cityId: 77
            },
            {
                id: 901,
                name: 'Eflani',
                cityId: 77
            },
            {
                id: 902,
                name: 'Eskipazar',
                cityId: 77
            },
            {
                id: 903,
                name: 'Ovacık',
                cityId: 77
            },
            {
                id: 904,
                name: 'Safranbolu',
                cityId: 77
            },
            {
                id: 905,
                name: 'Yenice',
                cityId: 77
            }
        ]
    },
    {
        id: 78,
        name: 'Kilis',
        districts: [
            {
                id: 906,
                name: 'Merkez',
                cityId: 78
            },
            {
                id: 907,
                name: 'Elbeyli',
                cityId: 78
            },
            {
                id: 908,
                name: 'Musabeyli',
                cityId: 78
            },
            {
                id: 909,
                name: 'Polateli',
                cityId: 78
            }
        ]
    },
    {
        id: 79,
        name: 'Osmaniye',
        districts: [
            {
                id: 910,
                name: 'Merkez',
                cityId: 79
            },
            {
                id: 911,
                name: 'Bahçe',
                cityId: 79
            },
            {
                id: 912,
                name: 'Düziçi',
                cityId: 79
            },
            {
                id: 913,
                name: 'Hasanbeyli',
                cityId: 79
            },
            {
                id: 914,
                name: 'Kadirli',
                cityId: 79
            },
            {
                id: 915,
                name: 'Sumbas',
                cityId: 79
            },
            {
                id: 916,
                name: 'Toprakkale',
                cityId: 79
            }
        ]
    },
    {
        id: 80,
        name: 'Düzce',
        districts: [
            {
                id: 917,
                name: 'Merkez',
                cityId: 80
            },
            {
                id: 918,
                name: 'Akçakoca',
                cityId: 80
            },
            {
                id: 919,
                name: 'Cumayeri',
                cityId: 80
            },
            {
                id: 920,
                name: 'Çilimli',
                cityId: 80
            },
            {
                id: 921,
                name: 'Gölyaka',
                cityId: 80
            },
            {
                id: 922,
                name: 'Gümüşova',
                cityId: 80
            },
            {
                id: 923,
                name: 'Kaynaşlı',
                cityId: 80
            },
            {
                id: 924,
                name: 'Yığılca',
                cityId: 80
            }
        ]
    },
    {
        id: 81,
        name: 'Gümüşhane',
        districts: [
            {
                id: 925,
                name: 'Merkez',
                cityId: 81
            },
            {
                id: 926,
                name: 'Kelkit',
                cityId: 81
            },
            {
                id: 927,
                name: 'Köse',
                cityId: 81
            },
            {
                id: 928,
                name: 'Kürtün',
                cityId: 81
            },
            {
                id: 929,
                name: 'Şiran',
                cityId: 81
            },
            {
                id: 930,
                name: 'Torul',
                cityId: 81
            }
        ]
    }
];
const getDistrictsByCity = (cityId)=>{
    const city = turkishCities.find((c)=>c.id === cityId);
    return city ? city.districts : [];
};
const getCityNameById = (cityId)=>{
    const city = turkishCities.find((c)=>c.id === cityId);
    return city ? city.name : '';
};
const getDistrictNameById = (districtId)=>{
    for (const city of turkishCities){
        const district = city.districts.find((d)=>d.id === districtId);
        if (district) {
            return district.name;
        }
    }
    return '';
};
const getSortedCities = ()=>{
    return [
        ...turkishCities
    ].sort((a, b)=>a.name.localeCompare(b.name, 'tr'));
};
const getSortedDistricts = (cityId)=>{
    const districts = getDistrictsByCity(cityId);
    return districts.sort((a, b)=>a.name.localeCompare(b.name, 'tr'));
};
}}),
"[project]/src/app/dashboard/customers/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CustomersPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AuthContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tr$2d$cities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tr-cities.ts [app-ssr] (ecmascript)");
;
'use client';
;
;
;
;
;
// Lazy load heavy components
const DashboardLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/app/components/dashboard/DashboardLayout.tsx [app-ssr] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/components/dashboard/DashboardLayout.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                lineNumber: 10,
                columnNumber: 81
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/customers/page.tsx",
            lineNumber: 10,
            columnNumber: 18
        }, this),
    ssr: false
});
;
// İlk harfleri büyük yapan yardımcı fonksiyon
const capitalizeFirstLetters = (str)=>{
    if (!str) return '';
    return str.split(' ').map((word)=>word.charAt(0).toLocaleUpperCase('tr-TR') + word.slice(1).toLocaleLowerCase('tr-TR')).join(' ');
};
// Telefon numarasını formatlama fonksiyonu
const formatPhoneNumber = (phone)=>{
    // Tüm boşlukları ve özel karakterleri temizle
    let cleaned = phone.replace(/\D/g, '');
    // Eğer numara 0 ile başlıyorsa bu 0'ı kaldır
    if (cleaned.startsWith('0')) {
        cleaned = cleaned.substring(1);
    }
    // Telefon numarası 10 haneli standart Türkiye formatında olmalı
    if (cleaned.length >= 10) {
        // Sadece son 10 haneyi al
        cleaned = cleaned.substring(cleaned.length - 10);
        // Formatlama: 5XX XXX XX XX
        return '+90 ' + cleaned.substring(0, 3) + ' ' + cleaned.substring(3, 6) + ' ' + cleaned.substring(6, 8) + ' ' + cleaned.substring(8, 10);
    }
    // Eğer numara 10 haneden az ise olduğu gibi döndür
    return phone;
};
// Sayı formatlama fonksiyonu (binlik ayırıcı ile)
const formatNumber = (value)=>{
    if (value === '' || value === 0) return '';
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(numValue)) return '';
    return numValue.toLocaleString('tr-TR');
};
// Formatlanmış sayıyı parse etme fonksiyonu
const parseFormattedNumber = (value)=>{
    if (!value || value.trim() === '') return 0;
    // Binlik ayırıcıları kaldır ve sayıya çevir
    const cleanedValue = value.replace(/\./g, '').replace(/,/g, '.');
    return parseFloat(cleanedValue) || 0;
};
function CustomersPage() {
    const { user, loading: authLoading, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isEditModalOpen, setIsEditModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSaleModalOpen, setIsSaleModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentCustomer, setCurrentCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        phone: '',
        tcNo: '',
        birthDate: '',
        occupation: '',
        address: '',
        cityId: 0,
        districtId: 0
    });
    const [saleFormData, setSaleFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        model: '',
        chassisNo: '',
        engineNo: '',
        purchaseDate: '',
        salePrice: '',
        purchasePrice: '',
        contributionAmount: '',
        mtvCost: '',
        licensePlateCost: '',
        color: '',
        saleType: '',
        packageId: '',
        otvRate: '',
        kdvRate: '',
        extraAmount: ''
    });
    const [availableDistricts, setAvailableDistricts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sortedCities, setSortedCities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Marka, model ve paket state'leri
    const [brands, setBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [authorizedBrands, setAuthorizedBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedBrandId, setSelectedBrandId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedModelId, setSelectedModelId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [models, setModels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [packages, setPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // Müşteri verileri
    const [customers, setCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transferLoading, setTransferLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // API'den müşteri verilerini yükleme - useCallback ile optimize edildi
    const loadCustomers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (tcNoSearch)=>{
        try {
            setLoading(true);
            const url = tcNoSearch ? `/api/customers?tcNoSearch=${encodeURIComponent(tcNoSearch)}` : '/api/customers';
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                setCustomers(data);
            } else {
                console.error('Müşteriler yüklenirken hata oluştu:', response.statusText);
            }
        } catch (error) {
            console.error('Müşteri verileri yüklenirken hata oluştu:', error);
        } finally{
            setLoading(false);
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadCustomers();
        // Sıralanmış şehirleri ayarla
        setSortedCities((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tr$2d$cities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSortedCities"])());
    }, []);
    // TC Kimlik No ile arama - useCallback ile optimize edildi
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (searchTerm.trim()) {
            await loadCustomers(searchTerm.trim());
        } else {
            await loadCustomers();
        }
    }, [
        searchTerm,
        loadCustomers
    ]);
    // Arama inputu değiştiğinde - useCallback ile optimize edildi
    const handleSearchChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        setSearchTerm(e.target.value);
    }, []);
    // Enter tuşuna basıldığında arama yap - useCallback ile optimize edildi
    const handleSearchKeyPress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        if (e.key === 'Enter') {
            handleSearch();
        }
    }, [
        handleSearch
    ]);
    // Müşteri devralma fonksiyonu - useCallback ile optimize edildi
    const handleTransferCustomer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (customerId)=>{
        try {
            setTransferLoading(customerId);
            const response = await fetch('/api/customers/transfer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    customerId
                })
            });
            if (response.ok) {
                const result = await response.json();
                alert('Müşteri başarıyla devralındı!');
                // Müşteri listesini yenile
                if (searchTerm.trim()) {
                    await loadCustomers(searchTerm.trim());
                } else {
                    await loadCustomers();
                }
            } else {
                const error = await response.json();
                alert(error.error || 'Müşteri devralınırken bir hata oluştu');
            }
        } catch (error) {
            console.error('Müşteri devralma hatası:', error);
            alert('Müşteri devralınırken bir hata oluştu');
        } finally{
            setTransferLoading(null);
        }
    }, [
        searchTerm,
        loadCustomers
    ]);
    // Form verilerini güncelleme işlevi - useCallback ile optimize edildi
    const handleInputChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>{
        const { name, value } = e.target;
        // Telefon numarası için özel işlem
        if (name === 'phone') {
            // Sadece rakamları al
            const digits = value.replace(/\D/g, '');
            // Otomatik formatla (5XX XXX XX XX)
            let formattedValue = digits;
            if (digits.length > 0) {
                formattedValue = '';
                for(let i = 0; i < digits.length && i < 10; i++){
                    // Boşluk ekle (3, 6, 8. rakamlardan sonra)
                    if (i === 3 || i === 6 || i === 8) {
                        formattedValue += ' ';
                    }
                    formattedValue += digits[i];
                }
            }
            setFormData({
                ...formData,
                [name]: formattedValue
            });
        } else if (name === 'cityId') {
            const cityId = parseInt(value);
            setFormData({
                ...formData,
                cityId: cityId,
                districtId: 0
            });
            // Seçilen şehire ait ilçeleri getir
            if (cityId > 0) {
                setAvailableDistricts((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tr$2d$cities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSortedDistricts"])(cityId));
            } else {
                setAvailableDistricts([]);
            }
        } else {
            setFormData((prev)=>({
                    ...prev,
                    [name]: name === 'districtId' ? parseInt(value) : value
                }));
        }
    }, [
        formData
    ]);
    // Yeni müşteri ekleme işlevi - useCallback ile optimize edildi
    const handleAddCustomer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (e)=>{
        e.preventDefault();
        // Telefon numarasını +90 formatı ile kaydet
        const cleanedPhone = formData.phone.replace(/\s+/g, '');
        let formattedPhone = cleanedPhone;
        if (cleanedPhone.startsWith('0')) {
            formattedPhone = cleanedPhone.substring(1);
        }
        if (!formattedPhone.startsWith('+90')) {
            formattedPhone = '+90' + formattedPhone;
        }
        const customerData = {
            name: capitalizeFirstLetters(formData.name),
            email: formData.email.toLocaleLowerCase('tr-TR'),
            phone: formattedPhone,
            tcNo: formData.tcNo,
            birthDate: formData.birthDate,
            occupation: capitalizeFirstLetters(formData.occupation),
            address: capitalizeFirstLetters(formData.address),
            cityId: formData.cityId || undefined,
            districtId: formData.districtId || undefined
        };
        try {
            // Önce CSRF token'ı al
            const csrfResponse = await fetch('/api/csrf-token');
            if (!csrfResponse.ok) {
                throw new Error('CSRF token alınamadı');
            }
            const { csrfToken } = await csrfResponse.json();
            const response = await fetch('/api/customers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-csrf-token': csrfToken
                },
                body: JSON.stringify(customerData)
            });
            if (response.ok) {
                // Müşteri başarıyla eklendi, listeyi yenile
                await loadCustomers();
                // Modalı kapat ve formu sıfırla
                setIsModalOpen(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    tcNo: '',
                    birthDate: '',
                    occupation: '',
                    address: '',
                    cityId: 0,
                    districtId: 0
                });
                setAvailableDistricts([]);
            } else {
                const errorData = await response.json();
                alert(errorData.error || 'Müşteri eklenirken bir hata oluştu');
            }
        } catch (error) {
            console.error('Müşteri ekleme hatası:', error);
            alert('Müşteri eklenirken bir hata oluştu');
        }
    }, [
        formData,
        loadCustomers
    ]);
    // Müşteri düzenlemek için modalı açma işlevi
    const openEditModal = (customer)=>{
        setCurrentCustomer(customer);
        // Telefon numarasından +90 kısmını çıkar
        let phoneWithoutPrefix = customer.phone;
        if (phoneWithoutPrefix.startsWith('+90')) {
            phoneWithoutPrefix = phoneWithoutPrefix.substring(3);
        }
        // Telefonu formatla
        const formattedPhone = formatPhoneNumber(phoneWithoutPrefix);
        // İlçeleri yükle
        if (customer.cityId) {
            setAvailableDistricts((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tr$2d$cities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSortedDistricts"])(customer.cityId));
        }
        setFormData({
            name: customer.name,
            email: customer.email,
            phone: formattedPhone,
            tcNo: customer.tcNo || '',
            birthDate: customer.birthDate || '',
            occupation: customer.occupation || '',
            address: customer.address || '',
            cityId: customer.cityId || 0,
            districtId: customer.districtId || 0
        });
        setIsEditModalOpen(true);
    };
    // Düzenleme modalını kapatma işlevi
    const closeEditModal = ()=>{
        setIsEditModalOpen(false);
        setCurrentCustomer(null);
    };
    // Müşteri güncelleme işlevi
    const handleUpdateCustomer = async (e)=>{
        e.preventDefault();
        if (!currentCustomer) return;
        // Telefon numarasını +90 formatı ile kaydet
        const cleanedPhone = formData.phone.replace(/\s+/g, '');
        let formattedPhone = cleanedPhone;
        if (cleanedPhone.startsWith('0')) {
            formattedPhone = cleanedPhone.substring(1);
        }
        if (!formattedPhone.startsWith('+90')) {
            formattedPhone = '+90' + formattedPhone;
        }
        const customerData = {
            name: capitalizeFirstLetters(formData.name),
            email: formData.email.toLocaleLowerCase('tr-TR'),
            phone: formattedPhone,
            tcNo: formData.tcNo,
            birthDate: formData.birthDate,
            occupation: capitalizeFirstLetters(formData.occupation),
            address: capitalizeFirstLetters(formData.address),
            cityId: formData.cityId || undefined,
            districtId: formData.districtId || undefined
        };
        try {
            const response = await fetch(`/api/customers/${currentCustomer.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(customerData)
            });
            if (response.ok) {
                // Müşteri başarıyla güncellendi, listeyi yenile
                await loadCustomers();
                closeEditModal();
            } else {
                const errorData = await response.json();
                alert(errorData.error || 'Müşteri güncellenirken bir hata oluştu');
            }
        } catch (error) {
            console.error('Müşteri güncelleme hatası:', error);
            alert('Müşteri güncellenirken bir hata oluştu');
        }
    };
    // Müşteri silme işlevi
    const handleDeleteCustomer = async (customerId)=>{
        if (window.confirm('Bu müşteriyi silmek istediğinize emin misiniz?')) {
            try {
                const response = await fetch(`/api/customers/${customerId}`, {
                    method: 'DELETE'
                });
                if (response.ok) {
                    // Müşteri başarıyla silindi, listeyi yenile
                    await loadCustomers();
                } else {
                    const errorData = await response.json();
                    alert(errorData.error || 'Müşteri silinirken bir hata oluştu');
                }
            } catch (error) {
                console.error('Müşteri silme hatası:', error);
                alert('Müşteri silinirken bir hata oluştu');
            }
        }
    };
    // Modalı açma/kapama işlevleri
    const openModal = ()=>setIsModalOpen(true);
    const closeModal = ()=>setIsModalOpen(false);
    // Satış ekleme modalını aç
    const openSaleModal = (customer)=>{
        setCurrentCustomer(customer);
        setSaleFormData({
            model: '',
            chassisNo: '',
            engineNo: '',
            purchaseDate: new Date().toISOString().split('T')[0],
            salePrice: '',
            purchasePrice: '',
            contributionAmount: '',
            mtvCost: '',
            licensePlateCost: '',
            color: '',
            saleType: '',
            packageId: '',
            otvRate: '',
            kdvRate: '',
            extraAmount: ''
        });
        setSelectedModelId('');
        setPackages([]);
        setIsSaleModalOpen(true);
    };
    // Satış ekleme modalını kapat
    const closeSaleModal = ()=>{
        setIsSaleModalOpen(false);
        setCurrentCustomer(null);
        setSaleFormData({
            model: '',
            chassisNo: '',
            engineNo: '',
            purchaseDate: '',
            salePrice: '',
            purchasePrice: '',
            contributionAmount: '',
            mtvCost: '',
            licensePlateCost: '',
            color: '',
            saleType: '',
            packageId: '',
            otvRate: '',
            kdvRate: '',
            extraAmount: ''
        });
    };
    // Satış formu için input değişikliklerini yakala
    const handleSaleInputChange = (e)=>{
        const { name, value } = e.target;
        if (name === 'model') {
            setSelectedModelId(value);
            const selectedBrand = brands.find((brand)=>brand.id === selectedBrandId);
            if (selectedBrand) {
                const selectedModel = selectedBrand.models.find((model)=>model.id === value);
                if (selectedModel) {
                    setPackages(selectedModel.packages || []);
                    setSaleFormData({
                        ...saleFormData,
                        model: selectedModel.name,
                        packageId: ''
                    });
                }
            }
        } else if (name === 'packageId') {
            // Pakete ait MTV ve plaka masraflarını otomatik doldurma
            const selectedModel = models.find((model)=>model.id === selectedModelId);
            if (selectedModel && value) {
                const selectedPackage = selectedModel.packages?.find((pkg)=>pkg.id === value);
                if (selectedPackage) {
                    // MTV ve plaka masraflarını paketten al
                    setSaleFormData({
                        ...saleFormData,
                        packageId: value,
                        mtvCost: selectedPackage.mtvAmount ? selectedPackage.mtvAmount.toString() : '',
                        licensePlateCost: selectedPackage.plakaMasrafi ? selectedPackage.plakaMasrafi.toString() : ''
                    });
                    return;
                }
            }
            setSaleFormData({
                ...saleFormData,
                [name]: value
            });
        } else {
            // Sayısal alanlar için parseFormattedNumber kullan
            const numericalFields = [
                'salePrice',
                'purchasePrice',
                'contributionAmount',
                'mtvCost',
                'licensePlateCost'
            ];
            const processedValue = numericalFields.includes(name) ? parseFormattedNumber(value) : value;
            setSaleFormData({
                ...saleFormData,
                [name]: processedValue
            });
        }
    };
    // Yeni satış ekle
    const handleAddSale = async (e)=>{
        e.preventDefault();
        if (!currentCustomer) return;
        // Sayısal değerleri dönüştür
        const salePrice = parseFloat(saleFormData.salePrice);
        const purchasePrice = parseFloat(saleFormData.purchasePrice);
        const contributionAmount = saleFormData.contributionAmount ? parseFloat(saleFormData.contributionAmount) : 0;
        const mtvCost = parseFloat(saleFormData.mtvCost);
        const licensePlateCost = parseFloat(saleFormData.licensePlateCost);
        // Paket adını al (eğer paket seçilmişse)
        let packageName = '';
        if (saleFormData.packageId) {
            const selectedModel = models.find((model)=>model.id === selectedModelId);
            if (selectedModel) {
                const selectedPackage = selectedModel.packages?.find((pkg)=>pkg.id === saleFormData.packageId);
                if (selectedPackage) {
                    packageName = selectedPackage.name;
                }
            }
        }
        try {
            console.log('currentCustomer:', currentCustomer);
            console.log('currentCustomer full object:', JSON.stringify(currentCustomer, null, 2));
            if (!currentCustomer) {
                alert('Müşteri seçilmedi!');
                return;
            }
            const requestData = {
                customerId: currentCustomer.id,
                customerType: 'individual',
                model: saleFormData.model,
                chassisNo: saleFormData.chassisNo,
                engineNo: saleFormData.engineNo,
                purchaseDate: saleFormData.purchaseDate,
                salePrice,
                purchasePrice,
                contributionAmount,
                mtvCost,
                licensePlateCost,
                color: saleFormData.color,
                packageId: saleFormData.packageId || undefined,
                packageName: packageName || undefined
            };
            console.log('Gönderilecek veri:', requestData);
            // Önce CSRF token'ı al
            const csrfResponse = await fetch('/api/csrf-token');
            if (!csrfResponse.ok) {
                throw new Error('CSRF token alınamadı');
            }
            const { csrfToken } = await csrfResponse.json();
            // API'ye satış kaydını gönder
            const response = await fetch('/api/sales', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-csrf-token': csrfToken
                },
                body: JSON.stringify(requestData)
            });
            if (response.ok) {
                // Modalı kapat ve formu sıfırla
                closeSaleModal();
                // Başarılı mesajı göster
                alert(`${currentCustomer.name} için satış kaydı başarıyla oluşturuldu.`);
            } else {
                const errorData = await response.json();
                alert(`Satış kaydı oluşturulurken hata oluştu: ${errorData.error || 'Bilinmeyen hata'}`);
            }
        } catch (error) {
            console.error('Satış kaydı oluşturulurken hata oluştu:', error);
            alert('Satış kaydı oluşturulurken hata oluştu. Lütfen tekrar deneyin.');
        }
    };
    // Kullanıcı oturum açmamışsa login sayfasına yönlendir - useEffect kaldırıldı
    // useEffect(() => {
    //   console.log('Auth useEffect triggered:', { loading, user: !!user });
    //   if (!loading && !user) {
    //     console.log('Redirecting to login page');
    //     router.replace('/');
    //   }
    // }, [user, loading, router]);
    // Kullanıcının yetkili markalarını ve tüm markaları yüklemek için useEffect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const fetchUserBrandsAndModels = async ()=>{
            try {
                // Kullanıcının yetkili markalarını al
                const userResponse = await fetch('/api/users/me');
                if (userResponse.ok) {
                    const userData = await userResponse.json();
                    setAuthorizedBrands(userData.authorizedBrands || []);
                    // Yetkili markalar varsa ilk markayı seç
                    if (userData.authorizedBrands && userData.authorizedBrands.length > 0) {
                        const firstBrand = userData.authorizedBrands[0];
                        setSelectedBrandId(firstBrand.id);
                        // İlk markanın modellerini yükle
                        const brandResponse = await fetch('/api/brands');
                        if (brandResponse.ok) {
                            const allBrands = await brandResponse.json();
                            setBrands(allBrands);
                            const selectedBrand = allBrands.find((brand)=>brand.id === firstBrand.id);
                            if (selectedBrand) {
                                setModels(selectedBrand.models || []);
                            }
                        }
                    }
                } else {
                    console.error('Kullanıcı bilgileri yüklenemedi');
                }
            } catch (error) {
                console.error('Kullanıcı markaları getirilirken hata:', error);
            }
        };
        if (user) {
            fetchUserBrandsAndModels();
        }
    }, [
        user
    ]);
    // Yükleme durumunda yükleniyor göster
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                    lineNumber: 716,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "ml-3 text-lg",
                    children: "Yükleniyor..."
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                    lineNumber: 717,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/customers/page.tsx",
            lineNumber: 715,
            columnNumber: 7
        }, this);
    }
    // Kullanıcı yoksa boş sayfa döndür (useEffect zaten yönlendirme yapacak)
    if (!user) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardLayout, {
        username: user.name,
        onLogout: logout,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "Müşteriler"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                lineNumber: 731,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-gray-500",
                                children: "Tüm müşteri kayıtları"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                lineNumber: 732,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                        lineNumber: 730,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "TC Kimlik No ile ara...",
                                                                value: searchTerm,
                                                                onChange: handleSearchChange,
                                                                onKeyPress: handleSearchKeyPress,
                                                                className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md p-2 pl-10 text-gray-800"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 741,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "h-5 w-5 text-gray-400",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 751,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 750,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 749,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 740,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: handleSearch,
                                                        className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
                                                        children: "Ara"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 755,
                                                        columnNumber: 19
                                                    }, this),
                                                    searchTerm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>{
                                                            setSearchTerm('');
                                                            loadCustomers();
                                                        },
                                                        className: "inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                        children: "Temizle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 763,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                lineNumber: 739,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: openModal,
                                                className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "-ml-1 mr-2 h-5 w-5",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                            lineNumber: 781,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 780,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Yeni Müşteri"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                lineNumber: 775,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                        lineNumber: 738,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "min-w-full divide-y divide-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "bg-gray-50",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                scope: "col",
                                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                children: "Müşteri"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 790,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                scope: "col",
                                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                children: "İletişim"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 796,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                scope: "col",
                                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                children: "Meslek"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 802,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                scope: "col",
                                                                className: "relative px-6 py-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "sr-only",
                                                                    children: "Düzenle"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 809,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 808,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 789,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                    lineNumber: 788,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "bg-white divide-y divide-gray-200",
                                                    children: customers.map((customer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-gray-50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4 whitespace-nowrap",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex-shrink-0 h-10 w-10",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-indigo-600 font-medium",
                                                                                        children: customer.name.charAt(0)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 820,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 819,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 818,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "ml-4",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-sm font-medium text-gray-900",
                                                                                        children: customer.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 826,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    customer.tcNo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-xs text-gray-500",
                                                                                        children: [
                                                                                            "TC: ",
                                                                                            customer.tcNo
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 828,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 825,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 817,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 816,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4 whitespace-nowrap",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm text-gray-900",
                                                                            children: customer.email
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                            lineNumber: 834,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-sm text-gray-500",
                                                                            children: customer.phone
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                            lineNumber: 835,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        customer.cityId && customer.districtId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "text-xs text-gray-500 mt-1",
                                                                            children: [
                                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tr$2d$cities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCityNameById"])(customer.cityId),
                                                                                ", ",
                                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tr$2d$cities$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getDistrictNameById"])(customer.cityId, customer.districtId)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                            lineNumber: 837,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 833,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4 whitespace-nowrap",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm text-gray-900",
                                                                        children: customer.occupation || '-'
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 843,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 842,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4 whitespace-nowrap text-sm font-medium",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex space-x-2",
                                                                        children: customer.createdBy === user?.id ? // Kendi müşterisi - normal butonlar
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    className: "inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200",
                                                                                    onClick: ()=>openEditModal(customer),
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            className: "w-3 h-3 mr-1",
                                                                                            fill: "none",
                                                                                            stroke: "currentColor",
                                                                                            viewBox: "0 0 24 24",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round",
                                                                                                strokeWidth: 2,
                                                                                                d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                                lineNumber: 855,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                            lineNumber: 854,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        "Düzenle"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 850,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    className: `inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-200 ${authorizedBrands.length > 0 ? 'text-white bg-green-600 hover:bg-green-700' : 'text-gray-400 bg-gray-200 cursor-not-allowed'}`,
                                                                                    onClick: ()=>authorizedBrands.length > 0 && openSaleModal(customer),
                                                                                    disabled: authorizedBrands.length === 0,
                                                                                    title: authorizedBrands.length === 0 ? 'Satış yapabilmek için en az bir markaya yetkiniz olmalıdır' : 'Satış Ekle',
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            className: "w-3 h-3 mr-1",
                                                                                            fill: "none",
                                                                                            stroke: "currentColor",
                                                                                            viewBox: "0 0 24 24",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round",
                                                                                                strokeWidth: 2,
                                                                                                d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                                lineNumber: 870,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                            lineNumber: 869,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        "Satış Ekle"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 859,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    className: "inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200",
                                                                                    onClick: ()=>handleDeleteCustomer(customer.id),
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            className: "w-3 h-3 mr-1",
                                                                                            fill: "none",
                                                                                            stroke: "currentColor",
                                                                                            viewBox: "0 0 24 24",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round",
                                                                                                strokeWidth: 2,
                                                                                                d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                                lineNumber: 879,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                            lineNumber: 878,
                                                                                            columnNumber: 35
                                                                                        }, this),
                                                                                        "Sil"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 874,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true) : // Başka danışmanın müşterisi - devralma butonu
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    className: "text-orange-600 hover:text-orange-900 bg-orange-50 px-3 py-2 rounded-md flex items-center font-medium",
                                                                                    onClick: ()=>handleTransferCustomer(customer.id),
                                                                                    disabled: transferLoading === customer.id,
                                                                                    children: [
                                                                                        transferLoading === customer.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            className: "animate-spin h-4 w-4 mr-2",
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            fill: "none",
                                                                                            viewBox: "0 0 24 24",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                                    className: "opacity-25",
                                                                                                    cx: "12",
                                                                                                    cy: "12",
                                                                                                    r: "10",
                                                                                                    stroke: "currentColor",
                                                                                                    strokeWidth: "4"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                                    lineNumber: 894,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                    className: "opacity-75",
                                                                                                    fill: "currentColor",
                                                                                                    d: "m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                                    lineNumber: 895,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                            lineNumber: 893,
                                                                                            columnNumber: 37
                                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            className: "h-4 w-4 mr-2",
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            fill: "none",
                                                                                            viewBox: "0 0 24 24",
                                                                                            stroke: "currentColor",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                strokeLinecap: "round",
                                                                                                strokeLinejoin: "round",
                                                                                                strokeWidth: 2,
                                                                                                d: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                                lineNumber: 899,
                                                                                                columnNumber: 39
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                            lineNumber: 898,
                                                                                            columnNumber: 37
                                                                                        }, this),
                                                                                        transferLoading === customer.id ? 'Devralınıyor...' : 'Müşteriyi Devral'
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 887,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "text-xs text-gray-500 mt-1",
                                                                                    children: "Başka danışman tarafından kaydedildi"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 904,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 846,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 845,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, customer.id, true, {
                                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                            lineNumber: 815,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                    lineNumber: 813,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                            lineNumber: 787,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                        lineNumber: 786,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                lineNumber: 737,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                            lineNumber: 736,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                        lineNumber: 735,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                lineNumber: 729,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed inset-0 transition-opacity",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gray-500 opacity-75"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                lineNumber: 926,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                            lineNumber: 925,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                            "aria-hidden": "true",
                            children: "​"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                            lineNumber: 929,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white px-6 pt-6 pb-6 sm:p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:flex sm:items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-12 sm:w-12",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-7 w-7 text-indigo-600",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 4v16m8-8H4"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                    lineNumber: 938,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                lineNumber: 937,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                            lineNumber: 936,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 text-center sm:mt-0 sm:ml-5 sm:text-left w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl leading-6 font-medium text-gray-900 mb-4",
                                                    children: "Yeni Müşteri Ekle"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                    lineNumber: 942,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        onSubmit: handleAddCustomer,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "name",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "Ad Soyad ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 948,
                                                                                        columnNumber: 40
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 947,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    name: "name",
                                                                                    id: "name",
                                                                                    required: true,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800",
                                                                                    value: formData.name,
                                                                                    onChange: handleInputChange
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 951,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 950,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 946,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "tcNo",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "TC Kimlik No ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 965,
                                                                                        columnNumber: 44
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 964,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    name: "tcNo",
                                                                                    id: "tcNo",
                                                                                    required: true,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800",
                                                                                    value: formData.tcNo,
                                                                                    onChange: handleInputChange
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 968,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 967,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 963,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "email",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: "E-posta"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 981,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "email",
                                                                                    name: "email",
                                                                                    id: "email",
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800",
                                                                                    value: formData.email,
                                                                                    onChange: handleInputChange
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 985,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 984,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 980,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "phone",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "Telefon ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 998,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 997,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2 relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-gray-100 rounded-l-md px-2 text-gray-500 border-r border-gray-300",
                                                                                        children: "+90"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 1001,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "tel",
                                                                                        name: "phone",
                                                                                        id: "phone",
                                                                                        required: true,
                                                                                        placeholder: "5XX XXX XX XX",
                                                                                        className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 pl-16 text-gray-800",
                                                                                        value: formData.phone,
                                                                                        onChange: handleInputChange,
                                                                                        maxLength: 14
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 1004,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1000,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mt-1 text-xs text-gray-500",
                                                                                children: "Örnek: 532 123 45 67 (sadece rakamları girebilirsiniz)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1016,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 996,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "birthDate",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "Doğum Tarihi ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 1021,
                                                                                        columnNumber: 44
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1020,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "date",
                                                                                    name: "birthDate",
                                                                                    id: "birthDate",
                                                                                    required: true,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800",
                                                                                    value: formData.birthDate,
                                                                                    onChange: handleInputChange
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 1024,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1023,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1019,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "occupation",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: "Meslek"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1037,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    name: "occupation",
                                                                                    id: "occupation",
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800",
                                                                                    value: formData.occupation,
                                                                                    onChange: handleInputChange
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 1041,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1040,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1036,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "cityId",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "İl ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 1054,
                                                                                        columnNumber: 34
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1053,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                    name: "cityId",
                                                                                    id: "cityId",
                                                                                    required: true,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950",
                                                                                    value: formData.cityId,
                                                                                    onChange: handleInputChange,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: 0,
                                                                                            children: "İl Seçiniz"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                            lineNumber: 1065,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        sortedCities.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: city.id,
                                                                                                children: city.name
                                                                                            }, city.id, false, {
                                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                                lineNumber: 1067,
                                                                                                columnNumber: 35
                                                                                            }, this))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 1057,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1056,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1052,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "districtId",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "İlçe ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 1075,
                                                                                        columnNumber: 36
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1074,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                    name: "districtId",
                                                                                    id: "districtId",
                                                                                    required: true,
                                                                                    disabled: formData.cityId === 0,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800 disabled:bg-gray-100 disabled:text-gray-500",
                                                                                    value: formData.districtId,
                                                                                    onChange: handleInputChange,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: 0,
                                                                                            children: "İlçe Seçiniz"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                            lineNumber: 1087,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        availableDistricts.map((district)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: district.id,
                                                                                                children: district.name
                                                                                            }, district.id, false, {
                                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                                lineNumber: 1089,
                                                                                                columnNumber: 35
                                                                                            }, this))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 1078,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1077,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1073,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "sm:col-span-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "address",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "Açık Adres ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 1097,
                                                                                        columnNumber: 42
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1096,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                    name: "address",
                                                                                    id: "address",
                                                                                    rows: 4,
                                                                                    required: true,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950",
                                                                                    value: formData.address,
                                                                                    onChange: handleInputChange
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 1100,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1099,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1095,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 945,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8 sm:flex sm:flex-row-reverse",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "submit",
                                                                        className: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-3 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm",
                                                                        children: "Kaydet"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1114,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: closeModal,
                                                                        className: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-400 shadow-sm px-6 py-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm",
                                                                        children: "İptal"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1120,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1113,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 944,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                    lineNumber: 943,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                            lineNumber: 941,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                    lineNumber: 935,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                lineNumber: 934,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                            lineNumber: 933,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                    lineNumber: 924,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                lineNumber: 923,
                columnNumber: 9
            }, this),
            isEditModalOpen && currentCustomer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed inset-0 transition-opacity",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gray-500 opacity-75"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                lineNumber: 1143,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                            lineNumber: 1142,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                            "aria-hidden": "true",
                            children: "​"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                            lineNumber: 1146,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white px-6 pt-6 pb-6 sm:p-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:flex sm:items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 sm:mx-0 sm:h-12 sm:w-12",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-7 w-7 text-indigo-600",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                "aria-hidden": "true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                    lineNumber: 1155,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                lineNumber: 1154,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                            lineNumber: 1153,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 text-center sm:mt-0 sm:ml-5 sm:text-left w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl leading-6 font-medium text-gray-900 mb-4",
                                                    children: "Müşteri Düzenle"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                    lineNumber: 1159,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        onSubmit: handleUpdateCustomer,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 gap-y-6 gap-x-6 sm:grid-cols-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "edit-name",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "Ad Soyad ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 1165,
                                                                                        columnNumber: 40
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1164,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    name: "name",
                                                                                    id: "edit-name",
                                                                                    required: true,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950",
                                                                                    value: formData.name,
                                                                                    onChange: handleInputChange
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 1168,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1167,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1163,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "edit-tcNo",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "TC Kimlik No ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 1182,
                                                                                        columnNumber: 44
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1181,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    name: "tcNo",
                                                                                    id: "edit-tcNo",
                                                                                    required: true,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950",
                                                                                    value: formData.tcNo,
                                                                                    onChange: handleInputChange
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 1185,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1184,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1180,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "edit-email",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: "E-posta"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1198,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "email",
                                                                                    name: "email",
                                                                                    id: "edit-email",
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950",
                                                                                    value: formData.email,
                                                                                    onChange: handleInputChange
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 1202,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1201,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1197,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "edit-phone",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "Telefon ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 1215,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1214,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2 relative",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-gray-100 rounded-l-md px-2 text-gray-500 border-r border-gray-300",
                                                                                        children: "+90"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 1218,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                        type: "tel",
                                                                                        name: "phone",
                                                                                        id: "edit-phone",
                                                                                        required: true,
                                                                                        placeholder: "5XX XXX XX XX",
                                                                                        className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 pl-16 text-gray-800",
                                                                                        value: formData.phone,
                                                                                        onChange: handleInputChange,
                                                                                        maxLength: 14
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 1221,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1217,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mt-1 text-xs text-gray-500",
                                                                                children: "Örnek: 532 123 45 67 (sadece rakamları girebilirsiniz)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1233,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1213,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "edit-birthDate",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "Doğum Tarihi ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 1238,
                                                                                        columnNumber: 44
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1237,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "date",
                                                                                    name: "birthDate",
                                                                                    id: "edit-birthDate",
                                                                                    required: true,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950",
                                                                                    value: formData.birthDate,
                                                                                    onChange: handleInputChange
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 1241,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1240,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1236,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "edit-occupation",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: "Meslek"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1254,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    name: "occupation",
                                                                                    id: "edit-occupation",
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950",
                                                                                    value: formData.occupation,
                                                                                    onChange: handleInputChange
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 1258,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1257,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1253,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "edit-cityId",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "İl ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 1271,
                                                                                        columnNumber: 34
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1270,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                    name: "cityId",
                                                                                    id: "edit-cityId",
                                                                                    required: true,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950",
                                                                                    value: formData.cityId,
                                                                                    onChange: handleInputChange,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: 0,
                                                                                            children: "İl Seçiniz"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                            lineNumber: 1282,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        sortedCities.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: city.id,
                                                                                                children: city.name
                                                                                            }, city.id, false, {
                                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                                lineNumber: 1284,
                                                                                                columnNumber: 35
                                                                                            }, this))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 1274,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1273,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1269,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "edit-districtId",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "İlçe ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 1292,
                                                                                        columnNumber: 36
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1291,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                    name: "districtId",
                                                                                    id: "edit-districtId",
                                                                                    required: true,
                                                                                    disabled: formData.cityId === 0,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800 disabled:bg-gray-100 disabled:text-gray-500",
                                                                                    value: formData.districtId,
                                                                                    onChange: handleInputChange,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: 0,
                                                                                            children: "İlçe Seçiniz"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                            lineNumber: 1304,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        availableDistricts.map((district)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: district.id,
                                                                                                children: district.name
                                                                                            }, district.id, false, {
                                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                                lineNumber: 1306,
                                                                                                columnNumber: 35
                                                                                            }, this))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 1295,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1294,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1290,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "sm:col-span-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "edit-address",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "Açık Adres ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                        lineNumber: 1314,
                                                                                        columnNumber: 42
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1313,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-2",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                                    name: "address",
                                                                                    id: "edit-address",
                                                                                    rows: 4,
                                                                                    required: true,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950",
                                                                                    value: formData.address,
                                                                                    onChange: handleInputChange
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                    lineNumber: 1317,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1316,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1312,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1162,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8 sm:flex sm:flex-row-reverse",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "submit",
                                                                        className: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-3 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm",
                                                                        children: "Kaydet"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1331,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: closeEditModal,
                                                                        className: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-400 shadow-sm px-6 py-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm",
                                                                        children: "İptal"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1337,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1330,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1161,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                    lineNumber: 1160,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                            lineNumber: 1158,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                    lineNumber: 1152,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                lineNumber: 1151,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                            lineNumber: 1150,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                    lineNumber: 1141,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                lineNumber: 1140,
                columnNumber: 9
            }, this),
            isSaleModalOpen && currentCustomer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed inset-0 transition-opacity",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gray-500 opacity-75"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                lineNumber: 1360,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                            lineNumber: 1359,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                            "aria-hidden": "true",
                            children: "​"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                            lineNumber: 1363,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white px-6 pt-6 pb-6 sm:p-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sm:flex sm:items-start mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-12 sm:w-12",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "h-7 w-7 text-green-600",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    "aria-hidden": "true",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M5 13l4 4L19 7"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1372,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                    lineNumber: 1371,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                lineNumber: 1370,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg leading-6 font-medium text-gray-900",
                                                        children: "Satış Ekle"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1376,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500",
                                                            children: [
                                                                currentCustomer.name,
                                                                " için yeni satış ekleyin."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                            lineNumber: 1380,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1379,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                lineNumber: 1375,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                        lineNumber: 1369,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        onSubmit: handleAddSale,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-6",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                className: "block text-sm font-medium text-gray-700 mb-3",
                                                                children: [
                                                                    "Satış Tipi ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1392,
                                                                        columnNumber: 36
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1391,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex space-x-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                id: "perakende",
                                                                                name: "saleType",
                                                                                type: "radio",
                                                                                value: "perakende",
                                                                                checked: saleFormData.saleType === 'perakende',
                                                                                onChange: (e)=>setSaleFormData({
                                                                                        ...saleFormData,
                                                                                        saleType: e.target.value
                                                                                    }),
                                                                                className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300",
                                                                                required: true
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1396,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "perakende",
                                                                                className: "ml-2 block text-sm text-gray-900",
                                                                                children: "Perakende"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1406,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1395,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                id: "filo",
                                                                                name: "saleType",
                                                                                type: "radio",
                                                                                value: "filo",
                                                                                checked: saleFormData.saleType === 'filo',
                                                                                onChange: (e)=>setSaleFormData({
                                                                                        ...saleFormData,
                                                                                        saleType: e.target.value
                                                                                    }),
                                                                                className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1411,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "filo",
                                                                                className: "ml-2 block text-sm text-gray-900",
                                                                                children: "Filo"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1420,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1410,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                id: "otv-muaf",
                                                                                name: "saleType",
                                                                                type: "radio",
                                                                                value: "otv-muaf",
                                                                                checked: saleFormData.saleType === 'otv-muaf',
                                                                                onChange: (e)=>setSaleFormData({
                                                                                        ...saleFormData,
                                                                                        saleType: e.target.value
                                                                                    }),
                                                                                className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1425,
                                                                                columnNumber: 27
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "otv-muaf",
                                                                                className: "ml-2 block text-sm text-gray-900",
                                                                                children: "ÖTV Muaf"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1434,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1424,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1394,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1390,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "brand",
                                                                className: "block text-sm font-medium text-gray-700",
                                                                children: [
                                                                    "Marka ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1444,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1443,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    id: "brand",
                                                                    name: "brand",
                                                                    value: selectedBrandId,
                                                                    onChange: (e)=>{
                                                                        const brandId = e.target.value;
                                                                        setSelectedBrandId(brandId);
                                                                        // Seçili markaya ait modelleri getir
                                                                        const brand = brands.find((b)=>b.id === brandId);
                                                                        if (brand) {
                                                                            setModels(brand.models || []);
                                                                            setSelectedModelId('');
                                                                            setPackages([]);
                                                                            setSaleFormData({
                                                                                ...saleFormData,
                                                                                model: '',
                                                                                packageId: ''
                                                                            });
                                                                        }
                                                                    },
                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3",
                                                                    required: true,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Marka Seçin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                            lineNumber: 1471,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        authorizedBrands.length > 0 ? authorizedBrands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: brand.id,
                                                                                children: brand.name
                                                                            }, brand.id, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1474,
                                                                                columnNumber: 31
                                                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            disabled: true,
                                                                            children: "Yetkili marka bulunmuyor"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                            lineNumber: 1477,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 1447,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1446,
                                                                columnNumber: 23
                                                            }, this),
                                                            authorizedBrands.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "mt-1 text-xs text-red-500",
                                                                children: "Satış yapabilmek için en az bir markaya yetkiniz olmalıdır."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1482,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1442,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "model",
                                                                className: "block text-sm font-medium text-gray-700",
                                                                children: [
                                                                    "Model ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1491,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1490,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    id: "model",
                                                                    name: "model",
                                                                    value: selectedModelId,
                                                                    onChange: handleSaleInputChange,
                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3",
                                                                    required: true,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Model Seçin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                            lineNumber: 1502,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        models.map((model)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: model.id,
                                                                                children: model.name
                                                                            }, model.id, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1504,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 1494,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1493,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1489,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "packageId",
                                                                className: "block text-sm font-medium text-gray-700",
                                                                children: [
                                                                    "Paket ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1513,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1512,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                    id: "packageId",
                                                                    name: "packageId",
                                                                    value: saleFormData.packageId,
                                                                    onChange: handleSaleInputChange,
                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3",
                                                                    required: true,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                            value: "",
                                                                            children: "Paket Seçin"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                            lineNumber: 1524,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        packages.map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: pkg.id,
                                                                                children: pkg.name
                                                                            }, pkg.id, false, {
                                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                                lineNumber: 1526,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 1516,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1515,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1511,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "chassisNo",
                                                                className: "block text-sm font-medium text-gray-700",
                                                                children: [
                                                                    "Şase No ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1535,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1534,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "chassisNo",
                                                                    id: "chassisNo",
                                                                    required: true,
                                                                    value: saleFormData.chassisNo,
                                                                    onChange: handleSaleInputChange,
                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 1538,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1537,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1533,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "engineNo",
                                                                className: "block text-sm font-medium text-gray-700",
                                                                children: [
                                                                    "Motor No ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1553,
                                                                        columnNumber: 34
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1552,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "engineNo",
                                                                    id: "engineNo",
                                                                    required: true,
                                                                    value: saleFormData.engineNo,
                                                                    onChange: handleSaleInputChange,
                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 1556,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1555,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1551,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "color",
                                                                className: "block text-sm font-medium text-gray-700",
                                                                children: [
                                                                    "Renk ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1571,
                                                                        columnNumber: 30
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1570,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "color",
                                                                    id: "color",
                                                                    required: true,
                                                                    value: saleFormData.color,
                                                                    onChange: handleSaleInputChange,
                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 1574,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1573,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1569,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "purchaseDate",
                                                                className: "block text-sm font-medium text-gray-700",
                                                                children: "Alış Tarihi"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1588,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "date",
                                                                    name: "purchaseDate",
                                                                    id: "purchaseDate",
                                                                    value: saleFormData.purchaseDate,
                                                                    onChange: handleSaleInputChange,
                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 1592,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1591,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1587,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "salePrice",
                                                                className: "block text-sm font-medium text-gray-700",
                                                                children: [
                                                                    "Araç Satış Fiyatı (₺) ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1606,
                                                                        columnNumber: 47
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1605,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "salePrice",
                                                                    id: "salePrice",
                                                                    required: true,
                                                                    value: saleFormData.salePrice === '' || saleFormData.salePrice === '0' ? '' : formatNumber(parseFloat(saleFormData.salePrice.toString()) || 0),
                                                                    onChange: handleSaleInputChange,
                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 1609,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1608,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1604,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "extraAmount",
                                                                className: "block text-sm font-medium text-gray-700",
                                                                children: "Ekstra Tutar (₺)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1623,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "extraAmount",
                                                                    id: "extraAmount",
                                                                    value: saleFormData.extraAmount === '' || saleFormData.extraAmount === '0' ? '' : formatNumber(parseFloat(saleFormData.extraAmount.toString()) || 0),
                                                                    onChange: handleSaleInputChange,
                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 1627,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1626,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1622,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "purchasePrice",
                                                                className: "block text-sm font-medium text-gray-700",
                                                                children: [
                                                                    "Alış Fiyatı (₺) ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1641,
                                                                        columnNumber: 41
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1640,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "purchasePrice",
                                                                    id: "purchasePrice",
                                                                    required: true,
                                                                    value: saleFormData.purchasePrice === '' || saleFormData.purchasePrice === '0' ? '' : formatNumber(parseFloat(saleFormData.purchasePrice.toString()) || 0),
                                                                    onChange: handleSaleInputChange,
                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 1644,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1643,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1639,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "contributionAmount",
                                                                className: "block text-sm font-medium text-gray-700",
                                                                children: "Katkı Tutarı (₺)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1658,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "contributionAmount",
                                                                    id: "contributionAmount",
                                                                    value: saleFormData.contributionAmount === '' || saleFormData.contributionAmount === '0' ? '' : formatNumber(parseFloat(saleFormData.contributionAmount.toString()) || 0),
                                                                    onChange: handleSaleInputChange,
                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 1662,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1661,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1657,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "otvRate",
                                                                className: "block text-sm font-medium text-gray-700",
                                                                children: "ÖTV Oranı (%)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1675,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    name: "otvRate",
                                                                    id: "otvRate",
                                                                    min: "0",
                                                                    max: "100",
                                                                    step: "0.01",
                                                                    value: saleFormData.otvRate || '',
                                                                    onChange: handleSaleInputChange,
                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 1679,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1678,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1674,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "kdvRate",
                                                                className: "block text-sm font-medium text-gray-700",
                                                                children: "KDV Oranı (%)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1695,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    name: "kdvRate",
                                                                    id: "kdvRate",
                                                                    min: "0",
                                                                    max: "100",
                                                                    step: "0.01",
                                                                    value: saleFormData.kdvRate || '',
                                                                    onChange: handleSaleInputChange,
                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 1699,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1698,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1694,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "mtvCost",
                                                                className: "block text-sm font-medium text-gray-700",
                                                                children: [
                                                                    "MTV (₺) ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1716,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1715,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "mtvCost",
                                                                    id: "mtvCost",
                                                                    required: true,
                                                                    readOnly: true,
                                                                    value: saleFormData.mtvCost === '' || saleFormData.mtvCost === '0' ? '' : formatNumber(parseFloat(saleFormData.mtvCost.toString()) || 0),
                                                                    onChange: handleSaleInputChange,
                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800 bg-gray-50"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 1719,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1718,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1714,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:col-span-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "licensePlateCost",
                                                                className: "block text-sm font-medium text-gray-700",
                                                                children: [
                                                                    "Plaka Masrafı (₺) ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-red-500",
                                                                        children: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                        lineNumber: 1735,
                                                                        columnNumber: 43
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1734,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "text",
                                                                    name: "licensePlateCost",
                                                                    id: "licensePlateCost",
                                                                    required: true,
                                                                    readOnly: true,
                                                                    value: saleFormData.licensePlateCost === '' || saleFormData.licensePlateCost === '0' ? '' : formatNumber(parseFloat(saleFormData.licensePlateCost.toString()) || 0),
                                                                    onChange: handleSaleInputChange,
                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-gray-50"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                    lineNumber: 1738,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                                lineNumber: 1737,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1733,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                lineNumber: 1388,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8 sm:flex sm:flex-row-reverse",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "submit",
                                                        className: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-3 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm",
                                                        children: "Satışı Kaydet"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1753,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: closeSaleModal,
                                                        className: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-400 shadow-sm px-6 py-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm",
                                                        children: "İptal"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                        lineNumber: 1759,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                                lineNumber: 1752,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                        lineNumber: 1387,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                                lineNumber: 1368,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/customers/page.tsx",
                            lineNumber: 1367,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/customers/page.tsx",
                    lineNumber: 1358,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/customers/page.tsx",
                lineNumber: 1357,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/customers/page.tsx",
        lineNumber: 728,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=_66084fdf._.js.map