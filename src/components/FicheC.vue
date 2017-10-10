<template>

    <section class="container">

        <div class="page-header">
            <h1>FORD  MONDEO 3
                <small>III 2.0 TDCI 140 DPF GHIA 5P</small>
            </h1>
            <span class="lead">109 112 Km - 2008 <span class="label label-default">Garantie 6 mois</span></span>
        </div>

        <div class="row">
            <div class="col-sm-8">
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
                            <img src="../../public/img/W100812182.jpg" alt="...">
                        </div>
                        <div class="item">
                            <img src="../../public/img/W100812182.jpg" alt="...">
                        </div>
                    </div>

                </div>

                <div class="bloc">

                    <div class="lead">Informations générales</div>

                    <div class="row caracs-parent">
                        <div class="col-sm-6">

                            <table class="caracs">

                                <tr>
                                    <td>Version</td>
                                    <td>III 2.0 TDCI 140 DPF GHIA 5P</td>
                                </tr>
                                <tr>
                                    <td>Puissance Fiscale</td>
                                    <td>8 CV</td>
                                </tr>
                                <tr>
                                    <td>Energie</td>
                                    <td>Diesel</td>
                                </tr>

                            </table>

                        </div>

                        <div class="col-sm-6">

                            <table class="caracs">

                                <tr>
                                    <td>Année</td>
                                    <td>2008</td>
                                </tr>
                                <tr>
                                    <td>Kilométrage</td>
                                    <td>109 112 Km</td>
                                </tr>
                                <tr>
                                    <td>Nombre de portes</td>
                                    <td>5</td>
                                </tr>

                            </table>

                        </div>
                    </div>

                    <!--</div>-->

                </div>


            </div>

            <div class="col-sm-4">

                <div class="row">
                    <div class="prix-container lg">
                        <div class="reduc">
                            <div class="prix old"><span class="prix-text">7 580</span></div>
                            <span class="label label-warning reduc-label">300</span>
                        </div>
                        <div class="prix primary"><span class="prix-text">7 280</span></div>
                    </div>
                </div>

                <div class="row">
                    <div class="bloc">

                        <button class="btn btn-default btn-block">Nous contacter</button>

                    </div>

                    <div class="bloc">
                        <p>
                            blablabla slogan marolles autos
                        </p>
                    </div>

                </div>

            </div>
        </div>

    </section>

</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component} from "vue-property-decorator";

    @Component({
        components: {}
    })
    export default class FicheC extends Vue {

    }

</script>

<style lang="scss" scoped>
    @import "../../scss/bootstrap-custom-variables";

    .bloc {
        margin-top: 15px;
    }

    .caracs {
        font-size: 12px;
        color: $text-color;
        width: 100%;

        tr {
            td {
                padding-bottom: 1em;
                min-height: 1.5em;

                &:first-child {
                    color: $headings-small-color;
                    padding-right: 15px;
                    white-space: nowrap;
                    font-weight: 300;
                }

                &:last-child {
                    text-align: right;
                }
            }
        }
    }

    .caracs-parent.row > *:not(:first-child) {
        border-left: 1px solid $input-border;
    }

</style>