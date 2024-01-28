const Slides = document.querySelectorAll(".slide");

const faarrowLeft = document.querySelector(".fa-arrow-left");

const faarrowRight = document.querySelector(".fa-arrow-right");

let counter = 0;

Slides.forEach((slide, index) => {
  slide.style.top = `${index * 100}%`;
});

const slideImage = () => {
  Slides.forEach((slide) => {
    slide.style.transform = `TranslateY(-${counter * 100}%)`;
  });
};

faarrowLeft.addEventListener("click", () => {
  if (counter < 0) {
    counter = Slides.length - 1;
  }
  counter--;
  slideImage();
});
faarrowRight.addEventListener("click", () => {
  if (counter >= Slides.length - 1) {
    counter = 1;
  }
  counter++;
  slideImage();
});
