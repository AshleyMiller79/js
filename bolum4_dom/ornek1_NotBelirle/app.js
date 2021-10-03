var btnCevir = document.getElementById("btn");
var notu;
btnCevir.onclick = function () {
  var puan = Number(document.getElementById("txtPuan").value);
  if (puan >= 0 && puan < 50) {
    notu = 1;
  } else if (puan >= 50 && puan < 60) {
    notu = 2;
  } else if (puan >= 60 && puan < 70) {
    notu = 3;
  } else if (puan >= 70 && puan < 85) {
    notu = 4;
  } else if (puan >= 85 && puan <= 100) {
    notu = 5;
  } else {
    notu = -1;
    alert("Geçersiz Puan Girdiniz.");
  }

  document.getElementById("sonuc").innerHTML = "Notunuz : " + notu;
};
