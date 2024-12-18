let tg = window.Telegram.WebApp;

tg.expand();

let item = "";

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");


btn1.addEventListener("click", function () {
 if (tg.MainButton.isVisible) {
     tg.MainButton.hide();
 }
 else {
     tg.MainButton.setText("Вывести информацию о Амурском Тигре");
     item = "Крупная кошка с полосатым рыжим мехом,массой до 300 кг. За ночь способен преодолевать до 30 км в поисках добычи."
     tg.MainButton.show();
 }
});


btn2.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
  }
  else {
      tg.MainButton.setText("Вывести информацию о Дальневосточный лесной кот ");
      item = "Крупный дикий кот с пушистым мехом и длинным телом. Отличается скрытым образом жизни и редко попадается на глаза.";
      tg.MainButton.show();
  }
 });

 btn3.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
  }
  else {
      tg.MainButton.setText("Вывести информацию о Черном аисте");
      item = "Лесная птица от четверти тела до 1м. Верх черный с металлическим отливом, низ белый. Черный аист всегда возвращается в одно и то же гнездо.";
      tg.MainButton.show();
  }
 });


 btn4.addEventListener("click", function () {
  if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
  }
  else {
      tg.MainButton.setText("Вывести информацию о Снежном Буревестнике");
      item = "Морская птица длинной до 40 см, белого цвета с серыми пятнами. Живет в северных морях. Может спать пока парит над водой.";
      tg.MainButton.show();
  }
 });


 btn5.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию о Белуга");
        item = "Огромная осетровая рыба длинной от четверти до 5 метров. Имеет массивное тело серого цвета. Белуга-самая крупная пресноводная рыба,достигающая более 1 тонны.";
        tg.MainButton.show();
    }
   });


   btn6.addEventListener("click", function () {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Вывести информацию о Таймень");
        item = "Крупная хищная рыба семейства лососевых, с длинной тела до 1,5 метров. Таймень охотится на других рыб, птиц и даже мелких млекопитющих. ";
        tg.MainButton.show();
    }
   });

Telegram.WebApp.onEvent("mainButtonClicked", function () {
 tg.sendData(JSON.stringify(item));
});

