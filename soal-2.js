const checkTypeNumber = (...givenNumber) => {
  if (givenNumber === undefined) return "error : Bro where is the parameter?";
  if (givenNumber.length > 1) return "error : terlalu banyak data";
  const angka = givenNumber[0];
  if (typeof angka === "number") {
    if (givenNumber % 2 === 0) {
      return "genap";
    } else {
      return "ganjil";
    }
  } else {
    return "error : Invalid data type";
  }
};

console.log(checkTypeNumber(1));
console.log(checkTypeNumber(1, 2, 3));
console.log(checkTypeNumber("2"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
