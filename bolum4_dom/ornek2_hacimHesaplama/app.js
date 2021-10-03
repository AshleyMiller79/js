// Butona her tiklandiginda calisir.
function hesapla() {
  // ! Class'lara erişim için .class_adı
  // ! id'li bir HTML elemanına erisim için ise #id
  const r = document.getElementById("r").value;
  //console.log(r); // !bunu yaparak (üsttekinin value sini de silip yap) console da neye ulaştığmızı göster
  const h = document.querySelector(".h").value;
  const sonuc = (Math.PI * r * r * h).toFixed(2);
  document.querySelector(".hacim").textContent = sonuc; //innerHTML de olur
}

// Butonun stillendirmesi icin(burada da stil verebiliriz, camelcase kullanılır ve tercih edilmez. css daha iyi)
const buton = document.querySelector(".btn");
buton.style.color = "red";
buton.style.backgroundColor = "black";
buton.style.width = "100px";
