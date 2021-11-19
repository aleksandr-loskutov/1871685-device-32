document.addEventListener("click", (event) => {
  const { target } = event;
  if (target.classList.contains("slider-main-btn-next")) sliderShift(1);
  if (target.classList.contains("slider-main-btn-prev")) sliderShift(-1);
});

const sliders = document.querySelectorAll(".slider-main");
const pagination = document.querySelectorAll(".product-slider-pagination-btn");
const slidesCount = sliders.length;
function sliderShift(shift) {
  let sliderCurrentActiveIndex = 0;
  sliders.forEach((el, index) => {
    if (!isHidden(el)) {
      sliderCurrentActiveIndex = index;
    }
  });
  const maxPos = slidesCount - 1;
  const pos = sliderCurrentActiveIndex + shift;
  const nextPos = pos <= maxPos && pos >= 0 ? pos : shift > 0 ? 0 : maxPos;
  pagination[nextPos].click();
}

function isHidden(el) {
  let style = window.getComputedStyle(el);
  return style.display === "none";
}
