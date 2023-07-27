// a-z = 97-122
// A-Z = 65-90
let newStr = "";
let hashInput = document.getElementById("hash");
let hashLabel = document.querySelector("label");

hashInput.addEventListener("input", () => {
  hashLabel.textContent = hash(hashInput.value);
});
hashLabel.addEventListener("click", () => {
  navigator.clipboard.writeText(hashLabel.textContent);
});

function hash(str) {
  newStr = "";
  for (let s of str) {
    let charCode = s.charCodeAt(0);
    newStr += String.fromCharCode(wrapNum(charCode, [97, 122]));
  }
  return newStr;
}

function wrapNum(x, range) {
  let max = range[1],
    min = range[0],
    d = max - min;
  return x === max ? x : ((((x - min) % d) + d) % d) + min;
}
