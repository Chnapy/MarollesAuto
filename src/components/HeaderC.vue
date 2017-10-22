<template>


    <header class="navbar navbar-default navbar-fixed-top">
        <div class="container">

            <div class="navbar-header">
                <router-link :to="{name: 'accueil'}">
                    <span id="logo" class="navbar-brand" href="#">
                        <img alt="logo" :src="societeProps.logoPath" width="35" height="35">
                    </span>
                    <span href="../" class="navbar-brand">
                        {{societeProps.nom}}
                    </span>
                </router-link>
                <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

            <div class="navbar-collapse collapse" id="navbar-main">
                <ul class="nav navbar-nav">
                    <li :class="{ active: $route.name === 'listAnnonces'}">
                        <router-link :to="{name: 'listAnnonces'}">Annonces</router-link>
                    </li>
                    <li>
                        <a href="">Garanties</a>
                    </li>
                    <li>
                        <a href="">Carte grise</a>
                    </li>
                </ul>

                <ul class="nav navbar-nav navbar-right">
                    <li><a href="http://pros.lacentrale.fr/C013464/" target="_blank" id="logo-lc"><img
                            alt="lacentrale.fr" :src="logoLC"></a></li>
                    <li><a href="" target="_blank">Contact</a></li>
                    <li><a href="" target="_blank">Plan d'accès</a></li>
                </ul>

            </div>

        </div>
    </header>


</template>

<script lang="ts">

    import Vue, {ComponentOptions} from 'vue';
    import {Component, Prop, Provide} from "vue-property-decorator";
    import {Controller} from "../controller/Controller";
    import {SocieteProperties} from "../properties/SocieteProperties";

    const logo: string = require('../../public/img/logo_100x100.gif');
    const logo_lc = require('../../public/img/logo_lacentrale_3.png');

    @Component({
        components: {}
    })
    export default class HeaderC extends Vue {

        @Prop({
            required: true
        })
        controller: Controller;

        @Prop({
            required: true
        })
        societeProps: SocieteProperties;

        @Provide()
        logoLC: string;

        constructor() {
            super();
            this.logoLC = logo_lc;
            console.log(this);
        }
    }

</script>

<style lang="scss" scoped>

    #logo {
        $padding-v: 7.5px;

        padding-top: $padding-v;
        padding-bottom: $padding-v;

        img {
            height: 100%;
            width: auto;
        }
    }

</style>