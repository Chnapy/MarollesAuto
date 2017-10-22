<template>

    <main>

        <div class="row">
            <div class="col-md-4">
                <FiltreC></FiltreC>
            </div>

            <div class="col-md-8">
                <ListeAnnoncesC :allVoitureProps="allVoitureProps" :order="order"></ListeAnnoncesC>
            </div>
        </div>

    </main>

</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component, Prop, Provide} from "vue-property-decorator";
    import FiltreC from './FiltreC';
    import ListeAnnoncesC from './ListeAnnonces/ListeAnnoncesC.vue';
    import VueComponent from "./VueComponent";
    import {Route} from "vue-router";
    import {Controller} from "../controller/Controller";
    import {VoitureProperties} from "../properties/VoitureProperties";
    import {Order} from "../model/Model";
    import {OrderStr} from "./ListeAnnonces/ListeAnnonces";

    @Component({
        components: {
            FiltreC,
            ListeAnnoncesC
        }
    })
    export default class ContentAnnoncesC extends VueComponent {

        @Provide()
        allVoitureProps: VoitureProperties[];

        @Prop()
        readonly order: OrderStr;

        constructor() {
            super();
            this.allVoitureProps = [];
        }

        beforeRouteEnter(from: Route, to: Route, next: (fct: (vm: ContentAnnoncesC) => any) => any) {
            Promise.all([
                Controller.getAllVoitureProperties(null, Order.DATE)
            ]).then(data => {
                next(vm => {
                    // vm.$data.societeProps = data[0];
                    vm.$data.allVoitureProps = data[0];
                    console.log('toto', vm);
                });
            });
        }
    }

</script>

<style lang="scss" scoped>


</style>