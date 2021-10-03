document.querySelector(".switcher").addEventListener("click", function () {
  var bodyClassList = document.querySelector("body").classList;
  if (bodyClassList.contains("darkmode")) {
    bodyClassList.remove("darkmode");
    document.querySelector(".switcher").innerHTML =
      '<i class="fas fa-sun"></i>';
  } else {
    bodyClassList.add("darkmode");
    document.querySelector(".switcher").innerHTML =
      '<i class="fas fa-moon"></i>';
  }
});
