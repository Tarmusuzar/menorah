<template>
  <div class="enroll-now">
    <p class="price">{{ price }} AED</p>
    <button class="enroll-button" @click="$router.push('/signup/'+id)">Enroll Now</button>
  </div>
</template>

<script>
export default {
  props: ['price','id']
};
</script>

<style scoped>
.enroll-now {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%; /* Button covers 80% of the page */
  left: 50%;
  transform: translateX(-50%);
  background-color: #ffffff; /* White background */
  padding: 15px 20px;
  box-sizing: border-box;
  color: #2c3e50; /* Dark text color */
  font-size: 1.2rem;
  font-family: Arial, sans-serif;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.1); /* Box shadow */
}

.price {
  font-size: 1.3rem;
  margin: 0;
  width: 40%; /* Adjust width for better visibility */
  font-weight: bold; /* Make the price text bold */
}

.enroll-button {
  padding: 10px 20px;
  background-color: #04a748; /* Green button color */
  border: none;
  border-radius: 5px;
  color: #ffffff; /* White button text color */
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  width: 90%;
  max-width: 30rem;
  transition: background-color 0.3s ease; /* Smooth transition on hover */
}

.enroll-button:hover {
  background-color: #219d55; /* Darker green on hover */
}
</style>
