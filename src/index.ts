import Vue from "vue";
import MainC from './components/MainC.vue';
import '../scss/test.scss';

// mount
const v = new Vue({
    el: '#app',
    render: h => h(MainC, {
        props: {
            // value: 'TestButton',
            // onClick: () => alert('It works !')
        }
    })
});
