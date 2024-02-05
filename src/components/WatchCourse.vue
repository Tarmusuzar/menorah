<template>
    
    <div>
      <video :src="videoSrc" controls autoplay style="width: 100%; height: auto;"></video>
    </div>
    <course-outline :id="$route.params.id"></course-outline>
  </template>
  
  <script>
import CourseOutline from './CourseOutline.vue';

  export default {
    components:{
        CourseOutline
    },
    computed: {
      videoSrc() {
        // Access the video path from the route parameter
        const videoPath = this.$route.params.path;
        // Construct the video source using the video path
        return require('@/assets/' + videoPath);
      }
    }
  };
  </script>
  