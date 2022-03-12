export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  refer: string;
}

export const products = [
  {
    id: 1,
    name: 'MSI Gaming GeForce RTX 3050 8GB GDRR6 128-Bit HDMI/DP PCIe 4 Torx Twin Fans Ampere OC Graphics Card (RTX 3050 Ventus 2X 8G OC)',
    refer:
      'https://www.amazon.com/MSI-GeForce-RTX-3050-OC/dp/B09Q9SX3NY/ref=sr_1_2?crid=3Q29LH82P9N9O&keywords=rtx+3050&qid=1646862476&sprefix=rtx+%2Caps%2C478&sr=8-2',
    price: 599.99,
    rating: 4,
    description:
      'Chipset: GeForce RTX 3050 Video Memory 8GB GDDR6 Memory Interface: 128-bit Output: DisplayPort x 3 (v1.4a) / HDMI 2.1 x 1 Digital maximum resolution: 7680 x 4320',
    image: 'https://m.media-amazon.com/images/I/71hKMkVHYfL._AC_SX679_.jpg',
  },
  {
    id: 2,
    name: 'ZOTAC Gaming GeForce RTX 3060 Twin Edge OC 12GB GDDR6 192-bit 15 Gbps PCIE 4.0 Gaming Graphics Card, IceStorm 2.0 Cooling, Active Fan Control, Freeze Fan Stop ZT-A30600H-10M',
    refer:
      'https://www.amazon.com/ZOTAC-GeForce-Graphics-IceStorm-ZT-A30600H-10M/dp/B08W8DGK3X/ref=sr_1_1_sspa?crid=4NJ6LHQM8IM&keywords=rtx+3060&qid=1646863735&sprefix=rtx+3060%2Caps%2C868&sr=8-1-spons&psc=1&smid=A1LLZOUM6C4EQT&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVDdUWDJKUUVOQVIyJmVuY3J5cHRlZElkPUEwNzg4MjE1MlNNSk1XSDFLUkRXUCZlbmNyeXB0ZWRBZElkPUEwODg4MTQwMzNXTVhOWjNVTTBGWiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=',
    price: 699.0,
    rating: 5,
    description:
      'NVIDIA Ampere architecture, 2nd Gen Ray Tracing Cores, 3rd Gen Tensor Cores 12GB 192-bit GDDR6, 15 Gbps, PCIE 4.0; Boost Clock 1807 MHz IceStorm 2.0 Cooling, Active Fan Control, Freeze Fan Stop, Metal Backplate 8K Ready, 4 Display Ready, HDCP 2.3, VR Ready 3 x DisplayPort 1.4a, 1 x HDMI 2.1, DirectX 12 Ultimate, Vulkan RT API, OpenGL 4.6',
    image: 'https://m.media-amazon.com/images/I/7156DLyUsYL._AC_SX679_.jpg',
  },
  {
    id: 3,
    name: 'ZOTAC Gaming GeForce RTX™ 3070 Ti AMP Holo 8GB GDDR6X 256-bit 19 Gbps PCIE 4.0 Gaming Graphics Card, HoloBlack, IceStorm 2.0 Advanced Cooling, Spectra 2.0 RGB Lighting, ZT-A30710F-10P',
    refer:
      'https://www.amazon.com/ZOTAC-Graphics-HoloBlack-IceStorm-ZT-A30710F-10P/dp/B096TZHXYN/ref=sr_1_3?crid=L0EHV6X4KN7V&keywords=rtx+3070+ti&qid=1646863896&sprefix=rtx+3070%2Caps%2C673&sr=8-3',
    price: 1099.99,
    rating: 4.5,
    description:
      'NVIDIA Ampere architecture, 2nd Gen Ray Tracing Cores, 3rd Gen Tensor Cores 8GB 256-bit GDDR6X, 19 Gbps, PCIE 4.0; Boost Clock 1830 MHz HoloBlack, SPECTRA 2.0 RGB Lighting, IceStorm 2.0 Advanced Cooling, FREEZE Fan Stop, Active Fan Control, Lighted Metal Backplate 8K Ready, 4 Display Ready, HDCP 2.3, VR Ready 3 x DisplayPort 1.4a, 1 x HDMI 2.1, DirectX 12 Ultimate, Vulkan RT API, OpenGL 4.6',
    image: 'https://m.media-amazon.com/images/I/81I+u2AAe0L._AC_SX679_.jpg',
  },
  {
    id: 4,
    name: 'EVGA GeForce RTX 3080 Ti FTW3 Ultra Gaming, 12G-P5-3967-KR, 12GB GDDR6X, iCX3 Technology, ARGB LED, Metal Backplate',
    refer:
      'https://www.amazon.com/EVGA-GeForce-12G-P5-3967-KR-Technology-Backplate/dp/B09622N253/ref=sr_1_2?crid=ZJ8NQ2ZZCM7I&keywords=rtx+3080+ti&qid=1646864085&sprefix=rtx+3080%2Caps%2C589&sr=8-2',
    price: 1968.75,
    rating: 5,
    description:
      'Real Boost Clock: 1800 MHz; Memory Detail: 12288 MB GDDR6X Real-Time RAY TRACING in games for cutting-edge, hyper-realistic graphics Triple Fans + 9 iCX3 thermal sensors offer higher performance cooling and much quieter acoustic noise.All-Metal Backplate & Adjustable ARGB',
    image: 'https://m.media-amazon.com/images/I/81B2tCDJWgS._AC_SX679_.jpg',
  },
  {
    id: 5,
    name: 'ZOTAC Gaming GeForce RTX™ 3090 Trinity OC 24GB GDDR6X 384-bit 19.5 Gbps PCIE 4.0 Gaming Graphics Card, IceStorm 2.0 Advanced Cooling, Spectra 2.0 RGB Lighting, ZT-A30900J-10P',
    refer:
      'https://www.amazon.com/ZOTAC-Graphics-IceStorm-Advanced-ZT-A30900J-10P/dp/B08ZL6XD9H/ref=sr_1_2?crid=4G55QKRGKPUC&keywords=rtx+3090&qid=1646864188&sprefix=rtx+3090%2Caps%2C352&sr=8-2',
    price: 2502.99,
    rating: 5,
    description:
      'NVIDIA Ampere architecture, 2nd Gen Ray Tracing Cores, 3rd Gen Tensor Cores 24GB 384-bit GDDR6X, 19.5 Gbps, PCIE 4.0; Boost Clock 1710 MHz SPECTRA 2.0 RGB Lighting, IceStorm 2.0 Advanced Cooling, FREEZE Fan Stop, Active Fan Control, Metal Frontplate, Lighted Backplate 8K Ready, 4 Display Ready, HDCP 2.3, VR Ready 3 x DisplayPort 1.4a, 1 x HDMI 2.1, DirectX 12 Ultimate, Vulkan RT API, OpenGL 4.6',
    image: 'https://m.media-amazon.com/images/I/81JP9a4rCCS._AC_SX679_.jpg',
  },
  {
    id: 6,
    name: 'MSI NVIDIA GeForce RTX 2060 Graphic Card - 6 GB GDDR6',
    refer:
      'https://www.amazon.com/MSI-GeForce-RTX-2060-VENTUS/dp/B091PVFYXM/ref=sr_1_1?crid=HDONMFGS65LF&keywords=rtx+2060&qid=1646864310&sprefix=rtx+206%2Caps%2C396&sr=8-1',
    price: 599.99,
    rating: 5,
    description:
      'MSI AFTERBURNER TORX FAN 2.0 OC PERFORMANCE NVIDIA G-SYNC DUAL FAN THERMAL DESIGN SOLID BACKPLATE GEFORCE RTX VR',
    image: 'https://m.media-amazon.com/images/I/61in2eJQ1RL._AC_SX679_.jpg',
  },
  {
    id: 7,
    name: '(Renewed) MSI Gaming GeForce RTX 2070 Super 8GB GDRR6 256-bit HDMI/DP NVLink Torx Fan Turing Architecture Overclocked G-SYNC Graphics Card (RTX 2070 Super Ventus GP OC)',
    refer:
      'https://www.amazon.com/MSI-GeForce-Architecture-Overclocked-Graphics/dp/B08GG8DSTF/ref=sr_1_3?crid=1BAWCIH8OYJX6&keywords=rtx+2070&qid=1646864407&sprefix=rtx+2070%2Caps%2C632&sr=8-3',
    price: 939.99,
    rating: 4.5,
    description:
      'Chipset: NVIDIA GeForce RTX 2070 Super Boost Clock: 1785 MHz Video Memory: 8GB GDDR6 Memory Interface: 256-bit Output: DisplayPort x 3 (v1. 4) / HDMI 2. 0b x 1',
    image: 'https://m.media-amazon.com/images/I/61I1Wi4SQEL._AC_SX679_.jpg',
  },
  {
    id: 8,
    name: 'EVGA GeForce 08G-P4-3183-KR, RTX 2080 Super XC Ultra, Overclocked, 2.75 Slot Extreme Cool Dual, 70C Gaming, RGB, Metal Backplate, 8GB GDDR6 (Renewed)',
    refer:
      'https://www.amazon.com/EVGA-GeForce-08G-P4-3183-KR-Overclocked-Backplate/dp/B088DJQ2PQ/ref=sr_1_2?crid=2EM8SY0AT3ELX&keywords=rtx+2080&qid=1646864736&sprefix=rtx+208%2Caps%2C793&sr=8-2',
    price: 999.99,
    rating: 4,
    description:
      'Real Boost Clock: 1845 MHz; Memory Detail: 8192 MB GDDR6 Real time Ray tracing in games for cutting edge, hyper realistic Graphics Dual HDB fans offer higher performance cooling and much quieter acoustic noise All metal backplate & adjustable RGB. Max Monitors Supported - 4 3 year Warranty & EVGA top notch technical support',
    image: 'https://m.media-amazon.com/images/I/61CYVOCA4SL._AC_SX679_.jpg',
  },
  {
    id: 9,
    name: 'ZOTAC Gaming GeForce GTX 1660 Super 6GB GDDR6 192-bit Gaming Graphics Card, Super Compact, ZT-T16620F-10L',
    refer:
      'https://www.amazon.com/ZOTAC-GTX-1660-Graphics-ZT-T16620F-10L/dp/B07Z8PWC6R/ref=sr_1_1?keywords=gtx+1660+super&qid=1646864909&sprefix=gtx%2Caps%2C621&sr=8-1',
    price: 479,
    rating: 4.5,
    description:
      'New turing architecture Super compACt 6.83-inch card, fits 99% of systems Dual slot, 4k, hdr,VR ready 3 x DisplayPort 1.4, 1 x HDMI 2.0b Boost clock 1785 mhz',
    image: 'https://m.media-amazon.com/images/I/71AAVqtFfvL._AC_SX679_.jpg',
  },
  {
    id: 10,
    name: 'GTX 1050 superpuper mega card very cheap',
    refer:
      'https://www.amazon.com/Geforce-GTX-1050-Resolution-Graphics/dp/B09KTJGJMP/ref=sr_1_1_sspa?crid=D8BRZXJP4ME6&keywords=gtx+1050+ti&qid=1646865002&sprefix=gtx+1050%2Caps%2C635&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUFEWDdHN1k5TjZFTzYmZW5jcnlwdGVkSWQ9QTAwMjA2MjczVUVOMzBUQVhZMlBRJmVuY3J5cHRlZEFkSWQ9QTAxNzM2NzYxS1JJTkI4Q1NWRDdOJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
    price: 279.99,
    rating: 4,
    description:
      'The GPU of GT 1050 is easy to install, no pcie power connectors is required and ITX size perfect in any case. Superclocked performance with PCI Express 3.0. Also, the pci express graphics card has Triple Monitors Supports via DVI-D + DP 1.4 + HDMI 2.0b, providing high defination vision with 8K output, and ultimate high resolution of 4096*2160. In this way, the graphics cards make monitoring performance and streaming easier.',
    image: 'https://m.media-amazon.com/images/I/71Lo+CEQAzL._AC_SX679_.jpg',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
