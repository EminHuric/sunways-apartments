<script setup>
import { ref } from "vue";

const email = ref("");
const submitted = ref(false);

const submitNewsletter = () => {
  submitted.value = true;
  email.value = "";
};
</script>

<template>
  <footer class="footer">
    <div class="footer-container">

      <!-- LEVO: LOGO + INFO -->
      <div class="footer-left">
        <img src="/logo.jpeg" alt="Sunways Apartments" class="footer-logo" />

        <p class="footer-desc">
          Sunways Apartments nude moderan, miran i komforan smeštaj u Dobrim
          Vodama. Savršen izbor za opuštanje, privatnost i uživanje uz more.
        </p>

        <ul class="footer-info">
          <li>Dobre Vode, Crna Gora</li>
          <li>sunwaysapartments@gmail.com</li>
          <li>+381 65 2206269</li>
        </ul>
      </div>

      <!-- DESNO: NEWSLETTER -->
      <div class="footer-right">
        <h4>Budite u toku</h4>
        <p class="newsletter-text">
          Prijavite se za ekskluzivne ponude, dostupnost apartmana i posebne pogodnosti.
        </p>

        <form v-if="!submitted" class="newsletter-form" @submit.prevent="submitNewsletter">
          <input type="email" placeholder="Vaša email adresa" required v-model="email" />
          <button type="submit">Prijavi se</button>
        </form>

        <p v-else class="success-message">
          ✅ Hvala na prijavi! <br />
          Uskoro vam šaljemo novosti.
        </p>
      </div>
    </div>

    <!-- DONJI DEO -->
    <div class="footer-bottom">
      <span>© 2026 Sunways Apartments. Sva prava zadržana.</span>
      <span class="credit">Created by <strong>MsEe</strong></span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: linear-gradient(180deg, #b08a4f, #9b7643);
  color: #fff;
  padding: 120px 20px 40px;
  font-family: 'Inter', sans-serif;
}

/* LAYOUT */
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 90px;
  align-items: start;
  position: relative;
}

/* LOGO */
.footer-logo {
  height: 52px;
  margin-bottom: 24px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
}

/* LEFT */
.footer-desc {
  font-size: 15px;
  line-height: 1.75;
  opacity: 0.9;
  margin-bottom: 28px;
}

.footer-info {
  list-style: none;
  padding: 0;
  font-size: 14px;
  opacity: 0.85;
}

.footer-info li {
  margin-bottom: 10px;
  position: relative;
  padding-left: 18px;
}

.footer-info li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #f2e9d0;
}

/* RIGHT */
.footer-right h4 {
  font-size: 24px;
  margin-bottom: 14px;
}

.newsletter-text {
  font-size: 14px;
  margin-bottom: 28px;
  opacity: 0.9;
}

.newsletter-form {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

/* GLASS STYLE INPUT */
.newsletter-form input {
  flex: 1;
  min-width: 240px;
  padding: 16px 20px;
  border-radius: 16px;
  border: none;
  outline: none;
  font-size: 14px;
  background: rgba(242, 233, 208, 0.9);
  color: #2b2b2b;
  backdrop-filter: blur(4px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.newsletter-form input::placeholder {
  color: #6f6a5f;
}

.newsletter-form input:focus {
  box-shadow: 0 4px 14px rgba(0,0,0,0.2);
  transform: translateY(-1px);
}

/* BUTTON */
.newsletter-form button {
  padding: 16px 32px;
  border-radius: 16px;
  border: none;
  background: #f2e9d0;
  color: #2b2b2b;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.newsletter-form button:hover {
  background: #fff;
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.15);
}

/* SUCCESS */
.success-message {
  background: rgba(242,233,208,0.95);
  color: #2b2b2b;
  padding: 18px 24px;
  border-radius: 18px;
  font-size: 14px;
  font-weight: 600;
  display: inline-block;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

/* BOTTOM */
.footer-bottom {
  margin-top: 100px;
  padding-top: 25px;
  border-top: 1px solid rgba(255,255,255,0.25);
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  opacity: 0.85;
}

.credit strong {
  font-weight: 600;
}

/* MOBILE */
@media (max-width: 900px) {
  .footer-container {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 55px;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>