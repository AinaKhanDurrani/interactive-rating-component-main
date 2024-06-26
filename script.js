let rating_section = document.querySelector(".rating_section");
let thankyou_section = document.querySelector(".thankyou_section");

let submit_btn = document.getElementById("submit");

const ratings = document.querySelectorAll(".btn");
const actualRating = document.getElementById("rating");

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    ratings.forEach((btn) => btn.style.backgroundColor = "hsl(210, 7%, 23%)"); // Reset all buttons
    rating.style.backgroundColor = "hsl(25, 97%, 53%)";
    actualRating.innerHTML = rating.innerHTML;
  });
});

submit_btn.addEventListener("click", () => {
  rating_section.style.display = "none";
  thankyou_section.classList.remove("hidden");
});


