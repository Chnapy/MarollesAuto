import Vue, {ComponentOptions} from 'vue';
import {Component, Prop, Provide} from "vue-property-decorator";
import CarItemC from '../CarItemC.vue';
import {VoitureProperties} from "../../properties/VoitureProperties";

export type OrderStr = 'date' | 'prix' | 'annee';

export interface SortFcts {
    [key: string]: (a: VoitureProperties, b: VoitureProperties) => (-1 | 0 | 1);
}

@Component({
    components: {
        CarItemC
    }
})
export default class ListeAnnoncesC extends Vue {

    private readonly sortFcts: SortFcts = {
        date: (a: VoitureProperties, b: VoitureProperties) => a.dateAjout < b.dateAjout ? -1 : 1,
        prix: (a: VoitureProperties, b: VoitureProperties) => a.prix.actu < b.prix.actu ? -1 : 1,
        annee: (a: VoitureProperties, b: VoitureProperties) => a.general.annee < b.general.annee ? -1 : 1
    };

    private order: OrderStr;

    @Prop({required: true})
    allVoitureProps: VoitureProperties[];

    constructor(a: any) {
        super(a as ComponentOptions<Vue>);
        this.order = 'date';
        console.log(this.allVoitureProps);
    }

    @Provide()
    getAllVoitures(): VoitureProperties[] {
        const fct = this.sortFcts[this.order];
        return this.allVoitureProps.slice().sort(fct);
    }

    switchOrder(order: OrderStr) {
        this.order = order;
    }

}