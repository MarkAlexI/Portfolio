'use strict';

const app = Vue.createApp({
  data() {
    return {

    }
  },

});

app.component('my-header', {
  props: [],
  data() {
    return {
      
    }
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
                  <a href="#"> About </a>
                  <a href="#"> Used tools </a>
                  <a href="#"> Projects </a>
                  
                </div>
              </nav>
            </div>
          </div>
        </header>`,
  methods: {

  }
});

app.mount('#app');
