// * =======================================================
// *                   KARAR YAPILARI
// * =======================================================

// //************************ IF-ELSE ***********************
//toplama işlemi yapmaya kalktığımızda concatination yapar o yüzden işi baştan sağlam tutalım ve prompt lara number eklemeliyiz
//bölen 0 olmayı göstermek zorunda değiliz
// const s1 = Number(prompt("Birinci Sayı:"));
// const islem = prompt("İslemi giriniz");
// const s2 = Number(prompt("İkinci Sayı:"));
// let sonuc = 0;

// if (islem == "+") {
//   sonuc = s1 + s2;
// } else if (islem == "-") {
//   sonuc = s1 - s2;
// } else if (islem == "*") {
//   sonuc = s1 * s2;
// } else if (islem == "/") {
//   sonuc=s1/s2;
// }
// console.log(sonuc);

// console.log(`${s1} ${islem} ${s2} = ${sonuc}`);
// //   mesela=> 3        +      5   =   8

// * =======================================================
// *                      TERNARY
// * =======================================================
//ornek
// const name2 = prompt("Adinizi giriniz:"); //name yazınca uyarı veriyor, o yüzden name1

 // const age = +prompt("Yasinizi giriniz:"); ilk yol sadece + da sıkıntı oluyor, olmasın diye
// const age = Number(prompt("Yasinizi giriniz:"));
// const healt = prompt("Saglikli misiniz e/h");

// console.log(
//   age >= 18 && healt == "e"
//     ? `${name2} ehliyet alabilir 🥳`
//     : `${name2} ehliyet alamaz 🥺`
// );
 // age >= 18
//   ? console.log(`${name1} ehliyet alabilir`)
//   : console.log(`${name1} ehliyet alamaz`);

// const result =
//   age >= 18 && healt=="e" ? `${name1} ehliyet alabilir` : `${name1} ehliyet alamaz`;

// ! emojisense eklentisi yükle==> emoji kısayol (mac te üstte file ın yanındaki edit ->emojiler)
//eklentiden sonra alttakiler kısayol
// Mac: cmd + i;
// Linux: ctrl + alt + i;
// Windows: ctrl + i;


//? üsttekini alttaki gibi bir değişkene atayıp alert le yazdırabiliriz

// const result = age > 18 && healt == "e" ? "Ehliyet Alabilir" : "Ehliyet Alamaz";
// console.log(result); // hem console da
// alert(result); //hem pop-art olarak sonucu çıkarttık


// ÖRNEK //borc true olması yok anlamında
 const borç = true;
 const maaş = 3000;
 console.log(borç && maaş > 2825 ? "Kredi Alabilir  🤑" : "Kredi Alamaz 🥺");
//!0=!false=true;
//MacOS işletim sisteminde Emoji ve Semboller penceresini açmak için; klavyeden 'control' , 'command' ve 'space' tuşlarına aynı anda basın. Ardından ilgili
//metin içeriğinde ya da sohbet penceresinde emoji klavyesi karşınıza çıkacaktır.
//Metin girişi sırasında Windows logo(pencere) tuşu + . (nokta) yazın. Emoji klavyesi görüntülenir.
//Fareyle bir emoji seçin veya kullanılabilir emojiler arasında istediğiniz emojiyi aramak için yazmaya devam edin.

//************************ SWITCH-CASE ***********************
//Girilen bir sayının onlar ve birler basamağındaki rakamlarını yazı ile yazdıran program:
 //----------------------------------------------------------
// var sayii = prompt("Nolur iki basamaklı bir sayı girin.");
// var birler = sayii % 10;

// switch (birler) {
//   case 1:
//     rakamIsmi = "Bir";
//     break;
//   case 2:
//     rakamIsmi = "İki";
//     break;
//   case 3:
//     rakamIsmi = "Üç";
//     break;
//   case 4:
//     rakamIsmi = "Dört";
//     break;
//   case 5:
//     rakamIsmi = "Beş";
//     break;
//   case 6:
//     rakamIsmi = "Altı";
//     break;
//   case 7:
//     rakamIsmi = "Yedi";
//     break;
//   case 8:
//     rakamIsmi = "Sekiz";
//     break;
//   case 9:
//     rakamIsmi = "Dokuz";
//     break;
//   case 0:
//     rakamIsmi = "Sıfır";
//     break;
// }
// console.log(rakamIsmi);

// // * =======================================================
// // *                     DÖNGÜLER
// // * =======================================================

// //************************ FOR ****************************


// //************************************ */
// ORNEK: Asal sayı tespiti
// const number = 7;

// let asal = true;
// for (let i = 2; i < number; i++) {
//   if (number % i == 0) {
//     asal = false;
//     break;
//   }
// }
//  //const asalMi = asal ? "ASAL" : "ASAL DEGIL";
// console.log(asal=true ? "ASAL" : "ASAL DEGIL");

// //*************************** */
// TODO ÖRNEK: do- while döngüsü
let not;
do {
  not = prompt("Lütfen do-while için 0-100 arasında bir not giriniz:");
} while (not < 0 || not > 100);
console.log("Giridiğiniz not 0-100 arasındadır");

// TODO ÖRNEK: while döngüsü

// let not2 = prompt("Lütfen while için 0-100 arasında bir not giriniz:");
// while (not2 < 0 || not2 > 100) {
//   console.error("Girilen not 0-100 arasında olmalıdır.");
//   not2 = prompt("0-100 arasında bir not giriniz:");
// }
// console.log("Girdiğiniz not 0-100 arasındadır");

// ÖRNEK: klavyeden end kelimesi girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.

let adi = prompt("başlat yaz enter la");
let i=1 ;
while (adi != "end") {
  //true yerine 1 de yazılabilir, bunlar hep true demek.0=false olur
  adi = prompt(i + ".kisinin adını giriniz:");
  i++;
  console.log(adi);
}







































