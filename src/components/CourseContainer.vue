<template>
  <div>
    <h1 class="category mainCategory">Best Selling Courses</h1>

    <div class="course-container" ref="courseContainer" :class="{ 'verticalDisplay': cat1 }">
      <div v-for="(course, index) in displayedCourses" :key="index" class="course-item" @click="$router.push('/course/'+course.id)">
        <img :src="require(`@/assets/${course.image}`)" :alt="course.title" class="course-image">
        <div class="course-details">
          <h2 class="course-title">{{ course.title }}</h2>
          <p class="course-description">{{ course.description }}</p>
          <div class="course-meta">
            <span class="course-level" style="min-width: 6rem; text-align: center;">Enroll Now</span>
            <span class="course-rating">{{ course.rating }} <i class="fas fa-star" style="color: green;"></i></span>
            <span class="course-students">{{ course.students }} <i class="fas fa-user-graduate"></i></span>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 100%; display: flex; justify-content: center;">
      <button v-if="!cat1" @click="cat1 = true" class="view-more-btn">View More</button>
    </div>
  </div>


  <div>
    <h1 class="category">Office Jobs Courses</h1>

    <div class="course-container" ref="courseContainer" :class="{ 'verticalDisplay': cat2 }">
      <div v-for="(course, index) in officeJobs" :key="index" class="course-item" @click="$router.push('/course/'+course.id)">
        <img :src="require(`@/assets/${course.image}`)" :alt="course.title" class="course-image">
        <div class="course-details">
          <h2 class="course-title">{{ course.title }}</h2>
          <p class="course-description">{{ course.description }}</p>
          <div class="course-meta">
            <span class="course-level" style="min-width: 6rem; text-align: center;">Enroll Now</span>
            <span class="course-rating">{{ course.rating }} <i class="fas fa-star" style="color: green;"></i></span>
            <span class="course-students">{{ course.students }} <i class="fas fa-user-graduate"></i></span>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 100%; display: flex; justify-content: center;">
      <button v-if="!cat2" @click="cat2 = true" class="view-more-btn">View More</button>
    </div>
  </div>


  <div>
    <h1 class="category">UAE Hot Courses</h1>

    <div class="course-container" ref="courseContainer" :class="{ 'verticalDisplay': cat3 }">
      <div v-for="(course, index) in uaeCourses" :key="index" class="course-item" @click="$router.push('/course/'+course.id)">
        <img :src="require(`@/assets/${course.image}`)" :alt="course.title" class="course-image">
        <div class="course-details">
          <h2 class="course-title">{{ course.title }}</h2>
          <p class="course-description">{{ course.description }}</p>
          <div class="course-meta">
            <span class="course-level" style="min-width: 6rem; text-align: center;">Enroll Now</span>
            <span class="course-rating">{{ course.rating }} <i class="fas fa-star" style="color: green;"></i></span>
            <span class="course-students">{{ course.students }} <i class="fas fa-user-graduate"></i></span>
          </div>
        </div>
      </div>
    </div>
    <div style="width: 100%; display: flex; justify-content: center;">
      <button v-if="!cat3" @click="cat3 = true" class="view-more-btn">View More</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAllCourses: false,
      cat1:false,
      cat2:false,
      cat3:false,
      cat4:false,
      cat5:false,
      cat6:false,
      cat7:false,

    };
  },
  inject:['courses'],
  
   computed: {
  displayedCourses() {
    if (this.showAllCourses) {
    return this.courses.filter(course => Array.isArray(course.category) && course.category.includes('snob'));
  } else {
    // Show only the first 4 courses with category 'office'
    return this.courses.filter(course => Array.isArray(course.category) && course.category.includes('snob')).slice(0, 4);
  }
  },
  officeJobs() {
  if (this.showAllCourses) {
    return this.courses.filter(course => Array.isArray(course.category) && course.category.includes('office'));
  } else {
    // Show only the first 4 courses with category 'office'
    return this.courses.filter(course => Array.isArray(course.category) && course.category.includes('office')).slice(0, 4);
  }
}
  ,
  uaeCourses() {
  if (this.showAllCourses) {
    return this.courses.filter(course => Array.isArray(course.category) && course.category.includes('uaeCourses'));
  } else {
    // Show only the first 4 courses with category 'office'
    return this.courses.filter(course => Array.isArray(course.category) && course.category.includes('uaeCourses')).slice(0, 4);
  }
}


},
 
  methods: {
    autoScroll() {
      // Get the reference to the course container
      const container = this.$refs.courseContainer;
      // Animate scrolling behavior
      var randomNumber = Math.floor(Math.random() * 10) + 1;

      
      container.scrollLeft += 10 * randomNumber;
      const scrollSpeed = randomNumber; // Adjust scroll speed as needed
      const targetScroll = container.scrollWidth - container.clientWidth;
      const scrollInterval = setInterval(() => {
        if (container.scrollLeft < targetScroll) {
          container.scrollLeft += scrollSpeed;
          
        } else {
          clearInterval(scrollInterval);
        }
      }, 10); // Adjust interval as needed
    }
  }
};
</script>
<style scoped>
.course-container {
  padding: 1rem;
  display: flex;
  overflow-x: auto; /* Enable horizontal scrolling */
  /* Hide scrollbar */
  scrollbar-width: none; /* For Firefox */
  -ms-overflow-style: none; /* For Internet Explorer and Edge */
}

.verticalDisplay{
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
.verticalDisplay>.course-item{
  margin-right: auto;
  margin-left: auto;
  position: relative;
  overflow: hidden;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  transition: transform 0.3s ease, opacity 0.5s ease;
}
.course-container::-webkit-scrollbar {
  display: none; /* For Chrome, Safari, and Opera */
}

.course-item {
  width: 300px;
  margin-right: 20px; /* Adjust margin between courses */
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  transition: transform 0.3s ease, opacity 0.5s ease;
}



.course-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.course-details {
  padding: 15px;
}

.course-title {
  font-size: 20px;
  margin-bottom: 10px;
  /* Limit title to two lines with ellipsis for overflow */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.course-description {
  margin-bottom: 10px;
  /* Limit description to three lines with ellipsis for overflow */
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.course-meta {
  display: flex;
  align-items: center;
}

.course-level {
  margin-right: 10px;
  padding: 5px 10px;
  background-color: #007bff;
  color: #fff;
  border-radius: 20px;
}

.course-rating {
  margin-right: 10px;
}

.course-students {
  color: #666;
}

.view-more-btn {
  margin-top: 20px;
  margin-bottom: 30px;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.3rem;
  width: 90%;
  max-width: 30rem;
}
.category {
  font-size: 32px;
  font-weight: bold;
  color: white;
  margin-top: 2rem ;
  margin-left: 1rem;

}
.mainCategory{
  margin-top: 4rem;
}
</style>
