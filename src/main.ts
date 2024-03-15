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
import { handleChangeActivated, handleChangeHidden } from "./activated.ts"

document.querySelector(".button-rent")?.addEventListener("click", () => handleChangeActivated(".button-rent"));
document.querySelector(".button-buy")?.addEventListener("click", () => handleChangeActivated(".button-buy"));
document.querySelector(".button-sell")?.addEventListener("click", () => handleChangeActivated(".button-sell"));

// 4000
document.addEventListener("DOMContentLoaded", function () {
  let countElement = document.querySelector(".count-animate");

  let targetNumber = 4000;
  let currentNumber = 0;
  let increment = Math.ceil(targetNumber / 100);
  if (countElement) {
    let interval = setInterval(function () {
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
  function countUp(elementSelector, targetNumber, suffix = "", delay) {
    let countElement = document.querySelector(elementSelector);
    let currentNumber = 0;
    let increment = Math.ceil(targetNumber / targetNumber);

    let interval = setInterval(function () {
      countElement.textContent = currentNumber.toLocaleString() + suffix;

      if (currentNumber >= targetNumber) {
        clearInterval(interval);
      }

      currentNumber += increment;
    }, delay);
  }

  function checkScrollAndCount() {
    let elementsToCount = [
      { selector: ".count-patients", target: 200, suffix: "", delay: 10 },
      { selector: ".count-hearts", target: 20, suffix: "", delay: 100 },
      { selector: ".count-doctors", target: 10, suffix: "K", delay: 100 },
      { selector: ".count-works", target: 900, suffix: "", delay: 0 }
    ];

    elementsToCount.forEach(function (element) {
      let countElement = document.querySelector(element.selector);
      if (countElement) {
        let elementPosition = countElement.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        let triggerPosition = screenHeight * 0.75;

        if (elementPosition < triggerPosition) {
          countUp(element.selector, element.target, element.suffix, element.delay);
        }
      }
    });
  }
  let count = 0;
  // checkScrollAndCount();
  window.addEventListener("scroll", function () {
    if (count === 0 && window.scrollY > 5600 && window.scrollY < 5700) {
      count += 1;
      checkScrollAndCount();
    }
  });

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

import { setupSwiper } from './swiper.ts';
setupSwiper();

const buttonOpenVideo = document.querySelector(".button-open-video");
buttonOpenVideo?.addEventListener("click", () => {
  handleChangeHidden();
});
const buttonCloseVideo = document.querySelector(".button-close-video");
buttonCloseVideo?.addEventListener("click", () => {
  handleChangeHidden();
});