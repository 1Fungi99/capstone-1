const Products = [
  // {
  //     id: SKU,
  //     name: Product Name,
  //     price: Price,
  //     manufacturer: manufacturer,
  //     category: what type of part
  // }
  // Power Supply
  {
    id: 6229601,
    name:
      "RMx Series 850W ATX12V 2.4/EPS12V 2.92 80 Plus Gold Modular Power Supply",
    price: 164.99,
    manufacturer: "Corsair",
    category: ["power supply", "atx", "corsair"],
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6229/6229601_sd.jpg;maxHeight=640;maxWidth=550",
  },
  {
    id: 5845214,
    name:
      "CX-M Series 650W ATX12V 2.4/EPS12V 2.92 80 Plus Bronze Modular Power Supply",
    price: 94.99,
    manufacturer: "Corsair",
    category: ["power supply", "atx", "corsair"],
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5845/5845214_sd.jpg;maxHeight=640;maxWidth=550",
  },
  // RAM
  {
    id: 6333800,
    name:
      "Vengeance RGB PRO 32GB (2PK 16GB) 3.2GHz PC4-25600 DDR4 DIMM Unbuffered Non-ECC Desktop Memory Kit with RGB Lighting",
    price: 154.99,
    manufacturer: "Corsair",
    category: ["memory", "ram", "rgb"],
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6333/6333800_sd.jpg;maxHeight=640;maxWidth=550",
  },
  {
    id: 6337727,
    name:
      "Dominator Platinum RGB 32GB (2PK 16GB) 3.2GHz PC4-25600 DDR4 DIMM Unbuffered Non-ECC Desktop Memory Kit",
    price: 199.99,
    manufacturer: "Corsair",
    category: ["memory", "ram", "rgb"],
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6337/6337727_sd.jpg;maxHeight=640;maxWidth=550",
  },
  // CPU
  {
    id: 6302019,
    name:
      "Core i9-9900K 9th Generation 8-Core - 16-Thread - 3.6 GHz (5.0 GHz Turbo) Socket LGA 1151 Unlocked Desktop Processor",
    price: 529.99,
    manufacturer: "Intel",
    category: ["processor", "intel", "cpu", "i9"],
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6302/6302019_sd.jpg;maxHeight=640;maxWidth=550",
  },
  {
    id: 6356274,
    name:
      "Ryzen 9 3900X 3rd Generation 12-core - 24-Thread - 3.8 GHz (4.6 GHz Max Boost) Socket AM4 Unlocked Desktop Processor",
    price: 499.99,
    manufacturer: "AMD",
    category: ["processor", "ryzen", "cpu", "amd"],
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6356/6356274cv12d.jpg;maxHeight=640;maxWidth=550",
  },
  // GPU
  {
    id: 6375963,
    name:
      "AMD Radeon RX 5700 XT RAW II 8GB GDDR6 PCI Express 4.0 Graphics Card with Zero dB",
    price: 389.99,
    manufacturer: "XFX",
    category: ["amd", "gpu", "graphics card"],
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6375/6375963cv13d.jpg;maxHeight=640;maxWidth=550",
  },
  {
    id: 6290652,
    name:
      "GeForce RTX 2080 Ti Gaming X Trio 11GB GDDR6 PCI Express 3.0 Graphics Card",
    price: 1309.99,
    manufacturer: "MSI",
    category: ["gpu", "graphics card", "rgb"],
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6290/6290652_sd.jpg;maxHeight=640;maxWidth=550",
  },
  // Storage
  {
    id: 6324470,
    name:
      "970 EVO Plus 1TB Internal PCI Express 3.0 x4 (NVMe) Solid State Drive with V-NAND Technology",
    price: 199.99,
    manufacturer: "Samsung",
    category: ["storage", "internal storage", "nvme"],
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6324/6324470cv11d.jpg;maxHeight=640;maxWidth=550",
  },
  {
    id: 6317303,
    name: "860 QVO 2TB Internal SATA Solid State Drive with V-NAND Technology",
    price: 249.99,
    manufacturer: "Samsung",
    category: ["storage", "internal storage", "ssd"],
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6317/6317303cv13d.jpg;maxHeight=640;maxWidth=550",
  },
  {
    id: 6178653,
    name: "860 EVO 250GB Internal SATA Solid State Drive",
    price: 59.99,
    manufacturer: "Samsung",
    category: ["storage", "internal storage", "ssd"],
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6178/6178653cv13d.jpg;maxHeight=640;maxWidth=550",
  },
  //   Motherboard
  {
    id: 6412363,
    name:
      "MPG Z490 GAMING CARBON WIFI (Socket LGA1200) USB-C Gen2 Intel Motherboard",
    price: 269.99,
    manufacturer: "MSI",
    category: ["motherboard", "intel", "mobo", "lga1200", "z490"],
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6412/6412363_sd.jpg;maxHeight=640;maxWidth=550",
  },
  {
    id: 6357223,
    name: "MPG X570 GAMING EDGE WIFI (Socket AM4) USB-C Gen2 AMD Motherboard",
    price: 269.99,
    manufacturer: "MSI",
    category: ["motherboard", "AMD", "mobo", "am4", "z490"],
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6357/6357223_sd.jpg;maxHeight=640;maxWidth=550",
  },
  // Cases
  {
    id: 6364328,
    name: "H510 Compact ATX Mid-Tower Case with Tempered Glass - Matte Black",
    price: 69.99,
    manufacturer: "NZXT",
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6364/6364328_sd.jpg;maxHeight=640;maxWidth=550",
  },
  {
    id: 6370550,
    name: "iCUE 220T RGB Airflow ATX Mid-Tower Smart Case - Black",
    price: 99.99,
    manufacturer: "Corsair",
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6370/6370550cv13d.jpg;maxHeight=640;maxWidth=550",
  },
  {
    id: 6337953,
    name: "TALOS ATX Mid-Tower Case",
    price: 159.99,
    manufacturer: "GAMDIAS",
    img:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6337/6337953cv11d.jpg;maxHeight=640;maxWidth=550",
  },
];

export default Products;
