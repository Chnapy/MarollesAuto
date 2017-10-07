import Vue from 'Vue';
import {Component, Provide} from "vue-property-decorator";
import HeaderC from './components/HeaderC.vue';
import InfosAnnoncesC from './components/InfosAnnoncesC.vue';
import ContentAnnoncesC from './components/ContentAnnoncesC.vue';

const bg = require('../public/img/W100812182.jpg');

@Component({
    components: {
        HeaderC,
        InfosAnnoncesC,
        ContentAnnoncesC
    }
})
export default class MainC extends Vue {


//        @Prop()
//        value: string;
//
//        @Prop()
//        onClick?: () => void;
//
    @Provide()
    style = {
        background: `url(${bg}) no-repeat`,
        'background-size': 'cover'
    };
//
//        @Provide()
//        helloMsg = 'Hello, ' + this.propMessage;
//
//        // lifecycle hook
//        mounted() {
//            this.greet();
//        }
//
//        // computed
//        get computedMsg() {
//            return 'computed ' + this.msg;
//        }
//
//        // method
//        greet() {
//            console.log('greeting: ' + this.msg);
//        }
}