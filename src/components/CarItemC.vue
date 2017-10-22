<template>

    <router-link tag="div" :class="classes" :to="{name: 'voiture', params: {id: voitureProps.id}}">
        <img :src="voitureProps.photosPath[0]" alt="...">
        <div class="caption">
            <h4 class="title">{{voitureProps.marque}} {{voitureProps.modele}}</h4>
            <p>{{voitureProps.general.version}}</p>
            <div class="row-table">
                <div class="col-table">
                    <footer class="small">
                        <p>{{nbrToStr(voitureProps.general.kmetrage)}} km</p>
                        <p>{{voitureProps.general.annee}}</p>
                    </footer>
                </div>
                <div class="col-table">
                    <div class="prix-container">
                        <div class="reduc" v-if="voitureProps.prix.ancien">
                            <div class="prix old"><span class="prix-text">{{nbrToPrix(voitureProps.prix.ancien)}}</span></div>
                            <span class="label label-warning reduc-label">{{nbrToPrix(voitureProps.prix.ancien - voitureProps.prix.actu)}}</span>
                        </div>
                        <div class="prix primary"><span class="prix-text">{{nbrToPrix(voitureProps.prix.actu)}}</span></div>
                    </div>
                </div>
            </div>
        </div>
    </router-link>

</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component, Prop, Provide} from "vue-property-decorator";
    import {BoiteVitesse, Energie, VoitureProperties} from "../properties/VoitureProperties";
    import Tools from "../Tools";

    @Component
    export default class CarItemC extends Vue {

        @Prop({required: true})
        voitureProps: VoitureProperties;

        @Prop()
        inline?: boolean;

        get classes() {
            return 'thumbnail ' + (this.inline ? 'thumbnail-inline' : '');
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

</script>

<style lang="scss" scoped>
    @import "../../scss/bootstrap-custom-variables";

    .thumbnail {
        position: relative;
        user-select: none;
        cursor: pointer;

        &:hover img {
            opacity: .95;
        }
    }

    img {
        pointer-events: none;
    }

    p {
        margin-bottom: 0;
    }

    .row-table {
        margin: 0;
    }

    .col-table {
        vertical-align: bottom;
        padding: 0;
    }

</style>