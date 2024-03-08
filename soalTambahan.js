const hitungFrequency = (...dataArray) => {
  if (dataArray.length > 1)
    return "error : data yang dimasukkan terlalu banyak";
  const data = dataArray[0];
  if (data === undefined) return "error : tidak ada parameter";
  if (!Array.isArray(data)) return "error : bukan array";
  if (data.length === 0) return "error : arraynya masih kosong";
  if (data.length === 1) return `error : hanya ada 1 data yaitu ${data[0]}`;

  let maxFrequency = 0;
  let mostFrequentItems;

  const frequency = {};

  data.forEach((e) => {
    if (frequency[e]) {
      frequency[e]++; //{e : 1 + 1}
    } else {
      frequency[e] = 1; //{e : 1}
    }

    if (frequency[e] > maxFrequency) {
      maxFrequency = frequency[e];
      mostFrequentItems = [e];
    } else if (frequency[e] === maxFrequency) {
      mostFrequentItems.push(e);
    }
  });

  return `item ${mostFrequentItems} muncul sebanyak ${maxFrequency} kali`;
};

let arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
let arr2 = [3];
let arr3 = [3, 3, 4, 4];
let arr4 = [1, 2, 3, 4, 5];

console.log(hitungFrequency(arr1));
console.log(hitungFrequency(arr3));
console.log(hitungFrequency(arr4));
console.log(hitungFrequency(arr2, arr1));