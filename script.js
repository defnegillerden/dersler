function cevapKontrol(button, dogruCevap) {
  if (button.innerText === dogruCevap) {
    button.style.backgroundColor = "lightgreen";
    alert("Doğru!");
  } else {
    button.style.backgroundColor = "salmon";
    alert("Yanlış!");
  }
}
