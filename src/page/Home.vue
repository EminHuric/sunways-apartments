<template>
  <div class="home-page">
    <!-- Hero sekcija -->
    <section class="hero">
      <img src="/sunways.png" alt="Sunways Apartments" class="hero-img" />
      <div class="container">
        <button class="btn">
          Rezerviši sada
        </button>
        <router-link to="/galerija">
          <button class="btn2">
          Galerija
        </button>
        </router-link>
      </div>
      <onama />
      <img src="/palm.png" alt="Palma" class="hero-palm" />
      <img src="/palm.png" alt="Palma" class="hero-palm1" />
    </section>
  </div>
</template>

<script setup>
  import onama from '../components/onama.vue';
</script>

<style scoped>
.btn {
  height: 50px;
  width: 140px;
  font-size: 18px;
  background-color: #997e4f;
  border: none;
  color: white;
  font-weight: bold;
}
.btn2 {
  height: 50px;
  width: 140px;
  font-size: 18px;
  margin-left: 20px;
  margin-top: 40px;
  border-color: #000000;
  background: none;
  font-weight: bold;
  color: #997e4f;
  
}

.home-page {
  padding-top: 40px;
  /* odmak zbog header-a */
  background-color: #f2e9d0;
}

.hero {
  position: relative;
  width: 100%;
  text-align: center;
}

.hero-img {
  width: 100%;
  max-height: 700px;
  object-fit: cover;
}

.hero-palm {
  position: absolute;
  top: 80%;
  right: 50px;
  height: 300px;
  width: 500px;
}
.hero-palm1 {
  position: absolute;
  top: 80%;
  left: 50px;
  height: 300px;
  width: 500px;
  transform: rotate(142deg);
}

/* Content sekcija */
.content {
  max-width: 1200px;
  margin: 50px auto;
  text-align: center;
}

.content h1 {
  font-size: 36px;
  color: #997e4f;
  margin-bottom: 20px;
}

.content p {
  font-size: 18px;
  color: #5a4a32;
  margin-bottom: 40px;
}

.features {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.feature {
  background-color: #fff5e6;
  padding: 20px;
  border-radius: 10px;
  width: 250px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
}

.feature h3 {
  color: #997e4f;
  margin-bottom: 10px;
}

.feature p {
  color: #5a4a32;
  font-size: 16px;
}

@media (max-width: 768px) {
  .features {
    flex-direction: column;
    align-items: center;
  }

  .feature {
    width: 80%;
  }

  .hero-palm {
    display: none;
  }
}
</style>
