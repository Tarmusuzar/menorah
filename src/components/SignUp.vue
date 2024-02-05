<template>
  <loading-spiner v-if="isLoading"></loading-spiner>
  <div>
    <div style="background-color: black;">
      <nav-bar></nav-bar>
    </div>
    <div class="flex justify-center items-center min-h-screen bg-gray-100">
      <div class="w-full max-w-md">
        <form @submit.prevent="handleSubmit" class="custom-form">
          <h2 class="form-title">{{ isSignUp ? 'Sign Up' : 'Sign In' }}</h2>
          <div class="form-group" v-if="isSignUp">
            <label for="name" class="form-label"><i class="fa fa-user"></i> Full Name</label>
            <input v-model="fullName" class="form-input" id="name" type="text" placeholder="Enter your full name" required>
          </div>
          <div class="form-group">
            <label for="email" class="form-label"><i class="fa fa-envelope"></i> Email Address</label>
            <input v-model="email" class="form-input" id="email" type="email" placeholder="Enter your email address" required>
          </div>
          <!-- <div class="form-group">
            <label for="password" class="form-label"><i class="fa fa-lock"></i> Password</label>
            <input disabled v-model="password" class="form-input" id="password" type="password" placeholder="Enter your password" required>
          </div> -->
          <div class="form-group" v-if="isSignUp">
            <label for="mobile" class="form-label"><i class="fa fa-mobile"></i> Mobile Number</label>
            <input v-model="mobile" class="form-input" id="mobile" type="tel" placeholder="Enter your mobile number" required>
          </div>
          <div class="form-group">
            <button class="form-button" type="submit">{{ isSignUp ? 'Sign Up' : 'Sign In' }}</button>
          </div>
          <p class="text-center text-gray-600 text-sm">
            {{ isSignUp ? "Already have an account?" : "Don't have an account?" }} <a href="#" @click="toggleForm" class="text-blue-500 hover:text-blue-700">{{ isSignUp ? 'Sign In' : 'Sign Up' }}</a>
          </p>
        </form>
      </div>
    </div>
    <main-footer></main-footer>
  </div>
</template>

<script>
import LoadingSpiner from './LoadingSpiner.vue';
import MainFooter from './MainFooter';
import NavBar from './NavBar';

export default {
  components: {
    LoadingSpiner,
    MainFooter,
    NavBar
  },
  data() {
    return {
      fullName: '',
      email: '',
      mobile: '',
      password: '',
      isSignUp: true, // Initially showing sign-up form
      isLoading: false // Flag to track loading state
    };
  },
  methods: {
    async handleSubmit() {
      // Show loading spinner
      this.isLoading = true;

      // Simulate loading for 5 seconds
      await new Promise(resolve => setTimeout(resolve, 500));

      // Prepare data to be uploaded
      const data = {
        fullName: this.fullName,
        email: this.email,
        mobile: this.mobile,
        password: this.password
      };

      // Perform upload to the Firebase endpoint
      fetch('https://my-vue-app-8da88-default-rtdb.firebaseio.com/menorahEnrollments.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (response.ok) {
            // Data uploaded successfully
            console.log('Data uploaded successfully');
            // Redirect to ./payment/:id
            this.$router.push('/payment/'+this.$route.params.id);
          } else {
            throw new Error('Failed to upload data');
          }
        })
        .catch(error => {
          console.error('Error uploading data:', error);
          // Handle error if necessary
        })
        .finally(() => {
          // Hide loading spinner
          this.isLoading = false;
        });
    },
    toggleForm() {
      // Toggle between sign-up and sign-in forms
      this.isSignUp = !this.isSignUp;
    }
  }
};
</script>

<style scoped>
/* Custom Styles */
.custom-form {
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
}

.form-title {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;
  display: block;
}

.form-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: border-color 0.3s;
}

.form-input:focus {
  border-color: #4caf50;
}

.form-button {
  width: 100%;
  background-color: #4caf50;
  color: #fff;
  border: none;
  padding: 12px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.form-button:hover {
  background-color: #45a049;
}

.text-center {
  text-align: center;
}

@media (max-width: 768px) {
  .custom-form {
    margin: 0 10px;
  }
}
</style>
