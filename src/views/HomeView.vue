<template>
    <div class="home-view">
      <!-- Video Background Header -->
      <header>
        <video class="video-bg" autoplay muted loop>
          <source src="../assets/landingvid.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>

        <div class="overlay">
          
        </div>
        <h1>WELCOME TO GEEK GALAXY</h1>
        <p>Learn to CODE <br> </p>

        <button href="#" class="btn">Visit Showroom</button>
      </header>
  

  
      <!-- About Us Section -->
      <section class="about" id="about">
        <h2>25 Years Experience</h2>
        <p>Creative solutions by professional designers. Your kitchen is an expression of who you are, and it deserves nothing but the best. Whether you lean toward sleek or traditional styles, we can bring your dream kitchen to life.</p>
        <a href="#" class="btn">Continue Reading</a>
      </section>
      <div class="fixed-image-section"></div>
      <!-- Collection Cards Section -->
       <div class="langs">
         <div class="features-section">
           <div class="feature-box">
             <div class="icon-background">
               <!-- Placeholder icon -->
               <img src="https://via.placeholder.com/50" alt="Safety First" class="feature-icon">
             </div>
             <h3 class="feature-title">Safety First</h3>
             <p class="feature-description">Counselors certified in pet first aid and CPR put your dog’s health and happiness first.</p>
           </div>
           <div class="feature-box">
             <div class="icon-background">
               <!-- Placeholder icon -->
               <img src="https://via.placeholder.com/50" alt="Spacious Play Yards" class="feature-icon">
             </div>
             <h3 class="feature-title">Spacious Play Yards</h3>
             <p class="feature-description">Our oasis offers large, climate-controlled play yards for optimal tail wags.</p>
           </div>
           <div class="feature-box">
             <div class="icon-background">
               <!-- Placeholder icon -->
               <img src="https://via.placeholder.com/50" alt="Monitor Your Pup" class="feature-icon">
             </div>
             <h3 class="feature-title">Monitor Your Pup</h3>
             <p class="feature-description">Access our live webcams on your computer or smartphone.</p>
           </div>
           <div class="feature-box">
             <div class="icon-background">
               <!-- Placeholder icon -->
               <img src="https://via.placeholder.com/50" alt="All-In-One Pricing" class="feature-icon">
             </div>
             <h3 class="feature-title">All-In-One Pricing</h3>
             <p class="feature-description">Treat your pet to all-inclusive fun at a convenient rate.</p>
           </div>
         </div>
       </div>
  
      <!-- Cards Section -->
      <section class="cards">
        <div class="card">
          <!-- Placeholder image -->
          <img src="https://via.placeholder.com/400x300" alt="Country Collection" >
          <h3>Country Collection</h3>
          <p>Modern and rustic designs to suit any home.</p>
          <a href="#" class="btn">Read More</a>
        </div>
        <div class="card">
          <!-- Placeholder image -->
          <img src="https://via.placeholder.com/400x300" alt="Concord Collection">
          <h3>Concord Collection</h3>
          <p>Blending style and comfort for a timeless look.</p>
          <a href="#" class="btn">Read More</a>
        </div>
        <div class="card">
          <!-- Placeholder image -->
          <img src="https://via.placeholder.com/400x300" alt="Classic Collection">
          <h3>Classic Collection</h3>
          <p>Elegant designs that never go out of style.</p>
          <a href="#" class="btn">Read More</a>
        </div>
      </section>

    </div>
  </template>
  
  <script>

  export default {
    name: 'HomeView'
  }
  </script>
  
  <style scoped>
      body {
            margin: 0;
            font-family: 'Arial', sans-serif;
            background-color: #012843;
            color: white;
            scroll-behavior: smooth;
        }

        .langs{
          background-color: #012843;
        }

        
        /* Video Background Section */
        header {
            position: relative;
            height: 100vh;
            overflow: hidden;
            text-align: center;
            margin-top: 0; /* Adjust for the fixed nav bar */
        }

        header video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            z-index: -1;
        }

        header .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5); /* Dark overlay to enhance text visibility */
            z-index: 1;
        }

        header h1, header p, header button {
            z-index: 2;
            position: relative;
            top: 30%;
            transform: translateY(-30%);
        }

        header h1 {
            font-size: 48px;
            margin: 0;
        }

        header p {
            font-size: 18px;
            margin: 10px 0;
        }

        header button {
            padding: 10px 20px;
            background-color: #ffffff;
            color: #000;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            margin-top: 3rem;
        }

        header button:hover {
            transform: scale(1.02);
            transition: 1s;
            background-color: #ffffff;
            color: #000;
        }

        /* Fixed Image Background */
        .fixed-image-section {
            background-image: url('https://awhendr261101.github.io/allImages/images/fixedimg.jpg');
            background-attachment: fixed;
            background-position: center;
            background-size: cover;
            height: 60vh;
            position: relative;
        }

        /* About Us Section */
        .about {
            padding: 60px 20px;
            background-color: #012843;
            text-align: center;
        }

        .about h2 {
            color: #fff;
            margin-bottom: 20px;
        }

        .about p {
            color: #ddd;
            font-size: 18px;
            max-width: 800px;
            margin: 0 auto;
        }

        /* Cards Section */
        .cards {
          background-color: #012843;
            display: flex;
            justify-content: center;
            gap: 20px;
            padding: 40px 20px;
        }

        .card {
            background-color: #2b2b2b;
            border-radius: 10px;
            overflow: hidden;
            max-width: 300px;
            text-align: center;
        }

        .card img {
            width: 100%;
        }

        .card h3 {
            margin: 20px 0;
            color: #fff;
        }

        .card p {
            color: #ddd;
            margin: 0 20px 20px;
        }

        .card a {
            display: inline-block;
            padding: 10px 20px;
            margin-bottom: 20px;
            background-color: #fff;
            color: #000;
            text-decoration: none;
            border-radius: 5px;
        }

  /* Feature Section Container */
  .features-section {
            background-color: #012843;
            display: flex;
            justify-content: space-around;
            align-items: flex-start;
            text-align: center;
            max-width: 1200px;
            margin: 0 auto;
        }

        /* Feature Box */
        .feature-box {
            width: 22%;
            padding: 20px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .icon-background:hover {
            padding: 20px;
            transition: 0.3s;
            .feature-icon{
                transform: translateY(-12px);
                transition: 0.3s;
            }
        }
        

        /* Feature Icon */
        .feature-icon {
            width: 100px;
            height: 100px;
            margin-bottom: 20px;
        }

        /* Feature Title */
        .feature-title {
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 10px;
            color: #ffffff;
            font-family: 'Patrick Hand', cursive; /* Use a font similar to the one in the image */
        }

        /* Feature Description */
        .feature-description {
            font-size: 0.95rem;
            line-height: 1.5;
            color: #ffffff;
            max-width: 250px;
            margin: 0 auto;
        }

        /* Circle behind Icon */
        .icon-background {
            /* background-image: url(''); Replace with the actual image URL */
            border-radius: 50%;
            display: inline-block;
            padding: 15px;
            margin-bottom: 20px;
        }
        

        footer {
            background-color: #00121f;
            color: white;
            text-align: center;
            padding: 20px;
        }

        :is(header){
          color: white;
        }

        





</style>
