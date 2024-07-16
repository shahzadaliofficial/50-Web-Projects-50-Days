let next = document.querySelector("#next");
let prev = document.querySelector("#prev");
let steps = document.querySelectorAll(".step");
let lines = document.querySelectorAll(".line");

next.addEventListener("click", () => {
  prev.removeAttribute("disabled");
  for (let line of lines) {
    if (!line.classList.contains("active-line")) {
      line.classList.add("active-line");

      break;
    }
  }
  for (let step of steps) {
    if (!step.classList.contains("active")) {
      step.classList.add("active");

      if (step.innerText == "4") {
        next.setAttribute("disabled", "true");
        console.log("Next button disabled");
      }
      break;
    }
  }
});

prev.addEventListener("click", () => {
  next.removeAttribute("disabled");

  for (let step = steps.length - 1; step > 0; step--) {
    if (steps[step].classList.contains("active")) {
      steps[step].classList.remove("active");
      if (step == 1) {
        prev.setAttribute("disabled", "true");
        console.log("Prev button disabled");
      }
      break;
    }
  }
  for (let line = lines.length - 1; line >= 0; line--) {
    if (lines[line].classList.contains("active-line")) {
      lines[line].classList.remove("active-line");
      break;
    }
  }
});
