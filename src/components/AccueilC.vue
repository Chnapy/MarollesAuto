<template>

    <section class="top-stuck">

        <div id="bandeau" class="row">
            <div class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="../../public/img/4554_b.jpg" alt="...">
                        <div class="carousel-caption">
                            ...
                        </div>
                    </div>
                    <div class="item">
                        <img src="../../public/img/4554_b.jpg" alt="...">
                        <div class="carousel-caption">
                            ...
                        </div>
                    </div>
                </div>

            </div>
        </div>


        <div id="listes" class="container">
            <div class="row">

                <div class="col-md-4">

                    <div class="line-title text-center">
                        <span class="line-title-label">
                        Derniers arrivages
                            </span>
                    </div>

                    <div class="vlist">

                        <CarItemC inline="true"></CarItemC>

                    </div>

                    <div class="text-center">
                        <button class="btn btn-default btn-sm">Voir tout les derniers arrivages</button>
                    </div>

                </div>

                <div class="col-md-4">

                    <div class="line-title text-center">
                        <span class="line-title-label">Dernières baisses de prix
                            </span>
                    </div>

                    <div class="vlist">

                    </div>

                    <div class="text-center">
                        <button class="btn btn-default btn-sm">Voir toutes les dernières réductions</button>
                    </div>

                </div>

                <div class="col-md-4">

                    <div class="line-title text-center">
                        <span class="line-title-label">Les plus populaires
                            </span>
                    </div>

                    <div class="vlist">

                    </div>

                    <div class="text-center">
                        <button class="btn btn-default btn-sm">Voir toutes les annonces populaires</button>
                    </div>

                </div>
            </div>

            <hr/>

            <button class="btn btn-primary btn-lg btn-block">Voir le catalogue complet</button>

            <hr/>

        </div>


    </section>

</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component} from "vue-property-decorator";
    import CarItemC from './CarItemC.vue';
    import VueComponent from "./VueComponent";

    @Component({
        components: {
            CarItemC
        }
    })
    export default class AccueilC extends VueComponent {

    }

</script>

<style lang="scss" scoped>
    @import "../../scss/bootstrap-custom-variables";

    section.top-stuck {
        background: $body-bg;
    }

    #bandeau {
        padding-bottom: $navbar-margin-bottom;

    }

    #listes {
        .line-title {
            color: $text-color;
            font-weight: 600;
            font-size: .875em;
            text-transform: uppercase;
            margin-bottom: 15px;
        }
    }


</style>