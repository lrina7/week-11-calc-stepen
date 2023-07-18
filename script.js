const button = document.querySelector(".button");
const result = document.querySelector(".result");


button.onclick = function (event) {
  event.preventDefault();
  let n = document.querySelector(".number").value;
  n = +(n * n);
  result.textContent = n;
}
