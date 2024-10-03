<template>
    <NavBar/>
    <main>
      <RouterView />
    </main>
    

</template>

<script>

import NavBar from './components/NavBar.vue';
// import FooterSection from './components/FooterSection.vue';
export default {
  name: 'App',

  components : {
    NavBar
  }
};
</script>

<style scoped>
/* Custom styles for navigation */
.navbar {
  padding: 15px 30px;
}

.navbar-brand img {
  width: 120px;
}

/* Style for the nav links */
.navbar-nav .nav-link {
  font-size: 18px;
  margin-right: 15px;
  transition: color 0.3s ease;
}

.navbar-nav .nav-link:hover {
  color: #ff6347; /* Tomato color on hover */
}



/* Mobile view adjustments */
@media (max-width: 991px) {
  .navbar-nav {
    text-align: center;
  }

  .navbar-nav .nav-item {
    margin-bottom: 10px;
  }
}
</style>
