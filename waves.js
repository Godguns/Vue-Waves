// src/directives/waves.js
import './waves.css'
export default {
  bind(el, binding) {
    el
    .addEventListener("click", function (e) {
      let x = e.clientX - e.target.offsetLeft;
      let y = e.clientY - e.target.offsetTop;

      let ripples = document.createElement("span");

      ripples.style.left = x + "px";
      ripples.style.top = y + "px";
      console.log(this);
      this.appendChild(ripples);
      setTimeout(() => {
        ripples.remove();
      }, 300);
    });
  },
}
