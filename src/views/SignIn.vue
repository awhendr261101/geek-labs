<template>
    <div class="cont ">
      <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="form.email" type="email" id="email" required />
          </div>
  
          <div class="form-group">
            <label for="password">Password</label>
            <input v-model="form.pwd" type="password" id="password" required />
          </div>
  
          <button type="submit">Login</button>
        </form>
        <p v-if="error" class="error">{{ error }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import store from '@/store';
  
  const form = ref({
    email: '',
    pwd: ''
  });
  
  const error = ref(null);
  
  async function submitForm() {
    try {
      console.log({...form.value});
      store.dispatch('login', {...form.value}); 
    } catch (err) {
      error.value = err.response?.data?.err || 'Invalid credentials';
      console.error(err);
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    max-width: 25rem;
    margin: 0 auto;
    background-color: #02141B;
    padding: 2.5rem;
    border-radius: 0.5rem;
    box-shadow: 0 0.25rem 0.625rem rgba(0, 0, 0, 0.3);
    color: #FFFFFF;
  }
  
  h2 {
    font-size: 2.25rem;
    text-align: center;
    color: #004B87;
  }
  
  .form-group {
    margin-bottom: 1.25rem;
  }
  
  label {
    display: block;
    margin-bottom: 0.3125rem;
    color: #FFFFFF;
  }
  
  input {
    width: 100%;
    padding: 0.625rem;
    border: 0.0625rem solid #ccc;
    border-radius: 0.3125rem;
    font-size: 1rem;
  }
  
  input:focus {
    border-color: #004B87;
    outline: none;
  }
  
  button {
    width: 100%;
    padding: 0.625rem;
    background-color: #004B87;
    color: white;
    border: none;
    border-radius: 0.3125rem;
    cursor: pointer;
    font-size: 1.125rem;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #003366;
  }
  
  .error {
    color: red;
    text-align: center;
  }
  
  .cont {
    padding-top: 5rem;
    width: 100%;
    background-color: #012843;
    min-height: 100dvh;
  }
  </style>
  