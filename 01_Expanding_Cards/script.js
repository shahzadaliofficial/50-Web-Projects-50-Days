let card = document.querySelectorAll(".cards");
console.log(card);

card.forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    element.classList.add("active");
  });
});
