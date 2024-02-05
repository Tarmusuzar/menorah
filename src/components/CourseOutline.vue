<template>
  <div>

    <div class="course-outline-container">
      <h1 class="course-title">Course Outline</h1>
      <div class="course-outline">
        <div v-for="(section, index) in courseOutline" :key="index" class="section">
          <div class="section-header" @click="toggleSection(index)">
            <h2 class="section-title">{{ section.title }}</h2>
            <span class="section-status" v-if="section.freeReview">
              <i class="fas fa-eye" style="color: green;"></i> <span style="color: green;"></span>
            </span>
            <span class="section-status" v-else-if="section.locked">
              <i class="fas fa-lock" style="color: rgb(240, 21, 21);"></i> <span style="color: rgb(240, 21, 21);"></span>
            </span>
            <i class="toggle-icon" :class="{'fas fa-chevron-up': section.open, 'fas fa-chevron-down': !section.open}"></i>
          </div>
          <div v-if="section.open" class="subsections">
            <div v-for="(subsection, subIndex) in section.subsections" :key="subIndex" class="subsection" @click="playVideo(subsection.videoSrc, subsection.locked)">
              <h3><i class="fas fa-play-circle"></i> {{ subsection.title }}</h3>
              <span class="subsection-duration">{{ subsection.duration }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Container for the video element -->
    <div class="video-container">
      <video v-if="currentVideoSrc" controls autoplay style="width: 100%; height: auto; margin-top: 10px; border: 1px solid #ccc;">
        <source :src="currentVideoSrc" type="video/mp4">
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  inject: ['courses'],
  data() {
    return {
      courseOutline: [],
      currentVideoSrc: ''
    };
  },
  mounted() {
    this.fetchCourseOutline();
  },
  methods: {  
    fetchCourseOutline() {
      const course = this.courses.find(course => course.id == this.id);
      if (course) {
        this.courseOutline = course.courseOutline;
      } else {
        console.error(`Course with ID ${this.id} not found.`);
      }
    },
    toggleSection(index) {
      this.courseOutline[index].open = !this.courseOutline[index].open;
    },
    playVideo(videoSrc) {
      if (videoSrc === '') {
        alert("This video is locked. Please purchase the course to unlock.");
      } else {
        this.$router.push('/play-video/' + videoSrc + '/' + this.id)
      }
    }
  }
};
</script>

<style scoped>
.course-outline-container {
  max-width: 800px;
  padding: 20px;
  border: 1px solid #c5c5c5;
  border-radius: 10px;
  background-color: #f8f9fa;
  margin-top: 1rem;
}

.course-title {
  margin-bottom: 30px;
  font-size: 24px;
  color: #444444;
}

.course-outline {
  font-family: 'Arial', sans-serif;
}

.section {
  margin-bottom: 20px;
}

.section-header {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
}

.section-title {
  flex: 1;
  margin: 0;
  font-size: 18px;
  color: #333;
}

.section-status {
  margin-right: 15px;
  font-weight: bold;
  color: #555;
}

.toggle-icon {
  font-size: 20px;
  color: #666;
}

.subsections {
  margin-left: 40px;
}

.subsection {
  margin-bottom: 10px;
  cursor: pointer;
}

.subsection h3 {
  margin-bottom: 5px;
  font-size: 16px;
  color: #333;
}

.subsection-duration {
  color: #777;
}
</style>
