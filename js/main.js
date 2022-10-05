'use strict';

const messages = {
  en: {
    "menu.about": 'About',
    "menu.tools": 'Used tools',
    "menu.projects": 'Projects'
  },
  ua: {
    "menu.about": 'Про мене',
    "menu.tools": 'Інструменти',
    "menu.projects": 'Проекти'
  }
};

const i18n = VueI18n.createI18n({
  legacy: false,
  locale: 'ua',
  fallbackLocale: 'en',
  messages,
});

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
  data() { return {} },
  methods: { 
  },
  template: `  <header class="header">
          <div class="container">
            <div class="header__inner">
              <div class="logo">
                <router-link to="/" class="logo__link">
                  <img class="logo__link-img" src="images/logo.png" alt="logo">
                </router-link>
              </div>
              <nav class="menu">
                <button class="menu__btn"></button>
                
                <div class="menu__content">
                  <router-link to="/"> {{ $t("menu.about") }} </router-link>
                  <router-link to="/tools"> {{ $t("menu.tools") }} </router-link>
                  <router-link to="/projects"> {{ $t("menu.projects") }} </router-link>
                  
                </div>
              </nav>
            </div>
          </div>
        </header>`
});

app.use(router);
app.use(i18n);
app.mount('#app');
