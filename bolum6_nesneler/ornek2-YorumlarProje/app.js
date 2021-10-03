"use strict";
import Yorumlar from "./data.js";
// Bilgilere erişelim
const foto = document.getElementById("kisi-resim");
const yazar = document.getElementById("yazar");
const aciklama = document.getElementById("aciklama");
const is = document.getElementById("meslek");

// Butonlara eriselim
const ileriBtn = document.querySelector(".ileri-btn");
const geriBtn = document.querySelector(".geri-btn");
const rasgeleBtn = document.querySelector(".rasgele-btn");

let index = 0;

const kisiyiGoster = function (index) {
  const kisi = Yorumlar[index];
  const { resim, ad, meslek, yorum } = kisi; // Destructring. dizi içindeki isimlerinden farklı verdik çünkü karıştırıyor
  foto.src = resim;
  yazar.textContent = ad;
  is.innerHTML = meslek;
  aciklama.textContent = yorum;
};

kisiyiGoster(index);

ileriBtn.onclick = function () {
  index++;
  if (index > Yorumlar.length - 1) {
    index = 0;
  }
  kisiyiGoster(index);
};

geriBtn.onclick = function () {
  index--;
  if (index < 0) {
    index = Yorumlar.length - 1;
  }
  kisiyiGoster(index);
};

rasgeleBtn.onclick = function () {
  // index en üstte tanımlanmış heryerde geçerli, şaşırt herhangi bir yerde kaldığında ileri basınca kalınan yerden devam etmek için burda da index kullanmalı
  index = Math.floor(Math.random() * Yorumlar.length);
  kisiyiGoster(index);
};
