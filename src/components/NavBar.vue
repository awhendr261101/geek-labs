<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary sticky-top ">
        <div class="container-fluid">
          <a class="navbar-brand" href="index.html">
            <img src="https://awhendr261101.github.io/allImages/images/surveycorps.jpg" alt="logo" loading="lazy">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link" to="/" exact-active-class="active">Home</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/about" exact-active-class="active">About</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/sessions" exact-active-class="active">Sessions</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/bookings" exact-active-class="active">Bookings</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/admin" exact-active-class="active">Admin</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/signin" exact-active-class="active">Login</router-link>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Sign Up
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link class="nav-link" to="/tuteesignup" exact-active-class="active" drop>Tutee</router-link>
                <router-link class="nav-link" to="/tutorsignup" exact-active-class="active" drop>Tutor</router-link>
                  <div class="dropdown-divider"></div>
                  <router-link class="nav-link" to="/signin" exact-active-class="active" drop>Login</router-link>
                </div>
              </li>
              <li class="nav-item" thirdiv>
                <router-link class="nav-link" to="/profile" exact-active-class="active">Profile</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/contact" exact-active-class="active">Contact Us</router-link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    
</template>

<style scoped>
  .navbar {

    background-color: #00121f !important;

    & img[alt='logo']{
        width: 5rem;
    }

    & .nav-link{
        color: white;
        padding-inline: 1.5rem !important;
    }
    .active{
      background-color: white !important;
      color: #0f0d0d;
    }
    .nav-link:hover{
      color: #0f0d0d;
       background-color: white !important;
       transform: scale(1);
       transition: 1s;
    }

    [drop]{
        color: #0f0d0d;
    }
    [drop]:hover{
        transform: scale(1);

    }
    
  }

</style>
