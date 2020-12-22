"use strict";

let winCount = 0, looseCount = 0; // инициируем переменные удач и промахов

for (let i = 1, element; i < 10; i++) {
   element = document.getElementById(`hole${i}`); // ловим элемент с индексом

   element.onclick = function() { // обработчик нажатия
      if (this.className == "hole hole_has-mole") {
         winCount++; // плюсуем
         document.getElementById("dead").textContent = winCount; // записываем результат
         if (winCount == 10) {alert("Победа!"); reset();} // победа или нет?
      } else {
         looseCount++;
         document.getElementById("lost").textContent = looseCount;
         if (looseCount == 5) {alert("Вы проиграли!"); reset();}
      }
   }
}

function reset() { // обнуляем счётчики
   winCount = looseCount = 0;
   document.getElementById("dead").textContent = winCount;
   document.getElementById("lost").textContent = looseCount;
}