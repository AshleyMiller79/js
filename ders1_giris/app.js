//===============================================
//KONSOL 
// console.log("Hello javascript");
// alert("dikkat");
// console.warn("bu bir uyarıdır");
// console.error("bu bir hatadır");
// prompt("adınızı giriniz");


// ========değişken tanımlama========
//=======VAR===== ===============
// ? Ancak, modern JS var keyword'unun kullanımı azaldı.
//? Çünkü, var global değişken gibi düşünülebilir.
// ? Günümüzde programcılar global değişken gerekmedikçe VAR tercih etMEMEKtedir.

var isim="ipek";
console.log(typeof isim);
isim=3.14;
console.log(typeof isim);


//===CONST============================================
// TODO: const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atanabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler hariç).mümkünse const, yoksa let, o da mümkün değilse var kullanılmalı. çünkü js de çok rahat değişiklik yapılıyor, var, let sıkıntı çıkarabilir.

const piSayisi=3.14;
//piSayisi=3;

const isim1="Osman";
console.log(typeof isim1);
// const number; hatalı yazım
// number=4;

//=======LET======
 
let fiyat;
fiyat=10;
console.log(typeof fiyat);
fiyat="Erdem";
console.log(fiyat);


// string tanımlamak için 3 farklı karakter kullanılabilir.
 
let name1= "Allattin";
let name2= 'Faruk';
let name3=`Oguzhan`;
console.log(name3);










