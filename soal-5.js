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
  let totalUntung = 0,
    totalModal = 0,
    bukuTerlaris = "",
    penulistTerlaris = "",
    PresentaseUntung = 0,
    bukuTerjual = 0;
  for (let a = 0; a < data.length; a++) {
    const { hargaBeli, hargaJual, totalTerjual, penulis, namaProduk } = data[a];
    totalModal = totalModal + hargaBeli;
    totalUntung = totalUntung + (hargaJual - hargaBeli);
    if (totalTerjual > bukuTerjual) {
      bukuTerjual = totalTerjual;
      penulistTerlaris = penulis;
      bukuTerlaris = namaProduk;
    }
  }
  PresentaseUntung = (totalUntung / totalModal) * 100;

  return {
    totalKeuntunga: `Rp. ${totalUntung.toLocaleString()}`,
    totalModal: `Rp. ${totalModal.toLocaleString()}`,
    presentaseKeuntungan: PresentaseUntung.toLocaleString() + "%",
    produkBukuTerlaris: bukuTerlaris,
    penulisTerlaris: penulistTerlaris,
  };
};

console.log(hitungTotalPenjualan(dataPenjualanNovel));
