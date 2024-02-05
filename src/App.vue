<template>
    <router-view></router-view>
</template>
<script>

 export default{
  provide(){
    return{
      courses: [
          {
            id:1,
            category:['office'],
            title: 'Microsoft Word - Beginner to Advanced ',
            description: `Master Microsoft Word with our comprehensive course designed for beginners to advanced users. In this course, you'll learn everything from basic document creation and formatting to advanced features like mail merge, styles, and macros.

Whether you're writing reports, creating resumes, or crafting professional documents, Microsoft Word is an essential tool for anyone looking to communicate effectively. Our course covers all aspects of Word, including:

- Creating and formatting documents
- Working with tables, images, and charts
- Using templates and styles to enhance your documents
- Collaboration and review tools for team projects
- Advanced features like mail merge and macros

With practical exercises and real-world examples, you'll gain the skills and confidence to tackle any Word document with ease. Start your journey to Word mastery today!`

,
            image: 'msword.png',
            level: 'Beginner',
            rating: 4.5,
            students: 108,
            price: 45,
            duration : '4 Hours',
            language : 'English & Luganda',
            videoUrl:'trial.mp4',
            courseOutline: [

  {
    title: 'Unit 1: Getting Started with Microsoft Word',
    freeReview: true,
    locked: false,
    open: true,
    subsections: [
      { title: 'Introduction to Microsoft Word', duration: '15:00', videoSrc: 'trial.mp4' },
      { title: 'Exploring the User Interface', duration: '20:30', videoSrc: 'trial.mp4' },
      { title: 'Creating and Saving Documents', duration: '18:45', videoSrc: '' },
    ]
  },
  {
    title: 'Unit 2: Formatting Text and Documents',
    freeReview: false,
    locked: true,
    open: false,
    subsections: [
      { title: 'Applying Basic Formatting', duration: '22:15', videoSrc: '' },
      { title: 'Working with Styles', duration: '25:30', videoSrc: '' },
      { title: 'Formatting Paragraphs and Lists', duration: '20:00', videoSrc: '' },
    ]
  },
  {
    title: 'Unit 3: Working with Images and Tables',
    freeReview: false,
    locked: true,
    open: false,
    subsections: [
      { title: 'Inserting and Formatting Images', duration: '18:30', videoSrc: '' },
      { title: 'Creating and Editing Tables', duration: '23:45', videoSrc: '' },
    ]
  },
  {
    title: 'Unit 4: Advanced Formatting Techniques',
    freeReview: false,
    locked: true,
    open: false,
    subsections: [
      { title: 'Using Advanced Styles', duration: '27:00', videoSrc: '' },
      { title: 'Managing Document Sections', duration: '21:15', videoSrc: '' },
      { title: 'Working with Headers and Footers', duration: '24:45', videoSrc: '' },
    ]
  },
  {
    title: 'Unit 5: Collaboration and Review Tools',
    freeReview: false,
    locked: true,
    open: false,
    subsections: [
      { title: 'Tracking Changes and Comments', duration: '26:30', videoSrc: '' },
      { title: 'Sharing and Collaborating on Documents', duration: '29:15', videoSrc: '' },
    ]
  },
  {
    title: 'Unit 6: Automating Tasks with Macros',
    freeReview: false,
    locked: true,
    open: false,
    subsections: [
      { title: 'Introduction to Macros', duration: '20:30', videoSrc: '' },
      { title: 'Creating and Editing Macros', duration: '23:45', videoSrc: '' },
    ]
  },
  {
    title: 'Unit 7: Customizing Word Settings',
    freeReview: false,
    locked: true,
    open: false,
    subsections: [
      { title: 'Customizing the Ribbon and Quick Access Toolbar', duration: '18:45', videoSrc: '' },
      { title: 'Adjusting Word Options and Preferences', duration: '22:00', videoSrc: '' },
    ]
  },
  // Add more units and subsections as needed
]

          },
          {
  id: 2,
  category:['office'],
  title: 'Microsoft Excel (Spreadsheets) - Beginner to Pro',
  description: "Discover the fundamentals of Microsoft Excel, encompassing formulas, functions, data analysis, and visualization techniques. This comprehensive course equips you with the essential skills to navigate Excel effectively, from basic tasks to advanced strategies. Learn how to manipulate data, create dynamic charts, and automate tasks to streamline your workflow. Whether you're a beginner or an experienced user, this course offers valuable insights and practical exercises to enhance your proficiency in Excel. Join us to master the tools and features of Excel and unleash its full potential in your professional and personal endeavors.",
  image: 'msexel.jpg',
  level: 'Beginner to Pro',
  rating: 4.5,
  students: 143,
  price: 68,
  duration: '5 Hours',
  language: 'English',
  videoUrl: 'trial.mp4',
  courseOutline: [
    {
      title: 'Unit 1: Introduction to Microsoft Excel',
      freeReview: true,
      locked: false,
      open: true,
      subsections: [
        { title: 'Getting Started with Excel', duration: '15:00', videoSrc: 'trial.mp4' },
        { title: 'Understanding Excel Worksheets', duration: '20:30', videoSrc: 'trial.mp4' },
        { title: 'Creating and Saving Workbooks', duration: '18:45', videoSrc: '' },
        { title: 'Navigating Excel Interface', duration: '22:00', videoSrc: '' },
        { title: 'Basic Data Entry and Editing', duration: '25:30', videoSrc: '' },
      ]
    },
    {
      title: 'Unit 2: Basic Formulas and Functions',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Introduction to Formulas', duration: '22:15', videoSrc: '' },
        { title: 'Using Basic Functions (SUM, AVERAGE, etc.)', duration: '25:30', videoSrc: '' },
        { title: 'Applying Formulas and Functions', duration: '20:00', videoSrc: '' },
        { title: 'Absolute and Relative Referencing', duration: '18:30', videoSrc: '' },
        { title: 'Using Named Ranges', duration: '23:45', videoSrc: '' },
      ]
    },
    {
      title: 'Unit 3: Data Analysis and Visualization',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Sorting and Filtering Data', duration: '18:30', videoSrc: '' },
        { title: 'Creating Charts and Graphs', duration: '23:45', videoSrc: '' },
        { title: 'Data Validation Techniques', duration: '20:00', videoSrc: '' },
        { title: 'Conditional Formatting', duration: '22:00', videoSrc: '' },
        { title: 'PivotTables and PivotCharts', duration: '27:00', videoSrc: '' },
      ]
    },
    {
      title: 'Unit 4: Advanced Formulas and Functions',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Using Logical Functions (IF, AND, OR)', duration: '27:00', videoSrc: '' },
        { title: 'Working with Date and Time Functions', duration: '21:15', videoSrc: '' },
        { title: 'Performing Statistical Analysis', duration: '24:45', videoSrc: '' },
        { title: 'Array Formulas and Functions', duration: '26:30', videoSrc: '' },
        { title: 'Lookup and Reference Functions', duration: '29:15', videoSrc: '' },
      ]
    },
    {
      title: 'Unit 5: Data Management Techniques',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Data Import and Export', duration: '20:30', videoSrc: '' },
        { title: 'Data Cleansing and Transformation', duration: '23:45', videoSrc: '' },
        { title: 'Data Analysis Tools (Solver, Goal Seek)', duration: '22:00', videoSrc: '' },
        { title: 'Protecting and Securing Workbooks', duration: '18:45', videoSrc: '' },
        { title: 'Sharing and Collaboration Features', duration: '22:00', videoSrc: '' },
      ]
    },
    {
      title: 'Unit 6: Macros and Automation',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Introduction to Macros and VBA', duration: '20:30', videoSrc: '' },
        { title: 'Creating and Editing Macros', duration: '23:45', videoSrc: '' },
        { title: 'Advanced Macro Techniques', duration: '25:00', videoSrc: '' },
        { title: 'Customizing Ribbon and Quick Access Toolbar', duration: '21:45', videoSrc: '' },
        { title: 'Automating Repetitive Tasks', duration: '24:30', videoSrc: '' },
      ]
    },
    {
      title: 'Unit 7: Advanced Excel Features',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Advanced Data Analysis Techniques', duration: '18:45', videoSrc: '' },
        { title: 'What-If Analysis Tools (Scenario Manager, Data Tables)', duration: '22:00', videoSrc: '' },
        { title: 'Power Query and Power Pivot', duration: '27:00', videoSrc: '' },
        { title: 'Excel Add-Ins and Integration', duration: '25:15', videoSrc: '' },
        { title: 'Excel Tips and Tricks for Efficiency', duration: '23:30', videoSrc: '' },
      ]
    }
    // Add more units and subsections as needed
  ]
}
,
{
  id: 3,
  category:['office','snob'],

  title: 'Microsoft PowerPoint - Mastering Presentations',
  description: "Unlock the full potential of Microsoft PowerPoint with our comprehensive course designed to elevate your presentation skills. Whether you're a student, professional, or educator, this course will guide you through the essential features and techniques needed to create engaging and impactful presentations. From designing captivating slides to delivering persuasive pitches, you'll learn how to command attention and convey your message effectively. Explore advanced features like animations, transitions, and multimedia integration to bring your presentations to life. With practical exercises and expert tips, you'll become a master presenter with Microsoft PowerPoint.",
  image: 'powerpoint.jpg',
  level: 'Intermediate',
  rating: 4.8,
  students: 95,
  price: 55,
  duration: '3.5 Hours',
  language: 'English',
  videoUrl: 'trial.mp4',
  courseOutline: [
    {
      title: 'Unit 1: Introduction to PowerPoint',
      freeReview: true,
      locked: false,
      open: true,
      subsections: [
        { title: 'Getting Started with PowerPoint', duration: '15:00', videoSrc: 'trial.mp4' },
        { title: 'Understanding the PowerPoint Interface', duration: '20:30', videoSrc: 'trial.mp4' },
        { title: 'Creating Your First Presentation', duration: '18:45', videoSrc: '' },
        { title: 'Navigating Slide Layouts and Themes', duration: '22:00', videoSrc: '' },
        { title: 'Basic Text and Object Formatting', duration: '25:30', videoSrc: '' },
      ]
    },
    {
      title: 'Unit 2: Designing Effective Slides',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Choosing the Right Slide Layouts', duration: '22:15', videoSrc: '' },
        { title: 'Working with Images and Graphics', duration: '25:30', videoSrc: '' },
        { title: 'Utilizing SmartArt and Charts', duration: '20:00', videoSrc: '' },
        { title: 'Enhancing Slides with Transitions', duration: '18:30', videoSrc: '' },
        { title: 'Adding Animations to Objects', duration: '23:45', videoSrc: '' },
      ]
    },
    {
      title: 'Unit 3: Mastering Slide Show Delivery',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Preparing and Rehearsing Presentations', duration: '18:30', videoSrc: '' },
        { title: 'Delivering Impactful Presentations', duration: '23:45', videoSrc: '' },
        { title: 'Engaging the Audience with Interactivity', duration: '20:00', videoSrc: '' },
        { title: 'Incorporating Multimedia and Audio', duration: '22:00', videoSrc: '' },
        { title: 'Navigating Presenter View and Controls', duration: '27:00', videoSrc: '' },
      ]
    },
    {
      title: 'Unit 4: Advanced PowerPoint Techniques',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Creating Custom Templates and Themes', duration: '27:00', videoSrc: '' },
        { title: 'Utilizing Slide Masters and Layouts', duration: '21:15', videoSrc: '' },
        { title: 'Working with Advanced Animation Effects', duration: '24:45', videoSrc: '' },
        { title: 'Managing Slide Sections and Grouping', duration: '26:30', videoSrc: '' },
        { title: 'Sharing and Collaborating on Presentations', duration: '29:15', videoSrc: '' },
      ]
    }
    // Add more units and subsections as needed
  ]
}
,{

  id: 4,
  category:['office','snob'],

  title: 'Web Design Essentials - Build Stunning Websites',
  description: "Unlock the world of web design with our comprehensive course on building stunning and responsive websites. Whether you're a beginner or an experienced developer, this course will guide you through the essential principles and techniques needed to create captivating web experiences. From HTML and CSS fundamentals to advanced layout and design concepts, you'll learn how to craft visually appealing and user-friendly websites that stand out in today's digital landscape. With hands-on projects and expert guidance, you'll gain the skills and confidence to bring your creative vision to life on the web.",
  image: 'webdesign.jpg',
  level: 'Intermediate',
  rating: 4.7,
  students: 82,
  price: 60,
  duration: '4.5 Hours',
  language: 'English',
  videoUrl: 'trial.mp4',
  courseOutline: [
    {
      title: 'Unit 1: Introduction to Web Design',
      freeReview: true,
      locked: false,
      open: true,
      subsections: [
        { title: 'Understanding the Basics of HTML', duration: '15:00', videoSrc: 'trial.mp4' },
        { title: 'Exploring the Fundamentals of CSS', duration: '20:30', videoSrc: 'trial.mp4' },
        { title: 'Setting Up Your Development Environment', duration: '18:45', videoSrc: '' },
        { title: 'Structuring Content with HTML5 Elements', duration: '22:00', videoSrc: '' },
        { title: 'Applying Styling with CSS Selectors', duration: '25:30', videoSrc: '' },
      ]
    },
    {
      title: 'Unit 2: Responsive Web Design Techniques',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Introduction to Responsive Design Principles', duration: '22:15', videoSrc: '' },
        { title: 'Creating Media Queries for Device Adaptation', duration: '25:30', videoSrc: '' },
        { title: 'Implementing Flexbox and Grid Layouts', duration: '20:00', videoSrc: '' },
        { title: 'Building Mobile-First and Accessible Designs', duration: '18:30', videoSrc: '' },
        { title: 'Optimizing Images and Assets for the Web', duration: '23:45', videoSrc: '' },
      ]
    },
    {
      title: 'Unit 3: Advanced Styling and Design Techniques',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Working with Advanced CSS Properties', duration: '18:30', videoSrc: '' },
        { title: 'Creating Transitions and Animations', duration: '23:45', videoSrc: '' },
        { title: 'Designing Custom Layouts and Components', duration: '20:00', videoSrc: '' },
        { title: 'Exploring CSS Frameworks (Bootstrap, Tailwind)', duration: '22:00', videoSrc: '' },
        { title: 'Implementing Design Patterns and Best Practices', duration: '27:00', videoSrc: '' },
      ]
    },
    {
      title: 'Unit 4: Web Design Tools and Workflow',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Utilizing Design Software (Adobe XD, Figma)', duration: '27:00', videoSrc: '' },
        { title: 'Version Control with Git and GitHub', duration: '21:15', videoSrc: '' },
        { title: 'Integrating Design Mockups with Development', duration: '24:45', videoSrc: '' },
        { title: 'Testing and Debugging Across Different Browsers', duration: '26:30', videoSrc: '' },
        { title: 'Deploying Websites to Hosting Platforms', duration: '29:15', videoSrc: '' },
      ]
    }
    // Add more units and subsections as needed
  ]
},
{
  id: 5,
  category:['office'],

  title: 'Python Programming - From Basics to Mastery',
  description: "Dive into the world of Python programming with our comprehensive course designed for beginners and aspiring developers. Python is one of the most versatile and in-demand programming languages, known for its simplicity and readability. In this course, you'll learn Python from the ground up, starting with basic syntax and control structures and progressing to advanced topics like object-oriented programming and web development. Whether you're interested in data science, web development, or automation, Python is a must-know language that opens doors to endless possibilities. Join us and embark on your journey to Python mastery!",
  image: 'python.png',
  level: 'Intermediate',
  rating: 4.8,
  students: 120,
  price: 75,
  duration: '6 Hours',
  language: 'English',
  videoUrl: 'trial.mp4',
  courseOutline: [
    {
      title: 'Unit 1: Python Basics and Fundamentals',
      freeReview: true,
      locked: false,
      open: true,
      subsections: [
        { title: 'Introduction to Python Programming', duration: '15:00', videoSrc: 'trial.mp4' },
        { title: 'Variables, Data Types, and Operators', duration: '20:30', videoSrc: 'trial.mp4' },
        { title: 'Control Flow and Decision Making', duration: '18:45', videoSrc: '' },
        { title: 'Loops and Iterations', duration: '22:00', videoSrc: '' },
        { title: 'Functions and Modules', duration: '25:30', videoSrc: '' },
      ]
    },
    {
      title: 'Unit 2: Data Structures and Algorithms',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Working with Lists and Dictionaries', duration: '22:15', videoSrc: '' },
        { title: 'Understanding Tuples and Sets', duration: '25:30', videoSrc: '' },
        { title: 'Exploring Built-in Functions and Libraries', duration: '20:00', videoSrc: '' },
        { title: 'Implementing Data Structures (Stacks, Queues)', duration: '18:30', videoSrc: '' },
        { title: 'Introduction to Sorting and Searching Algorithms', duration: '23:45', videoSrc: '' },
      ]
    },
    {
      title: 'Unit 3: Object-Oriented Programming (OOP) in Python',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Understanding Classes and Objects', duration: '18:30', videoSrc: '' },
        { title: 'Inheritance and Polymorphism', duration: '23:45', videoSrc: '' },
        { title: 'Encapsulation and Abstraction', duration: '20:00', videoSrc: '' },
        { title: 'Advanced OOP Concepts and Design Patterns', duration: '22:00', videoSrc: '' },
        { title: 'Working with File I/O and Exceptions', duration: '27:00', videoSrc: '' },
      ]
    },
    {
      title: 'Unit 4: Web Development with Python',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Introduction to Flask Framework', duration: '27:00', videoSrc: '' },
        { title: 'Creating RESTful APIs with Flask', duration: '21:15', videoSrc: '' },
        { title: 'Building Dynamic Web Applications', duration: '24:45', videoSrc: '' },
        { title: 'Working with Templates and Forms', duration: '26:30', videoSrc: '' },
        { title: 'Deploying Python Web Apps to Heroku', duration: '29:15', videoSrc: '' },
      ]
    },
    // Add more units and subsections as needed
  ]
}
,{
  id: 6,
  category:['office','uaeCourses'],

  title: 'Ethical Hacking - Mastering Cybersecurity',
  description: "Become a cybersecurity expert with our comprehensive Ethical Hacking course. Explore the world of ethical hacking and learn how to identify vulnerabilities, secure networks, and protect against cyber threats. This course covers a wide range of topics, including penetration testing, network security, cryptography, and incident response. Whether you're a beginner or an experienced IT professional, our hands-on training and real-world scenarios will equip you with the knowledge and skills needed to excel in the field of cybersecurity. Join us and take the first step towards a rewarding career in ethical hacking!",
  image: 'hacking.jpg',
  level: 'Advanced',
  rating: 4.9,
  students: 95,
  price: 99,
  duration: '8 Hours',
  language: 'English',
  videoUrl: 'trial.mp4',
  courseOutline: [
    {
      title: 'Module 1: Introduction to Ethical Hacking',
      freeReview: true,
      locked: false,
      open: true,
      subsections: [
        { title: 'Understanding Cybersecurity Fundamentals', duration: '15:00', videoSrc: 'trial.mp4' },
        { title: 'Ethical Hacking Overview and Methodologies', duration: '20:30', videoSrc: 'trial.mp4' },
        { title: 'Legality and Ethics in Ethical Hacking', duration: '18:45', videoSrc: '' },
        { title: 'Penetration Testing Concepts', duration: '22:00', videoSrc: '' },
        { title: 'Common Cybersecurity Threats and Attack Vectors', duration: '25:30', videoSrc: '' },
      ]
    },
    {
      title: 'Module 2: Network Security and Protocols',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Network Architecture and Protocols', duration: '22:15', videoSrc: '' },
        { title: 'Firewalls, IDS, and IPS', duration: '25:30', videoSrc: '' },
        { title: 'Wireless Network Security', duration: '20:00', videoSrc: '' },
        { title: 'Securing Network Devices and Infrastructure', duration: '18:30', videoSrc: '' },
        { title: 'VPN and Tunneling Protocols', duration: '23:45', videoSrc: '' },
      ]
    },
    {
      title: 'Module 3: Cryptography and Secure Communications',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Cryptography Fundamentals', duration: '18:30', videoSrc: '' },
        { title: 'Encryption Algorithms and Techniques', duration: '23:45', videoSrc: '' },
        { title: 'Digital Signatures and Certificates', duration: '20:00', videoSrc: '' },
        { title: 'Secure Communication Protocols (SSL/TLS)', duration: '22:00', videoSrc: '' },
        { title: 'Public Key Infrastructure (PKI)', duration: '27:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 4: Web Application Security',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Common Web Application Vulnerabilities', duration: '27:00', videoSrc: '' },
        { title: 'OWASP Top 10 Security Risks', duration: '21:15', videoSrc: '' },
        { title: 'Web Application Penetration Testing', duration: '24:45', videoSrc: '' },
        { title: 'Securing Web Servers and Applications', duration: '26:30', videoSrc: '' },
        { title: 'Web Application Firewall (WAF) Solutions', duration: '29:15', videoSrc: '' },
      ]
    },


    // Add more modules and subsections as needed
  ]
},
{
  id: 7,
  category:['office','uaeCourses'],

  title: 'JavaScript - From Basics to Advanced',
  description: "Master JavaScript programming with our comprehensive course designed for beginners to advanced users. JavaScript is the language of the web, powering interactive and dynamic web applications. In this course, you'll learn everything from the basics of JavaScript syntax to advanced topics like asynchronous programming and modern frameworks like React and Vue.js.\n\nWhether you're a front-end developer, full-stack engineer, or aspiring web developer, our course covers all aspects of JavaScript development, including:\n\n- JavaScript fundamentals and core concepts\n- DOM manipulation and event handling\n- Asynchronous programming with Promises and Async/Await\n- Modern JavaScript features (ES6+)\n- Introduction to popular frameworks like React and Vue.js\n- Building real-world projects and applications\n\nWith hands-on exercises and practical examples, you'll gain the skills and confidence to build dynamic web applications and bring your ideas to life. Enroll now and take your JavaScript skills to the next level!",
  image: 'javascript.jpeg',
  level: 'Intermediate',
  rating: 4.8,
  students: 120,
  price: 59,
  duration: '6 Hours',
  language: 'English',
  videoUrl: 'trial.mp4',
  courseOutline: [
    {
      title: 'Module 1: JavaScript Fundamentals',
      freeReview: true,
      locked: false,
      open: true,
      subsections: [
        { title: 'Introduction to JavaScript', duration: '15:00', videoSrc: 'trial.mp4' },
        { title: 'Variables, Data Types, and Operators', duration: '20:30', videoSrc: 'trial.mp4' },
        { title: 'Control Flow and Looping', duration: '18:45', videoSrc: '' },
        { title: 'Functions and Scope', duration: '22:00', videoSrc: '' },
        { title: 'Arrays and Objects', duration: '25:30', videoSrc: '' },
      ]
    },
    {
      title: 'Module 2: DOM Manipulation and Events',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'DOM Introduction and Selectors', duration: '22:15', videoSrc: '' },
        { title: 'Manipulating DOM Elements', duration: '25:30', videoSrc: '' },
        { title: 'Handling Events and Event Delegation', duration: '20:00', videoSrc: '' },
        { title: 'Creating Dynamic Web Content', duration: '18:30', videoSrc: '' },
        { title: 'Form Validation and Submission', duration: '23:45', videoSrc: '' },
      ]
    },
    {
      title: 'Module 3: Asynchronous JavaScript',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Introduction to Asynchronous Programming', duration: '18:30', videoSrc: '' },
        { title: 'Understanding Callback Functions', duration: '23:45', videoSrc: '' },
        { title: 'Promises and Promise Chaining', duration: '20:00', videoSrc: '' },
        { title: 'Async/Await and Error Handling', duration: '22:00', videoSrc: '' },
        { title: 'Fetching Data from APIs', duration: '27:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 4: Modern JavaScript Features',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'ES6+ Syntax and Features', duration: '27:00', videoSrc: '' },
        { title: 'Arrow Functions and Destructuring', duration: '21:15', videoSrc: '' },
        { title: 'Modules and Module Bundlers', duration: '24:45', videoSrc: '' },
        { title: 'Understanding Closures and Lexical Scope', duration: '26:30', videoSrc: '' },
        { title: 'Introduction to TypeScript', duration: '29:15', videoSrc: '' },
      ]
    },
    // Add more modules and subsections as needed
  ]
}
,
{
  id: 8,
  category:['office','uaeCourses'],

  title: 'Data Entry Mastery: From Basics to Advanced',
  description: "Become a proficient data entry operator with our comprehensive course designed to take you from basics to advanced techniques. Data entry is a fundamental skill required in various industries, from administrative roles to data analysis positions. In this course, you'll learn everything you need to know to excel in data entry.\n\nOur course covers the following key areas:\n\n- Introduction to data entry and its importance\n- Keyboarding techniques and typing speed improvement\n- Accuracy and precision in data entry\n- Using spreadsheet software for data manipulation\n- Data cleaning and validation techniques\n- Advanced data entry methods and automation\n\nWith practical exercises and real-world examples, you'll develop the speed, accuracy, and efficiency required to handle large volumes of data effectively. Whether you're new to data entry or looking to enhance your skills, this course is your pathway to becoming a data entry master.",
  image: 'dataentry.png',
  level: 'Beginner',
  rating: 4.6,
  students: 95,
  price: 39,
  duration: '3.5 Hours',
  language: 'English',
  videoUrl: 'trial.mp4',
  courseOutline: [
    {
      title: 'Module 1: Introduction to Data Entry',
      freeReview: true,
      locked: false,
      open: true,
      subsections: [
        { title: 'Understanding Data Entry', duration: '15:00', videoSrc: 'trial.mp4' },
        { title: 'Developing Typing Skills', duration: '20:30', videoSrc: 'trial.mp4' },
        { title: 'Improving Typing Speed and Accuracy', duration: '18:45', videoSrc: '' },
      ]
    },
    {
      title: 'Module 2: Spreadsheet Data Entry',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Introduction to Spreadsheet Software', duration: '22:15', videoSrc: '' },
        { title: 'Entering and Formatting Data', duration: '25:30', videoSrc: '' },
        { title: 'Using Formulas and Functions', duration: '20:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 3: Advanced Data Entry Techniques',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Data Cleaning and Validation', duration: '18:30', videoSrc: '' },
        { title: 'Efficient Data Entry Methods', duration: '23:45', videoSrc: '' },
        { title: 'Automating Repetitive Tasks', duration: '22:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 4: Accuracy and Precision',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Quality Control in Data Entry', duration: '27:00', videoSrc: '' },
        { title: 'Checking and Verifying Data', duration: '21:15', videoSrc: '' },
        { title: 'Error Correction Techniques', duration: '24:45', videoSrc: '' },
      ]
    },
    // Add more modules and subsections as needed
  ]
}

,

{
  id: 9,
  category:['office','uaeCourses','snob'],

  title: 'Adobe Premiere Pro Masterclass: From Beginner to Expert',
  description: "Unlock the full potential of Adobe Premiere Pro with our comprehensive masterclass designed for beginners to expert video editors. Adobe Premiere Pro is a powerful tool used by professionals in the film, TV, and media industries to create stunning video content.\n\nIn this course, you'll learn everything you need to know to produce high-quality videos with Adobe Premiere Pro:\n\n- Understanding the Premiere Pro interface and workflow\n- Importing and organizing media files\n- Editing techniques for seamless storytelling\n- Applying visual effects and transitions\n- Color correction and grading\n- Audio editing and enhancement\n- Exporting videos in various formats\n\nWhether you're a complete beginner or looking to enhance your editing skills, our course offers step-by-step guidance, practical exercises, and insider tips to help you become a Premiere Pro expert.",
  image: 'premierepro.jpeg',
  level: 'Beginner',
  rating: 4.7,
  students: 120,
  price: 59,
  duration: '6 Hours',
  language: 'English',
  videoUrl: 'trial.mp4',
  courseOutline: [
    {
      title: 'Module 1: Introduction to Adobe Premiere Pro',
      freeReview: true,
      locked: false,
      open: true,
      subsections: [
        { title: 'Getting Started with Premiere Pro', duration: '15:00', videoSrc: 'trial.mp4' },
        { title: 'Understanding the Premiere Pro Interface', duration: '20:30', videoSrc: 'trial.mp4' },
        { title: 'Importing Media Files', duration: '18:45', videoSrc: '' },
      ]
    },
    {
      title: 'Module 2: Basic Editing Techniques',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Cutting and Trimming Clips', duration: '22:15', videoSrc: '' },
        { title: 'Adding Transitions and Effects', duration: '25:30', videoSrc: '' },
        { title: 'Working with Text and Titles', duration: '20:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 3: Advanced Editing Features',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Keyframing and Animation', duration: '18:30', videoSrc: '' },
        { title: 'Audio Editing and Mixing', duration: '23:45', videoSrc: '' },
        { title: 'Using Masks and Effects', duration: '22:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 4: Color Correction and Grading',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Understanding Color Spaces', duration: '27:00', videoSrc: '' },
        { title: 'Applying Color Correction', duration: '21:15', videoSrc: '' },
        { title: 'Creating Looks and Styles', duration: '24:45', videoSrc: '' },
      ]
    },
    {
      title: 'Module 5: Exporting and Distribution',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Export Settings and Presets', duration: '26:30', videoSrc: '' },
        { title: 'Creating Optimized Videos for Various Platforms', duration: '29:15', videoSrc: '' },
      ]
    },
    // Add more modules and subsections as needed
  ]
}
,{
  id: 10,
  title: 'Adobe Photoshop Masterclass: From Beginner to Expert',
  description: "Dive into the world of digital imaging with our Adobe Photoshop Masterclass designed for beginners to expert designers. Adobe Photoshop is the industry-standard software used by photographers, graphic designers, and digital artists worldwide.\n\nIn this comprehensive course, you'll learn how to unleash your creativity and master Photoshop's powerful tools and features:\n\n- Understanding the Photoshop workspace and tools\n- Image retouching and manipulation techniques\n- Creating stunning graphics and visual effects\n- Working with layers, masks, and blending modes\n- Designing for print and web\n- Advanced photo editing and compositing\n\nWhether you're a hobbyist or a professional, our course offers step-by-step tutorials, practical exercises, and insider tips to help you achieve your creative vision with Photoshop.",
  image: 'photoshop.jpeg',
  level: 'Beginner',
  rating: 4.8,
  students: 135,
  price: 69,
  duration: '7 Hours',
  language: 'English',
  videoUrl: 'trial.mp4',
  courseOutline: [
    {
      title: 'Module 1: Introduction to Adobe Photoshop',
      freeReview: true,
      locked: false,
      open: true,
      subsections: [
        { title: 'Getting Started with Photoshop', duration: '15:00', videoSrc: 'trial.mp4' },
        { title: 'Understanding the Photoshop Interface', duration: '20:30', videoSrc: 'trial.mp4' },
        { title: 'Importing and Organizing Images', duration: '18:45', videoSrc: '' },
      ]
    },
    {
      title: 'Module 2: Basic Photo Editing Techniques',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Cropping and Resizing Images', duration: '22:15', videoSrc: '' },
        { title: 'Adjusting Brightness and Contrast', duration: '25:30', videoSrc: '' },
        { title: 'Color Correction and Enhancement', duration: '20:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 3: Working with Layers and Masks',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Understanding Layers and Layer Masks', duration: '18:30', videoSrc: '' },
        { title: 'Creating and Editing Layers', duration: '23:45', videoSrc: '' },
        { title: 'Using Masks for Non-Destructive Editing', duration: '22:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 4: Advanced Editing and Retouching',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Advanced Selection Techniques', duration: '27:00', videoSrc: '' },
        { title: 'Retouching and Healing Tools', duration: '21:15', videoSrc: '' },
        { title: 'Clone Stamp and Content-Aware Fill', duration: '24:45', videoSrc: '' },
      ]
    },
    {
      title: 'Module 5: Graphic Design and Visual Effects',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Creating Text Effects and Typography', duration: '26:30', videoSrc: '' },
        { title: 'Designing Graphics and Illustrations', duration: '29:15', videoSrc: '' },
        { title: 'Adding Filters and Special Effects', duration: '22:00', videoSrc: '' },
      ]
    },
    // Add more modules and subsections as needed
  ]
}
,
{
  id: 12,
  title: 'UAE SIRA Security Course',
  description: `Become a certified security professional in the UAE with our comprehensive SIRA course. Learn the principles of security management, risk assessment, crisis response, and more. Our expert instructors will guide you through the essential skills and knowledge required to excel in the security industry. Whether you're starting your career or seeking professional development, our course equips you with the expertise to thrive in various security roles. Join us and gain the credentials needed to succeed in the dynamic security landscape of the UAE.`,
  image: 'sira.jpg',
  level: 'Intermediate',
  rating: 4.8,
  students: 95,
  price: 99,
  duration: '6 Hours',
  language: 'English & Arabic',
  videoUrl: 'trial.mp4',
  courseOutline: [
    {
      title: 'Module 1: Introduction to Security Management',
      freeReview: true,
      locked: false,
      open: true,
      subsections: [
        { title: 'Understanding Security Principles', duration: '30:00', videoSrc: 'sira_intro.mp4' },
        { title: 'Overview of UAE Security Regulations', duration: '25:45', videoSrc: 'sira_intro.mp4' },
        { title: 'Importance of Compliance and Ethics', duration: '22:30', videoSrc: '' },
      ]
    },
    {
      title: 'Module 2: Risk Assessment and Management',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Conducting Security Risk Assessments', duration: '35:15', videoSrc: '' },
        { title: 'Identifying and Mitigating Security Risks', duration: '28:30', videoSrc: '' },
        { title: 'Developing Risk Management Strategies', duration: '33:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 3: Crisis Response and Emergency Procedures',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Creating Emergency Response Plans', duration: '40:45', videoSrc: '' },
        { title: 'Implementing Crisis Management Protocols', duration: '37:30', videoSrc: '' },
        { title: 'Training Staff for Emergency Situations', duration: '45:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 4: Security Technologies and Tools',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Introduction to Security Systems', duration: '30:00', videoSrc: '' },
        { title: 'Surveillance and Access Control Solutions', duration: '35:30', videoSrc: '' },
        { title: 'Integration of Security Technologies', duration: '32:15', videoSrc: '' },
      ]
    },
    {
      title: 'Module 5: Legal and Ethical Considerations',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Understanding Legal Frameworks', duration: '28:45', videoSrc: '' },
        { title: 'Ethical Decision Making in Security', duration: '33:30', videoSrc: '' },
        { title: 'Privacy and Data Protection Laws', duration: '37:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 6: Practical Security Applications',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Implementing Security Best Practices', duration: '40:15', videoSrc: '' },
        { title: 'Case Studies and Real-World Scenarios', duration: '45:30', videoSrc: '' },
        { title: 'Hands-on Security Training Exercises', duration: '50:00', videoSrc: '' },
      ]
    },
    
  ]
},
{
  id: 13,
  title: 'NEBOSH Certification Course',
  description: 'Earn your NEBOSH certification and become a qualified health and safety professional. Our NEBOSH course provides comprehensive training in occupational safety, risk management, and regulatory compliance. You will learn essential skills for identifying hazards, implementing control measures, and promoting workplace safety. With interactive lessons and practical exercises, our course prepares you for the NEBOSH examination and equips you with the knowledge and confidence to excel in your career. Join us to advance your expertise in health and safety management and make a positive impact in your workplace.',
  image: 'nebosh.png',
  level: 'Advanced',
  rating: 4.9,
  students: 120,
  price: 149,
  duration: '8 Hours',
  language: 'English',
  videoUrl: 'trial.mp4',
  courseOutline: [
    {
      title: 'Module 1: Introduction to Occupational Safety',
      freeReview: true,
      locked: false,
      open: true,
      subsections: [
        { title: 'Overview of Occupational Health and Safety', duration: '30:00', videoSrc: 'nebosh_intro.mp4' },
        { title: 'Roles and Responsibilities of Safety Professionals', duration: '25:45', videoSrc: 'nebosh_intro.mp4' },
        { title: 'Key Concepts in Risk Assessment', duration: '22:30', videoSrc: '' },
      ]
    },
    {
      title: 'Module 2: Hazard Identification and Control',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Methods for Hazard Identification', duration: '35:15', videoSrc: '' },
        { title: 'Assessing and Prioritizing Risks', duration: '28:30', videoSrc: '' },
        { title: 'Implementing Control Measures', duration: '33:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 3: Legal Frameworks and Compliance',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Understanding Health and Safety Legislation', duration: '40:45', videoSrc: '' },
        { title: 'Compliance Requirements and Standards', duration: '37:30', videoSrc: '' },
        { title: 'Conducting Safety Audits and Inspections', duration: '45:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 4: Safety Management Systems',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Developing Safety Policies and Procedures', duration: '30:00', videoSrc: '' },
        { title: 'Safety Performance Measurement and Monitoring', duration: '35:30', videoSrc: '' },
        { title: 'Incident Investigation and Reporting', duration: '32:15', videoSrc: '' },
      ]
    },
    {
      title: 'Module 5: Workplace Safety Culture',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Promoting Safety Awareness and Engagement', duration: '28:45', videoSrc: '' },
        { title: 'Building a Positive Safety Culture', duration: '33:30', videoSrc: '' },
        { title: 'Employee Training and Development', duration: '37:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 6: Emergency Preparedness and Response',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Developing Emergency Response Plans', duration: '40:15', videoSrc: '' },
        { title: 'Emergency Communication and Evacuation Procedures', duration: '45:30', videoSrc: '' },
        { title: 'Crisis Management and Business Continuity', duration: '50:00', videoSrc: '' },
      ]
    }
  ]
}
,
{
  id: 14,
  title: 'Backend Development Fundamentals',
  description: 'Dive into the world of backend development with our comprehensive course designed for beginners. Learn essential concepts and technologies used in building server-side applications and APIs. From setting up development environments to deploying scalable solutions, you\'ll explore the core principles of backend architecture, databases, and server-side programming. With hands-on projects and real-world examples, you\'ll gain practical experience in building robust backend systems using popular frameworks and tools. Join us to master the fundamentals of backend development and unlock a world of opportunities in software engineering.',
  image: 'backend.jpg',
  level: 'Beginner',
  rating: 4.8,
  students: 95,
  price: 59,
  duration: '6 Hours',
  language: 'English',
  videoUrl: 'trial.mp4',
  courseOutline: [
    {
      title: 'Module 1: Introduction to Backend Development',
      freeReview: true,
      locked: false,
      open: true,
      subsections: [
        { title: 'Overview of Backend Technologies', duration: '30:00', videoSrc: 'backend_intro.mp4' },
        { title: 'Setting Up Development Environment', duration: '25:45', videoSrc: 'backend_intro.mp4' },
        { title: 'Understanding Client-Server Architecture', duration: '22:30', videoSrc: '' },
      ]
    },
    {
      title: 'Module 2: Database Management Systems',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Introduction to Relational Databases', duration: '35:15', videoSrc: '' },
        { title: 'Working with SQL and NoSQL Databases', duration: '28:30', videoSrc: '' },
        { title: 'Database Modeling and Design', duration: '33:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 3: Server-Side Programming',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Building RESTful APIs with Node.js', duration: '40:45', videoSrc: '' },
        { title: 'Handling Authentication and Authorization', duration: '37:30', videoSrc: '' },
        { title: 'Middleware and Error Handling', duration: '45:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 4: Web Frameworks and Libraries',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Exploring Express.js Framework', duration: '30:00', videoSrc: '' },
        { title: 'Working with Django and Flask', duration: '35:30', videoSrc: '' },
        { title: 'Using Middleware for Request Processing', duration: '32:15', videoSrc: '' },
      ]
    },
    {
      title: 'Module 5: API Security and Performance',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Implementing Secure Authentication Methods', duration: '28:45', videoSrc: '' },
        { title: 'Optimizing API Performance and Scalability', duration: '33:30', videoSrc: '' },
        { title: 'Securing APIs against Common Attacks', duration: '37:00', videoSrc: '' },
      ]
    },
    {
      title: 'Module 6: Deployment and DevOps Practices',
      freeReview: false,
      locked: true,
      open: false,
      subsections: [
        { title: 'Continuous Integration and Deployment (CI/CD)', duration: '40:15', videoSrc: '' },
        { title: 'Containerization with Docker', duration: '45:30', videoSrc: '' },
        { title: 'Orchestration with Kubernetes', duration: '50:00', videoSrc: '' },
      ]
    }
  ]
}
,
{
  id: 15,
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