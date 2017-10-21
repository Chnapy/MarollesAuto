import '../scss/root.scss';
import Component from "vue-class-component";

export const DEBUG = true;

Component.registerHooks([
    'beforeRouteEnter',
    'beforeRouteLeave',
    'beforeRouteUpdate' // for vue-router 2.2+
]);

import {Controller} from "./controller/Controller";

Controller.LETS_JAM_HERE_AND_NOW();

window['main'] = Controller;