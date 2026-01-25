<template>
  <section class="apartments-page">
    <h2 class="section-title">Naši Apartmani</h2>

    <div class="apartments-grid">
      <!-- Centralni Apartman -->
      <div class="apartment-card central">
        <img src="/gallery/10.jpeg" alt="Centralni Apartman">
        <div class="apartment-info">
          <h3>Centralni Apartman</h3>
          <p>Najprostraniji apartman, idealan za porodice i grupe. 4 sobe, moderna oprema i pogled na more.</p>
          <a href="#contactForm"><button class="book-btn">Rezerviši</button></a>
        </div>
      </div>

      <!-- Ostali apartmani -->
      <div class="apartment-card">
        <img src="/gallery/11.jpeg" alt="Četvorokrevetni">
        <div class="apartment-info">
          <h3>Četvorokrevetni</h3>
          <p>Prostran i udoban, sa svim potrebnim sadržajima za odmor.</p>
          <a href="#contactForm"><button class="book-btn">Rezerviši</button></a>
        </div>
      </div>

      <div class="apartment-card">
        <img src="/gallery/25.jpeg" alt="Trokrevetni Apartman">
        <div class="apartment-info">
          <h3>Trokrevetni</h3>
          <p>Idealno za manju porodicu ili grupu prijatelja, moderno i komforno.</p>
          <a href="#contactForm"><button class="book-btn">Rezerviši</button></a>
        </div>
      </div>

      <div class="apartment-card">
        <img src="/gallery/17.jpg" alt="Dvokrevetni Apartman">
        <div class="apartment-info">
          <h3>Dvokrevetni</h3>
          <p>Komforan apartman za parove, sa elegantnim i modernim enterijerom.</p>
          <a href="#contactForm"><button class="book-btn">Rezerviši</button></a>
        </div>
      </div>
    </div>
  </section>

  <!-- Kontakt forma -->
  <section class="contact-section" id="contactForm">
    <h2>Pošalji upit</h2>
    <form @submit.prevent="sendEmail">
      <input type="text" v-model="name" placeholder="Ime" required />
      <input type="email" v-model="email" placeholder="Email" required />

      <div class="date-group">
        <label>Datum od:</label>
        <input type="date" v-model="dateFrom" :min="minDate" required />
        <label>Datum do:</label>
        <input type="date" v-model="dateTo" :min="dateFrom || minDate" required />
      </div>

      <textarea v-model="message" placeholder="Poruka" required></textarea>
      <button type="submit">Pošalji</button>
    </form>

    <p v-if="success" class="success">Poruka poslata! Hvala što ste nas kontaktirali.</p>
    <p v-if="error" class="error">Došlo je do greške. Pokušajte ponovo.</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const dateFrom = ref('')
const dateTo = ref('')
const success = ref(false)
const error = ref(false)

const today = new Date()
const minDate = today.toISOString().split('T')[0] // danasnji datum YYYY-MM-DD

const sendEmail = async () => {
  if (dateTo.value < dateFrom.value) {
    alert('Datum do ne može biti pre datuma od!')
    return
  }

  const formData = new FormData()
  formData.append('name', name.value)
  formData.append('email', email.value)
  formData.append('message', message.value)
  formData.append('dateFrom', dateFrom.value)
  formData.append('dateTo', dateTo.value)
  formData.append('_captcha', 'false') // bez captcha
  formData.append('_next', window.location.href)

  const url = 'https://formsubmit.co/sunwaysapartments@gmail.com'

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' },
    })

    if (response.ok) {
      success.value = true
      error.value = false
      // reset forme
      name.value = ''
      email.value = ''
      message.value = ''
      dateFrom.value = ''
      dateTo.value = ''
    } else {
      throw new Error('Network response was not ok')
    }
  } catch (err) {
    error.value = true
    success.value = false
    console.error(err)
  }
}
</script>

<style scoped>
.apartments-page {
  max-width: 1200px;
  margin: 20px auto;
  padding: 80px 20px;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #997e4f);
  text-align: center;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  margin-bottom: 60px;
  color: #ffd166;
  text-shadow: 0 4px 15px rgba(0,0,0,0.7);
}

.apartments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.apartment-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.7);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.apartment-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 60px rgba(0,0,0,0.9);
}

.apartment-card.central {
  width: 98%;
}

.apartment-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.apartment-info {
  padding: 20px;
}

.apartment-info h3 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #ffd166;
}

.apartment-info p {
  font-size: 16px;
  color: #eee;
  margin-bottom: 15px;
}

.book-btn {
  padding: 10px 25px;
  font-size: 16px;
  background: #ffd166;
  color: #1a1a1a;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.book-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(255,209,102,0.5);
}

.contact-section {
  max-width: 500px;
  margin: 50px auto;
  padding: 30px;
  background: #f2e9d0;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
}

.contact-section h2 {
  text-align: center;
  color: #997e4f;
  margin-bottom: 20px;
}

.contact-section input,
.contact-section textarea {
  width: 96%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #997e4f;
  border-radius: 5px;
  font-size: 16px;
}

.date-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  margin-bottom: 15px;
}

.date-group label {
  width: 100%;
  text-align: left;
  font-size: 14px;
  color: #997e4f;
}

.date-group input[type="date"] {
  width: 48%;
}

.contact-section button {
  width: 100%;
  padding: 12px;
  background-color: #997e4f;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
}

.contact-section button:hover {
  background-color: #7d6444;
}

.success {
  color: green;
  text-align: center;
  margin-top: 15px;
}

.error {
  color: red;
  text-align: center;
  margin-top: 15px;
}
</style>e

<style scoped>
.apartments-page {
  max-width: 100%;
  padding: 80px 20px;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(135deg, #997e4f);
  text-align: center;
}

.section-title {
  font-family: 'Playfair Display', serif;
  font-size: 40px;
  margin-bottom: 60px;
  color: #ffd166;
  text-shadow: 0 4px 15px rgba(0,0,0,0.7);
}

.apartments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
}

.apartment-card {
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.7);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.apartment-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 60px rgba(0,0,0,0.9);
}

.apartment-card img {
  width: 100%;
  height: 300px;
  object-fit: cover;
}

.apartment-info {
  padding: 20px;
}

.apartment-info h3 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #ffd166;
}

.apartment-info p {
  font-size: 16px;
  color: #eee;
  margin-bottom: 15px;
}

.book-btn {
  padding: 10px 25px;
  font-size: 16px;
  background: #ffd166;
  color: #1a1a1a;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.book-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(255,209,102,0.5);
}

/* Kontakt forma */
.contact-form {
  max-width: 500px;
  margin: 80px auto;
  background: #f2e9d0;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  text-align: center;
}

.contact-form input,
.contact-form textarea {
  width: 95%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #997e4f;
  border-radius: 5px;
  font-size: 16px;
}

.date-fields {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  flex-wrap: wrap;
}

.date-fields input {
  flex: 1;
}

.contact-form button {
  width: 100%;
  padding: 12px;
  background-color: #997e4f;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;
}

.contact-form button:hover {
  background-color: #7d6444;
}

.info {
  margin-top: 15px;
  font-size: 14px;
  color: #555;
}

@media (max-width: 420px) {
  .date-fields {
    flex-direction: column;
  }
}
</style>