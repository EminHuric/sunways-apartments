<template>
  <section class="location-page">
    <!-- HERO SECTION -->
    <div class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-text">
        <h1>Sunways Apartments</h1>
        <p class="subheading">
          Savršena lokacija u Dobrim Vodama, <strong>200m od plaže</strong>
        </p>
      </div>
    </div>

    <!-- CONTENT -->
    <div class="location-content">
      <!-- INFO CARD -->
      <div class="location-card">
        <h2>Detalji Lokacije</h2>
        <ul class="features">
          <li><span class="icon">🏖️</span> Plaža 200m</li>
          <li><span class="icon">🍴</span> Restorani & kafići</li>
          <li><span class="icon">🛍️</span> Prodavnice u blizini</li>
          <li><span class="icon">🚶</span> Šetalište i promenada</li>
        </ul>
        <p class="description">
          Apartmani Sunways nude mir i komfor, idealno za opuštajući odmor sa porodicom ili prijateljima.
        </p>
      </div>

      <!-- MAP WITH OVERLAY -->
      <div class="map-wrapper">
        <iframe
          src="https://www.google.com/maps?q=Sunways%20Apartments%20Dobre%20Vode%20Ulica%2082&output=embed"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="map-overlay">
          <div><strong>🏖 Plaža:</strong> 200m</div>
          <div><strong>🍴 Restorani:</strong> 150m</div>
          <div><strong>🚶 Promenada:</strong> 50m</div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import Footer from '../components/Footer.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Playfair+Display:wght@700&display=swap');

/* GENERAL */
.location-page {
  font-family: 'Poppins', sans-serif;
  color: #fff;
  max-width: 100%;
  margin: 0 auto;
  padding: 80px 20px;
  background: linear-gradient(135deg, #997e4f, #997e4f);
  margin-top: 40px;
  
}

/* HERO */
.hero {
  position: relative;
  height: 500px;
  background: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 1;
}

.hero-text {
  position: relative;
  text-align: center;
  z-index: 1;
}

.hero-text h1 {
  font-family: 'Playfair Display', serif;
  font-size: 52px;
  margin-bottom: 15px;
  color: #ffd166;
  text-shadow: 0 4px 15px rgba(0,0,0,0.7);
}

.hero-text .subheading {
  font-size: 20px;
  color: #fff;
  text-shadow: 0 2px 10px rgba(0,0,0,0.6);
}

/* CONTENT */
.location-content {
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
  justify-content: center;
}

/* CARD */
.location-card {
  flex: 1 1 380px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 40px 30px;
  border-radius: 25px;
  backdrop-filter: blur(10px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.7);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.location-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 60px rgba(0,0,0,0.9);
}

.location-card h2 {
  font-size: 28px;
  margin-bottom: 25px;
  color: #ffd166;
}

.features {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.features li {
  font-size: 16px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  transition: transform 0.3s;
}

.features li:hover {
  transform: translateX(5px);
}

.features li .icon {
  margin-right: 12px;
  font-size: 20px;
  color: #ffd166;
}

/* DESCRIPTION */
.description {
  font-size: 16px;
  line-height: 1.8;
  color: #eee;text-align: center;
}

/* MAP */
.map-wrapper {
  flex: 1 1 600px;
  position: relative;
  min-height: 520px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 25px 60px rgba(0,0,0,0.9);
  transition: transform 0.3s ease;
}

.map-wrapper:hover {
  transform: scale(1.02);
}

.map-wrapper iframe {
  width: 100%;
  height: 100%;
  border: none;
  filter: contrast(1.2) brightness(0.95);
}

/* MAP OVERLAY */
.map-overlay {
  position: absolute;
  bottom: 70px;
  left: 10px;
  background: rgba(0,0,0,0.7);
  padding: 20px;
  border-radius: 20px;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #ffd166;
  backdrop-filter: blur(5px);
}
/* RESPONSIVE */
@media (max-width: 1024px) {
  .location-content {
    flex-direction: column;
    gap: 40px;
  }
}

@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 42px;
  }

  .map-wrapper {
    min-height: 400px;
  }
}

@media (max-width: 420px) {
  .hero {
    height: 350px;
  }

  .hero-text h1 {
    font-size: 28px;
  }

  .location-card {
    padding: 30px 20px;
  }

  .map-wrapper {
    min-height: 300px;
  }
}

</style>