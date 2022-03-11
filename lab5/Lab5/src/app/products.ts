export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: string;
  link: string;
  category_id: number;
  show: boolean;
  like: number;
}

export const products = [
  {
    id: 1,
    name: 'Apple iPhone 11 Pro, 64GB, Space Gray',
    price: 446,
    description: 'Model Name IPhone 11 Pro Wireless Carrier Unlocked Brand Apple Form Factor Smartphone Memory Storage Capacity 64 GB Operating System IOS Color Space Gray Cellular Technology 4G SIM card slot count Single SIM Year 2018',
    rating: '4.4 / 5',
    image: 'https://m.media-amazon.com/images/I/81x9I9qXbmL._AC_SY550_.jpg',
    link: 'https://www.amazon.com/Apple-iPhone-64GB-Space-Gray/dp/B07ZPKZSSC/ref=sr_1_1?crid=11JR58TEYJK1J&keywords=iphone&qid=1646856265&sprefix=iphone%2Caps%2C337&sr=8-1',
    category_id : 1,
    show: true,
    like: 0
  },
  {
    id: 2,
    name: 'Apple iPhone 12 Pro, 128GB, Pacific Blue',
    price: 849,
    description: 'Model Name IPhone 12 Pro Wireless Carrier Unlocked Brand Apple Form Factor Smartphone Memory Storage Capacity 128 GB Operating System IOS 12 Color Pacific Blue Cellular Technology LTE Included Components SIM Tray Ejector, USB Cable Display Type OLED',
    rating: '3.5 / 5',
    image: 'https://m.media-amazon.com/images/I/712yl2wTDbL._AC_SX522_.jpg',
    link: 'https:%www.amazon.com%Apple-iPhone-12-Pro-Pacific%dp/B09JFNMBWL%ref=sr_1_1?crid=1MSBCK3U45UVH&keywords=Apple+iPhone+12+Pro%2C+128GB%2C+Pacific+Blue&qid=1646859749&sprefix=iphone%2Caps%2C252&sr=8-1',
    category_id : 1,
    show: true,
    like: 0
  },
  {
    id: 3,
    name: 'Apple iPhone 12, 64GB, Blue',
    price: 659,
    description: 'Model Name IPhone 12 Wireless Carrier Unlocked Brand Apple Form Factor Smartphone Memory Storage Capacity 64 GB Operating System IOS 14 Color Blue Cellular Technology 5G Included Components Charging cable and block, and sim tray removal tool Screen Size 6.1 Inches',
    rating: '5 / 5',
    image: 'https://m.media-amazon.com/images/I/7117DN7UkKL._AC_SY550_.jpg',
    link: 'https://www.amazon.com/Apple-iPhone-12-64GB-Blue/dp/B09JFTPQY1/ref=sr_1_5?crid=11JR58TEYJK1J&keywords=iphone&qid=1646856265&sprefix=iphone%2Caps%2C337&sr=8-5',
    category_id : 1,
    show: true,
    like: 0
  },
  {
    id: 4,
    name: 'Apple Watch Series 4 (GPS, 40MM) - Silver Aluminum Case with White Sport Band',
    price: 213,
    description: 'Brand Apple Color Blue Aluminum Case Special Feature Time Display, Sleep Monitor, Text Messaging, GPS Compatible Devices Smartphone Screen Size 44 Millimeters Operating System WatchOS Age Range (Description) Adult Style Deep Navy Sport Band Connectivity Technology GPS Case Material Aluminum',
    rating: '4.4 / 5',
    image: 'https://m.media-amazon.com/images/I/51Vi2ob5G6L._AC_SX466_.jpg',
    link: 'https://www.amazon.com/Apple-Watch-GPS-40mm-Aluminum/dp/B07P6N1FKS/ref=sr_1_4?crid=1VSHP3R1JD7UO&keywords=apple+watch&qid=1646858622&sprefix=apple+watch%2Caps%2C291&sr=8-4',
    category_id : 3,
    show: true,
    like: 0
  },
  {
    id: 5,
    name: 'Apple Watch Series 6 (GPS, 44mm) - Blue Aluminum Case with Deep Navy Sport Band',
    price: 274,
    description: 'Brand Apple Color Blue Aluminum Case Special Feature Time Display, Sleep Monitor, Text Messaging, GPS Compatible Devices Smartphone Screen Size 44 Millimeters Operating System WatchOS Age Range (Description) Adult Style Deep Navy Sport Band Connectivity Technology GPS Case Material Aluminum',
    rating: '4.5 / 5',
    image: 'https://m.media-amazon.com/images/I/71DDA+p+QqL._AC_SX522_.jpg',
    link: 'https://www.amazon.com/New-Apple-Watch-GPS-44mm/dp/B08KTW1YD3/ref=sr_1_5?crid=1VSHP3R1JD7UO&keywords=apple+watch&qid=1646858829&sprefix=apple+watch%2Caps%2C291&sr=8-5',
    category_id : 3,
    show: true,
    like: 0
  },
  {
    id: 6,
    name: '2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Silver',
    price: 1249,
    description: 'Model Name MacBook Pro Brand Apple Specific Uses For Product Personal, Gaming, Business Screen Size 13.3 Inches Operating System Mac OS CPU Manufacturer Apple Graphics Card Description Integrated Color Silver Connectivity Technology Bluetooth, Wi-Fi, USB Hard Disk Size 256 GB',
    rating: '4.8 / 5',
    image: 'https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_UY327_FMwebp_QL65_.jpg',
    link: 'https://www.amazon.com/Apple-MacBook-13-inch-256GB-Storage/dp/B08N5LLDSG/ref=sr_1_1?crid=S4VIUY8YBIQZ&keywords=macbook&qid=1646858884&sprefix=%2Caps%2C226&sr=8-1',
    category_id : 2,
    show: true,
    like: 0
  },
  {
    id: 7,
    name: 'Apple MacBook Pro 13-inch MD313LL/A (4GB RAM, 500GB HD, macOS 10.13)',
    price: 230,
    description: 'Series IPad Brand Apple Screen Size 9.7 Inches Operating System MacOS 10.13 High Sierra CPU Manufacturer Intel Color Silver Hard Disk Size 500 GB Processor Count 1 CPU Model Unknown Item Weight 4.8 Pounds',
    rating: '3,8 / 5',
    image: 'https://m.media-amazon.com/images/I/71k5eyE2z9S._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Apple-MacBook-MD313LL-500GB-macOS/dp/B07MWFZRNP/ref=sr_1_2?crid=S4VIUY8YBIQZ&keywords=macbook&qid=1646858949&sprefix=%2Caps%2C226&sr=8-2',
    category_id : 2,
    show: true,
    like: 0
  },
  {
    id: 8,
    name: 'Apple 13in MacBook Pro, Retina Display, 2.3GHz Intel Core i5 Dual Core, 8GB RAM, 128GB SSD, Space Grey, MPXQ2LL/A',
    price: 519,
    description: 'Series FBA_MPXQ2LL/A Brand Apple Screen Size 13.3 Inches Operating System MacOS 10.14 Mojave Human Interface Input Touch Pad CPU Manufacturer Intel Card Description Integrated Color Space Grey Hard Disk Size 128 GB Processor Count 2',
    rating: '4.1 / 5',
    image: 'https://m.media-amazon.com/images/I/71nM55mRvxL._AC_SL1475_.jpg',
    link: 'https://www.amazon.com/Apple-MacBook-Display-MPXQ2LL-Refurbished/dp/B078GX9R5W/ref=sr_1_3?crid=S4VIUY8YBIQZ&keywords=macbook&qid=1646858949&sprefix=%2Caps%2C226&sr=8-3',
    category_id : 2,
    show: true,
    like: 0
  },
  {
    id: 9,
    name: 'Apple AirPods (3rd Generation)',
    price: 135,
    description: 'Brand Apple Ear Placement In Ear Color White Connectivity Technology Wireless, Apple H1 Chip Model Name AirPods',
    rating: '4.1 / 5',
    image: 'https://m.media-amazon.com/images/I/61ZRU9gnbxL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Apple-AirPods-3rd-Generation-Renewed/dp/B09M94KXPN/ref=sr_1_5?keywords=airpods&qid=1646859097&sprefix=air%2Caps%2C331&sr=8-5',
    category_id : 4,
    show: true,
    like: 0
  },
  {
    id: 10,
    name: 'Apple AirPods Pro',
    price: 159,
    description: 'Brand Apple Color White Connectivity Technology Wireless Model Name AirPods Pro Form Factor In Ear',
    rating: '3.3 / 5',
    image: 'https://m.media-amazon.com/images/I/71lj9Fdeq0L._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Apple-AirPods-Pro-Renewed/dp/B09N9VRCZV/ref=sr_1_6?keywords=airpods&qid=1646859097&sprefix=air%2Caps%2C331&sr=8-6',
    category_id : 4,
    show: true,
    like: 0
  },
];
