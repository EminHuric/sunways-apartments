<template>
  <section class="gallery">
    <div class="gallery-grid">
      <div v-for="(img, index) in images" :key="index" class="gallery-item">
        <img :src="img" :alt="'Apartman ' + (index + 1)" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const images = ref([
  '/gallery/6.jpeg',
  '/gallery/30.jpeg',
  '/gallery/10.jpeg',
  '/gallery/25.jpeg',
  '/gallery/14.jpg',
  '/gallery/17.jpg',
  '/gallery/28.jpeg',
  '/gallery/8.jpeg'
])
</script>

<style scoped>
.gallery {
  max-width: 100%;
  margin: 0px auto;
  padding-left: -50px;
  padding-bottom: 40px;
  padding-right: 20px;
  margin-bottom: 0px;
  padding-top: 50px;
  text-align: center;
  height: 110%;
  background-color: #a78751;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 slike po redu */
  gap: 15px;
}

.gallery-item {
  width: 100%;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
}

.gallery-item img {
  width: 100%;
  height: 600px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item img:hover {
  transform: scale(1.05);
}

/* Responsive */
@media (max-width: 1724px) {
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr); /* 2 slike po redu na tabletima */
  }
  .gallery {
    padding-left: 20px;
    margin-top: -50px;
  }
}
@media (max-width: 1224px) {
  .gallery-grid {
    grid-template-columns: repeat(1, 1fr); /* 2 slike po redu na tabletima */
  }
  .gallery {
    padding-left: 20px;
    margin-top: -50px;
  }
}

@media (max-width: 600px) {
  .gallery-grid {
    grid-template-columns: 1fr; /* 1 slika po redu na mobilnom */
  }
  .gallery-item img {
    height: 300px;
  }
  .gallery {
    padding-left: 20px;
    margin-top: -50px;
  }
}
</style>