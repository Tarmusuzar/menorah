<template>
    <router-view></router-view>
</template>
<script>

 export default{
  provide(){
    return{
      courses: [
    {  id: 15,
  category:['snob'],
  title: 'Database Management Fundamentals',
  description: 'Dive into the world of database management with our comprehensive course designed for beginners. Learn essential concepts and technologies used in building and managing databases. From designing database schemas to optimizing query performance, you\'ll explore the core principles of database architecture, normalization, indexing, and transactions. With hands-on projects and real-world examples, you\'ll gain practical experience in working with popular database systems like MySQL, PostgreSQL, and MongoDB. Join us to master the fundamentals of database management and unlock a world of opportunities in data-driven applications.',
  image: 'database.png',
  level: 'Beginner',
  rating: 4.7,
  students: 82,
  price: 55,
  duration: '5 Hours',
  language: 'English',
  videoUrl: 'trial.mp4',
  courseOutline: [
    {
      title: 'Module 1: Introduction to Database Management',
      freeReview: true,
      locked: false,
      open: true,
      subsections: [
        { title: 'Overview of Database Systems', duration: '30:00', videoSrc: 'database_intro.mp4' },
        { title: 'Understanding Relational Database Concepts', duration: '25:45', videoSrc: 'database_intro.mp4' },
        { title: 'Introduction to NoSQL Databases', duration: '22:30', videoSrc: '' },
      ]
    },
    {
      title: 'Module 2: Database Design and Modeling',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Entity-Relationship (ER) Modeling', duration: '35:15', videoSrc: '' },
        { title: 'Normalization Techniques', duration: '28:30', videoSrc: '' },
        { title: 'Data Modeling Best Practices', duration: '33:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 3: SQL Fundamentals',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Basic SQL Queries', duration: '40:45', videoSrc: '' },
        { title: 'Advanced SQL Queries', duration: '37:30', videoSrc: '' },
        { title: 'Query Optimization Techniques', duration: '45:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 4: Database Administration',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Managing Database Users and Permissions', duration: '30:00', videoSrc: '' },
        { title: 'Backup and Recovery Strategies', duration: '35:30', videoSrc: '' },
        { title: 'Monitoring and Performance Tuning', duration: '32:15', videoSrc: '' },
      ]
    },
    {
      title: 'Module 5: NoSQL Databases',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Introduction to NoSQL Databases', duration: '28:45', videoSrc: '' },
        { title: 'Document, Key-Value, and Column-Family Stores', duration: '33:30', videoSrc: '' },
        { title: 'Querying and Indexing in NoSQL', duration: '37:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 6: Database Security and Compliance',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Implementing Database Security Policies', duration: '40:15', videoSrc: '' },
        { title: 'Compliance Regulations and Standards', duration: '45:30', videoSrc: '' },
        { title: 'Data Encryption and Auditing', duration: '46:00', videoSrc: '' },
      ]
    }
  ]
}


          
          
        ],
    }
  }
 }

</script>
<style >
* {
  padding: 0;
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

</style>