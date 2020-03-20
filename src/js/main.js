"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('serviceworker.js').then(function (registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function (err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below

let map = []

const zach = document.querySelector(".woj__zach");
map['Zachodniopoorskie'] = zach;
const swie = document.querySelector(".woj__swie");
map['Swietokrzyskie'] = swie;
const slas = document.querySelector(".woj__slas");
map['Slaskie'] = swie;
const mazo = document.querySelector(".woj__mazo");
map['Mzaowieckie'] = mazo;
const warMan = document.querySelector(".woj__warMaz");
map['Warminsko-mazurskie'] = warMan;
const pomo = document.querySelector(".woj__pomo");
map['Pomorskie'] = pomo;
const podl = document.querySelector(".woj__podl");
map['Podlaskie'] = podl;
const podk = document.querySelector(".woj__podk");
map['Podkarpackie'] = podk;
const opol = document.querySelector(".woj__opol");
map['Opolskie'] = opol;
const lubi = document.querySelector(".woj__lubi");
map['Lubieskie'] = lubi;
const lube = document.querySelector(".woj__lube");
map['Lubelskie'] = lube;
const doln = document.querySelector(".woj__doln");
map['Dolnoslaskie'] = doln;
const lodz = document.querySelector(".woj__lodz");
map['Lodzkie'] = lodz;
const malo = document.querySelector(".woj__malo");
map['Maloposlskie'] = malo;
const kujPom = document.querySelector(".woj__kujPom");
map['Kujawsko-pomorskie'] = kujPom;
const wiel = document.querySelector(".woj__wiel");
map['Wielkopolskie'] = wiel;


podl.addEventListener(onmouseover, (e) => {
  
      'fill'; '#eee',
    'opacity' ; 0.4,
      'stroke' ; '#fff',
        'stroke-width' ; 2
  
  
})
  //ustawiamy domyślny wygląd ścieżki
  /*
    map[key][0]{
      'fill'; '#eee',
    'opacity' ; 0.4,
      'stroke' ; '#fff',
        'stroke-width' ; 2
  };

  //ustawiamy domyślny kolor tekstu
  map[key][1]{
    'fill' ; '#333'; 
  };

  map[key].mouseover(function () {
    this[0].animate({
      'fill': '#55B9FF',
      'opacity': 1,
      'stroke': '#3E81D8',
      'stroke-width': 2
    }, 600);
    this[1].animate({
      'fill': '#fff'
    }, 300);
  });

  map[key].mouseout(function () {
    this[0].animate({
      'fill': '#eee',
      'opacity': 0.4,
      'stroke': '#fff',
      'stroke-width': 2
    }, 600);
    this[1].animate({
      fill: '#000'
    }, 300);
  });

  map[key].click(function () {
    console.log(this[0].data('name'));
  });
}
console.log('hello'); */
