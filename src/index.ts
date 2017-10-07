import Vue from "vue";
import root from './root.vue';
import '../scss/root.scss';

// mount
window['root'] = new Vue({
    el: '#app',
    render: h => h(root, {
        props: {
            // value: 'TestButton',
            // onClick: () => alert('It works !')
        }
    })
});
