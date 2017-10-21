import Vue from "vue";
import {Prop, Provide} from "vue-property-decorator";
import {SocieteProperties} from "../properties/SocieteProperties";

export default class VueComponent extends Vue {

    @Prop({
        required: true
    })
    societeProps: SocieteProperties;

}