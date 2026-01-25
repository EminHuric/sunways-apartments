<template>
  <section class="features">
    <div class="features-grid">
      <div class="feature">
        <i class="fas fa-building"></i>
        <p>15 apartmana</p>
      </div>
      <div class="feature">
        <i class="fas fa-water"></i>
        <p>200m od plaže</p>
      </div>
      <div class="feature">
        <i class="fas fa-wifi"></i>
        <p>Besplatan WiFi</p>
      </div>
      <div class="feature">
        <i class="fas fa-car"></i>
        <p>Besplatan parking</p>
      </div>
      <div class="feature">
        <i class="fas fa-smile"></i>
        <p>300+ zadovoljnih gostiju</p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Nema JS logike ovde, samo prikaz
</script>

<style scoped>
.features {
  max-width: 1400px;
  margin: 200px auto;
  padding: 0 10px;
  text-align: center;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}

.features h2 {
  font-family: 'Playfair Display', serif;
  font-size: 36px;
  margin-bottom: 50px;
  color: #ffd166;
  text-shadow: 0 3px 10px rgba(0,0,0,0.5);
}

.features-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
}

.feature {
  background: rgba(255, 255, 255, 0);
  border: 1px solid #997e4f;
  border-radius: 15px;
  padding: 25px 20px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.feature i {
  font-size: 40px;
  color: #997e4f;
  margin-bottom: 15px;
}

.feature p {
  font-size: 16px;
  color: #997e4f;
  font-weight: 500;
}

.feature:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.7);
}

/* Responsive */
@media (max-width: 768px) {
  .features-grid {
    gap: 20px;
  }

  .feature {
    width: 70%;
  }
}

@media (max-width: 420px) {
  .feature {
    width: 100%;
  }

  .feature i {
    font-size: 36px;
  }

  .feature p {
    font-size: 14px;
  }
}
</style>