const arrowBtn = document.querySelector(".arrow-container");
const resource_section = document.querySelector("#resources-section");

arrowBtn.addEventListener("click", function () {
  resource_section.scrollIntoView({
    behavior: "smooth",
    block: "end",
  });
});
