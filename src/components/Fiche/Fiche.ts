import {Component, Prop, Provide} from "vue-property-decorator";
import {Route} from "vue-router";
import {BoiteVitesse, Energie, VoitureProperties} from "../../properties/VoitureProperties";
import {Controller} from "../../controller/Controller";
import VueComponent from "../VueComponent";
import Contact from "../Contact.vue";
import Tools from "../../Tools";

@Component({
    components: {
        Contact
    }
})
export default class FicheC extends VueComponent {

    @Prop({
        type: Number,
        required: true
    })
    id: number;

    @Provide()
    voitureProps: VoitureProperties;

    @Provide()
    carouselFullscreen: boolean;

    @Provide()
    carouselIndex: number;

    @Provide()
    setCarouselIndex(index: number) {
        if (index < 0) {
            this.carouselIndex = 0;
        } else if (index >= this.voitureProps.photosPath.length) {
            this.carouselIndex = this.voitureProps.photosPath.length - 1;
        } else {
            this.carouselIndex = index;
        }
    }

    constructor(a: any) {
        super(a);

        this.carouselFullscreen = false;
        this.carouselIndex = 0;
        this.voitureProps = {
            id: -1,
            modele: '',
            marque: '',
            general: {
                version: '',
                annee: -1,
                kmetrage: -1,
                puiFiscale: -1,
                energie: Energie.Diesel,
                coulInt: '',
                coulExt: '',
                premMain: false,
                boiteVitesse: BoiteVitesse.Mecanique,
                nbPortes: -1,
                miseCircul: new Date(),
                autoviza: ''
            },
            dateAjout: new Date(),
            donneesComp: {
                puiDIN: -1,
                co2: -1,
                volCoffre: -1,
                consoMixte: -1,
                reparations: []
            },
            garantieDuree: -1,
            options: {
                antivol: [],
                confort: [],
                securite: [],
                interieur: [],
                extChassis: [],
                autre: []
            },
            photosPath: [],
            prix: {
                actu: -1
            }
        };
    }

    beforeRouteEnter(from: Route, to: Route, next: (fct: (vm: FicheC) => any) => any) {
        Promise.all([
            Controller.getVoitureProperties(Number.parseInt(from.params.id))
        ]).then(data => {
            next(vm => {
                vm.$data.voitureProps = data[0];
                console.log('toto', vm);
            });
        });
    }

    nbrToStr(nbr: number): string {
        return Tools.nbrToStr(nbr);
    }

    nbrToPrix(nbr: number): string {
        return Tools.nbrToPrix(nbr);
    }

    enumToEnergieStr(energie: Energie): string {
        return Tools.enumToEnergieStr(energie);
    }

    enumToBoiteStr(boite: BoiteVitesse): string {
        return Tools.enumToBoiteStr(boite);
    }

}