const changeword = (...data) => {
  if (data.length != 3) return "data tidak sesuai";
  const [selectedText, changeText,text] = data
  return text.replace(selectedText, changeText);
};

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 =
  "Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu :D";
console.log(changeword("mencintai", "membenci", kalimat1));
console.log(changeword("bromo", "semeru", kalimat2));

