<template>
  <div id="principal">
    <header-component />
    <divider-component />
    <div class="transition">
      <clients-component />
      <divider-component />
      <contact-component />
    </div>
  </div>
</template>

<script setup lang="ts">
const { gtag, initialize } = useGtag()
initialize()
</script>

<style>
body {
  margin: 0px;
}

@-webkit-keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }

  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

.transition {
  -webkit-animation: fade-in-bottom 2.1s ease-out 2s both;
  animation: fade-in-bottom 2.1s ease-out 2s both;
}

#principal {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 80px 35px;
  background-color: #fff;
}

@media (max-width: 500px) {
  #principal {
    margin: 0px 20px 35px;
  }
}

@media (max-width: 175px) {
  #principal {
    margin: 0px 5px 35px;
  }
}
</style>
