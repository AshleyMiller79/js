// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                        DİZİLERDE İTERASYON
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ======================================================
//                     FOR DÖNGÜSÜ
// ======================================================

const koordinatlar = [120, 100, -100, 220, 330, -50];
let negatif = 0;
let pozitif = 0;

for (let i = 0; i < koordinatlar.length; i++) {
  koordinatlar[i] < 0
    ? (negatif = negatif + koordinatlar[i])
    : (pozitif = pozitif + koordinatlar[i]);
}

console.log(
  `Negatif Koordinat Sayısı: ${negatif} Pozitif Koordinat sayisi ${pozitif}`
);

// ======================================================
//                   FOR IN DÖNGÜSÜ
// ======================================================
// üstteki sorunun for in hali
// for (let i in koordinatlar) {
//   koordinatlar[i] < 0
//     ? (negatif = negatif + koordinatlar[i])
//     : (pozitif = pozitif + koordinatlar[i]);
// }
//-------------------------------------------------------
// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
// bir dizide saklandığı varsayalım.Bu hayvanları türüne
// göre aramamızı sağlayacak ve o türden kaç adet bulunduğu
//  ana programa döndürecek fonksiyonu yazınız. Eğer o
// türden bir hayvan yok ise bulunamadığını yazdırsın.
//--------------------------------------------------------

const hayvanlar = ["fil", "deve", "kuş", "deve", "fare", "kedi", "deve"];
const ara = prompt("aramak istenilen hayvan türünü giriniz:").toLowerCase();
function bulDondur(ara) {
  let hayvanSayisi = 0;
  for (let i in hayvanlar) {
    if (hayvanlar[i] == ara) {
      hayvanSayisi++;
    }
  }
  hayvanSayisi == 0
    ? console.log("Aradiginiz hayvan bulunamadi")
    : ara == "kuş"
    ? console.log(`Aradiginiz ${ara} 'tan ${hayvanSayisi} tane bulunmaktadir`)
    : console.log(`Aradiginiz ${ara} 'den ${hayvanSayisi} tane bulunmaktadir`);
} // scope içinde return yaparak, 50 den sonrasını scope dışına yazabilirsin
// bulDondur(ara);
// const bulDondur = function () {
//   let hayvanSayisi = 0;
//   for (let i in hayvanlar) {
//     if (hayvanlar[i] == ara) {
//       hayvanSayisi++;
//     }
//   }
//   return hayvanSayisi;
// };
bulDondur(ara);

// ======================================================
//                   FOR OF DÖNGÜSÜ
// for of for in e göre daha kapsamlı daha gelişmişi,in=sadece dizi ve objelerde kullanılır. for of extra map set vs. for döngüsü en hızlısı======================================================

// for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.
let arabalar = ["BMW", "Volvo", "Mini"];
let yazı = "";
for (let i of arabalar) {
  console.log(i);
  yazı += i + " "; // i:  dizinin i. elemani demektir.
}
console.log(yazı);

// ======================================================
//                  ! FOREACH METODU (array iterasyon yöntemi. orjinal diziyi değiştirir, değiştirmesin istersek yeni dizi açıp elemanları bozup ona yollarız. fiyatlar sorusu)
// ======================================================

//-------------- ÖRNEK -------------------
let ogrenciler = ["John", "Ali", "Can"];

function yazdır(w) {
  console.log(w);
}
//ogrenciler e gidiyor foreach ile herbir elemanı 87 de func'a a ya gönderiyor
ogrenciler.forEach(yazdır);
//2. yol. diğerinde=>ok yerine x in solunda function yazar
ogrenciler.forEach((x) => console.log(x));

//-------------- ÖRNEK -------------------
const fiyatlar = [200, 300, 125, 450, 333, 123];
let toplam = 0;
fiyatlar.forEach((f) => (toplam += f));
console.log(toplam);
document.querySelector(".toplam").innerHTML = `${toplam} TL`;
//TL yazdırmak istemezsek ${}lara gerek kalmaz, sadece toplam yazabiliriz
//-------------- ÖRNEK -------------------
// forEach ile Parametre kullanım detaylari
toplam = 0;
fiyatlar.forEach((a, i, dizi) => {
  // a=dizinin herbir elemanı. i=indis. dizi =gereksiz
  toplam += a;
  console.log(` ${i} . iterasyon: ${toplam}`);
});

console.log(toplam);
document.querySelector(".toplam").innerHTML = `${toplam} TL`;

//-------------- ÖRNEK -------------------
// fiyatlar dizisinde her bir fiyata %10 zam yapalım.
let toplamFiyat = 0;
let yeniFiyat = []; //orjinal dizi değişmesin istersek=> yeniFiyat
fiyatlar.forEach((deger, indis) => {
  yeniFiyat[indis] = (deger * 1.1).toFixed(2);
});
console.log(yeniFiyat);
// orjinal dizi değişsin istersek forEach içine (118 in oraya)=> (deger,indis,dizi)=>(dizi[indis]=(deger*1.1) der console da fiyatlar ı yazdırırız
// ======================================================
//                      ! MAP METODU (forEach gibi dizi içinde tek tek dolaşır, orjinal diziyi değiştirmez)
// ======================================================

//-------------- ÖRNEK -------------------
// Örnek : Dizinin herbir elemaninin 2 katını aliniz.

const rakamlar = [3, 5, 3, 2, 6, 7, 9];
const ikiKat = rakamlar.map((x) => x * 2);
console.log(ikiKat, rakamlar);

//-------------- ÖRNEK -------------------
// isimler dizisin içerisindeki her ismi büyük harf olarak
// yeni bir diziye saklayalım.
const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

// map() metodu normal şartlarda bir dizi döndürür.
const buyuk = isimler.map((isim) => isim.toUpperCase());
//console.log(buyuk) direk böyle de yazdırabiliriz
buyuk.forEach((isim) => console.log(isim)); //tek tek yazdırdık

// map() metodundan sonra eğer forEach gibi bir terminal işlemi
// kullanılırsa map() metodu bir dizi döndürmez,forEach diziyi tüketir, map in return üne izin vermez.
isimler.map((isim) => isim.toUpperCase()).forEach((isim) => console.log(isim));
//console.log(isimler); forEach diziyi tükettiği için boş döndürür
//-------------- ÖRNEK -------------------
// tlFiyatlar dizisindeki ürün fiyatlarini HTLM inputlarina girilen
// Dolar ve Euro paritelerine göre dolar ve euroya çevirerek HTML de
// gösteriniz.
tlFiyatlar = [120, 340, 550, 245, 322.5, 789];

// Kur inputlarini al.
const dolarKur = document.querySelector(".dolar");
const yuroKur = document.querySelector(".yuro");

//dolar ve euro fiyatlari yazacak elemanlari al
const dolar = document.querySelector(".dolar-fiyat");
const yuro = document.querySelector(".yuro-fiyat");

// dolar kur input'unun değeri degistiginde urunlerin
// dolar fiyatlarini güncelle.
dolarKur.onchange = function () {
  dolar.innerHTML = tlFiyatlar.map((tl) => Math.round(tl / dolarKur.value));
};

// euro kur input'unun değeri degistiginde urunlerin
// euro fiyatlarini güncelle.
yuroKur.onchange = function () {
  yuroKur.value < 0
    ? alert("Kur 0'dan küçük olamaz") //bunu sonra ekle
    : (yuro.innerHTML = tlFiyatlar.map((tl) => Math.round(tl / yuroKur.value)));
};

//-------------- ÖRNEK -------------------
// tlFiyatlar dizisindeki ürün fiyatlarinin 250 TL altında olanlarına
// %10 zam, üstünde olanlarına da %20 zam yapılmak isteniyor. Ayrıca
// zamli fiyatlar aşağıdaki formatta saklanmak isteniyor.
// 1. ürünün zamlı fiyati 110 TL gibi(o yüzden bir değişkene atadık)

const zamliTlFiyatlar = tlFiyatlar.map(
  (deger, indis) =>
    deger < 250
      ? `${indis + 1}.ürünün zamli fiyati : ${deger * 1.1} <br> `
      : `${indis + 1}.ürünün zamli fiyati : ${deger * 1.2} <br> `
  //arrow function da süslü old için return
  // if (deger < 250) {
  //   return `${indis + 1}.ürünün zamli fiyati : ${deger * 1.1} <br> `;
  // } else {
  //   return `${indis + 1}.ürünün zamli fiyati : ${deger * 1.2} <br> `;
  // }
);
//"" (çift tırnak) ile join lemezsek html de kötü gözüküyor
// const stringZamliTLFiyatlar = zamliTlFiyatlar.join("");
// console.log(stringZamliTLFiyatlar);
document.querySelector(".zamli-fiyat").innerHTML = zamliTlFiyatlar.join(""); //bu şekilde dizi değil artık, string gibi boşluksuz, virgülleri kaldırarak birleştirdi

// ======================================================
//                       FILTER METODU
// ======================================================
// tlFiyatlar listesinde fiyatı 250 TL den az olanlari ayri
// bir diziye saklayalim.

const kucuk250 = tlFiyatlar.filter((d) => d < 250);
console.log(kucuk250);

//fiyati 350 küçük olanlari yazdiriniz.
tlFiyatlar.filter((d) => d < 350).forEach((x) => console.log(x));
// üsttekini const=y eşitlesek y yi yazdırsak, foreach diziyi tükettiği için undefined verir

// Küçükten büyüğe sıralama. bir sayı dizisini sıralarken, sürekli ikşer sayıya bakılır, bütüğü seçilip onunla bir sonraki sayı karşılaştırılır, o yüzden sort(a,b)
console.log(tlFiyatlar.sort((a, b) => a - b));

// Büyükten küçüğe sıralama
console.log(tlFiyatlar.sort((a, b) => b - a));
//bunun yerine önce 217 deki sort sonra reverse (dizinin orjinal sırasını ters döndürür, büyükten küçüğe sıralama değil) yapılabilir.
// ======================================================
//                       PIPELINE
// ======================================================

//-------------- ÖRNEK -------------------
// maası 4000 $'dan düsük olanlara %50 zam yapmak istiyoruz
// ve bunu ayri dizi olarak saklamak istiyoruz.

const maaslar = [3000, 5000, 4000, 6000, 6500];

const zamliMaaslar = maaslar.filter((d) => d <= 4000).map((d) => d * 1.5);
console.log(zamliMaaslar);
// console.log(maaslar); //!foreach ve map orjinal diziyi bozmaz ama foreach girdiği satırı tüketir, girdiği satırı atadığımız yeni bir dizi olursa, onu boş döndürür.
// Maasi 4000 'den büyük olanlara %25 zam yaparak sonuçlari yazdiralim.
maaslar
  .filter((d) => d > 4000)
  .map((d) => d * 1.25)
  .forEach((d) => console.log(d));
//console.log(maaslar); 234 dekinin forEach gösterimi
//-------------- ÖRNEK -------------------

const adlar = [
  "Samet",
  "Hakkı",
  "Duygu",
  "Emrullah",
  "Bilal",
  "Ali",
  "Ahmet",
  "Hasan",
  "Defne",
  "Serdar",
];
//263 den sonraki function çağırmalarındaki parametreler,256 daki harf yerine geliyor.258 deki x ler dizinin içindeki elemanları tek tek gezmek
const isimBul = (harf) => {
  //const buyukHarf = harf.toUpperCase();
  adlar
    .filter((x) => x.startsWith(harf.toUpperCase()))
    .forEach((x) => console.log(x));
};

isimBul("a");
isimBul("A");
isimBul("S");
isimBul("s");

// ======================================================
//                       REDUCE METODU
// ======================================================reduce de foreach de kapanış operatörü,foreach iterasyon yapıo, reduceden sonra foreach çalışmaz
// ! const maaslar = [3000, 5000, 4000, 6000, 6500];
// maaslarin toplamini bulunuz.x. y den sonra  0 yazarak başlangıç değeri 0 atadık,şart değil default=0 atıyor ama nolur nolmaz
const toplamMaas = maaslar.reduce((x, y) => x + y, 0);
console.log(toplamMaas);
//reduce ilk x değerine(0) y (diziden gelen değerler) ekleyip duruyor, bunu aşama aşama görelim. map te indis=0 çünkü dizi elemanları index i 0 dan başlar, reduce de indis 1 den başlar, sonuç 1 tane çünkü
const toplamMaas1 = maaslar.reduce((x, y, i) => {
  console.log(`${i} iterasyon : ${x}`);
  return x + y;
});
console.log(toplamMaas1);

// 4000 den buyuk olan maaslarin toplamini hesaplayiniz.

const buyukDortBin = maaslar.filter((x) => x >= 4000).reduce((x, y) => x + y);

console.log(buyukDortBin);

// maasi ortalamanin altinda olanlara %20 zam yapalim.(sorarlarsa ver yoksa üstte benzeri var=> üstündekilere %5 zam derse yoruma alınan çözüm)
const ortalamaMaas = maaslar.reduce((x, y) => x + y, 0) / maaslar.length;

// const maas = maaslar.map((a) => (a > ortalamaMaas ? a * 1.05 : a * 1.2));
// console.log(maas);
const yeniMaaslar = maaslar
  .filter((m) => m >= ortalamaMaas)
  .map((m) => m * 1.2);
console.log(yeniMaaslar);
