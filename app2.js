let slider2 = document.querySelector(".slider2 .list2");
let items2 = document.querySelectorAll(".slider2 .list2 .item2");
let next2 = document.getElementById("next2");
let prev2 = document.getElementById("prev2");
let dots2 = document.querySelectorAll(".slider2 .dots2 li");
let lengthItems = items2.length - 1;
let active = 0;
next2.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider2();
};
prev2.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider2();
};
let refreshInterval = setInterval2(() => {
  next2.click();
}, 3000);
function reloadSlider2() {
  slider2.style.left = -items2[active].offsetLeft + "px";
  //
  let last_active_dot2 = document.querySelector(".slider2 .dots2 li.active");
  last_active_dot2.classList.remove("active");
  dots2[active].classList.add("active");

  clearInterval2(refreshInterval);
  refreshInterval = setInterval2(() => {
    next2.click();
  }, 3000);
}
dots2.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider2();
  });
});
window.onresize = function (event) {
  reloadSlider2();
};
