
//bilgisayar 1-20 arasında bir sayı tut

 let rastgeleSayi=   Math.floor(Math.random()*20+1);
let puanPc=10;
 let rekorPc=0;

 //her kontrol et butonuna tıklandığında çalıştırdım
 document.querySelector(".kontrol").onclick=function()
 {
   //tahminim doğruysa
   const tahmin=document.querySelector(".tahmin").value;
   //! bir açılış
   if(tahmin==rastgeleSayi){
document.querySelector("body").style.backgroundColor="green";
document.querySelector(".question").textContent=rastgeleSayi;
document.querySelector(".mesaj").textContent="🎉Tebrikler Bildiniz";

//rekoru güncelle
//!bir nested
if(puanPc>rekorPc){
  rekorPc=puanPc;
  document.querySelector(".rekor-skor").textContent=puanPc;
}//! bir nested kapanıs

   }//! bir kapanıs
//tahmin yanlış ise
//! iki baslangıc
else{
  //! 2 nested baslangıc
  if(puanPc>1){
  puanPc--;
let mesaj= document.querySelector(".mesaj");
tahmin < rastgeleSayi ? (mesaj.textContent = "Arttır 🆙") : (mesaj.textContent = "Azalt ⬇️");
document.querySelector(".skor").textContent=puanPc;

}else {

mesaj.textContent="Oyunu kaybettiniz 😔";
document.querySelector(".skor").textContent=0;
document.querySelector("body").style.backgroundColor = "red";

}//! 2 nested bitis

} //! iki bitis
};