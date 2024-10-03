<template>
    <div>
        <!-- Hero Section -->
        <section class="hero">
            <div class="video-background">
                <!-- <video autoplay muted loop id="bg-video">
                  <source src="../assets/img/" type="video/mp4">
                  Your browser does not support the video tag.
                </video> -->
                <div class="hero-content">
                    <h1>About Us</h1>
                </div>
            </div>
        </section>
        <!-- Trusted Partner Section -->
        <section class="trusted-partner">
          <div class="content">
            <h2 class="head">Your Trusted Partner for Business</h2>
            <p class="head1">
              This is the main factor that sets us apart from our competition and allows us to deliver a specialist business consultancy service. Our team applies its wide-ranging experience to determining...
            </p>
          </div>
          <div class="image-container">
            <img src="../assets/img/geeklabs.png" alt="Business Image 1">
          </div>
        </section>
        <!-- Fun Fact Section -->
        <section class="fun-fact">
          <div class="facts">
            <div><strong>40K</strong><br />Global Happy Clients</div>
            <div><strong>50K</strong><br />Projects Completed</div>
            <div><strong>245</strong><br />Team Members</div>
            <div><strong>550</strong><br />Digital Products</div>
          </div>
        </section>
        <!-- Experienced People Section -->
        <section class="experience">
          <div class="content">
            <h2>Highly Experienced People with Us</h2>
            <p>
              Our team applies its wide-ranging experience to deliver the best business consultancy services. Through our years of experience, we have learned to tailor each channel...
            </p>
          </div>
          <div class="image-wrapper">
            <img src="../assets/img/pexels-divinetechygirl-1181414.jpg" alt="Experienced People" />
          </div>
        </section>
        <!-- Team Section -->
        <section class="team">
          <h2>Awesome Team Members</h2>
          <div class="team-members">
            <div class="member">
              <img src="../assets/img/pexels-admar-kamosso-oficial-623570766-28586906.jpg" alt="Team Member 1" />
              <p>Melon Bulgary</p>
              <p>Product Designer</p>
            </div>
            <div class="member">
              <img src="../assets/img/pexels-lvu-image-1599405908-28570314.jpg" alt="Team Member 2" />
              <p>Olinaz Fushi</p>
              <p>Product Designer</p>
            </div>
            <div class="member">
              <img src="../assets/img/pexels-sora-shimazaki-5668774.jpg" alt="Team Member 3" />
              <p>David Elone</p>
              <p>React Developer</p>
            </div>
            <div class="member">
              <img src="../assets/img/pexels-tima-miroshnichenko-5685962.jpg" alt="Team Member 4" />
              <p>Melina Opole</p>
              <p>WP Developer</p>
            </div>
          </div>
        </section>
      </div>
</template>

<script>
export default {
  name: 'AboutUs',
};
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Arial', sans-serif;
    background-color: #06003C;
    color: #FFFFFF;
    line-height: 1.6;
}
/* Hero Section */
.hero {
    position: relative;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
}
/* Video background setup */
.video-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}
#bg-video {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the video covers the background without distortion */
    position: absolute;
    top: 0;
    left: 0;
}
/* Hero content over the video */
.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    z-index: 1; /* Ensures the content stays on top of the video */
    font-size: 3rem; /* Adjust font size as needed */
    text-shadow: 0 4px 10px rgba(0, 0, 0, 0.5); /* Add some shadow for better readability */
}
.hero h1 {
    font-size: 60px;
    font-weight: 700;
    margin-bottom: 10px;
}
/* Trusted Partner Section */
.trusted-partner {
    padding: 60px 20px;
    background-color: #02141B;
    text-align: center;
}
.trusted-partner .head {
    font-size: 36px;
    margin-bottom: 20px;
    color: #EAEFF3;
}
.trusted-partner .head1 {
    font-size: 18px;
    max-width: 700px;
    margin: 0 auto 30px;
    color: #B0C7D4;
    line-height: 1.8;
}
.trusted-partner .image-container {
    display: flex;
    justify-content: center;
    margin-top: 30px;
}
.trusted-partner img {
    width: 300px;
    height: 200px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}
/* Hover effect to zoom in the image */
.trusted-partner img:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
}
/* Fun Fact Section */
.fun-fact {
    background-color: #02141B;
    color: #EAEFF3;
    padding: 50px;
    text-align: center;
}
.fun-fact .facts {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}
.fun-fact .facts div {
    font-size: 18px;
    font-weight: bold;
}
.fun-fact .facts strong {
    font-size: 28px;
    display: block;
    margin-bottom: 10px;
}
/* Experience Section */
.experience {
    padding: 60px 20px;
    background-color: #02141B;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
}
.experience .content {
    max-width: 500px;
}
.experience h2 {
    font-size: 36px;
    color: #004B87;
    margin-bottom: 20px;
}
.experience p {
    font-size: 18px;
    color: #B0C7D4;
    line-height: 1.8;
}
.experience .image-wrapper img {
    width: 400px;
    border-radius: 8px;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}
/* Team Section */
/* Team Section */
.team {
    padding: 60px 20px;
    background-color: #02141B;
    text-align: center;
}
.team h2 {
    font-size: 36px;
    margin-bottom: 30px;
    color: #004B87;
}
.team .team-members {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}
.team .member {
    text-align: center;
    margin-bottom: 30px;
}
.team .member img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
.member {
    max-width: 100%; /* Ensures the image fits within its container */
    height: auto; /* Maintains aspect ratio */
}
.team .member p {
    margin-top: 10px;
    color: #B0C7D4;
}
</style>
