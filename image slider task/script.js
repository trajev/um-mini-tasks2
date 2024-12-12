document.addEventListener("DOMContentLoaded", function () {

  const imgDivs = document.querySelectorAll(".imgdiv");

  imgDivs.forEach(function (imgDiv) {
    imgDiv.addEventListener("click", function () {
      imgDivs.forEach(function (div) {
        div.classList.remove("active");
      });

      imgDiv.classList.add("active");
    });
  });

});
