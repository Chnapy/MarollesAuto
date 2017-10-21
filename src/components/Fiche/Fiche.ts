import Vue from 'vue';
import {Component, Prop, Provide} from "vue-property-decorator";
import {Route} from "vue-router";
import {BoiteVitesse, Energie, TypeLoad, VoitureProperties} from "../../properties/VoitureProperties";
import {Controller} from "../../controller/Controller";
import {SocieteProperties} from "../../properties/SocieteProperties";
import VueComponent from "../VueComponent";

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

@Component({
    components: {}
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

    constructor(a: any) {
        super(a);
        window['test'] = this;

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
            },
            typeLoad: TypeLoad.ALL
        };

        // this.societeProps = {
        //     nom: '',
        //     logoPath: '',
        //     adresse: {
        //         ligne1: '',
        //         codePostal: -1,
        //         ville: '',
        //         infosSup: () => ''
        //     },
        //     telephone: {
        //         fixe: [],
        //         portable: []
        //     },
        //     mail: [],
        //     slogan: () => '',
        //     horaires: {
        //         jours: [],
        //         heures: [],
        //         infosSup: () => ''
        //     },
        //     siren: -1,
        //     siret: -1,
        //     idLaCentrale: '',
        //     anneeCreation: -1,
        //     collaborateurs: []
        // };
    }

    beforeRouteEnter(from: Route, to: Route, next: (fct: (vm: FicheC) => any) => any) {
        Promise.all([
            // Controller.getSocieteProperties(),
            Controller.getVoitureProperties(Number.parseInt(from.params.id))
        ]).then(data => {
            next(vm => {
                // vm.$data.societeProps = data[0];
                vm.$data.voitureProps = data[0];
                console.log('toto', vm);
            });
        });
    }

    nbrToStr(nbr: number): string {
        const parsed = nbr + '';
        let final = '';
        for (let i = parsed.length - 1, j = 0; i >= 0; i--, j++) {
            if (j && j % 3 === 0) {
                final = ' ' + final;
            }
            final = parsed[i] + final;
        }
        return final;
    }

    nbrToPrix(nbr: number): string {
        const str = nbr + '';
        const centimes = str.substr(str.length - 2, 2);
        const int = this.nbrToStr(Number.parseInt(nbr / 100 + ''));
        return int + ',' + centimes;
    }

    enumToEnergieStr(energie: Energie): string {
        switch (energie) {
            case Energie.Diesel:
                return 'Diesel';
            case Energie.Essence:
                return 'Essence';
        }
    }

    enumToBoiteStr(boite: BoiteVitesse): string {
        switch (boite) {
            case BoiteVitesse.Mecanique:
                return 'Mecanique';
            case BoiteVitesse.Automatique:
                return 'Automatique';
        }
    }

}