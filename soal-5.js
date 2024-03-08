const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

const hitungTotalPenjualan = (data) => {
if (data === undefined) return "Error : tidak ada data yang ditemukan"
if(!(data instanceof Array)) return "Error : kesalahan tipe data"
if(data.length === 0) return "Error : array kosong apa yang mau diproses ?"

  const totalModal = data
    .map((a) => (a.sisaStok + a.totalTerjual) * a.hargaBeli)
    .reduce((total, nilai) => total + nilai);
  const totalKeuntungan = data
    .map((a) => (a.hargaJual - a.hargaBeli) * a.totalTerjual)
    .reduce((total, nilai) => total + nilai);
  const persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(
    2
  );
  const penjualanTerbanyak = Math.max(...data.map((a) => a.totalTerjual));
  const bukuTerlaris = data.find((e) => e.totalTerjual === penjualanTerbanyak);
  return {
    totalModal: `Rp. ${totalModal.toLocaleString()}`,
    totalKeuntungan: `Rp. ${totalKeuntungan.toLocaleString()}`,
    persentaseKeuntungan: `${persentaseKeuntungan}%`,
    penulisTerlaris: `${bukuTerlaris.namaProduk}`,
    bukuTerlaris: `${bukuTerlaris.penulis}`,
  };
};

console.log(hitungTotalPenjualan(dataPenjualanNovel));
console.log(hitungTotalPenjualan());
console.log(hitungTotalPenjualan([]));
console.log(hitungTotalPenjualan({}));
console.log(hitungTotalPenjualan());
console.log(hitungTotalPenjualan("2"));
