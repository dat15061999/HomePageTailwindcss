import './less.less'

// sweetalert2 11
import { Message } from './message.ts'
import { API } from './api.ts'
(<any>window).API = API;
(<any>window).Message = Message;

import { setupFormValid } from './validation.ts'
setupFormValid();
(<any>window).SetupFormValid = setupFormValid;
(<any>window)._MESSAGE_ = {
  required: 'Xin vui lòng nhập nội dung',
  email: 'Xin vui lòng nhập địa chỉ email hợp lệ!',
  minLengthCheckBox: 'Xin vui lòng chọn ít nhất ',
  minLength: 'Xin vui lòng nhập tối thiểu ',
  maxLength: 'Xin vui lòng nhập không quá ',
  compare: 'Xin vui lòng nhập không quá ',
};

// import { setupMenuMobile } from './menu-mobile.ts';
// setupMenuMobile(document.getElementsByClassName('handle-menu'));
// // swiper 10
import { setupSwiper } from './swiper.ts';
setupSwiper();

// // echarts 5
// import { setupEchart } from './echart.ts'
// setupEchart();

// window.onload = async () => {
//   const test = await API.post('/authentication/jwt/login', {
//     deviceName:
//       "Chrome/116.0.0.0 desktop/mac-os-x-15 ccfeecc0-533f-8a96-f60d-8d6253b60420",
//     deviceNo: "Macintosh",
//     deviceType: "BROWSER",
//     password: "41234231",
//     remember: false,
//     username: "12342134",
//   });
//   console.log(test);
// };


import { handleChangeNav, handleAddNavMenu } from './hoverNav.ts';

document.getElementById("menuNav")?.addEventListener("click", handleChangeNav);
document.getElementById("closeNar")?.addEventListener("click", handleChangeNav);
document.querySelector(".backgroundBlack")?.addEventListener("click", handleChangeNav);
document.querySelector(".home")?.addEventListener("click", () => handleAddNavMenu(".home"));
document.querySelector(".pages")?.addEventListener("click", () => handleAddNavMenu(".pages"));
document.querySelector(".project")?.addEventListener("click", () => handleAddNavMenu(".project"));
document.querySelector(".blog")?.addEventListener("click", () => handleAddNavMenu(".blog"));
// button 
import { handleChangeActivated } from "./activated.ts"

document.querySelector(".button-rent")?.addEventListener("click", () => handleChangeActivated(".button-rent"));
document.querySelector(".button-buy")?.addEventListener("click", () => handleChangeActivated(".button-buy"));
document.querySelector(".button-sell")?.addEventListener("click", () => handleChangeActivated(".button-sell"));

// 4000
document.addEventListener("DOMContentLoaded", function () {
  var countElement = document.querySelector(".count-animate");

  var targetNumber = 4000;
  var currentNumber = 0;
  var increment = Math.ceil(targetNumber / 100);
  if (countElement) {
    var interval = setInterval(function () {
      countElement.textContent = currentNumber.toLocaleString() + "+";

      if (currentNumber >= targetNumber) {
        clearInterval(interval);
      }

      currentNumber += increment;
    }, 10);
  }

});
//count
document.addEventListener("DOMContentLoaded", function () {
  function countUp(elementSelector, targetNumber, suffix = "", delay = 100) {
    var countElement = document.querySelector(elementSelector);
    var currentNumber = 0;
    var increment = Math.ceil(targetNumber / 10);

    var interval = setInterval(function () {
      countElement.textContent = currentNumber.toLocaleString() + suffix;

      if (currentNumber >= targetNumber) {
        clearInterval(interval);
      }

      currentNumber += increment;
    }, delay);
  }
  countUp(".count-patients", 200, "");
  countUp(".count-hearts", 20, "");
  countUp(".count-doctors", 10, "K");
  countUp(".count-works", 900, "");
});


window.addEventListener('scroll', () => {
  const navMenu = document.querySelector('.nav-menu');

  if (window.scrollY > 123) {
    navMenu?.classList.add('sticky')
    navMenu?.classList.add('top-0')
    navMenu?.classList.add('left-0')
    navMenu?.classList.add('right-0')
    navMenu?.classList.add('opacity-85')
  } else {
    navMenu?.classList.remove('fixed')
    navMenu?.classList.remove('top-0')
    navMenu?.classList.remove('left-0')
    navMenu?.classList.remove('right-0')
    navMenu?.classList.remove('opacity-85')
  }
})