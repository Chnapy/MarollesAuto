import Vue from "vue";
import Button from './components/Button.vue';
import '../scss/test.scss';

// mount
const v = new Vue({
    el: '#app',
    render: h => h(Button, {
        props: {
            value: 'TestButton',
            onClick: () => alert('It works !')
        }
    })
});