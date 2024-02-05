<template>
    <div >
      <p class="secondP"> Let's teach you , <span>{{ course }}</span> </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        frank:true,
        course: 'code', // Initial value
        courses: [
  "Coding",
  "Design",
  "Marketing",
  "Programming",
  "Data Analysis",
  "Project Management",
  "Writing",  
  "Web Development",
  "Video Editing",
  "Photography",
  "Search Engine Optimization",
  "Cybersecurity",
  "Virtual Assistant",
  "Blockchain Technology",
  "Microsoft Excel",
  "Microsoft Word",
  "Microsoft PowerPoint",
  "WordPress Development",
  "Data Visualization",
  "Cloud Computing",
  "Adobe Photoshop",
  "Artificial Intelligence",
  "Video Production",
  "Blogging",
  "Computer Networking",
  "HTML",
  "JavaScript",
  "Financial Literacy",
  "Digital Illustration",
  "Customer Relationship Management",
  "Business Analytics",
  "SEO (Search Engine Optimization)",
  "Artificial Intelligence",
  "Adobe Illustrator",
  "Agile Methodology",
  "Software Engineering",
  "Cybersecurity Fundamentals",
  "Podcasting",
  "3D Modeling",
  "Digital Advertising",
  "Branding Strategy",
  "Game Development",
  "Content Strategy",
  "Digital Storytelling",
  "Marketing Automation",
  "Data Analysis Tools",
  "Web Development Frameworks",
  "Microsoft Office Suite",
  "Adobe Creative Cloud",
  "Python Programming",
  "Data Science",
  "Java Programming",


  "JavaScript",
  "React.js",
  "Python",
  "Data Science",
  "Web Development",
  "Java",
  "Angular",
  "SQL",
  "Machine Learning",
  "Digital Marketing",
  "iOS App Development",
  "Docker",
  "C# Unity Game Development",
  "Blender 3D Modeling",
  "Flutter",
  "Financial Analysis",
  "AWS (Amazon Web Services)",
  "Algorithms",
  "Redux",
  "Django",
  "Full Stack Development",
  "Node.js",
  "Vue.js",
  "SQL Databases",
  "HTML",
  "CSS",
  "TypeScript",
  "Bootstrap",
  "Firebase",
  "MongoDB",
  "PHP",
  "Laravel",
  "WordPress",
  "Cybersecurity",
  "Ethical Hacking",
  "Penetration Testing",
  "Blockchain",
  "Ethereum",
  "Cryptocurrency",
  "Solidity",
  "Artificial Intelligence",
  "TensorFlow",
  "Deep Learning",
  "Natural Language Processing (NLP)",
  "Computer Vision",
  "Reinforcement Learning",
  "Flask",
  "Ruby on Rails",
  "Game Development",
  "Unreal Engine"
]

      };
    },
    mounted() {
      // Start the timer to update the course every 2 seconds
      this.timer = setInterval(this.updateCourse, 500);
    },
    beforeUnmount() {
      // Clear the timer to avoid memory leaks
      clearInterval(this.timer);
    },
    methods: {
      updateCourse() {
        // Choose a random course from the array
        const randomIndex = Math.floor(Math.random() * this.courses.length);
        this.course = this.courses[randomIndex];
      }
    }
  };
  </script>
  
  <style scoped>
  div{
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  p{
    color: white;
    font-size: 1.4rem;

  }
  .firstP{
    margin-left: 2rem;
    margin-bottom: 1rem;
  }
  span{
    font-size: 2rem;
  }
  .secondP{
    font-size: 1.7em;
    margin-left: 2rem;
    min-height: 4rem;
    max-height: 4rem;
  }
  </style>
  