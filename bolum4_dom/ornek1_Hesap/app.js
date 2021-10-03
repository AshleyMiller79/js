var btnHesapla = document.getElementById("btn");
var sonuc;
btnHesapla.onclick = function () {
  var islem = document.getElementById("islemler").value;
  var s1 = Number(document.getElementById("txtSayi1").value);
  var s2 = Number(document.getElementById("txtSayi2").value);

  if (islem == "topla") {
    sonuc = s1 + s2;
  } else if (islem == "cikar") {
    sonuc = s1 - s2;
  } else if (islem == "carp") {
    sonuc = s1 * s2;
  } else if (islem == "bol") {
    sonuc = s1 / s2;
  } else {
    alert("Seçim Yapın.");
  }

  alert("Sonuç : " + sonuc);
};
