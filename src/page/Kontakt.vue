<template>
  <div class="contact-form">
    <h2>Kontaktirajte nas</h2>
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
</style>
