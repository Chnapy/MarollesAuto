import Vue, {ComponentOptions} from "vue";
import root from "../root.vue";
import VueRouter from "vue-router";
import {DefaultComputed, DefaultData, DefaultMethods, PropsDefinition, RecordPropsDefinition} from "vue/types/options";
import AccueilC from '../components/AccueilC.vue';
import Contact from '../components/Contact.vue';
import ContentAnnoncesC from '../components/ContentAnnoncesC.vue';
import FicheC from '../components/Fiche/FicheC.vue';
import {Model, Order} from "../model/Model";
import {VoitureProperties} from "../properties/VoitureProperties";
import {Horaire, SocieteProperties} from "../properties/SocieteProperties";

export class Controller {

    static LETS_JAM_HERE_AND_NOW(): void {
        Controller.start();
    }

    private static readonly VIEW_SELECT = '#app';

    private static model: Model;
    private static router: VueRouter;
    private static view: Vue;

    private static startModel(): Promise<SocieteProperties> {
        this.model = new Model();
        return this.model.getSocieteProperties();
    }

    private static startRouter() {
        Vue.use(VueRouter);

        this.router = new VueRouter({
            // mode: 'history',
            routes: [
                {
                    name: 'accueil',
                    path: '',
                    component: AccueilC,
                    props: true
                },
                {
                    name: 'contact',
                    path: '/contact',
                    component: Contact,
                    props: true
                },
                {
                    name: 'listAnnonces',
                    path: '/annonces/:order?',
                    component: ContentAnnoncesC,
                    props: true
                },
                {
                    name: 'voiture',
                    path: '/voiture/:id',
                    component: FicheC,
                    props: route => ({id: Number.parseInt(route.params.id)}),
                    beforeEnter: (to, from, next) => {
                        next();
                    }
                }
            ]
        });
    }

    private static startView(societeProperties: SocieteProperties) {
        interface VueConfigRoutable extends ComponentOptions<Vue, DefaultData<Vue>, DefaultMethods<Vue>, DefaultComputed, PropsDefinition<RecordPropsDefinition<any>>> {
            router?: VueRouter;
        }

        const config: VueConfigRoutable = {
            router: this.router,
            el: Controller.VIEW_SELECT,
            render: h => h(root, {
                props: {controller: this, societeProps: societeProperties}
            })
        };

        this.view = new Vue(config);
    }

    private static start() {
        this.startModel().then(societeProperties => {
            this.parseSocieteProperties(societeProperties);
            this.startRouter();
            this.startView(societeProperties);
        });
    }

    private static parseSocieteProperties(societeProps: SocieteProperties): void {
        // console.log(societeProps.logoPath, __dirname)
        // const path = './../public/img/' + societeProps.logoPath;
        // let e = import(path).then(path => societeProps.logoPath = path);
    }

    static isSocieteOpenNow(horaire: Horaire): boolean {

        const getMinutesStr = (min: number) => {
            if (min === 0) {
                return '00';
            } else if (min < 10) {
                return '0' + min;
            } else {
                return min;
            }
        };

        const now = new Date();
        const jour = now.getDay() - 1;
        const heure = now.getHours();
        const minutes = now.getMinutes();
        const nowStr = Number.parseInt(heure + '' + getMinutesStr(minutes));
        console.log(nowStr);

        const jourOK = horaire.jours.some(j => j.from <= jour && j.to >= jour);

        if (!jourOK) {
            return false;
        }

        const heuresOK = horaire.heures.some(h => {

            // const hFrom = Number.parseInt(h.from / 100 + '');
            // const mFrom = h.from % 100;
            //
            // const hTo = Number.parseInt(h.to / 100 + '');
            // const mTo = h.to % 100;

            return h.from <= nowStr && h.to >= nowStr;
        });

        return heuresOK;
    }

    static getSocieteProperties(): Promise<SocieteProperties> {
        return this.model.getSocieteProperties();
    }

    static getVoitureProperties(id: number): Promise<VoitureProperties> {
        return this.model.getVoitureProperties(id);
    }

    static getAllVoitureProperties(limit: number | null, order: Order): Promise<VoitureProperties[]> {
        return this.model.getAllVoitureProperties(limit, order);
    }

}