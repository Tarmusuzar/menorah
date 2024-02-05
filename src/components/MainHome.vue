<template>
  <div class="landing-page">
    <nav-bar></nav-bar>
    <div class="iptDiv">
      <input type="text" placeholder="Search a course" ><button>Search</button>

    </div>

    <intro-element></intro-element>
    <course-container></course-container>
    <!-- Your landing page content goes here -->
  </div>
  <main-footer></main-footer>
</template>
<script>
  import MainFooter from './MainFooter'
  import CourseContainer from './CourseContainer.vue';
  import NavBar from './NavBar.vue'
  import IntroElement from './IntroElement.vue'
  export default {
    components: {
      MainFooter,
      NavBar,
      IntroElement,
      CourseContainer
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const scrollPos = window.scrollY || window.pageYOffset;
        const vh = window.innerHeight;
        const threshold = 0.2 * vh; // 20% of the viewport height

        const iptDiv = document.querySelector('.iptDiv');

        if (scrollPos > threshold) {
          iptDiv.classList.add('fixed-iptDiv');
        } else {
          iptDiv.classList.remove('fixed-iptDiv');
        }
      }
    }
  }
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.landing-page {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: linear-gradient(to bottom left, #4F6AC7 0%, #453ab9 50%, #8B4513 100%);
}

body {
  background: black;
}
.iptDiv{
  width: 100%;
  display: flex;
  justify-content: center ;
  align-items: center;
  margin-top: 1rem;
  flex-direction: column;
}
.iptDiv>input{
  width: 70%;
  max-width: 50rem;
  padding: .3rem;
  font-size:  1.2rem;
  border: 1px solid gray;
  border-radius: 5px;
}
.iptDiv>button{
  color: #ffffff;
  width: 100px;
  margin-top: .5rem;
  border-radius: 6px;
  border: none;
  padding: .3rem;
  color: white ;
  font-size: 1.3rem;
  background-color:#007bff ;
}
input:focus{
  outline: none;
  border: 1px solid blue;
}
.fixed-iptDiv {
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 1000;
  margin-top: 0;
  display: flex; 
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: .4rem;
}
.fixed-iptDiv>input{
  width: 70%;
}
.fixed-iptDiv>button{
  margin: auto;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>
