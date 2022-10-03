'use strict';

const About = { template: '<h2>About Page</h2>' };
const Tools = { template: '<h2>Tools Page</h2>' };
const Projects = { template: '<h2>Projects</h2>' };

const routes = [
  { path: '/', component: About },
  { path: '/tools', component: Tools },
  { path: '/projects', component: Projects }
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const app = Vue.createApp({
  data() {
    return {

    }
  },

});

app.component('my-header', {
  setup() {
  
    return {}
  },
  template: `  <header class="header">
          <div class="container">
            <div class="header__inner">
              <div class="logo">
                <a class="logo__link" href="#">
                  <img class="logo__link-img" src="images/logo.png" alt="logo">
                </a>
              </div>
              <nav class="menu">
                <button class="menu__btn"></button>
                
                <div class="menu__content">
                  <router-link to="/"> About </router-link>
                  <router-link to="/tools"> Used tools </router-link>
                  <router-link to="/projects"> Projects </router-link>
                  
                </div>
              </nav>
            </div>
          </div>
        </header>`
});

app.use(router);
app.mount('#app');
