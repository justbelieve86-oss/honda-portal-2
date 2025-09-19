(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_ce39b4de._.js", {

"[project]/lib/tr-cities.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard/corporate-customers/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CorporateCustomersPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tr$2d$cities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tr-cities.ts [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Lazy load heavy components
const DashboardLayout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/app/components/dashboard/DashboardLayout.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/components/dashboard/DashboardLayout.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                lineNumber: 10,
                columnNumber: 81
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
            lineNumber: 10,
            columnNumber: 18
        }, this),
    ssr: false
});
_c = DashboardLayout;
;
// Telefon numarası formatlama fonksiyonu
const formatPhoneNumber = (phone)=>{
    // Sadece rakamları al
    const cleaned = phone.replace(/\D/g, '');
    // Türkiye telefon numarası formatı: +90 (5XX) XXX XX XX
    if (cleaned.length === 11 && cleaned.startsWith('0')) {
        const withoutZero = cleaned.substring(1);
        return `+90 (${withoutZero.substring(0, 3)}) ${withoutZero.substring(3, 6)} ${withoutZero.substring(6, 8)} ${withoutZero.substring(8, 10)}`;
    } else if (cleaned.length === 10) {
        return `+90 (${cleaned.substring(0, 3)}) ${cleaned.substring(3, 6)} ${cleaned.substring(6, 8)} ${cleaned.substring(8, 10)}`;
    } else if (cleaned.length === 13 && cleaned.startsWith('90')) {
        const withoutCountryCode = cleaned.substring(2);
        return `+90 (${withoutCountryCode.substring(0, 3)}) ${withoutCountryCode.substring(3, 6)} ${withoutCountryCode.substring(6, 8)} ${withoutCountryCode.substring(8, 10)}`;
    }
    return phone; // Formatlanamayan numaraları olduğu gibi döndür
};
// Tarih formatlama fonksiyonu
const formatDateToTurkish = (dateString)=>{
    return new Date(dateString).toLocaleDateString('tr-TR');
};
// Türkçe metin formatlama fonksiyonu
const formatTurkishText = (text)=>{
    return text.toLowerCase().split(' ').map((word)=>{
        if (word.length === 0) return word;
        const firstChar = word.charAt(0);
        const restOfWord = word.slice(1);
        return firstChar.toLocaleUpperCase('tr-TR') + restOfWord;
    }).join(' ');
};
// Sayı formatlama fonksiyonu
const formatNumber = (value)=>{
    if (value === '' || value === 0) return '';
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(numValue)) return '';
    return numValue.toLocaleString('tr-TR');
};
// Formatlanmış sayıyı parse etme fonksiyonu
const parseFormattedNumber = (value)=>{
    const cleanedValue = value.replace(/\./g, '').replace(',', '.');
    const parsed = parseFloat(cleanedValue);
    return isNaN(parsed) ? 0 : parsed;
};
function CorporateCustomersPage() {
    _s();
    const { user, loading, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSaleModalOpen, setIsSaleModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentCustomer, setCurrentCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [corporateCustomers, setCorporateCustomers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sortedCities, setSortedCities] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [availableDistricts, setAvailableDistricts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        taxNumber: '',
        taxOffice: '',
        email: '',
        phone: '',
        address: '',
        cityId: 0,
        districtId: 0,
        authorizedPerson: ''
    });
    const [saleFormData, setSaleFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        model: '',
        chassisNo: '',
        engineNo: '',
        color: '',
        saleType: '',
        purchaseDate: '',
        salePrice: '',
        purchasePrice: '',
        contributionAmount: '',
        mtvCost: '',
        licensePlateCost: '',
        packageId: '',
        otvRate: '',
        kdvRate: '',
        extraAmount: ''
    });
    const [editMode, setEditMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingCustomerId, setEditingCustomerId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Marka ve model state'leri
    const [brands, setBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [authorizedBrands, setAuthorizedBrands] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedBrandId, setSelectedBrandId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [selectedModelId, setSelectedModelId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [models, setModels] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [packages, setPackages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Arama state'leri
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [searchMessage, setSearchMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isCustomerSearchModalOpen, setIsCustomerSearchModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [transferLoading, setTransferLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Kurumsal müşterileri yükleme fonksiyonu
    const loadCorporateCustomers = async ()=>{
        try {
            const response = await fetch('/api/corporate-customers', {
                headers: {
                    'x-user-id': user?.id?.toString() || ''
                }
            });
            if (response.ok) {
                const data = await response.json();
                setCorporateCustomers(data);
            }
        } catch (error) {
            console.error('Kurumsal müşteriler yüklenirken hata:', error);
        }
    };
    // Müşteri arama fonksiyonu
    const handleCustomerSearch = async ()=>{
        if (!searchTerm.trim()) {
            setSearchMessage('Lütfen vergi numarası giriniz.');
            return;
        }
        setIsSearching(true);
        setSearchMessage('');
        setSearchResults([]);
        try {
            const response = await fetch(`/api/corporate-customers?search=${encodeURIComponent(searchTerm.trim())}`, {
                headers: {
                    'x-user-id': user?.id?.toString() || ''
                }
            });
            if (response.ok) {
                const data = await response.json();
                if (data.length > 0) {
                    setSearchResults(data);
                    setSearchMessage(`${data.length} kurumsal müşteri bulundu.`);
                } else {
                    setSearchMessage('Bu vergi numarası ile kurumsal müşteri bulunamadı.');
                }
            } else {
                setSearchMessage('Arama sırasında bir hata oluştu.');
            }
        } catch (error) {
            console.error('Arama hatası:', error);
            setSearchMessage('Arama sırasında bir hata oluştu.');
        } finally{
            setIsSearching(false);
        }
    };
    // Müşteri devralma fonksiyonu
    const handleTransferCustomer = async (customerId)=>{
        if (!user?.id) {
            alert('Kullanıcı bilgisi bulunamadı.');
            return;
        }
        setTransferLoading(customerId);
        try {
            const response = await fetch('/api/corporate-customers/transfer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-user-id': user.id.toString()
                },
                body: JSON.stringify({
                    customerId
                })
            });
            if (response.ok) {
                setSearchMessage('Kurumsal müşteri başarıyla devralındı!');
                // Arama sonuçlarını güncelle
                setSearchResults((prev)=>prev.map((customer)=>customer.id === customerId ? {
                            ...customer,
                            createdBy: user.id.toString()
                        } : customer));
                // Ana listeyi yeniden yükle
                await loadCorporateCustomers();
            } else {
                const errorData = await response.json();
                setSearchMessage(`Hata: ${errorData.error || 'Kurumsal müşteri devralınamadı.'}`);
            }
        } catch (error) {
            console.error('Devralma hatası:', error);
            setSearchMessage('Devralma sırasında bir hata oluştu.');
        } finally{
            setTransferLoading(null);
        }
    };
    // Arama temizleme fonksiyonu
    const handleClearSearch = ()=>{
        setSearchTerm('');
        setSearchResults([]);
        setSearchMessage('');
    };
    // Arama modalını açma fonksiyonu
    const openCustomerSearchModal = ()=>{
        setIsCustomerSearchModalOpen(true);
        setSearchTerm('');
        setSearchResults([]);
        setSearchMessage('');
    };
    // Arama modalını kapatma fonksiyonu
    const closeCustomerSearchModal = ()=>{
        setIsCustomerSearchModalOpen(false);
        setSearchTerm('');
        setSearchResults([]);
        setSearchMessage('');
    };
    // Müşteri silme fonksiyonu
    const handleDeleteCustomer = async (customerId)=>{
        if (!confirm('Bu kurumsal müşteriyi silmek istediğinizden emin misiniz?')) {
            return;
        }
        try {
            const response = await fetch(`/api/corporate-customers/${customerId}`, {
                method: 'DELETE',
                headers: {
                    'x-user-id': user?.id?.toString() || ''
                }
            });
            if (response.ok) {
                await loadCorporateCustomers();
                alert('Kurumsal müşteri başarıyla silindi.');
            } else {
                alert('Kurumsal müşteri silinirken bir hata oluştu.');
            }
        } catch (error) {
            console.error('Silme hatası:', error);
            alert('Kurumsal müşteri silinirken bir hata oluştu.');
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CorporateCustomersPage.useEffect": ()=>{
            if (user) {
                loadCorporateCustomers();
                fetchUserBrandsAndModels();
            }
        }
    }["CorporateCustomersPage.useEffect"], [
        user
    ]);
    // Kullanıcının yetkili markalarını ve tüm markaları yüklemek için useEffect
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
    // localStorage'dan form verilerini yükle
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CorporateCustomersPage.useEffect": ()=>{
            const savedSaleData = localStorage.getItem('corporateCustomerSaleForm');
            const savedModalState = localStorage.getItem('corporateCustomerModalOpen');
            const savedCustomer = localStorage.getItem('corporateCustomerCurrentCustomer');
            const savedBrandId = localStorage.getItem('corporateCustomerSelectedBrandId');
            const savedModelId = localStorage.getItem('corporateCustomerSelectedModelId');
            const savedModels = localStorage.getItem('corporateCustomerModels');
            const savedPackages = localStorage.getItem('corporateCustomerPackages');
            if (savedSaleData && savedModalState === 'true' && savedCustomer) {
                try {
                    setSaleFormData(JSON.parse(savedSaleData));
                    setCurrentCustomer(JSON.parse(savedCustomer));
                    setIsSaleModalOpen(true);
                    if (savedBrandId) setSelectedBrandId(savedBrandId);
                    if (savedModelId) setSelectedModelId(savedModelId);
                    if (savedModels) setModels(JSON.parse(savedModels));
                    if (savedPackages) setPackages(JSON.parse(savedPackages));
                } catch (error) {
                    console.error('localStorage verilerini yükleme hatası:', error);
                    // Hatalı verileri temizle
                    localStorage.removeItem('corporateCustomerSaleForm');
                    localStorage.removeItem('corporateCustomerModalOpen');
                    localStorage.removeItem('corporateCustomerCurrentCustomer');
                    localStorage.removeItem('corporateCustomerSelectedBrandId');
                    localStorage.removeItem('corporateCustomerSelectedModelId');
                    localStorage.removeItem('corporateCustomerModels');
                    localStorage.removeItem('corporateCustomerPackages');
                }
            }
        }
    }["CorporateCustomersPage.useEffect"], []);
    // Form input değişikliklerini işleme
    const handleInputChange = (e)=>{
        const { name, value } = e.target;
        if (name === 'phone') {
            // Telefon numarası için sadece rakam ve + işareti kabul et
            const cleanedValue = value.replace(/[^0-9+]/g, '');
            setFormData((prev)=>({
                    ...prev,
                    [name]: cleanedValue
                }));
        } else if (name === 'name' || name === 'authorizedPerson') {
            // İsim alanları için Türkçe karakter desteği
            setFormData((prev)=>({
                    ...prev,
                    [name]: value
                }));
        } else if (name === 'taxNumber') {
            // Vergi numarası için sadece rakam
            const cleanedValue = value.replace(/[^0-9]/g, '');
            if (cleanedValue.length <= 10) {
                setFormData((prev)=>({
                        ...prev,
                        [name]: cleanedValue
                    }));
            }
        } else if (name === 'cityId') {
            const cityId = parseInt(value);
            setFormData((prev)=>({
                    ...prev,
                    cityId,
                    districtId: 0
                }));
            // Seçilen şehre göre ilçeleri güncelle
            if (cityId > 0) {
                const districts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tr$2d$cities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistrictsByCity"])(cityId);
                const sortedDistricts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tr$2d$cities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSortedDistricts"])(cityId);
                setAvailableDistricts(sortedDistricts);
            } else {
                setAvailableDistricts([]);
            }
        } else if (name === 'districtId') {
            const districtId = parseInt(value);
            setFormData((prev)=>({
                    ...prev,
                    districtId
                }));
        } else {
            setFormData((prev)=>({
                    ...prev,
                    [name]: value
                }));
        }
    };
    // Modal açma fonksiyonu
    const openModal = ()=>{
        setIsModalOpen(true);
        setEditMode(false);
        setEditingCustomerId(null);
        setFormData({
            name: '',
            taxNumber: '',
            taxOffice: '',
            email: '',
            phone: '',
            address: '',
            cityId: 0,
            districtId: 0,
            authorizedPerson: ''
        });
        setAvailableDistricts([]);
    };
    const closeModal = ()=>{
        setIsModalOpen(false);
        setEditMode(false);
        setEditingCustomerId(null);
        setFormData({
            name: '',
            taxNumber: '',
            taxOffice: '',
            email: '',
            phone: '',
            address: '',
            cityId: 0,
            districtId: 0,
            authorizedPerson: ''
        });
        setAvailableDistricts([]);
    };
    // Satış modalını açma fonksiyonu
    const openSaleModal = (customer)=>{
        setCurrentCustomer(customer);
        setIsSaleModalOpen(true);
        const initialFormData = {
            model: '',
            chassisNo: '',
            engineNo: '',
            color: '',
            saleType: '',
            purchaseDate: '',
            salePrice: '',
            purchasePrice: '',
            contributionAmount: '',
            mtvCost: '',
            licensePlateCost: '',
            packageId: '',
            otvRate: '',
            kdvRate: '',
            extraAmount: ''
        };
        setSaleFormData(initialFormData);
        // localStorage'a kaydet
        localStorage.setItem('corporateCustomerSaleForm', JSON.stringify(initialFormData));
        localStorage.setItem('corporateCustomerModalOpen', 'true');
        localStorage.setItem('corporateCustomerCurrentCustomer', JSON.stringify(customer));
    };
    const closeSaleModal = ()=>{
        setIsSaleModalOpen(false);
        setCurrentCustomer(null);
        // Form verilerini sıfırla
        setSaleFormData({
            model: '',
            chassisNo: '',
            engineNo: '',
            color: '',
            saleType: '',
            purchaseDate: '',
            salePrice: '',
            purchasePrice: '',
            contributionAmount: '',
            mtvCost: '',
            licensePlateCost: '',
            packageId: '',
            otvRate: '',
            kdvRate: '',
            extraAmount: ''
        });
        // Seçim state'lerini sıfırla
        setSelectedBrandId('');
        setSelectedModelId('');
        setModels([]);
        setPackages([]);
        // localStorage'ı temizle
        localStorage.removeItem('corporateCustomerSaleForm');
        localStorage.removeItem('corporateCustomerModalOpen');
        localStorage.removeItem('corporateCustomerCurrentCustomer');
        localStorage.removeItem('corporateCustomerSelectedBrandId');
        localStorage.removeItem('corporateCustomerSelectedModelId');
        localStorage.removeItem('corporateCustomerModels');
        localStorage.removeItem('corporateCustomerPackages');
    };
    // Satış form input değişikliklerini işleme
    const handleSaleInputChange = (e)=>{
        const { name, value } = e.target;
        if (name === 'brandId') {
            setSelectedBrandId(value);
            setSelectedModelId('');
            const updatedFormData = {
                ...saleFormData,
                model: '',
                packageId: ''
            };
            setSaleFormData(updatedFormData);
            // localStorage'a kaydet
            localStorage.setItem('corporateCustomerSaleForm', JSON.stringify(updatedFormData));
            localStorage.setItem('corporateCustomerSelectedBrandId', value);
            localStorage.removeItem('corporateCustomerSelectedModelId');
            localStorage.removeItem('corporateCustomerModels');
            localStorage.removeItem('corporateCustomerPackages');
            // Seçilen markaya göre modelleri yükle
            if (value) {
                fetch(`/api/models?brandId=${value}`).then((res)=>res.json()).then((data)=>{
                    setModels(data);
                    localStorage.setItem('corporateCustomerModels', JSON.stringify(data));
                }).catch((err)=>console.error('Model yükleme hatası:', err));
            } else {
                setModels([]);
            }
        } else if (name === 'modelId') {
            setSelectedModelId(value);
            const selectedModel = models.find((model)=>model.id === value);
            const updatedFormData = {
                ...saleFormData,
                model: selectedModel ? selectedModel.name : '',
                packageId: ''
            };
            setSaleFormData(updatedFormData);
            // localStorage'a kaydet
            localStorage.setItem('corporateCustomerSaleForm', JSON.stringify(updatedFormData));
            localStorage.setItem('corporateCustomerSelectedModelId', value);
            localStorage.removeItem('corporateCustomerPackages');
            // Seçilen modele göre paketleri yükle
            if (value) {
                fetch(`/api/packages?modelId=${value}`).then((res)=>res.json()).then((data)=>{
                    setPackages(data);
                    localStorage.setItem('corporateCustomerPackages', JSON.stringify(data));
                }).catch((err)=>console.error('Paket yükleme hatası:', err));
            } else {
                setPackages([]);
            }
        } else if (name === 'packageId') {
            // Pakete ait MTV ve plaka masraflarını otomatik doldurma
            const selectedModel = models.find((model)=>model.id === selectedModelId);
            let updatedFormData;
            if (selectedModel && value) {
                const selectedPackage = selectedModel.packages?.find((pkg)=>pkg.id === value);
                if (selectedPackage) {
                    // MTV ve plaka masraflarını paketten al
                    updatedFormData = {
                        ...saleFormData,
                        packageId: value,
                        mtvCost: selectedPackage.mtvAmount ? selectedPackage.mtvAmount.toString() : '',
                        licensePlateCost: selectedPackage.plakaMasrafi ? selectedPackage.plakaMasrafi.toString() : ''
                    };
                    setSaleFormData(updatedFormData);
                    localStorage.setItem('corporateCustomerSaleForm', JSON.stringify(updatedFormData));
                    return;
                }
            }
            updatedFormData = {
                ...saleFormData,
                [name]: value
            };
            setSaleFormData(updatedFormData);
            localStorage.setItem('corporateCustomerSaleForm', JSON.stringify(updatedFormData));
        } else if (name === 'purchaseDate') {
            // Tarih değerini doğrudan state'e kaydet
            const updatedFormData = {
                ...saleFormData,
                [name]: value
            };
            setSaleFormData(updatedFormData);
            localStorage.setItem('corporateCustomerSaleForm', JSON.stringify(updatedFormData));
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
            const updatedFormData = {
                ...saleFormData,
                [name]: processedValue
            };
            setSaleFormData(updatedFormData);
            localStorage.setItem('corporateCustomerSaleForm', JSON.stringify(updatedFormData));
        }
    };
    // Satış ekleme fonksiyonu
    const handleAddSale = (e)=>{
        e.preventDefault();
        if (!currentCustomer) return;
        // Paket adını al (eğer paket seçilmişse)
        let packageName = '';
        if (saleFormData.packageId) {
            const selectedModel = models.find((model)=>model.id === selectedModelId);
            if (selectedModel) {
                const selectedPackage = packages.find((pkg)=>pkg.id === saleFormData.packageId);
                if (selectedPackage) {
                    packageName = selectedPackage.name;
                }
            }
        }
        const saleData = {
            customerId: currentCustomer.id,
            model: saleFormData.model,
            chassisNo: saleFormData.chassisNo,
            engineNo: saleFormData.engineNo,
            color: saleFormData.color,
            purchaseDate: saleFormData.purchaseDate,
            salePrice: parseFloat(saleFormData.salePrice) || 0,
            purchasePrice: parseFloat(saleFormData.purchasePrice) || 0,
            contributionAmount: parseFloat(saleFormData.contributionAmount) || 0,
            mtvCost: parseFloat(saleFormData.mtvCost) || 0,
            licensePlateCost: parseFloat(saleFormData.licensePlateCost) || 0,
            packageId: saleFormData.packageId || null,
            packageName: packageName || null,
            customerType: 'corporate' // Kurumsal müşteri olduğunu belirt
        };
        // Önce CSRF token'ı al
        fetch('/api/csrf-token').then((response)=>{
            if (!response.ok) {
                throw new Error('CSRF token alınamadı');
            }
            return response.json();
        }).then(({ csrfToken })=>{
            return fetch('/api/sales', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-user-id': user?.id?.toString() || '',
                    'x-csrf-token': csrfToken
                },
                body: JSON.stringify(saleData)
            });
        }).then((response)=>{
            if (response.ok) {
                alert('Satış başarıyla eklendi!');
                closeSaleModal();
                loadCorporateCustomers(); // Müşteri listesini yenile
            } else {
                response.json().then((data)=>{
                    alert(`Hata: ${data.error || 'Satış eklenirken bir hata oluştu.'}`);
                }).catch(()=>{
                    alert('Satış eklenirken bir hata oluştu.');
                });
            }
        }).catch((error)=>{
            console.error('Satış ekleme hatası:', error);
            alert('Satış eklenirken bir hata oluştu.');
        });
    };
    // Müşteri düzenleme fonksiyonu
    const handleEditCustomer = (customer)=>{
        setEditMode(true);
        setEditingCustomerId(customer.id);
        setFormData({
            name: customer.name,
            taxNumber: customer.taxNumber,
            taxOffice: customer.taxOffice,
            email: customer.email,
            phone: customer.phone,
            address: customer.address,
            cityId: customer.cityId,
            districtId: customer.districtId,
            authorizedPerson: customer.authorizedPerson
        });
        // İlçeleri yükle
        if (customer.cityId > 0) {
            const districts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tr$2d$cities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistrictsByCity"])(customer.cityId);
            const sortedDistricts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tr$2d$cities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSortedDistricts"])(customer.cityId);
            setAvailableDistricts(sortedDistricts);
        }
        setIsModalOpen(true);
    };
    const handleSaveCustomer = async (e)=>{
        e.preventDefault();
        // Form validasyonu
        if (!formData.name.trim()) {
            alert('Firma adı zorunludur.');
            return;
        }
        if (!formData.taxNumber.trim()) {
            alert('Vergi numarası zorunludur.');
            return;
        }
        if (formData.taxNumber.length !== 10) {
            alert('Vergi numarası 10 haneli olmalıdır.');
            return;
        }
        if (!formData.taxOffice.trim()) {
            alert('Vergi dairesi zorunludur.');
            return;
        }
        if (!formData.phone.trim()) {
            alert('Telefon numarası zorunludur.');
            return;
        }
        const customerData = {
            name: formatTurkishText(formData.name.trim()),
            taxNumber: formData.taxNumber.trim(),
            taxOffice: formatTurkishText(formData.taxOffice.trim()),
            email: formData.email.trim() || '',
            phone: formData.phone.trim(),
            address: formData.address.trim(),
            cityId: formData.cityId,
            districtId: formData.districtId,
            authorizedPerson: formatTurkishText(formData.authorizedPerson.trim())
        };
        try {
            // Önce CSRF token'ı al
            const csrfResponse = await fetch('/api/csrf-token');
            if (!csrfResponse.ok) {
                throw new Error('CSRF token alınamadı');
            }
            const { csrfToken } = await csrfResponse.json();
            const url = editMode ? `/api/corporate-customers/${editingCustomerId}` : '/api/corporate-customers';
            const method = editMode ? 'PUT' : 'POST';
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'x-user-id': user?.id?.toString() || '',
                    'x-csrf-token': csrfToken
                },
                body: JSON.stringify(customerData)
            });
            if (response.ok) {
                alert(editMode ? 'Kurumsal müşteri başarıyla güncellendi!' : 'Kurumsal müşteri başarıyla eklendi!');
                closeModal();
                await loadCorporateCustomers();
            } else {
                const errorData = await response.json();
                if (response.status === 400 && errorData.error?.includes('Vergi numarası')) {
                    alert('Bu vergi numarası zaten kayıtlı. Lütfen farklı bir vergi numarası giriniz.');
                } else {
                    alert(`Hata: ${errorData.error || 'Kurumsal müşteri kaydedilirken bir hata oluştu.'}`);
                }
            }
        } catch (error) {
            console.error('Kurumsal müşteri kaydetme hatası:', error);
            alert('Kurumsal müşteri kaydedilirken bir hata oluştu.');
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CorporateCustomersPage.useEffect": ()=>{
            if (!loading && !user) {
                router.push('/login');
            }
        }
    }["CorporateCustomersPage.useEffect"], [
        user,
        loading,
        router
    ]);
    // Şehirleri yükle
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CorporateCustomersPage.useEffect": ()=>{
            const cities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tr$2d$cities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSortedCities"])();
            setSortedCities(cities);
            // Markaları yükle
            fetch('/api/brands').then({
                "CorporateCustomersPage.useEffect": (res)=>res.json()
            }["CorporateCustomersPage.useEffect"]).then({
                "CorporateCustomersPage.useEffect": (data)=>setBrands(data)
            }["CorporateCustomersPage.useEffect"]).catch({
                "CorporateCustomersPage.useEffect": (err)=>console.error('Marka yükleme hatası:', err)
            }["CorporateCustomersPage.useEffect"]);
        }
    }["CorporateCustomersPage.useEffect"], []);
    // Yükleniyor durumu
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                    lineNumber: 823,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "ml-3 text-lg",
                    children: "Yükleniyor..."
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                    lineNumber: 824,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
            lineNumber: 822,
            columnNumber: 7
        }, this);
    }
    // Kullanıcı yoksa boş sayfa döndür (useEffect zaten yönlendirme yapacak)
    if (!user) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DashboardLayout, {
        username: user.name,
        onLogout: logout,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-2xl font-bold text-gray-900",
                                children: "Kurumsal Müşteriler"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                lineNumber: 838,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm text-gray-500",
                                children: "Tüm kurumsal müşteri kayıtları"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                lineNumber: 839,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                        lineNumber: 837,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex space-x-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "relative",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                placeholder: "Kurumsal müşteri ara...",
                                                                className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md p-2 pl-10 text-gray-800"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 848,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "h-5 w-5 text-gray-400",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    fill: "none",
                                                                    viewBox: "0 0 24 24",
                                                                    stroke: "currentColor",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: 2,
                                                                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 855,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                    lineNumber: 854,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 853,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                        lineNumber: 847,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: openCustomerSearchModal,
                                                        className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "-ml-1 mr-2 h-5 w-5",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                stroke: "currentColor",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                    lineNumber: 865,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 864,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Vergi No ile Ara"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                        lineNumber: 859,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                lineNumber: 846,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: openModal,
                                                className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "-ml-1 mr-2 h-5 w-5",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        stroke: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                            lineNumber: 876,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                        lineNumber: 875,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Kurumsal Müşteri Ekle"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                lineNumber: 870,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                        lineNumber: 845,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "shadow overflow-hidden border-b border-gray-200 sm:rounded-lg overflow-x-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "min-w-full divide-y divide-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "bg-gray-50",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                scope: "col",
                                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                children: "Firma"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 885,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                scope: "col",
                                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                children: "Vergi Bilgileri"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 891,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                scope: "col",
                                                                className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                                children: "İletişim"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 897,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                scope: "col",
                                                                className: "relative px-6 py-3",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "sr-only",
                                                                    children: "Düzenle"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                    lineNumber: 904,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 903,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                        lineNumber: 884,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                    lineNumber: 883,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "bg-white divide-y divide-gray-200",
                                                    children: corporateCustomers.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            colSpan: 4,
                                                            className: "px-6 py-4 text-center text-sm text-gray-500",
                                                            children: 'Henüz kurumsal müşteri kaydı bulunmuyor. Yeni kurumsal müşteri eklemek için "Kurumsal Müşteri Ekle" butonunu kullanabilirsiniz.'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                            lineNumber: 911,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                        lineNumber: 910,
                                                        columnNumber: 23
                                                    }, this) : corporateCustomers.map((customer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            className: "hover:bg-gray-50",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex-shrink-0 h-10 w-10",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-sm font-medium text-indigo-800",
                                                                                        children: customer.name.charAt(0).toUpperCase()
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 922,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 921,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 920,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "ml-4 min-w-0 flex-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-sm font-medium text-gray-900 break-words overflow-wrap-anywhere max-w-48",
                                                                                        children: customer.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 928,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    customer.authorizedPerson && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-xs text-gray-700 mt-1 italic",
                                                                                        children: [
                                                                                            "Yetkili: ",
                                                                                            customer.authorizedPerson
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 932,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    customer.cityId && customer.districtId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "text-xs text-gray-500 mt-1",
                                                                                        children: [
                                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tr$2d$cities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCityNameById"])(customer.cityId),
                                                                                            ", ",
                                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tr$2d$cities$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDistrictNameById"])(customer.cityId, customer.districtId)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 937,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 927,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 919,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                    lineNumber: 918,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4 whitespace-nowrap",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm text-gray-900",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: [
                                                                                    "VN: ",
                                                                                    customer.taxNumber
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 946,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-gray-500 mt-1",
                                                                                children: customer.taxOffice
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 947,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 945,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                    lineNumber: 944,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4 whitespace-nowrap",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "text-sm text-gray-900",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                children: formatPhoneNumber(customer.phone)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 954,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            customer.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-xs text-gray-500 mt-1",
                                                                                children: customer.email
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 956,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 953,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                    lineNumber: 952,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    className: "px-6 py-4 whitespace-nowrap text-sm font-medium",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex space-x-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleEditCustomer(customer),
                                                                                className: "inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors duration-200",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        className: "w-3 h-3 mr-1",
                                                                                        fill: "none",
                                                                                        stroke: "currentColor",
                                                                                        viewBox: "0 0 24 24",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                            strokeLinecap: "round",
                                                                                            strokeLinejoin: "round",
                                                                                            strokeWidth: 2,
                                                                                            d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                            lineNumber: 969,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 968,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    "Düzenle"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 964,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>openSaleModal(customer),
                                                                                className: "inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-colors duration-200",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        className: "w-3 h-3 mr-1",
                                                                                        fill: "none",
                                                                                        stroke: "currentColor",
                                                                                        viewBox: "0 0 24 24",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                            strokeLinecap: "round",
                                                                                            strokeLinejoin: "round",
                                                                                            strokeWidth: 2,
                                                                                            d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                            lineNumber: 978,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 977,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    "Satış Ekle"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 973,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                onClick: ()=>handleDeleteCustomer(customer.id),
                                                                                className: "inline-flex items-center px-3 py-1.5 text-xs font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors duration-200",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                        className: "w-3 h-3 mr-1",
                                                                                        fill: "none",
                                                                                        stroke: "currentColor",
                                                                                        viewBox: "0 0 24 24",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                            strokeLinecap: "round",
                                                                                            strokeLinejoin: "round",
                                                                                            strokeWidth: 2,
                                                                                            d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                            lineNumber: 987,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 986,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    "Sil"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 982,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 963,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                    lineNumber: 962,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, customer.id, true, {
                                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                            lineNumber: 917,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                    lineNumber: 908,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                            lineNumber: 882,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                        lineNumber: 881,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                lineNumber: 844,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                            lineNumber: 843,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                        lineNumber: 842,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                lineNumber: 836,
                columnNumber: 7
            }, this),
            isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "h-6 w-6 text-indigo-600",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                            lineNumber: 1012,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                        lineNumber: 1011,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                    lineNumber: 1010,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg leading-6 font-medium text-gray-900",
                                            children: editMode ? 'Kurumsal Müşteri Düzenle' : 'Kurumsal Müşteri Ekle'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                            lineNumber: 1016,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                onSubmit: handleSaveCustomer,
                                                className: "space-y-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "name",
                                                                        className: "block text-sm font-medium text-gray-700",
                                                                        children: "Firma Adı *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1023,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        id: "name",
                                                                        name: "name",
                                                                        value: formData.name,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        className: "mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md px-3 py-2 text-gray-800"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1026,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 1022,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "taxNumber",
                                                                        className: "block text-sm font-medium text-gray-700",
                                                                        children: "Vergi Numarası *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1037,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        id: "taxNumber",
                                                                        name: "taxNumber",
                                                                        value: formData.taxNumber,
                                                                        onChange: handleInputChange,
                                                                        maxLength: 10,
                                                                        required: true,
                                                                        className: "mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 text-gray-950"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1040,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 1036,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "taxOffice",
                                                                        className: "block text-sm font-medium text-gray-700",
                                                                        children: "Vergi Dairesi *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1052,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        id: "taxOffice",
                                                                        name: "taxOffice",
                                                                        value: formData.taxOffice,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        className: "mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 text-gray-950"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1055,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 1051,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "authorizedPerson",
                                                                        className: "block text-sm font-medium text-gray-700",
                                                                        children: "Yetkili Kişi"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1066,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "text",
                                                                        id: "authorizedPerson",
                                                                        name: "authorizedPerson",
                                                                        value: formData.authorizedPerson,
                                                                        onChange: handleInputChange,
                                                                        className: "mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 text-gray-950"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1069,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 1065,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "phone",
                                                                        className: "block text-sm font-medium text-gray-700",
                                                                        children: "Telefon *"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1079,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "tel",
                                                                        id: "phone",
                                                                        name: "phone",
                                                                        value: formData.phone,
                                                                        onChange: handleInputChange,
                                                                        required: true,
                                                                        className: "mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 text-gray-950"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1082,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 1078,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "email",
                                                                        className: "block text-sm font-medium text-gray-700",
                                                                        children: "E-posta"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1093,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "email",
                                                                        id: "email",
                                                                        name: "email",
                                                                        value: formData.email,
                                                                        onChange: handleInputChange,
                                                                        className: "mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 text-gray-950"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1096,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 1092,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "cityId",
                                                                        className: "block text-sm font-medium text-gray-700",
                                                                        children: "İl"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1106,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        id: "cityId",
                                                                        name: "cityId",
                                                                        value: formData.cityId,
                                                                        onChange: handleInputChange,
                                                                        className: "mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 text-gray-950",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: 0,
                                                                                children: "İl Seçiniz"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1116,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            sortedCities.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: city.id,
                                                                                    children: city.name
                                                                                }, city.id, false, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1118,
                                                                                    columnNumber: 31
                                                                                }, this))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1109,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 1105,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                        htmlFor: "districtId",
                                                                        className: "block text-sm font-medium text-gray-700",
                                                                        children: "İlçe"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1125,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                        id: "districtId",
                                                                        name: "districtId",
                                                                        value: formData.districtId,
                                                                        onChange: handleInputChange,
                                                                        disabled: availableDistricts.length === 0,
                                                                        className: "mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md px-3 py-2 text-gray-800 disabled:bg-gray-100",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                value: 0,
                                                                                children: "İlçe Seçiniz"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1136,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            availableDistricts.map((district)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                    value: district.id,
                                                                                    children: district.name
                                                                                }, district.id, false, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1138,
                                                                                    columnNumber: 31
                                                                                }, this))
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1128,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 1124,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                        lineNumber: 1021,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                htmlFor: "address",
                                                                className: "block text-sm font-medium text-gray-700",
                                                                children: "Adres"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 1146,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                id: "address",
                                                                name: "address",
                                                                value: formData.address,
                                                                onChange: handleInputChange,
                                                                rows: 3,
                                                                className: "mt-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md px-3 py-2 text-gray-950"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 1149,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                        lineNumber: 1145,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "submit",
                                                                className: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm",
                                                                children: editMode ? 'Güncelle' : 'Kaydet'
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 1159,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                onClick: closeModal,
                                                                className: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-400 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm",
                                                                children: "İptal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 1165,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                        lineNumber: 1158,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                lineNumber: 1020,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                            lineNumber: 1019,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                    lineNumber: 1015,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                            lineNumber: 1009,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                        lineNumber: 1008,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                    lineNumber: 1007,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                lineNumber: 1006,
                columnNumber: 9
            }, this),
            isSaleModalOpen && currentCustomer && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 overflow-y-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed inset-0 transition-opacity",
                            "aria-hidden": "true",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gray-500 opacity-75"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                lineNumber: 1187,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                            lineNumber: 1186,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden sm:inline-block sm:align-middle sm:h-screen",
                            "aria-hidden": "true",
                            children: "​"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                            lineNumber: 1190,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "sm:flex sm:items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "h-6 w-6 text-green-600",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                fill: "none",
                                                viewBox: "0 0 24 24",
                                                stroke: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                    lineNumber: 1197,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                lineNumber: 1196,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                            lineNumber: 1195,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-lg leading-6 font-medium text-gray-900",
                                                    children: [
                                                        "Satış Ekle - ",
                                                        currentCustomer.name
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                    lineNumber: 1201,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                                        onSubmit: handleAddSale,
                                                        className: "space-y-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "sm:col-span-6",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                className: "block text-sm font-medium text-gray-700 mb-3",
                                                                                children: [
                                                                                    "Satış Tipi ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 1210,
                                                                                        columnNumber: 42
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1209,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex space-x-6",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                id: "perakende-corp",
                                                                                                name: "saleType",
                                                                                                type: "radio",
                                                                                                value: "perakende",
                                                                                                checked: saleFormData.saleType === 'perakende',
                                                                                                onChange: handleSaleInputChange,
                                                                                                className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300",
                                                                                                required: true
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                                lineNumber: 1214,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                htmlFor: "perakende-corp",
                                                                                                className: "ml-2 block text-sm text-gray-900",
                                                                                                children: "Perakende"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                                lineNumber: 1224,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 1213,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                id: "filo-corp",
                                                                                                name: "saleType",
                                                                                                type: "radio",
                                                                                                value: "filo",
                                                                                                checked: saleFormData.saleType === 'filo',
                                                                                                onChange: handleSaleInputChange,
                                                                                                className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                                lineNumber: 1229,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                htmlFor: "filo-corp",
                                                                                                className: "ml-2 block text-sm text-gray-900",
                                                                                                children: "Filo"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                                lineNumber: 1238,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 1228,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                                id: "otv-muaf-corp",
                                                                                                name: "saleType",
                                                                                                type: "radio",
                                                                                                value: "otv-muaf",
                                                                                                checked: saleFormData.saleType === 'otv-muaf',
                                                                                                onChange: handleSaleInputChange,
                                                                                                className: "focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                                lineNumber: 1243,
                                                                                                columnNumber: 33
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                                htmlFor: "otv-muaf-corp",
                                                                                                className: "ml-2 block text-sm text-gray-900",
                                                                                                children: "ÖTV Muaf"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                                lineNumber: 1252,
                                                                                                columnNumber: 33
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 1242,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1212,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1208,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "sm:col-span-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "brandId",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "Marka ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 1262,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1261,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                    id: "brandId",
                                                                                    name: "brandId",
                                                                                    value: selectedBrandId,
                                                                                    onChange: handleSaleInputChange,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800",
                                                                                    required: true,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "",
                                                                                            children: "Marka Seçin"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                            lineNumber: 1273,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        authorizedBrands.length > 0 ? authorizedBrands.map((brand)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: brand.id,
                                                                                                children: brand.name
                                                                                            }, brand.id, false, {
                                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                                lineNumber: 1276,
                                                                                                columnNumber: 37
                                                                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "",
                                                                                            disabled: true,
                                                                                            children: "Yetkili marka bulunmuyor"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                            lineNumber: 1281,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1265,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1264,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            authorizedBrands.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                className: "mt-1 text-xs text-red-500",
                                                                                children: "Satış yapabilmek için en az bir markaya yetkiniz olmalıdır."
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1286,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1260,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "sm:col-span-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "modelId",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "Model ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 1295,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1294,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                    id: "modelId",
                                                                                    name: "modelId",
                                                                                    value: selectedModelId,
                                                                                    onChange: handleSaleInputChange,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800",
                                                                                    required: true,
                                                                                    disabled: !selectedBrandId,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "",
                                                                                            children: "Model Seçin"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                            lineNumber: 1307,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        models.map((model)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: model.id,
                                                                                                children: model.name
                                                                                            }, model.id, false, {
                                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                                lineNumber: 1309,
                                                                                                columnNumber: 35
                                                                                            }, this))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1298,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1297,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1293,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "sm:col-span-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "packageId",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: "Paket"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1319,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                                                    id: "packageId",
                                                                                    name: "packageId",
                                                                                    value: saleFormData.packageId,
                                                                                    onChange: handleSaleInputChange,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950",
                                                                                    disabled: !selectedModelId,
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                            value: "",
                                                                                            children: "Paket Seçin"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                            lineNumber: 1331,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        packages.map((pkg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                                                value: pkg.id,
                                                                                                children: pkg.name
                                                                                            }, pkg.id, false, {
                                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                                lineNumber: 1333,
                                                                                                columnNumber: 35
                                                                                            }, this))
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1323,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1322,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1318,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "sm:col-span-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "chassisNo",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "Şase No ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 1344,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1343,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    name: "chassisNo",
                                                                                    id: "chassisNo",
                                                                                    required: true,
                                                                                    value: saleFormData.chassisNo,
                                                                                    onChange: handleSaleInputChange,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1347,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1346,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1342,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "sm:col-span-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "engineNo",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "Motor No ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 1362,
                                                                                        columnNumber: 40
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1361,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    name: "engineNo",
                                                                                    id: "engineNo",
                                                                                    required: true,
                                                                                    value: saleFormData.engineNo,
                                                                                    onChange: handleSaleInputChange,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1365,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1364,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1360,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "sm:col-span-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "color",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "Renk ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 1380,
                                                                                        columnNumber: 36
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1379,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    name: "color",
                                                                                    id: "color",
                                                                                    required: true,
                                                                                    value: saleFormData.color,
                                                                                    onChange: handleSaleInputChange,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1383,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1382,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1378,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "sm:col-span-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "purchaseDate",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: "Alış Tarihi"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1397,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "date",
                                                                                    name: "purchaseDate",
                                                                                    id: "purchaseDate",
                                                                                    value: saleFormData.purchaseDate,
                                                                                    onChange: handleSaleInputChange,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1401,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1400,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1396,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "sm:col-span-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "salePrice",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "Araç Satış Fiyatı (₺) ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 1415,
                                                                                        columnNumber: 53
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1414,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    name: "salePrice",
                                                                                    id: "salePrice",
                                                                                    required: true,
                                                                                    value: saleFormData.salePrice === '' || saleFormData.salePrice === '0' ? '' : formatNumber(parseFloat(saleFormData.salePrice.toString()) || 0),
                                                                                    onChange: handleSaleInputChange,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1418,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1417,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1413,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "sm:col-span-2",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "extraAmount",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: "Ekstra Tutar (₺)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1432,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    name: "extraAmount",
                                                                                    id: "extraAmount",
                                                                                    value: saleFormData.extraAmount === '' || saleFormData.extraAmount === '0' ? '' : formatNumber(parseFloat(saleFormData.extraAmount.toString()) || 0),
                                                                                    onChange: handleSaleInputChange,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1436,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1435,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1431,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "sm:col-span-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "purchasePrice",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "Alış Fiyatı (₺) ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 1450,
                                                                                        columnNumber: 47
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1449,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    name: "purchasePrice",
                                                                                    id: "purchasePrice",
                                                                                    required: true,
                                                                                    value: saleFormData.purchasePrice === '' || saleFormData.purchasePrice === '0' ? '' : formatNumber(parseFloat(saleFormData.purchasePrice.toString()) || 0),
                                                                                    onChange: handleSaleInputChange,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1453,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1452,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1448,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "sm:col-span-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "contributionAmount",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: "Katkı Tutarı (₺)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1467,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    name: "contributionAmount",
                                                                                    id: "contributionAmount",
                                                                                    value: saleFormData.contributionAmount === '' || saleFormData.contributionAmount === '0' ? '' : formatNumber(parseFloat(saleFormData.contributionAmount.toString()) || 0),
                                                                                    onChange: handleSaleInputChange,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1471,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1470,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1466,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "sm:col-span-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "otvRate",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: "ÖTV Oranı (%)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1484,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1488,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1487,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1483,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "sm:col-span-1",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "kdvRate",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: "KDV Oranı (%)"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1504,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1508,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1507,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1503,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "sm:col-span-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "mtvCost",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "MTV (₺) ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 1525,
                                                                                        columnNumber: 39
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1524,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    name: "mtvCost",
                                                                                    id: "mtvCost",
                                                                                    required: true,
                                                                                    readOnly: true,
                                                                                    value: saleFormData.mtvCost === '' || saleFormData.mtvCost === '0' ? '' : formatNumber(parseFloat(saleFormData.mtvCost.toString()) || 0),
                                                                                    onChange: handleSaleInputChange,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-400 rounded-md py-2 px-3 text-gray-800 bg-gray-50"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1528,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1527,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1523,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "sm:col-span-3",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                                htmlFor: "licensePlateCost",
                                                                                className: "block text-sm font-medium text-gray-700",
                                                                                children: [
                                                                                    "Plaka Masrafı (₺) ",
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "text-red-500",
                                                                                        children: "*"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 1544,
                                                                                        columnNumber: 49
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1543,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "mt-1",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                                    type: "text",
                                                                                    name: "licensePlateCost",
                                                                                    id: "licensePlateCost",
                                                                                    required: true,
                                                                                    readOnly: true,
                                                                                    value: saleFormData.licensePlateCost === '' || saleFormData.licensePlateCost === '0' ? '' : formatNumber(parseFloat(saleFormData.licensePlateCost.toString()) || 0),
                                                                                    onChange: handleSaleInputChange,
                                                                                    className: "shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md py-2 px-3 text-gray-950 bg-gray-50"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1547,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1546,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1542,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 1206,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8 sm:flex sm:flex-row-reverse",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "submit",
                                                                        className: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-3 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm",
                                                                        children: "Satışı Kaydet"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1562,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        type: "button",
                                                                        onClick: closeSaleModal,
                                                                        className: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-400 shadow-sm px-6 py-3 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:w-auto sm:text-sm",
                                                                        children: "İptal"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1568,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 1561,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                        lineNumber: 1205,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                    lineNumber: 1204,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                            lineNumber: 1200,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                    lineNumber: 1194,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                lineNumber: 1193,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                            lineNumber: 1192,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                    lineNumber: 1185,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                lineNumber: 1184,
                columnNumber: 9
            }, this),
            isCustomerSearchModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "h-6 w-6 text-green-600",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                lineNumber: 1594,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                            lineNumber: 1593,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                        lineNumber: 1592,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg leading-6 font-medium text-gray-900",
                                                children: "Kurumsal Müşteri Ara ve Devral"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                lineNumber: 1598,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 mb-4",
                                                        children: "Vergi No ile kurumsal müşteri arayın ve devralın"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                        lineNumber: 1602,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex space-x-2 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "text",
                                                                value: searchTerm,
                                                                onChange: (e)=>setSearchTerm(e.target.value),
                                                                placeholder: "Vergi No giriniz",
                                                                className: "flex-1 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-400 rounded-md px-3 py-2 text-gray-800",
                                                                onKeyPress: (e)=>{
                                                                    if (e.key === 'Enter') {
                                                                        handleCustomerSearch();
                                                                    }
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 1608,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleCustomerSearch,
                                                                disabled: isSearching,
                                                                className: "inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50",
                                                                children: isSearching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                    className: "opacity-25",
                                                                                    cx: "12",
                                                                                    cy: "12",
                                                                                    r: "10",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: "4"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1628,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    className: "opacity-75",
                                                                                    fill: "currentColor",
                                                                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1629,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                            lineNumber: 1627,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Aranıyor..."
                                                                    ]
                                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "-ml-1 mr-2 h-4 w-4",
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: 2,
                                                                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1636,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                            lineNumber: 1635,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Ara"
                                                                    ]
                                                                }, void 0, true)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 1620,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: handleClearSearch,
                                                                className: "inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",
                                                                children: "Temizle"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                lineNumber: 1642,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                        lineNumber: 1607,
                                                        columnNumber: 21
                                                    }, this),
                                                    searchMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `mb-4 p-3 rounded-md ${searchMessage.includes('hata') || searchMessage.includes('bulunamadı') ? 'bg-red-50 text-red-700 border border-red-200' : searchMessage.includes('başarıyla') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-blue-50 text-blue-700 border border-blue-200'}`,
                                                        children: searchMessage
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                        lineNumber: 1652,
                                                        columnNumber: 23
                                                    }, this),
                                                    searchResults.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "max-h-96 overflow-y-auto",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3",
                                                            children: searchResults.map((customer)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "border border-gray-200 rounded-lg p-4 hover:bg-gray-50",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex justify-between items-start",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                        className: "text-sm font-medium text-gray-900",
                                                                                        children: customer.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 1671,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm text-gray-500",
                                                                                        children: [
                                                                                            "Vergi No: ",
                                                                                            customer.taxNumber
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 1672,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm text-gray-500",
                                                                                        children: [
                                                                                            "Vergi Dairesi: ",
                                                                                            customer.taxOffice
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 1673,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm text-gray-500",
                                                                                        children: [
                                                                                            "Telefon: ",
                                                                                            customer.phone
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 1674,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    customer.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm text-gray-500",
                                                                                        children: [
                                                                                            "E-posta: ",
                                                                                            customer.email
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 1676,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    customer.authorizedPerson && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                        className: "text-sm text-gray-500",
                                                                                        children: [
                                                                                            "Yetkili: ",
                                                                                            customer.authorizedPerson
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                        lineNumber: 1679,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1670,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "ml-4",
                                                                                children: customer.createdBy === user?.id?.toString() ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800",
                                                                                    children: "Sizin Müşteriniz"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1684,
                                                                                    columnNumber: 37
                                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                    onClick: ()=>handleTransferCustomer(customer.id),
                                                                                    disabled: transferLoading === customer.id,
                                                                                    className: "inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50",
                                                                                    children: transferLoading === customer.id ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                className: "animate-spin -ml-1 mr-1 h-3 w-3 text-white",
                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                fill: "none",
                                                                                                viewBox: "0 0 24 24",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                                        className: "opacity-25",
                                                                                                        cx: "12",
                                                                                                        cy: "12",
                                                                                                        r: "10",
                                                                                                        stroke: "currentColor",
                                                                                                        strokeWidth: "4"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                                        lineNumber: 1696,
                                                                                                        columnNumber: 45
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                        className: "opacity-75",
                                                                                                        fill: "currentColor",
                                                                                                        d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                                        lineNumber: 1697,
                                                                                                        columnNumber: 45
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                                lineNumber: 1695,
                                                                                                columnNumber: 43
                                                                                            }, this),
                                                                                            "Devralınıyor..."
                                                                                        ]
                                                                                    }, void 0, true) : 'Devral'
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                    lineNumber: 1688,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                                lineNumber: 1682,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                        lineNumber: 1669,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, customer.id, false, {
                                                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                                    lineNumber: 1668,
                                                                    columnNumber: 29
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                            lineNumber: 1666,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                        lineNumber: 1665,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                                lineNumber: 1601,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                        lineNumber: 1597,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                lineNumber: 1591,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 sm:mt-4 sm:flex sm:flex-row-reverse",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: closeCustomerSearchModal,
                                    type: "button",
                                    className: "w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm",
                                    children: "Kapat"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                    lineNumber: 1718,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                                lineNumber: 1717,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                        lineNumber: 1590,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                    lineNumber: 1589,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
                lineNumber: 1588,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/corporate-customers/page.tsx",
        lineNumber: 835,
        columnNumber: 5
    }, this);
}
_s(CorporateCustomersPage, "ynBoO66hZzW033RcVXRSXBGW2h0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c1 = CorporateCustomersPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "DashboardLayout");
__turbopack_context__.k.register(_c1, "CorporateCustomersPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_ce39b4de._.js.map