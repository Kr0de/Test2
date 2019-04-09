"use strict";



let li = document.createElement('li'),
    menu = document.querySelector('.menu'),
    mass = document.querySelectorAll('.menu-item'),
    body = document.body,
    headline = document.getElementById('title'),
    column = document.querySelectorAll('.column'),
    prompt = document.getElementById("prompt");




    console.log(headline);
    console.log(typeof(menu));
menu.appendChild(li);
li.innerHTML = 'Пятый пункт';
li.classList.add('menu-item');

mass[1].innerHTML = "Второй пункт";
mass[2].innerHTML = "Третий пункт";

body.style.background = 'url(img/apple_true.jpg';
headline.innerHTML = 'Мы продаём только подлинную технику Apple';
column[1].removeChild(column[1].children[1]);
prompt.innerHTML = 'Как вы относитесь к технике Apple?';