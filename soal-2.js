const checkTypeNumber = (givenNumber) => {
  if (typeof givenNumber === "number") {
    if (givenNumber % 2 === 0) {
      return "genap";
    } else if (givenNumber % 2 === 1) {
      return "ganjil";
    }
  } else {
    return "ini bukan angka, cau cibe";
  }
};

console.log(checkTypeNumber(1));
console.log(checkTypeNumber("2"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
