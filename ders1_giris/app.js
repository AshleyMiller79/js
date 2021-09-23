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

//=====ARİTMETİK OPERATORLER

const kola=5;
const cips=6;
const ekmek=2;
console.log(kola + cips + ekmek);
console.log("toplam fiyat", kola + cips + ekmek);

const ad ="can";
const soyad="canan";
console.log(ad+soyad);

const s1=7;
let s2= "7";
console.log(s1+s2); //77

console.log("benim adım" + " "+ad +" "+"benim yasım" +" "+s1);
//! Template literal ===============================
console.log(`benim adım ${ad} benim yasım ${s1}`);
// üs alma **
const taban =2;
const us =3;
console.log(taban**us);  //2*2*2=8

// mod alma %
const sayi=123;
const birler=sayi%10;
console.log(birler);

//==karşılaştırma operatörleri
const s3 = 5;
const s4="5";
console.log(s3==s4);
console.log(s3===s4);


// todo  TİP DEĞİŞİMLERİ======

const para ="100";
console.log(para+15); //10015
console.log(Number(para)+15); //115

const sayi5=56;
console.log(String(sayi5)+sayi5);
console.log(typeof sayi5);





















