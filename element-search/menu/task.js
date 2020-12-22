'use strict';

const elementsMenuLink = Array.from(document.querySelectorAll('.menu__link'));

let lastActiveMenu;

for (let i = 0; i < elementsMenuLink.length; i++) {
   elementsMenuLink[i].onclick = function () {

      const elementMenuSub = this.closest('.menu__item').querySelector('.menu_sub');

      if (elementMenuSub) {

         if (elementMenuSub != lastActiveMenu && lastActiveMenu) {
            lastActiveMenu.classList.remove('menu_active');
         }

         elementMenuSub.classList.toggle('menu_active');

         lastActiveMenu = elementMenuSub;

         return false;
      }

   };
}