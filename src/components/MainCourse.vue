<template>
  <div>

    <div style="width:100%;background-color: black; margin: 0;">
      <nav-bar></nav-bar>
    </div>
    <div v-if="course" class="container">
      <!-- Video Overview -->
      <div class="video-overview">
        <h2>Review Course</h2>
        <!-- Video player goes here -->
        <div class="video-player">
          <!-- You can insert your video player component here -->
          <!-- For demo purposes, let's use a placeholder -->
          <div>
            <video controls class="video-placeholder">
              <source :src="require(`@/assets/${course.videoUrl}`)"  type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <!-- Course Details -->
      <div class="course-details">
        <h1>{{ course.title }}</h1>
        <p class="course-info"><strong>Description:</strong> {{ truncatedDescription }}</p>
        <span v-if="showToggle" class="read-more" @click="toggleDescription">...Read more</span>
        <p v-else class="read-more" @click="toggleDescription">...Read less</p>
        <p class="course-info"><strong>Rating:</strong> {{ course.rating }} <i style="color:green;" class="fas fa-star"></i></p>
        <p class="course-info"><strong>Price: </strong>Dhs {{ course.price }}</p>
        <p class="course-info"><strong>Language:</strong> {{ course.language }}</p>
        <p class="course-info"><strong>Duration:</strong> {{ course.duration }}</p>
        <button class="enroll-button" @click="$router.push('/signup/'+course.courseId)">Enroll Now</button>
      </div>
      <course-outline :id="this.$route.params.id"></course-outline>
    </div>
    <div v-else>
      <p>Oh uh! We encountered an error.</p>
    </div>
    <enroll-now v-if="course" :price="singlePrice" :id="course.id" ></enroll-now>
  </div>
</template>

<script>
import NavBar from './NavBar.vue';
import CourseOutline from './CourseOutline.vue';
import EnrollNow from './EnrollNow.vue';

export default {
  components: {
    NavBar,
    CourseOutline,
    EnrollNow
  },
  inject: ['courses'], // Injecting courses array
  computed:{
    singlePrice() {
    if (this.course) {
      return this.course.price;
    } else {
      return null; // or any default value you prefer
    }
  }
  

  },
  data() {
    return {
      
      course: null,
      truncatedDescription: '',
      showToggle: false
    };
  },
  mounted() {
    this.fetchCourseDetails();
  },
  methods: {
    fetchCourseDetails() {
      const courseId = parseInt(this.$route.params.id); // Extracting courseId from URL
      if (this.courses && !isNaN(courseId)) {
        this.course = this.courses.find(course => course.id === courseId);
        if (this.course) {
          this.truncateDescription();
        }
      }
    },
    truncateDescription() {
      const maxDescriptionLength = 200;
      if (this.course.description.length > maxDescriptionLength) {
        this.truncatedDescription = this.course.description.substring(0, maxDescriptionLength);
        this.showToggle = true;
      } else {
        this.truncatedDescription = this.course.description;
        this.showToggle = false;
      }
    },
    toggleDescription() {
      if (this.truncatedDescription === this.course.description) {
        this.truncateDescription();
      } else {
        this.truncatedDescription = this.course.description;
      }
    }
  }
};
</script>



<style scoped>
.container {
  padding: 20px;
}

.video-overview {
  margin-bottom: 20px;
}

.video-overview h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #3b5998; /* Facebook Blue */
}

.video-placeholder {
  max-width: 100%;
  background-color: #f0f0f0;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #888;
}

.course-details h1 {
  font-size: 36px;
  margin-bottom: 20px;
  color: #ff6f61; /* Coral Red */
}

.course-info {
  font-size: 20px;
  margin-bottom: 10px;
  color: #555;
}

.enroll-button {
  background-color: #13d640; /* Success Green */
  color: #fff;
  border: none;
  padding: 15px 30px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
  transition: background-color 0.3s ease;
}

.enroll-button:hover {
  background-color: #218838; /* Darker Green */
}



.sections {
  list-style: none;
  padding: 0;
}

.section-header {
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 10px;
  color: #007bff; /* Primary Blue */
}

.fa-play-circle {
  margin-right: 10px;
  color: #dc3545; /* Danger Red */
}

.read-more {
  cursor: pointer;
  color: blue;
}
</style>

