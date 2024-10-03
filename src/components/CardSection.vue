<template>
    <section class="cards">
      <div class="card" v-for="(card, index) in cards" :key="index">
        <img :src="card.image" :alt="card.title" />
        <h3>{{ card.title }}</h3>
        <p>{{ card.description }}</p>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'CardSection',
    data() {
      return {
        cards: [
          { image: '@/assets/card1.jpg', title: 'Session Booking', description: 'Schedule a consultation with our designers.' },
          { image: '@/assets/card2.jpg', title: 'New Arrivals', description: 'Explore the latest in kitchen furniture.' },
          { image: '@/assets/card3.jpg', title: 'Customer Reviews', description: 'See what our clients say about us.' }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .cards {
    display: flex;
    justify-content: space-between;
    padding: 40px;
    background-color: #00121F;
  }
  
  .card {
    width: 30%;
    background-color: #333;
    padding: 20px;
    text-align: center;
    border-radius: 8px;
  }
  
  .card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
  
  .card h3 {
    font-size: 20px;
    color: #FFFFFF;
    margin: 20px 0 10px;
  }
  
  .card p {
    font-size: 16px;
    color: #ccc;
  }
  </style>
  