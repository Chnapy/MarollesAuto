import Vue, {ComponentOptions} from "vue";
import root from "../root.vue";
import VueRouter from "vue-router";
import {DefaultComputed, DefaultData, DefaultMethods, PropsDefinition, RecordPropsDefinition} from "vue/types/options";
import AccueilC from '../components/AccueilC.vue';
import ContentAnnoncesC from '../components/ContentAnnoncesC.vue';
import FicheC from '../components/Fiche/FicheC.vue';
import {Model} from "../model/Model";

export class Controller {

    static LETS_JAM_HERE_AND_NOW(): Controller {
        const c = new Controller();
        c.start();
        return c;
    }

    private static readonly VIEW_SELECT = '#app';

    private model: Model;
    private router: VueRouter;
    private view: Vue;

    startModel() {
        this.model = new Model();
    }

    startRouter() {
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
                    name: 'listAnnonces',
                    path: '/annonces',
                    component: ContentAnnoncesC,
                    props: true
                },
                {
                    name: 'voiture',
                    path: '/voiture/:id',
                    component: FicheC,
                    props: true,
                    // beforeEnter: Fiche.beforeEnter
                    beforeEnter: (to, from, next) => {

                        const id = Number.parseInt(to.params.id);

                        this.model.getVoitureProperties(id)
                            .then(voitureProps => {
                                console.log(voitureProps, 'ee');
                                next(vm => {
                                    vm.$props.voitureProps = voitureProps;
console.log(vm);
                                })
                            })
                            .catch(err => {
                                next(err);
                            });

                    }
                }
            ]
        })
    }

    startView() {
        interface VueConfigRoutable extends ComponentOptions<Vue, DefaultData<Vue>, DefaultMethods<Vue>, DefaultComputed, PropsDefinition<RecordPropsDefinition<any>>> {
            router?: VueRouter;
        }

        const config: VueConfigRoutable = {
            router: this.router,
            el: Controller.VIEW_SELECT,
            render: h => h(root, {
                props: {}
            })
        };

        this.view = new Vue(config);
    }

    start() {
        this.startModel();
        this.startRouter();
        this.startView();
    }

}