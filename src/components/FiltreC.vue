<template>

    <div>
        <aside class="well">

            <form class="form-horizontal">
                <!--<fieldset>-->
                <h4 class="text-center">Rechercher une voiture</h4>
                <div class="form-group">
                    <div class="col-xs-12">
                        <input class="form-control" id="search" placeholder="Ford 500 blabla"/>
                    </div>
                </div>

                <hr/>

                <details>
                    <summary class="btn btn-default btn-block">Filtres</summary>

                    <div class="form-group">
                        <div class="col-sm-6">
                            <div class="text-center line-title">
                                <label for="f-marque" class="control-label">Marque</label>
                            </div>
                            <input class="form-control" id="f-marque" placeholder="Ford"/>
                        </div>
                        <div class="col-sm-6">
                            <div class="text-center line-title">
                                <label for="f-modele" class="control-label">Modèle</label>
                            </div>
                            <input class="form-control" id="f-modele" placeholder="C4"/>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-sm-12">
                            <div class="text-center line-title">
                                <label for="f-prix-min" class="control-label">Budget</label>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <span class="input-group-addon">min</span>
                                        <input type="number" class="form-control" id="f-prix-min">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <span class="input-group-addon">max</span>
                                        <input type="number" class="form-control" id="f-prix-max">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="row">
                        <div class="col-sm-12">
                            <div class="checkbox">
                                <label class="btn btn-default btn-block">
                                    <input type="checkbox"><span class="checkbox-box"></span>
                                    Première main
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-sm-6">
                            <div class="text-center line-title">
                                <label for="f-annee-min" class="control-label">Année</label>
                            </div>
                            <div class="form-group row-near">
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="number" class="form-control" id="f-annee-min" placeholder="min">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="number" class="form-control" id="f-annee-max" placeholder="max">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="text-center line-title">
                                <label for="f-km-min" class="control-label">Kilométrage</label>
                            </div>
                            <div class="form-group row-near">
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="number" class="form-control" id="f-km-min" placeholder="min">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="number" class="form-control" id="f-km-max" placeholder="max">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-6">
                            <div class="text-center line-title">
                                <label for="f-energie" class="control-label">Energie</label>
                            </div>
                            <select multiple class="form-control" id="f-energie">
                                <option>Diesel</option>
                                <option>Essence</option>
                            </select>
                        </div>
                        <div class="col-sm-6">
                            <div class="text-center line-title">
                                <label for="f-boite" class="control-label">Boite de vitesse</label>
                            </div>
                            <select multiple class="form-control" id="f-boite">
                                <option>Manuelle</option>
                                <option>Automatique</option>
                            </select>
                        </div>
                    </div>


                    <div class="form-group">
                        <div class="col-sm-6">
                            <div class="text-center line-title">
                                <label for="f-cv-min" class="control-label">Puissance fiscale CV</label>
                            </div>
                            <div class="form-group row-near">
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="number" class="form-control" id="f-cv-min" placeholder="min">
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="input-group">
                                        <input type="number" class="form-control" id="f-cv-max" placeholder="max">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="text-center line-title">
                                <label for="f-portes" class="control-label">Nombre de portes</label>
                            </div>
                            <select multiple class="form-control" id="f-portes">
                                <option>3</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-6">
                            <div class="text-center line-title">
                                <label for="f-col-int" class="control-label">Couleur intérieure</label>
                            </div>
                            <select multiple class="form-control" id="f-col-int">
                                <option>Tissu gris</option>
                                <option>Cuir noir</option>
                            </select>
                        </div>
                        <div class="col-sm-6">
                            <div class="text-center line-title">
                                <label for="f-col-ext" class="control-label">Couleur extérieure</label>
                            </div>
                            <select multiple class="form-control" id="f-col-ext">
                                <option>Gris foncé nacre</option>
                                <option>Noir</option>
                                <option>Blanc</option>
                            </select>
                        </div>
                    </div>


                </details>

                <hr/>

                <div class="form-group text-center">
                    <div>
                        <button type="reset" class="btn btn-default">Annuler</button>
                        <button class="btn btn-primary">Rechercher</button>
                    </div>
                    ou
                    <div>
                        <button class="btn btn-primary">Créer une alerte</button>
                    </div>
                </div>
                <!--</fieldset>-->
            </form>

        </aside>

    </div>

</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component} from "vue-property-decorator";

    @Component
    export default class FiltreC extends Vue {

    }

</script>

<style lang="scss" scoped>
    @import "../../scss/bootstrap-custom-variables";

    aside {
        /*min-height: 56px;*/
        font-size: .8125em;
        color: $well-color;
        font-weight: 600;

        details > summary {
            margin-bottom: $form-group-margin-bottom;
        }

        hr {
            border-color: $well-border;
        }
    }

    .form-group > .form-item:not(:first-child) {
        border: solid $well-border;
        border-width: 0 0 0 1px;
    }

    /*
        .line-title {
            position: relative;

            &::before {
                content: ' ';
                border-top: 1px solid $well-border;
                display: inline-block;
                height: .7em;
                position: absolute;
                left: 0;
                bottom: 0;
                right: 0;
                pointer-events: none;
            }

            > label {
                background: $well-bg;
                position: relative;
                padding-left: .5em;
                padding-right: .5em;
            }
        }
    */
    .row-near {
        $pad: $grid-gutter-width / 8;

        > *:not(:first-child) {
            padding-left: $pad;
        }

        > *:not(:last-child) {
            padding-right: $pad;
        }

        .input-group-addon {
            padding-left: 6px;
            padding-right: 6px;
        }
    }

    select.form-control {
        height: $input-height-base;
    }


</style>