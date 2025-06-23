<template>
  <header class="header">
    <div class="header-container">
      <div class="logo-section">
        <div class="logo-animation">
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
      </div>
      
      <nav class="navigation">
        <ul class="nav-menu">
          <li><a href="#methodology" class="nav-link">{{ t('nav.methodology') }}</a></li>
          <li><a href="#services" class="nav-link">{{ t('nav.services') }}</a></li>
          <!-- <li><a href="#case-studies" class="nav-link">{{ t('nav.caseStudies') }}</a></li> -->
          <li><a href="#technologies" class="nav-link">{{ t('nav.technologies') }}</a></li>
          <li><a href="#contact" class="nav-link">{{ t('nav.contact') }}</a></li>
        </ul>
      </nav>
      
      <div class="header-actions">
        <language-selector />
        <a href="#contact" class="cta-button">
          <i class="las la-rocket"></i>
          {{ t('nav.startProject') }}
        </a>
      </div>
      
      <div class="mobile-menu-toggle" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ active: isMobileMenuOpen }">
      <nav class="mobile-nav">
        <ul class="mobile-nav-menu">
          <li><a href="#methodology" @click="closeMobileMenu">{{ t('nav.methodology') }}</a></li>
          <li><a href="#services" @click="closeMobileMenu">{{ t('nav.services') }}</a></li>
          <!-- <li><a href="#case-studies" @click="closeMobileMenu">{{ t('nav.caseStudies') }}</a></li> -->
          <li><a href="#technologies" @click="closeMobileMenu">{{ t('nav.technologies') }}</a></li>
          <li><a href="#contact" @click="closeMobileMenu">{{ t('nav.contact') }}</a></li>
        </ul>
      </nav>
      <div class="mobile-actions">
        <language-selector />
        <a href="#contact" class="cta-button" @click="closeMobileMenu">
          <i class="las la-rocket"></i>
          {{ t('nav.startProject') }}
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '~/composables/useI18n'

const { t } = useI18n()

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>
