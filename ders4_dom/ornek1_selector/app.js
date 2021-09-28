//================================================================ =====
//                   GETELEMENTBYID

const paragraf = document.getElementById("para").style;
paragraf.backgroundColor = "black";
paragraf.color = "white";
paragraf.fontSize = "20px";

const buton = document.getElementById("btn");
buton.style.width = "100px";
buton.style.color = "red";
buton.style.fontSize = "18px";
buton.textContent = "ARA";
//! *********textContent=tag lerin içeriğindeki yazıyı değiştirmek istersek

//***** GETELEMENTBYTAGNAME */ bu kullanım tercih edilmiyor

// const resim = document.getElementsByTagName("img");

// resim[0].style.width = "300px";
// resim[0].style.height = "300px";
// resim[1].style.border = "3px solid red";

//*****GETELEMENTBYCLASSNAME */ class adıyla çağırma,  ama getElementsByTagName gibi dizi şeklinde algılıyor.

const baslık = document.getElementsByClassName("h1");
baslık[0].style.textAlign = "center";

// *********QUERYSELECTOR*********
//! en çok kullanılan çağırma yolu

document.querySelector(".arama").textContent = "DOM SELECTOR KAVRAMI👋";

document.querySelector("#govde").style.backgroundImage =
  "linear-gradient(green, blue, pink)";

//*****EVENT****** */

//(onmouseover, onmouseout =fare üstüne gelince ayrılınca)
const h = document.querySelector(".H1");

h.onmouseover = function () {
  h.style.color = "red";
  h.style.backgroundColor = "white";
};
h.onmouseout = function () {
  h.style.color = "pink";
  h.style.backgroundColor = "yellow";
};

//1.resme tıkladığımızda img ler yer değiştirsin

document.querySelector(".bir").onclick=function () {
document.querySelector(".bir").src = "./img/logo2-1.png";
document.querySelector(".iki").src = "./img/js_logo.png";

}


