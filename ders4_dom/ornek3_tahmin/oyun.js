
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
document.querySelector(".mesaj").textContent="Oyunu kaybettiniz 😔";
document.querySelector(".skor").textContent=0;
document.querySelector("body").style.backgroundColor = "red";


}//! 2 nested bitis

} //! iki bitis
}

//tekrar butonuna basıldığında baslangıc degerleri yüklensin
document.querySelector(".tekrar").onclick=()=>{
rastgeleSayi = Math.floor(Math.random() * 20 + 1);
document.querySelector("body").style.backgroundColor = "#2d3436";
document.querySelector(".question").textContent="?";
document.querySelector(".mesaj").textContent="Tahmine Baslanıyor!!";
puanPc=10;
document.querySelector(".skor").textContent=puanPc;
document.querySelector(".tahmin").value=" ";

}
// klavyeden bir tusa basıldığında calıs

document.querySelector(".tahmin").onkeydown=function (olay){
if(olay.keyCode==13){
  document.querySelector(".kontrol").onclick();
}
if(olay.keyCode==82){
  document.querySelector(".tekrar").onclick();
}
}












