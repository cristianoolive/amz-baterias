// Gerado a partir da planilha "Baterias por Modelo de Carro - 2026.xlsx".
// Para atualizar, edite a planilha e rode o gerador novamente.

export type CarModel = {
  brand: string;
  brandSlug: string;
  model: string;
  slug: string;
  detail: string;
  specs: string;
  moura: string[];
  heliar: string[];
  pioneiro: string[];
};

export const CAR_MODELS: CarModel[] = [
  {
    "brand": "Fiat",
    "brandSlug": "fiat",
    "model": "Strada",
    "slug": "strada",
    "detail": "Maioria s/ Start-Stop, Turbo c/ Start-Stop",
    "specs": "45-50Ah SLI ou 60Ah EFB",
    "moura": [
      "M45",
      "ME60AD"
    ],
    "heliar": [
      "HF40",
      "HE60"
    ],
    "pioneiro": [
      "F45",
      "EFB60"
    ]
  },
  {
    "brand": "Fiat",
    "brandSlug": "fiat",
    "model": "Argo",
    "slug": "argo",
    "detail": "s/ Start-Stop (antigos c/ Start-Stop usam EFB)",
    "specs": "45-50Ah SLI",
    "moura": [
      "M45",
      "ME60AD"
    ],
    "heliar": [
      "HF40",
      "HE60"
    ],
    "pioneiro": [
      "F45",
      "EFB60"
    ]
  },
  {
    "brand": "Fiat",
    "brandSlug": "fiat",
    "model": "Mobi",
    "slug": "mobi",
    "detail": "s/ Start-Stop",
    "specs": "40-45Ah SLI",
    "moura": [
      "M40S",
      "M45"
    ],
    "heliar": [
      "HF40",
      "HG45"
    ],
    "pioneiro": [
      "F40",
      "F45"
    ]
  },
  {
    "brand": "Fiat",
    "brandSlug": "fiat",
    "model": "Toro",
    "slug": "toro",
    "detail": "Flex c/ Start-Stop, Diesel c/ Start-Stop",
    "specs": "60Ah EFB ou 72Ah AGM",
    "moura": [
      "ME60AD",
      "MA72"
    ],
    "heliar": [
      "HE60",
      "HA72"
    ],
    "pioneiro": [
      "EFB60",
      "AGM72"
    ]
  },
  {
    "brand": "Fiat",
    "brandSlug": "fiat",
    "model": "Pulse",
    "slug": "pulse",
    "detail": "c/ Start-Stop",
    "specs": "60Ah EFB/AGM",
    "moura": [
      "ME60AD"
    ],
    "heliar": [
      "HE60"
    ],
    "pioneiro": [
      "EFB60"
    ]
  },
  {
    "brand": "Fiat",
    "brandSlug": "fiat",
    "model": "Fastback",
    "slug": "fastback",
    "detail": "c/ Start-Stop",
    "specs": "60-72Ah EFB/AGM",
    "moura": [
      "ME60AD",
      "ME72",
      "MA72"
    ],
    "heliar": [
      "HE60",
      "HE72",
      "HA72"
    ],
    "pioneiro": [
      "EFB60",
      "EFB72",
      "AGM72"
    ]
  },
  {
    "brand": "Volkswagen",
    "brandSlug": "volkswagen",
    "model": "Polo",
    "slug": "polo",
    "detail": "MPI s/ Start-Stop, TSI c/ alternador inteligente",
    "specs": "45Ah SLI ou 60Ah EFB",
    "moura": [
      "M45",
      "ME60AD"
    ],
    "heliar": [
      "HF40",
      "HE60"
    ],
    "pioneiro": [
      "F45",
      "EFB60"
    ]
  },
  {
    "brand": "Volkswagen",
    "brandSlug": "volkswagen",
    "model": "T-Cross",
    "slug": "t-cross",
    "detail": "c/ Start-Stop",
    "specs": "60-70Ah EFB",
    "moura": [
      "ME60AD"
    ],
    "heliar": [
      "HE60"
    ],
    "pioneiro": [
      "EFB60"
    ]
  },
  {
    "brand": "Volkswagen",
    "brandSlug": "volkswagen",
    "model": "Nivus",
    "slug": "nivus",
    "detail": "c/ Start-Stop",
    "specs": "60Ah EFB",
    "moura": [
      "ME60AD"
    ],
    "heliar": [
      "HE60"
    ],
    "pioneiro": [
      "EFB60"
    ]
  },
  {
    "brand": "Volkswagen",
    "brandSlug": "volkswagen",
    "model": "Tera",
    "slug": "tera",
    "detail": "c/ Start-Stop",
    "specs": "60Ah EFB",
    "moura": [
      "ME60AD"
    ],
    "heliar": [
      "HE60"
    ],
    "pioneiro": [
      "EFB60"
    ]
  },
  {
    "brand": "Volkswagen",
    "brandSlug": "volkswagen",
    "model": "Virtus",
    "slug": "virtus",
    "detail": "c/ Start-Stop",
    "specs": "60Ah EFB",
    "moura": [
      "ME60AD"
    ],
    "heliar": [
      "HE60"
    ],
    "pioneiro": [
      "EFB60"
    ]
  },
  {
    "brand": "Volkswagen",
    "brandSlug": "volkswagen",
    "model": "Taos",
    "slug": "taos",
    "detail": "c/ Start-Stop",
    "specs": "70Ah EFB/AGM",
    "moura": [
      "ME72",
      "MA72"
    ],
    "heliar": [
      "HE72",
      "HA72"
    ],
    "pioneiro": [
      "EFB72",
      "AGM72"
    ]
  },
  {
    "brand": "Chevrolet",
    "brandSlug": "chevrolet",
    "model": "Onix",
    "slug": "onix",
    "detail": "s/ Start-Stop",
    "specs": "50-60Ah SLI/EFB",
    "moura": [
      "M50ED",
      "M60GD"
    ],
    "heliar": [
      "HF50",
      "HG60"
    ],
    "pioneiro": [
      "F50",
      "F60"
    ]
  },
  {
    "brand": "Chevrolet",
    "brandSlug": "chevrolet",
    "model": "Onix Plus",
    "slug": "onix-plus",
    "detail": "s/ Start-Stop",
    "specs": "50-60Ah SLI/EFB",
    "moura": [
      "M50ED",
      "M60GD"
    ],
    "heliar": [
      "HF50",
      "HG60"
    ],
    "pioneiro": [
      "F50",
      "F60"
    ]
  },
  {
    "brand": "Chevrolet",
    "brandSlug": "chevrolet",
    "model": "Tracker",
    "slug": "tracker",
    "detail": "c/ Start-Stop",
    "specs": "60-70Ah EFB",
    "moura": [
      "ME60AD"
    ],
    "heliar": [
      "HE60"
    ],
    "pioneiro": [
      "EFB60"
    ]
  },
  {
    "brand": "Chevrolet",
    "brandSlug": "chevrolet",
    "model": "Montana",
    "slug": "montana",
    "detail": "s/ Start-Stop, alta demanda eletrônica",
    "specs": "60-70Ah EFB",
    "moura": [
      "ME60AD"
    ],
    "heliar": [
      "HE60"
    ],
    "pioneiro": [
      "EFB60"
    ]
  },
  {
    "brand": "Chevrolet",
    "brandSlug": "chevrolet",
    "model": "Spin",
    "slug": "spin",
    "detail": "s/ Start-Stop",
    "specs": "50-60Ah SLI",
    "moura": [
      "M50ED",
      "M60GD"
    ],
    "heliar": [
      "HF50",
      "HG60"
    ],
    "pioneiro": [
      "F50",
      "F60"
    ]
  },
  {
    "brand": "Chevrolet",
    "brandSlug": "chevrolet",
    "model": "S10",
    "slug": "s10",
    "detail": "c/ ou s/ Start-Stop (Diesel)",
    "specs": "70-90Ah SLI/AGM",
    "moura": [
      "M90",
      "MA80"
    ],
    "heliar": [
      "HG90",
      "HA80"
    ],
    "pioneiro": [
      "F90",
      "AGM80"
    ]
  },
  {
    "brand": "BYD",
    "brandSlug": "byd",
    "model": "Dolphin Mini",
    "slug": "dolphin-mini",
    "detail": "Auxiliar de Elétrico",
    "specs": "45Ah SLI",
    "moura": [
      "M45"
    ],
    "heliar": [
      "HG45"
    ],
    "pioneiro": [
      "F45"
    ]
  },
  {
    "brand": "BYD",
    "brandSlug": "byd",
    "model": "Dolphin",
    "slug": "dolphin",
    "detail": "Auxiliar de Elétrico",
    "specs": "45-50Ah SLI",
    "moura": [
      "M45",
      "M50ED"
    ],
    "heliar": [
      "HG45",
      "HF50"
    ],
    "pioneiro": [
      "F45",
      "F50"
    ]
  },
  {
    "brand": "BYD",
    "brandSlug": "byd",
    "model": "Song Plus",
    "slug": "song-plus",
    "detail": "Auxiliar PHEV",
    "specs": "45-60Ah SLI",
    "moura": [
      "M45",
      "M60GD"
    ],
    "heliar": [
      "HG45",
      "HG60"
    ],
    "pioneiro": [
      "F45",
      "F60"
    ]
  },
  {
    "brand": "BYD",
    "brandSlug": "byd",
    "model": "King",
    "slug": "king",
    "detail": "Auxiliar PHEV",
    "specs": "45-60Ah SLI",
    "moura": [
      "M45",
      "M60GD"
    ],
    "heliar": [
      "HG45",
      "HG60"
    ],
    "pioneiro": [
      "F45",
      "F60"
    ]
  },
  {
    "brand": "BYD",
    "brandSlug": "byd",
    "model": "Yuan Plus",
    "slug": "yuan-plus",
    "detail": "Auxiliar de Elétrico",
    "specs": "45-50Ah SLI",
    "moura": [
      "M45",
      "M50ED"
    ],
    "heliar": [
      "HG45",
      "HF50"
    ],
    "pioneiro": [
      "F45",
      "F50"
    ]
  },
  {
    "brand": "BYD",
    "brandSlug": "byd",
    "model": "Seal",
    "slug": "seal",
    "detail": "Auxiliar de Elétrico",
    "specs": "45-50Ah SLI",
    "moura": [
      "M45",
      "M50ED"
    ],
    "heliar": [
      "HG45",
      "HF50"
    ],
    "pioneiro": [
      "F45",
      "F50"
    ]
  },
  {
    "brand": "Hyundai",
    "brandSlug": "hyundai",
    "model": "HB20",
    "slug": "hb20",
    "detail": "s/ Start-Stop",
    "specs": "45-50Ah SLI",
    "moura": [
      "M45",
      "M50ED"
    ],
    "heliar": [
      "HG45",
      "HF50"
    ],
    "pioneiro": [
      "F45",
      "F50"
    ]
  },
  {
    "brand": "Hyundai",
    "brandSlug": "hyundai",
    "model": "Creta",
    "slug": "creta",
    "detail": "c/ Start-Stop",
    "specs": "60-70Ah EFB/AGM",
    "moura": [
      "ME60AD"
    ],
    "heliar": [
      "HE60"
    ],
    "pioneiro": [
      "EFB60"
    ]
  },
  {
    "brand": "Hyundai",
    "brandSlug": "hyundai",
    "model": "HB20S",
    "slug": "hb20s",
    "detail": "s/ Start-Stop",
    "specs": "45-50Ah SLI",
    "moura": [
      "M45",
      "M50ED"
    ],
    "heliar": [
      "HG45",
      "HF50"
    ],
    "pioneiro": [
      "F45",
      "F50"
    ]
  },
  {
    "brand": "Hyundai",
    "brandSlug": "hyundai",
    "model": "Tucson",
    "slug": "tucson",
    "detail": "c/ Start-Stop",
    "specs": "70Ah EFB/AGM",
    "moura": [
      "ME72",
      "MA72"
    ],
    "heliar": [
      "HE72",
      "HA72"
    ],
    "pioneiro": [
      "EFB72",
      "AGM72"
    ]
  },
  {
    "brand": "Hyundai",
    "brandSlug": "hyundai",
    "model": "Palisade",
    "slug": "palisade",
    "detail": "c/ Start-Stop Pesado",
    "specs": "80-90Ah AGM",
    "moura": [
      "MA80"
    ],
    "heliar": [
      "HA80"
    ],
    "pioneiro": [
      "AGM80"
    ]
  },
  {
    "brand": "Hyundai",
    "brandSlug": "hyundai",
    "model": "HR",
    "slug": "hr",
    "detail": "s/ Start-Stop (Diesel pesada)",
    "specs": "90-100Ah SLI",
    "moura": [
      "M90"
    ],
    "heliar": [
      "HG90"
    ],
    "pioneiro": [
      "F90"
    ]
  },
  {
    "brand": "Toyota",
    "brandSlug": "toyota",
    "model": "Corolla Cross",
    "slug": "corolla-cross",
    "detail": "s/ Start-Stop ou HEV",
    "specs": "60Ah SLI ou 45Ah SLI (HEV)",
    "moura": [
      "M60GD",
      "M45"
    ],
    "heliar": [
      "HG60",
      "HG45"
    ],
    "pioneiro": [
      "F60",
      "F45"
    ]
  },
  {
    "brand": "Toyota",
    "brandSlug": "toyota",
    "model": "Hilux",
    "slug": "hilux",
    "detail": "Diesel pesada",
    "specs": "80-95Ah SLI",
    "moura": [
      "M90"
    ],
    "heliar": [
      "HG90"
    ],
    "pioneiro": [
      "F90"
    ]
  },
  {
    "brand": "Toyota",
    "brandSlug": "toyota",
    "model": "Corolla",
    "slug": "corolla",
    "detail": "s/ Start-Stop ou HEV",
    "specs": "60Ah SLI ou 45Ah SLI (HEV)",
    "moura": [
      "M60GD",
      "M45"
    ],
    "heliar": [
      "HG60",
      "HG45"
    ],
    "pioneiro": [
      "F60",
      "F45"
    ]
  },
  {
    "brand": "Toyota",
    "brandSlug": "toyota",
    "model": "Yaris Cross",
    "slug": "yaris-cross",
    "detail": "Auxiliar HEV / Flex",
    "specs": "45-50Ah SLI/EFB",
    "moura": [
      "M45",
      "ME60AD"
    ],
    "heliar": [
      "HG45",
      "HE60"
    ],
    "pioneiro": [
      "F45",
      "EFB60"
    ]
  },
  {
    "brand": "Toyota",
    "brandSlug": "toyota",
    "model": "Yaris",
    "slug": "yaris",
    "detail": "s/ Start-Stop",
    "specs": "45-50Ah SLI",
    "moura": [
      "M45",
      "M50ED"
    ],
    "heliar": [
      "HG45",
      "HF50"
    ],
    "pioneiro": [
      "F45",
      "F50"
    ]
  },
  {
    "brand": "Toyota",
    "brandSlug": "toyota",
    "model": "SW4",
    "slug": "sw4",
    "detail": "Diesel pesada",
    "specs": "80-95Ah SLI",
    "moura": [
      "M90"
    ],
    "heliar": [
      "HG90"
    ],
    "pioneiro": [
      "F90"
    ]
  },
  {
    "brand": "Renault",
    "brandSlug": "renault",
    "model": "Kwid",
    "slug": "kwid",
    "detail": "novos c/ Start-Stop",
    "specs": "40Ah SLI ou 50Ah EFB",
    "moura": [
      "M40S",
      "ME60AD"
    ],
    "heliar": [
      "HF40",
      "HE60"
    ],
    "pioneiro": [
      "F40",
      "EFB60"
    ]
  },
  {
    "brand": "Renault",
    "brandSlug": "renault",
    "model": "Kardian",
    "slug": "kardian",
    "detail": "c/ Start-Stop",
    "specs": "60-70Ah EFB",
    "moura": [
      "ME60AD"
    ],
    "heliar": [
      "HE60"
    ],
    "pioneiro": [
      "EFB60"
    ]
  },
  {
    "brand": "Renault",
    "brandSlug": "renault",
    "model": "Duster",
    "slug": "duster",
    "detail": "c/ Start-Stop",
    "specs": "60-70Ah EFB",
    "moura": [
      "ME60AD"
    ],
    "heliar": [
      "HE60"
    ],
    "pioneiro": [
      "EFB60"
    ]
  },
  {
    "brand": "Renault",
    "brandSlug": "renault",
    "model": "Oroch",
    "slug": "oroch",
    "detail": "c/ Start-Stop",
    "specs": "60-70Ah EFB",
    "moura": [
      "ME60AD"
    ],
    "heliar": [
      "HE60"
    ],
    "pioneiro": [
      "EFB60"
    ]
  },
  {
    "brand": "Renault",
    "brandSlug": "renault",
    "model": "Megane E-Tech",
    "slug": "megane-e-tech",
    "detail": "Auxiliar de Elétrico",
    "specs": "45-50Ah SLI",
    "moura": [
      "M45",
      "M50ED"
    ],
    "heliar": [
      "HG45",
      "HF50"
    ],
    "pioneiro": [
      "F45",
      "F50"
    ]
  },
  {
    "brand": "Renault",
    "brandSlug": "renault",
    "model": "Master",
    "slug": "master",
    "detail": "s/ Start-Stop (Diesel)",
    "specs": "90-100Ah SLI",
    "moura": [
      "M90"
    ],
    "heliar": [
      "HG90"
    ],
    "pioneiro": [
      "F90"
    ]
  },
  {
    "brand": "Jeep",
    "brandSlug": "jeep",
    "model": "Compass",
    "slug": "compass",
    "detail": "c/ Start-Stop",
    "specs": "60-72Ah EFB/AGM",
    "moura": [
      "ME60AD",
      "MA72"
    ],
    "heliar": [
      "HE60",
      "HA72"
    ],
    "pioneiro": [
      "EFB60",
      "AGM72"
    ]
  },
  {
    "brand": "Jeep",
    "brandSlug": "jeep",
    "model": "Renegade",
    "slug": "renegade",
    "detail": "c/ Start-Stop",
    "specs": "60Ah EFB/AGM",
    "moura": [
      "ME60AD",
      "MA72"
    ],
    "heliar": [
      "HE60",
      "HA72"
    ],
    "pioneiro": [
      "EFB60",
      "AGM72"
    ]
  },
  {
    "brand": "Jeep",
    "brandSlug": "jeep",
    "model": "Commander",
    "slug": "commander",
    "detail": "c/ Start-Stop",
    "specs": "70-72Ah EFB/AGM",
    "moura": [
      "ME72",
      "MA72"
    ],
    "heliar": [
      "HE72",
      "HA72"
    ],
    "pioneiro": [
      "EFB72",
      "AGM72"
    ]
  },
  {
    "brand": "Jeep",
    "brandSlug": "jeep",
    "model": "Wrangler",
    "slug": "wrangler",
    "detail": "c/ Start-Stop pesado",
    "specs": "70Ah+ AGM",
    "moura": [
      "MA72",
      "MA80"
    ],
    "heliar": [
      "HA72",
      "HA80"
    ],
    "pioneiro": [
      "AGM72",
      "AGM80"
    ]
  },
  {
    "brand": "Jeep",
    "brandSlug": "jeep",
    "model": "Gladiator",
    "slug": "gladiator",
    "detail": "c/ Start-Stop pesado",
    "specs": "70Ah+ AGM",
    "moura": [
      "MA72",
      "MA80"
    ],
    "heliar": [
      "HA72",
      "HA80"
    ],
    "pioneiro": [
      "AGM72",
      "AGM80"
    ]
  },
  {
    "brand": "Jeep",
    "brandSlug": "jeep",
    "model": "Grand Cherokee",
    "slug": "grand-cherokee",
    "detail": "Auxiliar PHEV",
    "specs": "AGM 12V",
    "moura": [
      "MA72"
    ],
    "heliar": [
      "HA72"
    ],
    "pioneiro": [
      "AGM72"
    ]
  },
  {
    "brand": "Honda",
    "brandSlug": "honda",
    "model": "HR-V",
    "slug": "hr-v",
    "detail": "Alta demanda s/ Start-Stop",
    "specs": "60Ah EFB",
    "moura": [
      "ME60AD"
    ],
    "heliar": [
      "HE60"
    ],
    "pioneiro": [
      "EFB60"
    ]
  },
  {
    "brand": "Honda",
    "brandSlug": "honda",
    "model": "City Hatchback",
    "slug": "city-hatchback",
    "detail": "s/ Start-Stop",
    "specs": "45-50Ah SLI",
    "moura": [
      "M45",
      "M50ED"
    ],
    "heliar": [
      "HG45",
      "HF50"
    ],
    "pioneiro": [
      "F45",
      "F50"
    ]
  },
  {
    "brand": "Honda",
    "brandSlug": "honda",
    "model": "City",
    "slug": "city",
    "detail": "s/ Start-Stop",
    "specs": "45-50Ah SLI",
    "moura": [
      "M45",
      "M50ED"
    ],
    "heliar": [
      "HG45",
      "HF50"
    ],
    "pioneiro": [
      "F45",
      "F50"
    ]
  },
  {
    "brand": "Honda",
    "brandSlug": "honda",
    "model": "ZR-V",
    "slug": "zr-v",
    "detail": "s/ Start-Stop",
    "specs": "45-60Ah SLI",
    "moura": [
      "M45",
      "M60GD"
    ],
    "heliar": [
      "HG45",
      "HG60"
    ],
    "pioneiro": [
      "F45",
      "F60"
    ]
  },
  {
    "brand": "Honda",
    "brandSlug": "honda",
    "model": "Civic",
    "slug": "civic",
    "detail": "Auxiliar HEV",
    "specs": "45Ah SLI",
    "moura": [
      "M45"
    ],
    "heliar": [
      "HG45"
    ],
    "pioneiro": [
      "F45"
    ]
  },
  {
    "brand": "Honda",
    "brandSlug": "honda",
    "model": "Fit",
    "slug": "fit",
    "detail": "s/ Start-Stop (atenção aos modelos clássicos como o 2007 1.5 VTEC que podem exigir polo fino/invertido)",
    "specs": "40-45Ah SLI",
    "moura": [
      "M40S",
      "M45 (FD",
      "FE)"
    ],
    "heliar": [
      "HF40",
      "HG45"
    ],
    "pioneiro": [
      "F40",
      "F45"
    ]
  },
  {
    "brand": "GWM",
    "brandSlug": "gwm",
    "model": "Haval H6 HEV",
    "slug": "haval-h6-hev",
    "detail": "Auxiliar HEV",
    "specs": "45-60Ah AGM/SLI",
    "moura": [
      "M45",
      "MA72"
    ],
    "heliar": [
      "HG45",
      "HA72"
    ],
    "pioneiro": [
      "F45",
      "AGM72"
    ]
  },
  {
    "brand": "GWM",
    "brandSlug": "gwm",
    "model": "Haval H6 PHEV",
    "slug": "haval-h6-phev",
    "detail": "Auxiliar PHEV",
    "specs": "45-60Ah AGM/SLI",
    "moura": [
      "M45",
      "MA72"
    ],
    "heliar": [
      "HG45",
      "HA72"
    ],
    "pioneiro": [
      "F45",
      "AGM72"
    ]
  },
  {
    "brand": "GWM",
    "brandSlug": "gwm",
    "model": "Haval H6 GT",
    "slug": "haval-h6-gt",
    "detail": "Auxiliar PHEV",
    "specs": "45-60Ah AGM/SLI",
    "moura": [
      "M45",
      "MA72"
    ],
    "heliar": [
      "HG45",
      "HA72"
    ],
    "pioneiro": [
      "F45",
      "AGM72"
    ]
  },
  {
    "brand": "GWM",
    "brandSlug": "gwm",
    "model": "Ora 03 Skin",
    "slug": "ora-03-skin",
    "detail": "Auxiliar de Elétrico",
    "specs": "45Ah SLI",
    "moura": [
      "M45"
    ],
    "heliar": [
      "HG45"
    ],
    "pioneiro": [
      "F45"
    ]
  },
  {
    "brand": "GWM",
    "brandSlug": "gwm",
    "model": "Ora 03 GT",
    "slug": "ora-03-gt",
    "detail": "Auxiliar de Elétrico",
    "specs": "45Ah SLI",
    "moura": [
      "M45"
    ],
    "heliar": [
      "HG45"
    ],
    "pioneiro": [
      "F45"
    ]
  },
  {
    "brand": "GWM",
    "brandSlug": "gwm",
    "model": "Poer",
    "slug": "poer",
    "detail": "Picape HEV (Alta demanda)",
    "specs": "72Ah AGM ou EFB",
    "moura": [
      "MA72",
      "ME72"
    ],
    "heliar": [
      "HA72",
      "HE72"
    ],
    "pioneiro": [
      "AGM72",
      "EFB72"
    ]
  }
];
