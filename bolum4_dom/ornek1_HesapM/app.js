function hesapEt(sonuc) {
  if (form.displayResult.value == 0) {
    form.displayResult.value = sonuc;
  } else {
    form.displayResult.value = form.displayResult.value + sonuc;
  }//yukarıda hesap mak için kısa olsun diye yeni bir yol öğrendik
}
//altta öğrendiğimiz klasik yolu tercih ettik
document.querySelector(".bos").onclick = function () {
  document.querySelector(".ekranBorder").value = "";
};
