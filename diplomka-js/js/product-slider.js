export const productSlider = () => {
  const wrapper = document.querySelector(".swiper-wrapper");
  const slides = document.querySelectorAll(".swiper-slide");

  const nextBtn = document.querySelector(".product__slider-button--next");
  const prevBtn = document.querySelector(".product__slider-button--prev");

  let index = 0;
  const total = slides.length;

  function updateSlider() {
    wrapper.style.transform = `translateX(-${index * 100}%)`;
  }

  nextBtn.addEventListener("click", () => {
    index++;

    if (index >= total) {
      index = 0; // loop
    }

    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    index--;

    if (index < 0) {
      index = total - 1; // loop
    }

    updateSlider();
  });
};
