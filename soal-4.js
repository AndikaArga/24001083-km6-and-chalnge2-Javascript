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
  if(data === undefined) return "Error : parameternya enggak ada nih"
  if(!(data instanceof Array)) return "Error : tipe data bukan ini nih"
  if(data.length === 0) return "Error : array kosong apa yang mau diproses ?"
  const terjual = data.map((a) => {
    console.log(`${a.kategori} terjual ${a.totalTerjual} buah`);
    return a.totalTerjual;
  });
  const totalTerjual = terjual.reduce((total, nilai) => total + nilai);

  return `total sepatu yang terjual ${totalTerjual} buah`;
};

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
console.log(hitungTotalPenjualan(null));
console.log(hitungTotalPenjualan(1));
console.log(hitungTotalPenjualan([]));
console.log(hitungTotalPenjualan({}));

