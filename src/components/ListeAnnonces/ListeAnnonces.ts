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

    private orderBy: OrderStr;

    @Prop({required: true})
    readonly allVoitureProps: VoitureProperties[];

    @Prop()
    readonly order: OrderStr;

    constructor(a: any) {
        super(a as ComponentOptions<Vue>);
        console.log('ORDER', this.order, this.orderBy);
    }

    @Provide()
    getAllVoitures(): VoitureProperties[] {
        const fct = this.sortFcts[this.getOrderBy()];
        return this.allVoitureProps.slice().sort(fct);
    }

    @Provide()
    getOrderBy(): OrderStr {
        if(!this.orderBy && !this.order) {
            return 'date';
        }

        if(this.orderBy) {
            return this.orderBy;
        }

        return this.order;
    }

    switchOrder(order: OrderStr) {
        this.orderBy = order;
        console.log('ORDER', order);
    }

}