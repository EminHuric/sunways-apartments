<template>
  <section class="reviews-section">
    <h2>Šta kažu naši gosti</h2>

    <div class="reviews-wrapper">
      <div class="reviews-track">
        <div
          v-for="(comment, index) in duplicatedComments"
          :key="index"
          class="review"
        >
          <div class="stars">
            <i v-for="n in comment.stars" :key="n" class="fa-solid fa-star"></i>
          </div>
          <p>"{{ comment.text }}"</p>
          <span>— {{ comment.name }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const comments = [
  { name: "Ahmed M.", text: "Sve je perfektno, domaćini izuzetno ljubazni.", stars: 5 },
  { name: "Lejla H.", text: "Čisto, uredno i na odličnoj lokaciji.", stars: 5 },
  { name: "Selim A.", text: "Apartman ima sve što je potrebno.", stars: 4 },
  { name: "Sara D.", text: "Osećali smo se kao kod kuće.", stars: 5 },
  { name: "Marko P.", text: "Vlasnik uvek na raspolaganju.", stars: 5 },
  { name: "Amina K.", text: "Higijena na vrhunskom nivou.", stars: 4 },
  { name: "Haris S.", text: "Blizu plaže, mirno mesto.", stars: 5 },
  { name: "Jelena K.", text: "Sve kao u opisu.", stars: 5 },
  { name: "Ivan T.", text: "Odličan smeštaj za porodicu.", stars: 5 },
  { name: "Lejla S.", text: "Usluga vrhunska.", stars: 5 },
  { name: "Ahmed B.", text: "Terasa prostrana.", stars: 4 },
  { name: "Sara N.", text: "Sve blista od čistoće.", stars: 5 },
  { name: "Luka C.", text: "Preporuka svima.", stars: 5 },
  { name: "Milan G.", text: "Odličan odnos cene i kvaliteta.", stars: 5 },
  { name: "Kristina O.", text: "Boravak za pamćenje.", stars: 5 },
  { name: "Vladimir A.", text: "Tih i moderan smeštaj.", stars: 5 },
  { name: "Nina H.", text: "Sve što treba za odmor.", stars: 5 },
  { name: "Bojan F.", text: "Dolazimo ponovo.", stars: 5 },
  { name: "Tamara E.", text: "Domaćini srdačni.", stars: 4 }
];

// dupliranje za beskonačni scroll
const duplicatedComments = [...comments, ...comments];
</script>

<style scoped>
.reviews-section {
  padding: 60px 0;
  background: #a78751; /* krem pozadina */
  overflow: hidden;
  text-align: center;
}

.reviews-section h2 {
  font-size: 32px;
  margin-bottom: 30px;
  color: #ffffff;
}

.reviews-wrapper {
  width: 100%;
  overflow: hidden;
}

.reviews-track {
  display: flex;
  gap: 20px;
  width: max-content;
  animation: scroll 120s linear infinite; /* sporije i polako */
}

.review {
  min-width: 320px;
  max-width: 320px;
  background: #f2e9d0;
  padding: 25px;
  border-radius: 20px; /* oble ivice */
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  text-align: left;
  flex-shrink: 0;
}

.review p {
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 10px;
}

.review span {
  font-weight: 600;
  font-size: 13px;
  color: #555;
}

.stars {
  margin-bottom: 12px;
}

.stars i {
  color: #ffd166;
  margin-right: 4px;
}

/* animacija scrolla */
@keyframes scroll {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-50%);
  }
}

/* pauza na hover */
.reviews-wrapper:hover .reviews-track {
  animation-play-state: paused;
}
</style>