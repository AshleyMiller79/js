// ======================================================
//                   GETELEMENTBYID()
// ======================================================

const paragraf = document.getElementById("par").style;
paragraf.backgroundColor = "black";
paragraf.color = "white";
paragraf.fontSize = "20px";

const buton = document.getElementById("btn");
buton.style.width = "100px";
buton.style.height = "30px";
buton.style.backgroundColor = "black";
buton.style.color = "yellow";
buton.style.fontSize = "18px";
buton.innerHTML = "ARA";

// ======================================================
//                   GETELEMENTSBYTAGNAME()
// tag ismiyle çağırıyoruz.aynı tag den çok olacağı için index le hangisini seçtiğimizi belirtiyoruz
//================================================

// const resim = document.getElementsByTagName("img");
// resim[0].style.width = "300px";
// resim[0].style.height = "300px";
// resim[1].style.border = " 3px solid red";
// ! altta event e geçince img değişikliği yapmadan önce burayı yoruma al

// ======================================================
//                   GETELEMENTSBYCLASSNAME()
// class ismiyle çağırıyoruz
//======================================================
const baslik = document.getElementsByClassName("h1");
baslik[0].style.color = "red";
baslik[0].style.textAlign = "center";

// ======================================================
//                   QUERYSELECTOR()
// ======================================================
const title = document.querySelector(".title");
title.innerHTML = "DOM Selector 👀";

const body = document.querySelector("#body");
body.style.backgroundImage = "linear-gradient(green, blue)";

// ======================================================
//                        EVENTS
// ======================================================
// ÖRNEK-1 (Mouse Over, Mouse Out )
//-------------------------------------------------------
//önce uzun uzun h1 çağırarak yap
const h1 = document.querySelector(".h1");

h1.onmouseover = function () {
  h1.style.color = "white";
  h1.style.backgroundColor = "black";
};

h1.onmouseout = function () {
  const h1 = document.querySelector(".h1");
  h1.style.color = "black";
  h1.style.backgroundColor = "white";
}; //mouse çıkınca eskiye dönsün istersem, en başta h1.style.color=h1renk diye saklarım önce

// 1. resme tıkladığımızda img ler değişsin
document.querySelector(".bir").onclick = function () {
  document.querySelector(".bir").src = "./img/logo2.png";
  document.querySelector(".iki").src = "./img/js_logo.png";
};

// addEventListener()

//const buton = document.querySelector("#btn"); buna gerek yok üstte atamışız

//iki func çeşidini de kullandık 1. expression, 2. arrow
buton.addEventListener("mouseover", function () {
  buton.style.width = "150px";
});

buton.addEventListener("mouseout", () => {
  buton.style.width = "100px";
});
