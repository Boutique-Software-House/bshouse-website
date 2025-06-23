<template>
  <NuxtPage />
  <CookieBanner />
</template>

<script setup>
import CookieBanner from '~/components/CookieBanner.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');

body {
  margin: 0px;
  font-family: 'Montserrat', sans-serif;
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
  background-color: #fff;
}

.main-content {
  margin: 0px 80px 35px;
  padding-top: 120px;
}

:root {
  --primary-color: #000000;
  --secondary-color: #333333;
  --text-primary: #000000;
  --text-secondary: #666666;
  --text-light: #999999;
  --background-light: #f8f8f8;
  --background-dark: #1a1a1a;
  --border-color: #e0e0e0;
  --border-color-dark: #333333;
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --border-radius: 4px;
  --transition: all 0.3s ease;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 60px 0;
}

.section-title {
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-primary);
  font-family: 'Montserrat', sans-serif;
}

.section-subtitle {
  font-size: 1rem;
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Montserrat', sans-serif;
  font-weight: 300;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: var(--border-radius);
  font-weight: 400;
  text-decoration: none;
  transition: var(--transition);
  cursor: pointer;
  border: 2px solid var(--primary-color);
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  background: transparent;
  color: var(--primary-color);
}

.btn:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.card {
  background: white;
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
  border: 1px solid var(--border-color);
}

.card:hover {
  box-shadow: var(--shadow-md);
}

@media (max-width: 500px) {
  .main-content {
    margin: 0px 20px 35px;
    padding-top: 100px;
  }
  .section {
    padding: 40px 0;
  }
  .section-title {
    font-size: 1.5rem;
  }
  .container {
    padding: 0 16px;
  }
}
</style>

