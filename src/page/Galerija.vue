<template>
  <div class="gallery-page">
    <h1>Galerija Sunways Apartments</h1>
    <div class="gallery-grid">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="gallery-item"
        @click="openLightbox(index)"
      >
        <img :src="img" :alt="'Slika ' + (index + 1)" />
      </div>
    </div>

    <!-- Lightbox -->
    <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
      <img :src="images[currentIndex]" />
      <button class="close-btn" @click.stop="closeLightbox">✖</button>
      <button class="prev-btn" @click.stop="prevImage">‹</button>
      <button class="next-btn" @click.stop="nextImage">›</button>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref } from 'vue'
import Footer from '../components/Footer.vue'

const images = [
  '/gallery/1.jpeg',
  '/gallery/2.jpeg',
  '/gallery/3.jpeg',
  '/gallery/4.jpeg',
  '/gallery/5.jpeg',
  '/gallery/6.jpeg',
  '/gallery/7.jpeg',
  '/gallery/8.jpeg',
  '/gallery/9.jpeg',
  '/gallery/10.jpeg',
  '/gallery/11.jpeg',
  '/gallery/12.jpeg',
  '/gallery/13.jpeg',
  '/gallery/14.jpg',
  '/gallery/15.jpg',
  '/gallery/16.jpg',
  '/gallery/17.jpg',
  '/gallery/19.jpg',
  '/gallery/18.jpg',
  '/gallery/20.jpg',
  '/gallery/21.jpg',
  '/gallery/22.jpg',
  '/gallery/23.jpg',
  '/gallery/24.jpg',
  '/gallery/25.jpeg',
  '/gallery/26.jpeg',
  '/gallery/27.jpeg',
  '/gallery/28.jpeg',
  '/gallery/29.jpeg',
  '/gallery/30.jpeg',
  '/gallery/31.jpeg',

]

const lightboxOpen = ref(false)
const currentIndex = ref(0)

function openLightbox(index) {
  currentIndex.value = index
  lightboxOpen.value = true
}

function closeLightbox() {
  lightboxOpen.value = false
}

function nextImage() {
  currentIndex.value = (currentIndex.value + 1) % images.length
}

function prevImage() {
  currentIndex.value =
    (currentIndex.value - 1 + images.length) % images.length
}
</script>

<style scoped>
.gallery-page {
  padding-top: 100px; /* odmak zbog header-a */
  max-width: 90%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.gallery-page h1 {
  text-align: center;
  color: #997e4f;
  margin-bottom: 40px;
  font-size: 36px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.gallery-item img {
  width: 100%;
  height: 360px;
  object-fit: cover;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s;
}

.gallery-item img:hover {
  transform: scale(1.05);
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.lightbox img {
  max-width: 90%;
  max-height: 80%;
  border-radius: 10px;
}

.close-btn,
.prev-btn,
.next-btn {
  position: fixed;
  background: rgba(255, 255, 255, 0.3);
  border: none;
  font-size: 30px;
  padding: 10px 15px;
  cursor: pointer;
  color: #fff;
  transition: background 0.3s;
}

.close-btn:hover,
.prev-btn:hover,
.next-btn:hover {
  background: rgba(255, 255, 255, 0.6);
}

.close-btn {
  top: 20px;
  right: 20px;
}

.prev-btn {
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}

.next-btn {
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
}

/* Responsive */
@media (max-width: 768px) {
  .gallery-item img {
    height: 250px;
    width: 100%;
  }
}
</style>
