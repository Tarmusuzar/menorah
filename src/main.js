import { createApp } from 'vue';
import App from './App.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import { createRouter, createWebHistory } from 'vue-router';

import SignUp from './components/SignUp'
import MainCourse from './components/MainCourse';
import MainHome from './components/MainHome.vue';
import WatchCourse from './components/WatchCourse'
import MainPayment from './components/MainPayment'
// Create the router instance
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {

            path: '/',
            component: MainHome
        },
        {
            path: '/course/:id',
            component: MainCourse
        },
        {
            path: '/play-video/:path/:id', // Define a dynamic route parameter named "path"
            name: 'PlayVideo',
            component: WatchCourse,
            props: true 
          },
        {
            path: '/signup/:id', // Define a dynamic route parameter named "path"
            
            component: SignUp,
          },
        {
            path: '/payment/:id', // Define a dynamic route parameter named "path"
            
            component: MainPayment,
          }

        
    ]
});

window.onerror = function(message, source, lineno, colno, error) {
    // Handle the error here
    console.error('Global error:', message, source, lineno, colno, error);
  };
  
// Create the Vue app instance
const app = createApp(App);

// Use the router instance in the Vue app
app.use(router);

// Mount the Vue app to the DOM
app.mount('#app');
