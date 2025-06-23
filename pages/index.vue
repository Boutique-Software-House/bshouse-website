<template>
  <div id="principal">
    <header-component />
    <div class="main-content">
      <divider-component />
      <div class="transition">
        <!-- Hero Section con propuesta de valor -->
        <hero-section />
        <divider-component />
        <!-- Metodología -->
        <methodology-section />
        <divider-component />
        <!-- Servicios -->
        <services-section />
        <divider-component />
        <!-- Clientes existentes -->
        <clients-component />
        <divider-component />
        <!-- Casos de éxito -->
        <!-- <case-studies-section />
        <divider-component /> -->
        <!-- Tecnologías -->
        <technologies-section />
        <divider-component />
        <!-- Contacto -->
        <contact-section />
      </div>
    </div>
    <footer-component />
  </div>
</template>

<script setup lang="ts">
const { gtag, initialize } = useGtag()
initialize()

// Inicializar animaciones de scroll
useScrollAnimations()
</script> 