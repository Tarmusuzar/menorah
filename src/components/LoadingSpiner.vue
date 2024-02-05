<template>
    <div  class="loading-overlay">
      <div class="spinner"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLoading: false
      };
    },
    methods: {
      // Call this method to show the loading spinner
      showSpinner() {
        this.isLoading = true;
      },
      // Call this method to hide the loading spinner
      hideSpinner() {
        this.isLoading = false;
      }
    }
  };
  </script>
  
  <style scoped>
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Ensure it's on top of other content */
  }
  
  .spinner {
    border: 8px solid rgba(255, 255, 255, 0.3); /* Light border */
    border-top: 8px solid #ffffff; /* White border on top */
    border-radius: 50%;
    width: 60px;
    height: 60px;
    animation: spin 1s linear infinite; /* Rotate animation */
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>
  