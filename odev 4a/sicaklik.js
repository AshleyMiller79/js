function sicaklikHesaplama() {
  function celVeFah(celsius) {
    var fahrenheit = Math.round(celsius * (9 / 5) + 32);
    return fahrenheit;
  }

  function fahVeCel(fahrenheit) {
    var celsius = Math.round((fahrenheit - 32) * (5 / 9));
    return celsius;
  }

  // Calsius veya Fahrenheit'in seçili olup olmadığını kontrol eder
  var tempSecim = document.getElementById("sayi_deger");
  var valueTemp = tempSecim.options[tempSecim.selectedIndex].value;

  // Sıcaklık girişi içindeki değeri kontrol eder
  var numberTemp = document.getElementById("deger").value;

  var result;

  if (valueTemp == 1) {
    result = celVeFah(numberTemp);
    document.querySelector(".sonuc").innerHTML = "= " + result + "°Fahrenheit";
  } else {
    result = fahVeCel(numberTemp);
    document.querySelector(".sonuc").innerHTML = "= " + result + "°Celsius";
  }
}
