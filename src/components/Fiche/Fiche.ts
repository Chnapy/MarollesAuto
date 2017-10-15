import Vue from 'vue';
import {Component, Prop, Provide} from "vue-property-decorator";
import {NavigationGuard, Route} from "vue-router";
import {VoitureProperties} from "../../properties/VoitureProperties";

const carouselLinks = [
    "../../public/img/W100812182.jpg",
    "../../public/img/W100812182.jpg",
    "../../public/img/W100812182.jpg",
    "../../public/img/W100812182.jpg",
    "../../public/img/W100812182.jpg",
    "../../public/img/W100812182.jpg",
    "../../public/img/W100812182.jpg",
    "../../public/img/W100812182.jpg",
    "../../public/img/W100812182.jpg",
    "../../public/img/W100812182.jpg"
];

export const beforeEnter: NavigationGuard = (to: Route, from: Route, next: Function) => {
    console.log('TEST');
    alert('TEST');
};

@Component({
    components: {}
})
export default class FicheC extends Vue {

    static readonly beforeEnter: NavigationGuard = (to: Route, from: Route, next: Function) => {
        console.log('TEST');
        alert('TEST');
    };

    @Prop()
    id: number;

    @Prop()
    voitureProps: VoitureProperties;

    @Provide()
    carouselFullscreen: boolean = false;

    @Provide()
    carouselLinks: string[] = carouselLinks;

    @Provide()
    carouselIndex: number = 0;

    @Provide()
    setCarouselIndex(index: number) {
        if (index < 0) {
            this.carouselIndex = 0;
        } else if (index >= this.carouselLinks.length) {
            this.carouselIndex = this.carouselLinks.length - 1;
        } else {
            this.carouselIndex = index;
        }
    }

    constructor(a:any) {
        super(a);
        window['test'] = this;
    }

    // beforeRouteEnter(from: any, to: any, next: any) {
    //     alert('TATATA');
    // }
    // beforeRouteUpdate(from: any, to: any, next: any) {
    //     alert('TATATA');
    // }



}