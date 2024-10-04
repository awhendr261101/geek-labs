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
        <div class="cards">
            <div class="card green">
                <div class="img-cont">
                    <img class="img-fluid" src="https://awhendr261101.github.io/allImages/images/tutor.png" alt="tutor">
                </div>
                <div class="info">
                    <p class="tutor">Tutor : <span>Mr T. Makunya</span></p>
                    <p class="tutee">Tutee : <span>Chelsea Julie</span></p>
                    <p class="second-text">Date & Time : <span>02 / 03 / 2024 - 10:00</span></p>
                    <p class="second-text">Duration : <span> 2 Hours</span></p>
                    <div class="button-cont">
                        <button class="res">
                        <span class="transition"></span>
                        <span class="gradient"></span>
                        <span class="label">Button</span>
                        </button>
    
                        <button class="del">
                        <span class="transition"></span>
                        <span class="gradient"></span>
                        <span class="label">Button</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="card green">
                <div class="img-cont">
                    <img class="img-fluid" src="https://awhendr261101.github.io/allImages/images/tutor.png" alt="tutor">
                </div>
                <div class="info">
                    <p class="tutor">Tutor : <span>Mr T. Makunya</span></p>
                    <p class="tutee">Tutee : <span>Chelsea Julie</span></p>
                    <p class="second-text">Date & Time  : <span>02 / 03 / 2024 - 10:00 </span></p>
                    <p class="second-text">Duration : <span> 2 Hours</span></p>
                    <div class="button-cont">
                        <button class="res">
                        <span class="transition"></span>
                        <span class="gradient"></span>
                        <span class="label">Button</span>
                        </button>
    
                        <button class="del">
                        <span class="transition"></span>
                        <span class="gradient"></span>
                        <span class="label">Button</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
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

      };
    },
    methods: {
      selectLecture(lecture) {
        if (!this.selectedLecture) {
          this.selectedLecture = lecture;
        } else {
          this.selectedLecture = null
        }
      },
      submitForm() {
        alert(`Thank you ${this.form.name}. Your booking for ${this.selectedLecture.title} has been confirmed.`);
        this.selectedLecture = null; 
        this.form = { name: '', email: '', phone: '' }; 
      }
    }
  };
  </script>
  
  <style scoped>

  .lectures-page {
    padding: 20px;
    background-color: #02141B;
    min-height: 100dvh;
  }
  
  .lectures {
    text-align: center;
  
  
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
  }

  /* second section  */

  .booking-form{


    /* background-color: #012843; */
    padding-top: 5rem;

    p{
      color: black;
      text-align: left;
    }

    .dims{
        
    }

    .cards {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap; /* Enable wrapping */
        gap: 1.5rem; 
        padding-inline: 2rem; /* 32px */
        justify-content: space-around;
    }

    .cards .card {
    flex: 0 0 calc(50% - 1.5rem); /* Two items per row, accounting for gap */
    box-sizing: border-box; /* Ensure padding/margins are included */
    }


    .cards .card {
    display: flex;
    flex-direction: row;
    height: 10.25rem; /* 100px */
    width: 45%; /* 250px */
    color: black;
    background-color: #515151;
    cursor: pointer;
    transition: 400ms;
    }

    .cards .card p.tip {
    font-size: 1rem; /* 1em */
    font-weight: 700;
    }

    .info p{
        margin-bottom: 0;
        font-weight: 600;
        border-bottom: solid 2px #333;
        margin-right:20px;

        span{
            padding-left: 20px;
        }

    }

    .cards .card p.second-text {
    font-size: 0.9rem; /* 0.7em */

    }

    .cards .card:hover {
    transform: scale(1.1, 1.1);
    }

    .cards:hover > .card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9, 0.9);
    }

    .img-cont{
        width: 30%;
        height: 90%;
        align-self: center;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: solid 2px #333;
        .img-fluid{
            width: 70%;
        }
        
    }

    .info{
        padding-block: 1.5rem;
        width: 70%;
        margin-left: 1.5rem;
    }


    button {
    font-size: 13px;
    font-weight: 500;
    background: #1f2937;
    color: white;
    border: none;
    position: relative;
    overflow: hidden;
    border-radius: 0.6em;
    cursor: pointer;
    width: 5rem;
    height: 2rem;
    }

    .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 0.6em;
    margin-top: -0.25em;
    background-image: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0.3)
    );
    }

    .label {
    position: relative;
    top: -1px;
    }

    .res .transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: rgba(16, 185, 129, 0.6);
    border-radius: 9999px;
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    }

    .del .transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background-color: rgba(185, 33, 16, 0.6);
    border-radius: 9999px;
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    }

    button:hover .transition {
    width: 14em;
    height: 14em;
    }

    button:active {
    transform: scale(0.97);
    }

    .button-cont{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 0.5rem;
        width: 95%;
    }

  }


  </style>