const yaslar=[5, 10, 28, 42];

const isimler=["Hakan", "Alaaddin", "Furkan","Dayanch",20, 40, true, 23.5, yaslar,"Ayse" ];
// console.log(isimler);

 console.log( isimler[3]);
  console.log( isimler[3]="Sadi");
  // const değiştirilemiyordu ama non-primitive
// lerde (arrayler) değiştirilebiliyor. dizi bir adres gösterir isimler gibi, o yüzden primitive den farklı

isimler[isimler.length-2]=false;
 
console.log( isimler[8][0]);

//****** DİZİYİ DEĞİŞTİREN METODLAR********* */

let meyveler= ["Elma", "Armut" , "Muz", "Kivi"];

const baslik= document.querySelector(".baslik");


//pop() en son elemanı siler
//log içinde yazdırırsanız da sildiğini yazdırır.

// meyveler.pop(); [Elma,Armut,Muz]
console.log(meyveler.pop());


//shift() dizinin 0 indexli elemanını yani ilk elemanı siler, ve yazdırırsak sildiği elemanı döndürür.

 // meyveler.shift(); //[Armut, Muz]
console.log(meyveler.shift());
 //silme metodları log da yazdırılırsa sildiği elemanı döndürür.

 //push() dizinin sonuna eleman ekler

 meyveler.push("Cilek", "Karpuz");

 //unshift() dizinin 0 index ine eleman ekler

 meyveler.unshift("Ayva");

 //reverse() dizinin tamamını ters çevirir

  // meyveler.reverse();

  //sort() diziyi natural order alfabetik sıralar.

meyveler.sort();

//splice()
  meyveler.splice(1,          0,            "erik"); 
//                           index   silmeden ekle
 meyveler.splice(4,           1,           "uzum")
//                        index       silerek    ekle

//ilk kod= eleman eklenecek index
//2. kod= 1 ise o indexteki elemanı silerek, 0 ise elemanı silmeden ekle
//3. kod =eklenecek veri


//**** DİZİ ERİŞİM METODLARI  (diziyi değiştirmez) */

const sayılar =[3, 4, 5, 2, "2", "üc", "bes", 5, 2, 7];

//includes() kapsıyor mu 
 console.log( sayılar.includes("5")); //false
 console.log( sayılar.includes(5)); // true

//indexOf() ilk eşleşen index i döndürür e

console.log( sayılar.indexOf(2));

console.log(sayılar.lastIndexOf(5));

console.log(sayılar.indexOf(2,  4)); //8  ikinci 2 yi döndürür (4. indexten sonra aramaya baslar)
console.log(sayılar.indexOf(5,  3)); // 7





















baslik.textContent = sayılar;
console.log(sayılar);