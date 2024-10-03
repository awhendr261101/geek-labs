<template>
  <div class="cont">
    <div class="signup-container">
      <h2>Tutor Sign Up</h2>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="firstName">First Name</label>
          <input v-model="form.firstName" type="text" id="firstName" required />
        </div>

        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input v-model="form.lastName" type="text" id="lastName" required />
        </div>

        <div class="form-group">
          <label for="age">Age</label>
          <input v-model="form.age" type="number" id="age" required />
        </div>

        <div class="form-group">
          <label for="gender">Gender</label>
          <select v-model="form.gender" id="gender" required>
            <option value="" disabled>Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="form.email" type="email" id="email" required />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input v-model="form.pwd" type="password" id="password" required />
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input v-model="form.confirmPwd" type="password" id="confirmPassword" required />
        </div>

        <div class="form-group">
          <label for="userProfile">User Profile</label>
          <input v-model="form.userProfile" type="text" id="userProfile" />
        </div>

        <div class="form-group">
          <label for="language">Language </label>
          <select v-model="form.langID" id="language" required>
            <option value="" disabled>Select your language</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>

        <div class="form-group">
          <label for="acreditation">Accreditation</label>
          <input v-model="form.acreditation" type="text" id="acreditation" placeholder="Enter accreditation details" />
        </div>

        <button type="submit">Sign Up</button>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import axios from 'axios';
import store from '@/store';

const form = ref({
  firstName: '',
  lastName: '',
  age: 0,
  gender: '',
  email: '',
  pwd: '',
  confirmPwd: '',
  userProfile: '',
  langID: 0,
  acreditation: ''
});

const error = ref(null);

async function submitForm() {
  if (form.value.pwd !== form.value.confirmPwd) {
    error.value = 'Passwords do not match!';
    return;
  }

  try {

    form.value.langID = +form.value.langID
    store.dispatch('tutorRegister', {...form.value}); 

  } catch (err) {
    error.value = err.response?.data?.err || 'There was an error during registration';
    console.error(err);
  }
}
</script>

<style scoped>
.signup-container {
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

input,
select {
  width: 100%;
  padding: 0.625rem;
  border: 0.0625rem solid #ccc;
  border-radius: 0.3125rem;
  font-size: 1rem;
}

input:focus,
select:focus {
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
}
</style>
