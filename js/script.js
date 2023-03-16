const cardContainer = document.querySelector(".card");
const thankyouContainer = document.querySelector(".thankyou");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn-rate");

submitButton.addEventListener("click", () => {
  thankyouContainer.classList.remove("hidden");
  cardContainer.style.display = "none";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
