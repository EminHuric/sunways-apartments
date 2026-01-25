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
        <img src="/gallery/11.jpeg" alt="Centralni Apartman">
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

  <div class="contact-form" id="contactForm">
    <h2>Pošalji upit</h2>
    <form @submit.prevent="sendEmail">
      <input type="text" v-model="name" placeholder="Ime" required />
      <input type="email" v-model="email" placeholder="Email" required />
      <textarea v-model="message" placeholder="Poruka" required></textarea>
      <button type="submit">Pošalji</button>
    </form>

    <!-- Poruka poslato -->
    <p v-if="success" class="success">Poruka poslata! Hvala što ste nas kontaktirali.</p>
    <p v-if="error" class="error">Došlo je do greške. Pokušajte ponovo.</p>
  </div>


</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const success = ref(false)
const error = ref(false)

const sendEmail = async () => {
  const formData = new FormData()
  formData.append('name', name.value)
  formData.append('email', email.value)
  formData.append('message', message.value)
  
  // FormSubmit URL tvoj mejl
  const url = 'https://formsubmit.co/sunwaysapartments@gmail.com'

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    if (response.ok) {
      success.value = true
      error.value = false
      // reset forme
      name.value = ''
      email.value = ''
      message.value = ''
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

.contact-form {
  max-width: 500px;
  margin: 100px auto;
  background: #f2e9d0;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}

.contact-form h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #997e4f;
}

.contact-form input,
.contact-form textarea {
  width: 96%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #997e4f;
  border-radius: 5px;
  font-size: 16px;
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
}

.contact-form button:hover {
  background-color: #7d6444;
}

.success {
  color: green;
  margin-top: 15px;
  text-align: center;
}

.error {
  color: red;
  margin-top: 15px;
  text-align: center;
}

    
.apartments-page {
  max-width: 100%;
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

/* APARTMENT CARD */
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

/* CENTRALNI APARTMAN */
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

/* BUTTON */
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

/* RESPONSIVE */
@media (max-width: 1024px) {
  .apartment-card.central {
    grid-column: span 1;
  }
}

@media (max-width: 420px) {
  .apartment-info h3 {
    font-size: 20px;
  }

  .apartment-info p {
    font-size: 14px;
  }

  .book-btn {
    font-size: 14px;
    padding: 8px 20px;
  }
}
</style>