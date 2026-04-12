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
let startX = 0;
let endX = 0;

wrapper.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

wrapper.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;

  const diff = startX - endX;

  // свайп влево → next
  if (diff > 50) {
    index++;
    if (index >= total) index = 0;
    updateSlider();
  }

  // свайп вправо → prev
  if (diff < -50) {
    index--;
    if (index < 0) index = total - 1;
    updateSlider();
  }
});
    
};
