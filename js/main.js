'use strict';

const messages = {
  en: {
    "dropdown.en": 'English',
    "dropdown.ua": 'Ukrainian',
    "menu.about": 'About',
    "menu.tools": 'Used tools',
    "menu.projects": 'Projects',
    "tools.title": 'Used tools',
    "tools.descr": 'From idea to fantastic and incredible result.',
    "tools.text": 'Qwerty uiop asd fgh jklzx cvb nm wrty vgfhhj bj nk.',
    "tool1.text": 'Use webpack',
    "page404.notFound": 'Page Not Found',
    "page404.info": 'Return on main page',
    "page404.back": 'Go Home'
  },
  ua: {
    "dropdown.en": 'Англійська',
    "dropdown.ua": 'Українська',
    "menu.about": 'Про мене',
    "menu.tools": 'Інструменти',
    "menu.projects": 'Проекти',
    "tools.title": 'Використовувані інструменти',
    "tools.descr": 'Заглушка. Допрацювати текст.',
    "tools.text": 'В роботі використовую різні інструменти - Webpack, ESLint, TS, etc.',
    "tool1.text": 'Використовую webpack',
    "page404.notFound": 'Сторінку не знайдено',
    "page404.info": 'Повернутись на головну сторінку',
    "page404.back": 'На головну'
  }
};

const i18n = VueI18n.createI18n({
  legacy: false,
  locale: 'ua',
  fallbackLocale: 'en',
  messages,
});

const About = {
  template: `<section class="call">
    <div class="container">
      <div class="call__inner">
        <div class="call__box">
          <h5 class="call__title">Modern JS</h5>
          <p class="call__text">ECMAScript 2022 and more. Codewars, Github and Stackoverflow.</p>
        </div>
        <button @click="sendMail" class="call__btn">Mail me</button>
      </div>
    </div>
  </section>`,
  methods: {
    sendMail() {
      window.open('mailto: aacsmi06@gmail.com?subject=Vacancy&body=How do you do');
    }
  },
  mounted() {
    const path = localStorage.getItem('path');
    if (path) {
      localStorage.removeItem('path');
      this.$router.push(path);
    } else {
      this.$router.push({ path: '/' });
    }
  }
};

const Tools = {
  data() {
    return {
      toolsList: [
        { text: 'tool1.text', link: '#' },
        { text: 'tool1.text', link: '@' }
       ]
    }
  },
  template: `<section class="tools">
      <div class="container">
        <div class="tools__inner">
          <div class="tools__head">
            <h4 class="tools__title title">{{ $t("tools.title") }}</h4>
            <p class="tools__descr">{{ $t("tools.descr") }}</p>
            <p class="tools__text">{{ $t("tools.text") }}</p>
          </div>
        
          <div class="tools__items">
            <div v-for="i in toolsList" class="tools__item">
              <div class="tools__item-inner">
                <img class="tools__item-img" src="images/logo.png" alt="serv" />
                <h6 class="tools__item-title">{{ $t(i.text) }}</h6>
                <p class="tools__item-text">More details...</p>
                <a class="tools__item-link" href="#">{{ i.link }}</a>
              </div>
            </div>
          </div>
            
        </div>
      </div>
    </section>`
};
const Projects = {
  data() {
    return {
      projectsList: [
        { text: 'ReadAll', link: 'https://markalexi.github.io/Calculator/' }
      ]
    }
  },
  template: `<section class="project">
      <div class="container">
        <h4 class="project__title title">
          Projects
        </h4>
        
        <div class="project__items">
          <div v-for="i in projectsList" class="project__item">
            <div class="project__item-img" style="background-image: url(images/logo.png);">
              <div class="project__item-inner">
                <a class="project__item-info" href="https://markalexi.github.io/Calculator/">
                  <img src="images/logo.png" alt="images/logo.png">
                </a>
                <a class="project__item-search" :href='i.link'>
                  <img src="images/logo.png" alt="images/logo.png">
                </a>
              </div>
            </div>
            <a class="project__item-link" href="#">{{ i.text }}</a>
          </div>
        </div>
        
      </div>
    </section>`
};

const NotFound = {
  template: `<div class="container">
    <h2>{{ $t("page404.notFound") }}</h2>
    <p>{{ $t("page404.info") }}</p>
    <router-link to="/">&lt; {{ $t("page404.back") }} &gt;</router-link>
  </div>`
};

const routes = [
  { path: '/', component: About },
  { path: '/tools', component: Tools },
  { path: '/projects', component: Projects },
  { path: '/Portfolio/', component: About },
  { path: '/:pathMatch(.*)*', component: NotFound }
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
  methods: {},
  template: `<header class="header">
          <div class="container">
            <div class="header__inner">
              <div class="logo">
                <router-link to="/" class="logo__link">
                  <img class="logo__link-img" src="images/logo.png" alt="logo">
                </router-link>
              </div>
              <slot></slot>
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

app.component('drop-down-langs', {
  data() {
    return {
      selectedLanguage: 'ua',
      isDropdownOpened: false
    }
  },
  template: `<div class="dropdown">
    <button class="dropdown__btn" @click="toggleDropdown">
      <img :src="myImageSource" :key="selectedLanguage" class="flag"/>
    </button>
    <transition>
      <div class="dropdown__menu" v-if="isDropdownOpened">
        <a href="#" class="dropdown__item" :class="selectedLanguage === 'en' ? 'active': ''" @click.prevent="changeLanguage('en')">
          <img src="../images/us.svg" class="flag" /> {{ $t("dropdown.en") }}
        </a>
        <a href="#" class="dropdown__item" :class="selectedLanguage === 'ua' ? 'active': ''" @click.prevent="changeLanguage('ua')">
          <img src="../images/ua.svg" class="flag" /> {{ $t("dropdown.ua") }}
        </a>
      </div>
    </transition>
  </div>`,
  computed: {
    myImageSource() {
      return this.selectedLanguage === 'en' ? '../images/us.svg' : '../images/ua.svg';
    }
  },
  methods: {
    changeLanguage(locale) {
      this.$i18n.locale = locale;
      this.selectedLanguage = locale;
      this.isDropdownOpened = false;
    },
    toggleDropdown() {
      this.isDropdownOpened = !this.isDropdownOpened;

      setTimeout(() => this.isDropdownOpened = false, 3000);
    }
  }
});

app.component('my-footer', {
  template: `<footer>
    <p>MarkAlexI 2022 © Copyright</p>
  </footer>`
});

app.use(router);
app.use(i18n);
app.mount('#app');
