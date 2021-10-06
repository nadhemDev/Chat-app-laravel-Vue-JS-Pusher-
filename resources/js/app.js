require('./bootstrap');


window.vue = require('vue')

window.component('exmaple-component', require('./component/ExampleComponent.vue').default);
window.component('main-app', require('./component/ExampleComponent.vue').default);
const app = new Vue({
    el:'#app'
})
