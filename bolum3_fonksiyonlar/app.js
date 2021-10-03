// * =======================================================
// *                    FONKSİYONLAR
// * =======================================================

// ! 1.YÖNTEM  : FUNCTION DECLARATION
// Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasından önce veya sonra olabilir.

// Fonksiyonun tanımlanması
function yazdirAd() {
  console.log("İpek");
}
yazdirAd(); // Fonks. çağrılması| call | invoke
//*************************************** */
// Örnek: Parametreli Fonksiyon (burada parametrelerin veri tipi yok,javada vardı )
function yazdirAdYas(ad, yas) {
  console.log(`Adiniz ${ad} Yasiniz ${yas}`);
}
yazdirAdYas("Hakan", 23); // Call | invoke
yazdirAdYas("Isabel", 10);


// todo 
// Örnek: Klavyeden girilen sayinin tek veya cift oldugunu donduren bir fonksiyon yaziniz.

const sayiniz = prompt("Sayinizini giriniz:");
console.log(tekCift(sayiniz));
//buradaki sayiniz ile prompt tan gelen sayiniz aynı olmalı.alttaki function farklı olabilir, $ içleri ister üstteki ister alttaki değişkeni alabilir

function tekCift(sayimiz) {
  return sayimiz % 2 == 0 ? `${sayimiz} Çifttir` : `${sayimiz} Tektir`; 
  //! sayimiz %2 ? tek:çift ==>kısa yol
  //burayı bir değişkene atayıp onu return etsekte olur
}

// ! 2.YÖNTEM (bu yöntem daha yaygın) : FUNCTION EXPRESSION(fonksiyonu değişkene atamak. burada önce fonk tanımlamalı sonra fonk çağırmalıyız)
const tekCift1 = function (sayı) {
  return sayı % 2 == 0 ? "ÇİFT" : "TEK";
};
console.log(tekCift1(5)); // invoke

// ORNEK: Buyuk sayiyi bulma
let buyukBul = function (x, y, z) {
  let enBuyuk;
  if (x > y && x > z) {
    enBuyuk = x;
  } else if (y > x && y > z) {
    enBuyuk = y;
  } else if (z > x && z > y) {
    enBuyuk = z;
  }
  return enBuyuk;
};

console.log(`En büyük:${buyukBul(5, 3, 8)}`);

// ! 3.YÖNTEM  : ARROW (OK) FONKSIYONLARI (function yazmadan; ()=> ile)
// Ornek
const ciftMi = (sayi) => (sayi % 2 == 0 ? "çift" : "tek");
console.log(ciftMi(5));
console.log(ciftMi(2));


const topla = (a, b) => a + b; // Arrow fonk tanimlamasi
console.log(topla(5, 2)); // invoke
console.log(topla(3, 10)); // invoke



// * Ornek: Us alma
const taban = prompt("taban giriniz");
const us = prompt("us giriniz");
const usAl = (t, u) => t ** u;
console.log(usAl(taban, us));

// * Ornek: Menü
// ! Ok fonksiyonunda birden fazla ifade var ise fonksiyonda suslu parantez kullanmalıyız.
const menu = () => {
  console.log("===============================");
  console.log("      JAVASCRIPT DERSI         ");
  console.log("===============================");
};

menu();

// Ornek: Bilgi Ver fonksiyonu
// * 1.YOL (return kullanarak) (ve satır arttığı için  mecburen süslü parantez) (fonk çağırma 149 da, 2 örnek için ortak, o yüzden kapattık)
// const bilgiVer = (ad, soyad, dogum) => {
//   const bilgi = `Adim ${ad}, Soyadim ${soyad} ve yasim ${2021 - dogum}`;
//   return bilgi;
// };

// * 2.YOL (direk yazdır)
const bilgiVer = (ad, soyad, dogum) =>
  `Adim ${ad}, Soyadim ${soyad} ve yasim ${2021 - dogum}`;

console.log(bilgiVer("Koray", "Cakır", 1959));

// * ORNEK: Silindirin hacmini hesaplayan bir fonksiyon yaziniz.
const r = prompt("Yaricapi giriniz:");
const h = prompt("Yukseklik giriniz:");

const hacimHesapla = (r, H) => Math.PI * r * r * H;
// * En yakın sayiya yuvarlar.
console.log("Silindir Hacmi:" + Math.round(hacimHesapla(r, h)));
// * Virgulden sonra 2 basamak alir.
console.log("Silindir Hacmi:" + hacimHesapla(r, h).toFixed(2));



//********************************************** */
// Örnek: Parametreli, dönüş değerli Fonksiyon
//  2021 de mutlu olacak miyim ? Oyunu yapalim. Kullaniciya adini sorun,
//             0-100 arasi bir sayi uretin
//               - sayi 80’den buyukse “yasasin (isim) 2021 de cooooook mutlu olacaksin”
//               - sayi 60-80 arasi ise “(isim) 2021 de mutlu olacaksin”
//               - sayi 30-60 arasi ise “(isim) 2021 de mutlu olursun”
//               - sayi 30’dan kucuk ise “maalesef (isim) 2021 sana yaramayacak”
//                     yazdiralim
// var isim = prompt("Isminizi soyler misiniz?");
// var sayi = Random(100);
// function Random(sayi) {
//   return Math.floor(Math.random() * sayi);
// }
// if (sayi > 80) {
//   alert(`yasasin ${isim} 2021 de cooooook mutlu olacaksin`);
// } else if (sayi > 60) {
//   alert(`${isim} 2021 de mutlu olacaksin`);
// } else if (sayi > 30) {
//   alert(`${isim} 2021 de umarim mutlu olursun`);
// } else {
//   alert(`maalesef ${isim} 2021 sana yaramayacak`);
// }


// Kullaniciya gunde kac cay ictigini ve kac seker kullandigini sorun.
// Bir yilda ve 40 yilda kac kg seker kullandigini hesaplayip yazdiran fonksiyon yazin
// 1 seker = 1.7 gr

// 1.yontem
//
// yillikSekerHesabi();
// function yillikSekerHesabi(){
// var kacCay=prompt("Gunde kac cay iciyorsunuz?");
// var kacSeker=prompt("her caya kac seker atiyorsunuz?");
// var yildaSeker=(365*kacCay*kacSeker*1.7/1000).toFixed(1);
// console.log("Yilda " + yildaSeker + " kg seker tuketiyorsunuz");
// }
// 2.yontem
// once kullanicidan degerleri alalim, fonksiyon sadece hesap yapip yazdirsin
// var kacCay=prompt("Gunde kac cay iciyorsunuz?");
// var kacSeker=prompt("her caya kac seker atiyorsunuz?");
// yildaSekerParametreli(kacCay,kacSeker);
// function yildaSekerParametreli(cay,seker){
//     var yillikSekerTuketimi= (365*cay*seker*1.7/1000).toFixed(1);
//     console.log(yillikSekerTuketimi);
// }

// var kacCay = prompt("Gunde kac cay iciyorsunuz?");
// var kacSeker = prompt("her caya kac seker atiyorsunuz?");
// var kirkYil = 40 * yildaSekerParametreli(kacCay, kacSeker);
// console.log(kirkYil);
// function yildaSekerParametreli(cay, seker) {
//   var yillikSekerTuketimi = ((365 * cay * seker * 1.7) / 1000).toFixed(1);
//   return yillikSekerTuketimi;
// }