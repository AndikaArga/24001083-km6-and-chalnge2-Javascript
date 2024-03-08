const getAngkaTerbesarKedua = (dataAngka) => {
  if (!Array.isArray(dataAngka)) return "ini bukan array";
  if (dataAngka.length === 0) return "array kosong";
  if (dataAngka.length === 1)
    return `datanya cuma satu, nih angkanya ${dataAngka[0]}`;
  if (dataAngka.some((e) => isNaN(e))) return "ada yang bukan number nih di arraynya";
  if (dataAngka.every((e) => e === dataAngka[0])) return `angkanya sama semua nih, ${dataAngka[0]} semua`
  dataAngka.sort((a, b) => b - a);
  let a = 1;
  while (dataAngka[a - 1] === dataAngka[a]) {
    a++;
  }
  return dataAngka[a];
};

const dataAngka = [9, 9, 9, 8,1,3,4,1];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua({}));
console.log(getAngkaTerbesarKedua([]));
console.log(getAngkaTerbesarKedua([1,1,1,1,1]));
console.log(getAngkaTerbesarKedua([1]));
console.log(getAngkaTerbesarKedua(2));
console.log(getAngkaTerbesarKedua());
console.log(getAngkaTerbesarKedua([2, "x"]));
console.log(getAngkaTerbesarKedua("2"));
