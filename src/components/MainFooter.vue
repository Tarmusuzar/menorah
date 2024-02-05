<template>
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <img src="@/assets/logo.png" alt="Company Logo">
          </div>
          <div class="footer-links">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="footer-social">
            <ul>
              <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li><a href="#"><i class="fab fa-twitter"></i></a></li>
              <li><a href="#"><i class="fab fa-instagram"></i></a></li>
              <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div class="footer-info">
          <p>&copy; 2024 Menorah Education Ltd. All rights reserved.</p>
          <p>Designed and developed by Tarmusuzar LLC</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    // Add any necessary logic here
  }
  </script>
  
  <style scoped>
  .footer {
    background-color: #1e1e1e;
    color: #fff;
    padding: 40px 0;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .footer-logo img {
    max-width: 150px;
  }
  
  .footer-links ul {
    
    list-style: none;
    padding: 0;
    margin: 0;
    margin-left: 2rem;
  }
  
  .footer-links ul li {
    display: inline-block;
    margin-right: 20px;
  }
  
  .footer-links ul li a {
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  
  .footer-links ul li a:hover {
    color: #6c757d;
  }
  
  .footer-social ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .footer-social ul li {
    display: inline-block;
    margin-right: 10px;
  }
  
  .footer-social ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 20px;
    transition: color 0.3s ease;
  }
  
  .footer-social ul li a:hover {
    color: #6c757d;
  }
  
  .footer-info {
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    color: #6c757d;
  }
  
  .footer-info p {
    margin-bottom: 5px;
  }
  </style>
  