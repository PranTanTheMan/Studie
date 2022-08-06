const arrowBtn = document.querySelector(".arrow-container");
const resource_section = document.querySelector("#resources-section");

// arrowBtn.addEventListener("click", function () {
//   resource_section.scrollIntoView({
//     behavior: "smooth",
//     block: "end",
//   });
// });

//DOM elements for the Modal
// Get DOM Elements
const modal = document.querySelector("#my-modal");
const modalBtn = document.querySelector("#modal-btn");
const closeBtn = document.querySelector(".close");

// Events
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

// Open
function openModal() {
  modal.style.display = "block";
}

// Close
function closeModal() {
  modal.style.display = "none";
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
    saveBtn.textContent = "Save Settings";
    saveBtn.style.background = "";
  }
}

const saveBtn = document.querySelector(".saveBtn");

saveBtn.addEventListener("click", function () {
  saveBtn.style.background = "green";
  saveBtn.textContent = "Saved";
});
