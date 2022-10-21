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
    "tool.text": 'Project with ',
    "tool1.text": 'Love vanilla JS',
    "tool2.text": 'Use webpack',
    "tool3.text": 'Work with Vue 3',
    "tool4.text": 'Accuracy with TypeScript',
    "tool5.text": 'Backend on Node.js',
    "tool6.text": 'Adaptive design, rubber layout',
    "tool1.motto": 'Mighty JavaScript',
    "tool2.motto": 'Comfortable work',
    "tool3.motto": 'It\'ll be reactive',
    "tool4.motto": 'Strong TS',
    "tool5.motto": 'Fast and serious',
    "tool6.motto": 'Mobile first',
    "projects.title": 'Created projects',
    "projects.code": 'View code',
    "projects.result": 'View result',
    "projects1.name": 'Calculator',
    "projects2.name": 'Tetris',
    "projects3.name": 'Paint',
    "projects4.name": 'Calendar with notes',
    "projects5.name": 'Converter of values',
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
    "tool.text": 'Проект з ',
    "tool1.text": 'Люблю JS',
    "tool2.text": 'Використовую webpack',
    "tool3.text": 'Працюю з Vue 3',
    "tool4.text": 'Точність з TypeScript',
    "tool5.text": 'Бекенд на ноді',
    "tool6.text": 'Адаптивний дизайн',
    "tool1.motto": 'Гнучкість та повсюдність',
    "tool2.motto": 'Зручний зборщик',
    "tool3.motto": 'Зробимо все реактивним',
    "tool4.motto": 'Суворий TS',
    "tool5.motto": 'Швидкі проекти',
    "tool6.motto": 'Mobile first',
    "projects.title": 'Створені проекти',
    "projects.code": 'Перегляд коду',
    "projects.result": 'Наживо',
    "projects1.name": 'Калькулятор',
    "projects2.name": 'Тетріс',
    "projects3.name": 'Малювалка',
    "projects4.name": 'Календар з нотатками',
    "projects5.name": 'Конвертер величин',
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
      this.$router.push('/Portfolio' + path);
    } else {
      this.$router.push({ path: '/Portfolio/' });
    }
  }
};

const Tools = {
  data() {
    return {
      toolsList: [
        { text: 'tool1.text', motto: 'tool1.motto', link: 'https://markalexi.github.io/photoSlider/', name: 'js' },
        { text: 'tool2.text', motto: 'tool2.motto', link: 'https://github.com/MarkAlexI/chatOnJS.git', name: 'webpack' },
        { text: 'tool3.text', motto: 'tool3.motto', link: 'https://markalexi.github.io/toDoOnVue/', name: 'vue' },
        { text: 'tool4.text', motto: 'tool4.motto', link: 'https://markalexi.github.io/readAll/', name: 'ts' },
        { text: 'tool5.text', motto: 'tool5.motto', link: 'https://markalexi.github.io/organizer/', name: 'node-js' },
        { text: 'tool6.text', motto: 'tool6.motto', link: 'https://markalexi.github.io/Portfolio/', name: 'css3' }
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
                <img class="tools__item-img" :src="'/Portfolio/images/' + i.name + '.png'" :alt="'used tool ' + i.name" />
                <h6 class="tools__item-title">{{ $t(i.text) }}</h6>
                <p class="tools__item-text">{{ $t(i.motto) }}</p>
                <a class="tools__item-link" :href="i.link">{{ $t("tool.text") + i.name }}</a>
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
        { name: 'projects1.name', img: 'calc', code: 'Calculator' },
        { name: 'projects2.name', img: 'tetris', code: 'simpleTetris' },
        { name: 'projects3.name', img: 'paint', code: 'canvasPaint' },
        { name: 'projects4.name', img: 'calendar', code: 'organizer' },
        { name: 'projects5.name', img: 'converter', code: 'tryConvert' }
      ]
    }
  },
  template: `<section class="project">
      <div class="container">
        <h4 class="project__title title">
          {{ $t("projects.title") }}
        </h4>
        
        <div class="project__items">
          <div v-for="i in projectsList" class="project__item">
            <div class="project__item-img" :style="'background-image: url(' + '/Portfolio/images/' + i.img + '.png' + ');'">
              <div class="project__item-inner">
                <a class="project__item-info" :href="'https://github.com/MarkAlexI/' + i.code + '/'">
                  <p class="project__item-code">{{ $t("projects.code") }}</p>
                </a>
                <a class="project__item-search" :href="'https://markalexi.github.io/' + i.code + '/'">
                  <p class="project__item-site">{{ $t("projects.result") }}</p>
                </a>
              </div>
            </div>
            <a class="project__item-link" :href='i.link'>{{ $t(i.name) }}</a>
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
          <img src="/Portfolio/images/us.png" class="flag" /> {{ $t("dropdown.en") }}
        </a>
        <a href="#" class="dropdown__item" :class="selectedLanguage === 'ua' ? 'active': ''" @click.prevent="changeLanguage('ua')">
          <img src="/Portfolio/images/ua.png" class="flag" /> {{ $t("dropdown.ua") }}
        </a>
      </div>
    </transition>
  </div>`,
  computed: {
    myImageSource() {
      return this.selectedLanguage === 'en' ? '/Portfolio/images/us.png' : '/Portfolio/images/ua.png';
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
