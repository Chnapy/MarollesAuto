import Vue from 'vue';
import {Component, Provide} from "vue-property-decorator";
import HeaderC from './components/HeaderC.vue';
import InfosAnnoncesC from './components/InfosAnnoncesC.vue';
import ContentAnnoncesC from './components/ContentAnnoncesC.vue';
import AccueilC from './components/AccueilC.vue';
import FicheC from './components/Fiche/FicheC.vue';

@Component({
    components: {
        HeaderC,
        InfosAnnoncesC,
        ContentAnnoncesC,
        AccueilC,
        FicheC
    }
})
export default class MainC extends Vue {


//        @Prop()
//        value: string;
//
//        @Prop()
//        onClick?: () => void;
//
//     @Provide()
//     style = {
//         background: `url(${bg}) no-repeat`,
//         'background-size': '100% auto'
//     };
//
    @Provide()
    content = FicheC;
    // content = ContentAnnoncesC;
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