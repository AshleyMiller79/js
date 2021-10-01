const maaslar= [ 4000, 5000, 3500, 4200, 2850, 5000, 7500];

const liste=document.querySelector(".liste-ul");

for(let i of maaslar) {
liste.innerHTML=liste.innerHTML + `<li> ${i} </li>` 

}
// for (let i in maaslar) {
//   liste.innerHTML = liste.innerHTML + `<li> ${maaslar[i]} </li>`;
// }


//ekle butonuna tıkladığımızda diziye ve listeye yeni veri ekle 
const giris= document.querySelector(".liste");

document.querySelector(".ekle").onclick=function(){
  liste.innerHTML = liste.innerHTML + `<li> ${giris.value} </li>`;

  maaslar.push(giris.value);
  acıklamaGuncelle(maaslar);
   giris.value="";
}

//Sil butonuna tiklandiginda listedeki ve dizideki son elamani sil.
document.querySelector(".sil").onclick = function () {
  if (maaslar.length == 0) {
    alert("Silinecek oge kalmadi.");
  } else {
    maaslar.pop();
     liste.removeChild(liste.lastElementChild);
     acıklamaGuncelle(maaslar);   
  }};
  //! sayfa browser a yüklendiğinde kodlar yukarıdan aşağı çalışır. ekle ve sil butonuna henüz basmadığımız için buraları geçerek alttaki acıklamaGuncelle function una geçer ve önce onu okur. biz ekle ve sil butonuna basınca burada acıklamaGuncelle yi cagırabiliriz artık




const acıklamaGuncelle= function(maaslar){

document.querySelector(".acıklama").innerHTML=` Maaslar: ${ maaslar.join(" ")}`;



}


