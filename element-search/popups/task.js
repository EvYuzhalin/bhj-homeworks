'use strict';

const elementsModalCount = document.getElementsByClassName('modal').length;

function modalShow(activeModal) {
   for (let i = 0; i < elementsModalCount; i++) {
      document.getElementsByClassName('modal')[i].className = 'modal';
   }
 
   document.getElementById(activeModal).className = "modal modal_active";
}


window.onload = () => modalShow('modal_main');

const elementsModalCloseCount = document.getElementsByClassName('modal__close').length;

for (let i = 0, element; i < elementsModalCloseCount; i++) {
   element = document.getElementsByClassName('modal__close')[i];
   element.onclick = function () {
      this.closest('.modal_active').className = 'modal';
   };
}


const elementsModalSuccessCount = document.getElementsByClassName('show-success').length;

for (let i = 0, element; i < elementsModalSuccessCount; i++) {
   element = document.getElementsByClassName('show-success')[i];
   element.onclick = function () {
      this.closest('.modal_active').className = 'modal';
      document.getElementById('modal_success').className = "modal modal_active";
   };
}