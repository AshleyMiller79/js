var showListe=[];

//! json dosyasından veri getirme aşamaları

fetch("./tv-shows.json").then((cevap)=>cevap.json()).then((veri)=>{


showListe=veri;

showIzle(showListe); //method call

});

//metod oluştur
function showIzle(showListe){

  //!https://getbootstrap.com/docs/4.0/components/card/

  var liste = document.querySelector(".liste");
  showListe.forEach((a) => {
    liste.innerHTML = liste.innerHTML + `<div class=  "card col-md-3" >
  <img class="card-img-top" src=${a.show.image? a.show.image.medium:""} alt="">
  <div class="card-body">
    <h5 >${a.show.name}</h5>
    
    <a href=${a.show.url} target="_blank" class="btn btn-success">Detaylar</a>
  </div>
</div>`;
  });
 }