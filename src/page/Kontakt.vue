<template>
  <div class="contact-form">
    <h2>Kontaktirajte nas</h2>
    
    <form
      action="https://formsubmit.co/sunwaysapartments@gmail.com"
      method="POST"
    >
      <!-- Sakrijeni input za redirect posle slanja -->
      <input type="hidden" name="_next" value="https://sunways-apartments.vercel.app/hvala" />
      <input type="hidden" name="_captcha" value="false" />

      <input type="text" name="name" placeholder="Ime" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Poruka" required></textarea>

      <button type="submit">Pošalji</button>
    </form>
    
    <p class="info-text">
      Pošaljite upit i odgovorićemo vam u najkraćem mogućem roku.
    </p>
  </div>
</template>

<style scoped>
.contact-form {
  max-width: 500px;
  margin: 100px auto;
  background: #f2e9d0;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 15px rgba(0,0,0,0.15);
  font-family: 'Poppins', sans-serif;
}

.contact-form h2 {
  text-align: center;
  margin-bottom: 25px;
  color: #997e4f;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #997e4f;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
}

.contact-form textarea {
  min-height: 120px;
  resize: vertical;
}

.contact-form button {
  width: 100%;
  padding: 14px;
  background-color: #997e4f;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: #7d6444;
}

.info-text {
  text-align: center;
  margin-top: 15px;
  color: #555;
  font-size: 14px;
}
</style>