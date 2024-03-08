const changeword = (...data) => {
  if (data.length != 3) return "error : data yang dimasukkan terlalu banyak";
  const [selectedText, changeText,text] = data
  return text.replace(selectedText, changeText);
};

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu :D";
console.log(changeword("mencintai", "membenci", kalimat1));
console.log(changeword("bromo", "semeru", kalimat2));
console.log(changeword("mencintai", "membenci","melukai", kalimat1));

