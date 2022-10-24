const textInput = document.querySelector("#text-input");
const submit = document.querySelector(".submit-text");
const output = document.querySelector(".output");
const clear = document.querySelector(".clear");

let morse = [
  ".-",
  "-...",
  "-.-.",
  "-..",
  ".",
  "..-.",
  "--.",
  "....",
  "..",
  ".---",
  "-.-",
  ".-..",
  "--",
  "-.",
  "---",
  ".--.",
  "--.-",
  ".-.",
  "...",
  "-",
  "..-",
  "...-",
  ".--",
  "-..-",
  "-.--",
  "--..",
  "-----",
  ".----",
  "..---",
  "...--",
  "....-",
  ".....",
  "-....",
  "--...",
  "---..",
  "----.",
];
let letters = {
  a: morse[0],
  b: morse[1],
  c: morse[2],
  d: morse[3],
  e: morse[4],
  f: morse[5],
  g: morse[6],
  h: morse[7],
  i: morse[8],
  j: morse[9],
  k: morse[10],
  l: morse[11],
  m: morse[12],
  n: morse[13],
  o: morse[14],
  p: morse[15],
  q: morse[16],
  r: morse[17],
  s: morse[18],
  t: morse[19],
  u: morse[20],
  v: morse[21],
  w: morse[22],
  x: morse[23],
  y: morse[24],
  z: morse[25],
  0: morse[26],
  1: morse[27],
  2: morse[28],
  3: morse[29],
  4: morse[30],
  5: morse[31],
  6: morse[32],
  7: morse[33],
  8: morse[34],
  9: morse[35],
};

submit.addEventListener("click", () => {
  let inputValue = textInput.value;
  function translate(letter) {
    return letter
      .toLowerCase()
      .split("")
      .map((el) => {
        return letters[el] ? letters[el] : el;
      })
      .join("/");
  }
  output.textContent = translate(inputValue);
});

clear.addEventListener("click", () => {
  let inputs = [textInput];
  inputs.forEach((item) => {
    return (item.value = "");
  });
  return (output.textContent = "");
});

document.onkeydown = function (evt) {
  var keyCode = evt ? (evt.which ? evt.which : evt.keyCode) : event.keyCode;
  if (keyCode == 13) {
    let inputValue = textInput.value;
    function translate(letter) {
      return letter
        .toLowerCase()
        .split("")
        .map((el) => {
          return letters[el] ? letters[el] : el;
        })
        .join("/");
    }
    output.textContent = translate(inputValue);
  }
};
