<template>
  <div class="header">
    <div class="container">
      <router-link to="/">
        <img alt="logo" src="/logo.jpeg " class="logo">
      </router-link>

      <a href="https://wa.me/381652206269" target="_blank" class="phone">
        <i class="fa-solid fa-phone"></i> +381 652206269
      </a>

      <div class="social-links">
        <a href="https://www.facebook.com/share/1C89DUtN71/" target="_blank">
          <i class="fab fa-facebook-f"></i>
        </a>

        <a href="https://www.instagram.com/sunways_apartments/" target="_blank">
          <i class="fab fa-instagram"></i>
        </a>

        <a href="mailto:sunwaysapartments@gmail.com" target="_blank">
          <i class="fas fa-envelope"></i>
        </a>
      </div>

      <nav class="main-menu">
        <router-link to="/sobe">Sobe</router-link>
        <router-link to="/galerija">Galerija</router-link>
        <router-link to="/kontakt">Kontakt</router-link>
        <router-link to="/lokacija">Lokacija</router-link>
      </nav>
    </div>

    <!-- hamburger -->
    <button v-if="!isOpen" @click="openMenu" class="btn">☰</button>
  </div>

  <!-- overlay -->
  <div v-if="isOpen" class="overlay" @click="closeMenu"></div>

  <!-- mobile menu -->
  <div v-if="isOpen" class="menu">
    <button @click="closeMenu" class="btn close">✖</button>

    <router-link to="/sobe" @click="closeMenu">Sobe</router-link>
    <router-link to="/galerija" @click="closeMenu">Galerija</router-link>
    <router-link to="/kontakt" @click="closeMenu">Kontakt</router-link>
    <router-link to="/lokacija" @click="closeMenu">Lokacija</router-link>

    <div class="menu-social">
      <a href="https://www.facebook.com/share/1C89DUtN71/" target="_blank">
        <i class="fab fa-facebook-f"></i>
      </a>

      <a href="https://www.instagram.com/sunways_apartments/" target="_blank">
        <i class="fab fa-instagram"></i>
      </a>

      <a href="mailto:sunwaysapartments@gmail.com">
        <i class="fas fa-envelope"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const isOpen = ref(false)

function openMenu() {
  isOpen.value = true
}

function closeMenu() {
  isOpen.value = false
}

watch(isOpen, (value) => {
  document.body.style.overflow = value ? 'hidden' : 'auto'
})
</script>

<style scoped>
.header {
  border: 1px solid #f2e9d0;
  height: 70px;
  position: relative;
}

.container {
  display: flex;
}

.logo {
  height: 50px;
  position: absolute;
  margin-top: 25px;
  margin-left: 26%;
}

.phone {
  margin-left: 26%;
  color: #997e4f;
  font-weight: bold;
  font-size: 22px;
  margin-top: 40px;
  text-decoration: none;
}

.social-links {
  margin-top: 40px;
  right: 26%;
  position: absolute;
}

.social-links a {
  color: #997e4f;
  margin-left: 10px;
  font-size: 22px;
}

.main-menu {
  display: flex;
  gap: 80px;
  margin-top: 40px;
  margin-left: 8%;
}

.main-menu a {
  text-decoration: none;
  font-size: 22px;
  font-weight: 600;
  color: #997e4f;
}

.btn {
  display: none;
  background: none;
  border: none;
  font-size: 30px;
}

/* MOBILE */
@media (max-width: 768px) {
  .main-menu,
  .social-links,
  .phone {
    display: none;
  }

  .logo {
    margin-left: 10px;
    margin-top: 10px;
  }

  .header {
    height: 50px;
  }

  .btn {
    display: block;
    position: absolute;
    right: 20px;
    top: 10px;
    z-index: 3;
  }

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    z-index: 1;
  }

  .menu {
    position: fixed;
    top: 0;
    right: 0;
    width: 70%;
    height: 100vh;
    background: #997e4f;
    z-index: 2;
    display: flex;
    flex-direction: column;
    padding-top: 80px;
  }

  .menu a {
    color: white;
    text-decoration: none;
    font-size: 22px;
    padding: 15px 30px;
  }

  .close {
    position: absolute;
    top: 15px;
    right: 20px;
    color: white;
  }

  .menu-social {
    margin-top: auto;
    display: flex;
    justify-content: center;
    gap: 25px;
    padding-bottom: 110px;
  }

  .menu-social a {
    color: white;
    font-size: 22px;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .logo { margin-left: 10px; }
  .phone { display: none; }
  .main-menu { margin-left: 33%; gap: 45px; }
  .main-menu a { font-size: 19px; }
  .social-links { right: 30px; }
}

@media (min-width: 1024px) and (max-width: 1720px) {
  .logo { margin-left: 6%; }
  .phone { display: none; }
  .main-menu { margin-left: 35%; gap: 60px; }
  .main-menu a { font-size: 22px; }
  .social-links { right: 30px; }
}

@media (min-width: 1720px) {
  .logo { margin-left: 22%; }
  .main-menu { margin-left: 100px; }
  .phone { margin-left: 22%; }
  .social-links { right: 22%; }
}
</style>
