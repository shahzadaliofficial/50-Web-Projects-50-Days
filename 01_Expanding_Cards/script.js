let card = document.querySelectorAll(".cards");
console.log(card);

card.forEach((element) => {
  element.addEventListener("click", () => {
    const active = document.querySelector(".active");
    if (active) {
      active.classList.remove("active");
    }
    element.classList.add("active");
  });
});
