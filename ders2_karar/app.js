//==KARAR YAPILARI===

//====IF-ELSE================

const s1 =Number(prompt("birinci sayı"));
const islem=prompt("işlemi giriniz");
const s2=Number(prompt("ikinci sayı"));
let sonuc=0;
if (islem=="+") {
sonuc=s1+s2;}
else if (islem=="-") {
 sonuc=s1-s2;
}
else if (islem=="*"){
 sonuc=s1*s2;
}
else if (islem=="/"){
 sonuc=s1/s2;
}
console.log(sonuc);


