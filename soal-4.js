const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Maroon High ",
    kategori: "Sepatu Sneaker",
    hargaSatuan: 360000,
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Rainbow Tosca Corduroy",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

const hitungTotalPenjualan = (data) => {
  let total = 0;
  for (let a = 0; a < data.length; a++) {
    const { kategori, totalTerjual } = data[a];
    console.log(`${kategori} terjual = ${totalTerjual} buah`);
    total = total + totalTerjual;
  }
  return `total semua = ${total} buah`;
};

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
