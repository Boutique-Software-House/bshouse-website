<template>
  <div id="header">
    <div class="flex logo_letter">
      <i class="las la-code-branch opacity0"></i>
    </div>
    <div class="flex logo_letter">
      <i class="las la-file-code opacity0"></i>
    </div>
    <div class="flex logo_letter">
      <i class="las la-gem"></i>
      <p class="logo first_letters">B</p>
      <p class="second_letters logo">O</p>
      <p class="third_letters logo">U</p>
      <p class="logo fourth_letters">T</p>
      <p class="logo fifth_letters">I</p>
      <p class="logo sixth_letters">Q</p>
      <p class="logo seventh_letters">U</p>
      <p class="logo eighth_letters">E</p>
    </div>
    <div class="flex logo logo_letter">
      <i class="las la-code"></i>
      <p class="logo S">S</p>
      <p class="O logo">O</p>
      <p class="F logo">F</p>
      <p class="logo T">T</p>
      <p class="logo W">W</p>
      <p class="logo A">A</p>
      <p class="logo R">R</p>
      <p class="logo E">E</p>
    </div>
    <div class="flex logo logo_letter">
      <i class="las la-home"></i>
      <p class="logo house1">H</p>
      <p class="logo house2">O</p>
      <p class="logo house3">U</p>
      <p class="logo house4">S</p>
      <p class="logo house5">E</p>
    </div>
  </div>
</template>

<style>
@import 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');

@keyframes opacity0 {
  0% {
    opacity: 1;
  }

  25% {
    opacity: 0.75;
  }

  50% {
    opacity: 0.5;
  }

  75% {
    opacity: 0.25;
  }

  100% {
    opacity: 0;
  }
}

@keyframes logoGem {
  0% {
    opacity: 0;
  }

  75% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letters {
  0% {
    opacity: 0;
  }

  75% {
    opacity: 0;
  }

  90% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letters2 {
  0% {
    opacity: 0;
  }

  75% {
    opacity: 0;
  }

  87.5% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letters3 {
  0% {
    opacity: 0;
  }

  66% {
    opacity: 0;
  }

  77% {
    opacity: 0.3;
  }

  89% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letters4 {
  0% {
    opacity: 0;
  }

  80% {
    opacity: 0;
  }

  90% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letters5 {
  0% {
    opacity: 0;
  }

  90% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letters6 {
  0% {
    opacity: 0;
  }

  72% {
    opacity: 0;
  }

  81% {
    opacity: 0.3;
  }

  90% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letters7 {
  0% {
    opacity: 0;
  }

  75% {
    opacity: 0;
  }

  83.3% {
    opacity: 0.3;
  }

  91.6.3% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes code {
  0% {
    opacity: 0;
  }

  77% {
    opacity: 0;
  }

  84.6% {
    opacity: 0.3;
  }

  92.3% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letter8 {
  0% {
    opacity: 0;
  }

  78.5% {
    opacity: 0;
  }

  85.7% {
    opacity: 0.3;
  }

  92.8% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letter9 {
  0% {
    opacity: 0;
  }

  80% {
    opacity: 0;
  }

  86.6% {
    opacity: 0.3;
  }

  93.3% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letter10 {
  0% {
    opacity: 0;
  }

  81.25% {
    opacity: 0;
  }

  87.5% {
    opacity: 0.3;
  }

  93.75% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letter11 {
  0% {
    opacity: 0;
  }

  82.4% {
    opacity: 0;
  }

  88.2% {
    opacity: 0.3;
  }

  94.1% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letter12 {
  0% {
    opacity: 0;
  }

  83.3% {
    opacity: 0;
  }

  88.8% {
    opacity: 0.3;
  }

  94.4% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letter13 {
  0% {
    opacity: 0;
  }

  84.2% {
    opacity: 0;
  }

  89.4% {
    opacity: 0.3;
  }

  94.7% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letter14 {
  0% {
    opacity: 0;
  }

  85% {
    opacity: 0;
  }

  90% {
    opacity: 0.3;
  }

  95% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letter15 {
  0% {
    opacity: 0;
  }

  85.7% {
    opacity: 0;
  }

  90.4% {
    opacity: 0.3;
  }

  95.2% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes house {
  0% {
    opacity: 0;
  }

  86.3% {
    opacity: 0;
  }

  90.9% {
    opacity: 0.3;
  }

  95.4% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letter16 {
  0% {
    opacity: 0;
  }

  86.9% {
    opacity: 0;
  }

  91.3% {
    opacity: 0.3;
  }

  95.7% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letter17 {
  0% {
    opacity: 0;
  }

  87.5% {
    opacity: 0;
  }

  91.6% {
    opacity: 0.3;
  }

  95.8% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letter18 {
  0% {
    opacity: 0;
  }

  88% {
    opacity: 0;
  }

  92% {
    opacity: 0.3;
  }

  96% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letter19 {
  0% {
    opacity: 0;
  }

  88.4% {
    opacity: 0;
  }

  92.3% {
    opacity: 0.3;
  }

  96.1% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

@keyframes letter20 {
  0% {
    opacity: 0;
  }

  88.8% {
    opacity: 0;
  }

  92.6% {
    opacity: 0.3;
  }

  96.2% {
    opacity: 0.6;
  }

  100% {
    opacity: 1;
  }
}

.S {
  animation-name: letter8;
  animation-duration: 1.1s;
}

.O {
  animation-name: letter9;
  animation-duration: 1.2s;
}

.F {
  animation-name: letter10;
  animation-duration: 1.2s;
}

.T {
  animation-name: letter11;
  animation-duration: 1.3s;
}

.W {
  animation-name: letter12;
  animation-duration: 1.4s;
}

.A {
  animation-name: letter13;
  animation-duration: 1.4s;
}

.R {
  animation-name: letter14;
  animation-duration: 1.5s;
}

.E {
  animation-name: letter15;
  animation-duration: 1.6s;
}

.la-home {
  animation-name: house;
  animation-duration: 1.6s;
}

.house1 {
  animation-name: letter16;
  animation-duration: 1.7s;
}

.house2 {
  animation-name: letter17;
  animation-duration: 1.8s;
}

.house3 {
  animation-name: letter18;
  animation-duration: 1.8s;
}

.house4 {
  animation-name: letter19;
  animation-duration: 1.9s;
}

.house5 {
  animation-name: letter20;
  animation-duration: 2s;
}

.la-code {
  animation-name: code;
  animation-duration: 1s;
}

.eighth_letters {
  animation-name: letters7;
  animation-duration: 1s;
}

.seventh_letters {
  animation-name: letters6;
  animation-duration: 0.9s;
}

.sixth_letters {
  animation-name: letters5;
  animation-duration: 0.9s;
}

.fifth_letters {
  animation-name: letters4;
  animation-duration: 0.8s;
}

.fourth_letters {
  animation-name: letters3;
  animation-duration: 0.7s;
}

.third_letters {
  animation-name: letters2;
  animation-duration: 0.6s;
}

.second_letters {
  animation-name: letters;
  animation-duration: 0.6s;
}

.la-gem {
  animation-name: logoGem;
  animation-duration: 0.4s;
}

.first_letters {
  animation-name: logoGem;
  animation-duration: 0.5s;
}

.opacity0 {
  animation-name: opacity0;
  animation-duration: 0.2s;
  opacity: 0;
}

.la-file-code {
  animation-delay: 0.1s;
}

#header img {
  width: 250px;
  margin: 15px 0px;
  height: auto;
}

.logo {
  font-kerning: none;
}

.flex {
  display: flex;
  align-items: center;
}

.flex i {
  margin-right: 10px;
}

.logo {
  margin: 0px;
}

.flex i {
  font-size: 28px;
  transform: scale(1, 0.88);
}

.flex p {
  font-size: 28px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  margin: 0px;
  transform: scale(1, 0.9);
  line-height: 1;
}

@media (max-width: 310px) {
  .logo_letter {
    font-size: 28px;
  }
}

@media (max-width: 270px) {
  .logo_letter {
    font-size: 24px;
  }
}

@media (max-width: 240px) {
  .logo_letter {
    font-size: 20px;
  }
}

@media (max-width: 215px) {
  .logo_letter {
    font-size: 16px;
  }
}

@media (max-width: 190px) {
  .logo_letter {
    font-size: 14px;
  }
}
</style>
