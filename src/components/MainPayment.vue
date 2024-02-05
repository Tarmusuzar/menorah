<template>
    <div class="container">
      <div class="header">
        <h2>Payment for "{{ course.title }}"</h2>
        <p>Amount to be paid: <b> Dhs {{ course.price }}</b> </p>
      </div>
      <div class="payment-options">
        <button
          v-for="method in paymentMethods"
          :key="method"
          @click="selectedPaymentMethod = method"
          :class="{ 'selected': selectedPaymentMethod === method }"
          class="payment-option"
        >
          {{ method }}
        </button>
      </div>
      <button @click="processPayment" class="btn-pay">Pay Now</button>
    </div>
  </template>
  
  <script>
  export default {
    inject: ['courses'],
    data() {
      return {
        selectedPaymentMethod: '',
      };
    },
    computed: {
      paymentMethods() {
        return ['Master Card', 'Visa', 'Mobile Money', 'Bank Transfer', 'Cash', 'Botim Pay'];
      },
      course() {
        const courseId = parseInt(this.$route.params.id);
        return this.courses.find(course => course.id === courseId);
      },
    },
    methods: {
      processPayment() {
        if (this.selectedPaymentMethod !== '') {
          // Perform the payment process here
          console.log('Processing payment...');
        } else {
          alert('Please select a payment method.');
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .payment-options {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }
  
  .payment-option {
    background-color: #3f51b5;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin: 5px;
    transition: background-color 0.3s;
  }
  
  .payment-option:hover {
    background-color: #303f9f;
  }
  
  .payment-option.selected {
    background-color: #303f9f;
  }
  
  .btn-pay {
    background-color: #4caf50;
    color: #fff;
    padding: 12px 24px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 100%;
  }
  
  .btn-pay:hover {
    background-color: #388e3c;
  }
  
  @media (max-width: 768px) {
    .payment-option {
      flex-basis: 45%;
    }
  }
  </style>
  