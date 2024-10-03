<template>
    <div class="lectures-page">
      <section class="lectures">
        <h2>Available Lectures</h2>
        <div class="lecture-cards">
          <div
            v-for="lecture in lectures"
            :key="lecture.id"
            class="card"
          >
            <div class="circle-icon">
              <img :src="lecture.image" :alt="lecture.title" />
            </div>
            <h3>{{ lecture.title }}</h3>
            <p>{{ lecture.description }}</p>
            <button @click="selectLecture(lecture)">Book Now</button>
          </div>
        </div>
      </section>
  
      <section v-if="selectedLecture" class="booking-form">
        <h2>Book {{ selectedLecture.title }}</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Full Name</label>
            <input v-model="form.name" type="text" id="name" required />
          </div>
  
          <div class="form-group">
            <label for="email">Email Address</label>
            <input v-model="form.email" type="email" id="email" required />
          </div>
  
          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input v-model="form.phone" type="tel" id="phone" required />
          </div>
  
          <button type="submit">Book Now</button>
        </form>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LecturesgA',
    data() {
      return {
        lectures: [
          {
            id: '1',
            title: 'Introduction to Vue.js',
            description: 'Learn the basics of Vue.js, a progressive JavaScript framework.',
            image: 'https://via.placeholder.com/150?text=Vue.js'
          },
          {
            id: '2',
            title: 'Advanced Vue.js Techniques',
            description: 'Dive deeper into Vue.js and explore advanced features.',
            image: 'https://via.placeholder.com/150?text=Advanced+Vue'
          },
          {
            id: '3',
            title: 'Building APIs with Node.js',
            description: 'Understand how to build and interact with APIs using Node.js.',
            image: 'https://via.placeholder.com/150?text=Node.js'
          }
        ],
        selectedLecture: null,
        form: {
          name: '',
          email: '',
          phone: ''
        }
      };
    },
    methods: {
      selectLecture(lecture) {
        this.selectedLecture = lecture;
      },
      submitForm() {
        alert(`Thank you ${this.form.name}. Your booking for ${this.selectedLecture.title} has been confirmed.`);
        this.selectedLecture = null; // Clear the selected lecture after submission
        this.form = { name: '', email: '', phone: '' }; // Reset the form
      }
    }
  };
  </script>
  
  <style scoped>
  .lectures-page {
    padding: 20px;
  }
  
  .lectures {
    text-align: center;
  }
  
  .lectures h2 {
    font-size: 36px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .lecture-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
  
  .card {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 250px;
    text-align: center;
  }
  
  .circle-icon {
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
  }
  
  .circle-icon img {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
  }
  
  .card h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  
  .card p {
    font-size: 16px;
    color: #555;
    margin-bottom: 15px;
  }
  
  .card button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .card button:hover {
    background-color: #0056b3;
  }
  
  .booking-form {
    margin-top: 30px;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .booking-form h2 {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    width: 100%;
    padding: 15px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>