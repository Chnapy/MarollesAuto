<template>

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

                <div class="form-group">
                    <div class="col-sm-4">
                        <label for="f-marque" class="control-label">Marque</label>
                        <input class="form-control" id="f-marque" placeholder="Ford"/>
                    </div>
                    <div class="col-sm-4">
                        <label for="f-modele" class="control-label">Modèle</label>
                        <input class="form-control" id="f-modele" placeholder="C4"/>
                    </div>
                    <div class="col-sm-4">
                        <label for="f-km" class="control-label">Kilométrage</label>
                        <input type="number" class="form-control" id="f-km" placeholder="55000"/>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-xs-12 text-center">
                        <label for="f-prix-min" class="control-label">Budget</label>
                    </div>
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
                <div class="form-group">
                    <label class="col-lg-2 control-label">Radios</label>
                    <div class="col-lg-10">
                        <div class="radio">
                            <label>
                                <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="">
                                Option one is this
                            </label>
                        </div>
                        <div class="radio">
                            <label>
                                <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2">
                                Option two can be something else
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="select" class="col-lg-2 control-label">Selects</label>
                    <div class="col-lg-10">
                        <select class="form-control" id="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <br>
                        <select multiple="" class="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
            <a class="link">
                    Plus d'infos...
            </a>
                <div class="form-group">
                    <div class="col-lg-10 col-lg-offset-2">
                        <button type="reset" class="btn btn-default">Cancel</button>
                        <button class="btn btn-primary">Submit</button>
                    </div>
                </div>
            <!--</fieldset>-->
        </form>

    </aside>

</template>

<script lang="ts">

    import Vue from 'Vue';
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

        hr {
            border-color: $well-border;
        }

        .form-group > *:not(:first-child) {
            border: solid $well-border;
            border-width: 0 0 0 1px;
        }
    }

    /*.form {*/
    /*!*background: #dedede;*!*/
    /*font-size: 13px;*/
    /*color: #595959;*/
    /*}*/


</style>