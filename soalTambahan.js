let arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

let start = 1;
let temp = 0;
let item;

for (let i = 0; i < arr1.length; i++) {
  for (let j = i; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) {
      temp++;
    }
    if (start < temp) {
      start = temp;
      item = arr1[i];
    }
  }
  temp = 0;
}

console.log(`data ${item} sebanyak ${start} kali`);
