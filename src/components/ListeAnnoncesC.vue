<template>

    <section>

        <div class="row head">
            <div class="col-xs-12">
                <span class="title">23 voitures disponibles</span>
                <span class="rm-filter btn btn-link">
                    <i class="glyphicon glyphicon-remove"></i>
                    Supprimer les filtres
                </span>

                <div class="tri pull-right">
                    Trier :
                    <!--<select class="form-control">-->
                        <!--<option>par prix</option>-->
                    <!--</select>-->
                    <div class="btn-group open">
                        <button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown">
                            Par date d'ajout <span class="caret"></span>
                        </button>
                        <ul class="dropdown-menu dropdown-menu-right">
                            <li><a href="#">Par date d'ajout</a></li>
                            <li><a href="#">Par prix</a></li>
                            <li><a href="#">Par année</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-4">

                <div class="thumbnail">
                    <img :src="test" alt="...">
                    <div class="caption">
                        <h4 class="title">FORD  MONDEO 3</h4>
                        <p>III 2.0 TDCI 140 DPF GHIA 5P</p>
                        <div class="row-table">
                            <div class="col-table">
                                <footer class="small">
                                    <p>109 112 Km</p>
                                    <p>2008</p>
                                </footer>
                            </div>
                            <div class="col-table">
                                <div class="prix-container">
                                    <div class="reduc">
                                        <div class="prix old"><span class="prix-text">7 580</span></div>
                                        <span class="label label-warning reduc-label">300</span>
                                    </div>
                                    <div class="prix primary"><span class="prix-text">7 280</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    </section>

</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component, Provide} from "vue-property-decorator";

    const test = require('../../public/img/W100812182.jpg');

    @Component
    export default class ListeAnnoncesC extends Vue {

        @Provide()
        test = test;

    }

</script>

<style lang="scss" scoped>
    @import "../../scss/bootstrap-custom-variables";

    .head {
        padding-bottom: 15px;
        font-size: .875em;
        color: grey;
        line-height: 1.5;
        font-weight: 600;
        text-transform: uppercase;

        .btn-group {
            vertical-align: top;
        }

        .btn {
            height: 20px;
            margin-top: -1px;
            padding: 0;
            color: inherit;
            vertical-align: top;

            &:hover, &:focus {
                text-decoration: none;
            }
        }

        .title {

        }

        .rm-filter {
            margin-left: 20px;

            .glyphicon {
                font-size: .75em;
            }
        }

        .tri {
            font-weight: 300;
        }
    }

    .thumbnail {
        //width: $thumbnail-width;
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

    .prix-container {
        /*position: absolute;*/
        /*right: 0;*/
        /*bottom: 0;*/
        /*padding-left: 0;*/
        //padding-right: $thumbnail-caption-padding;
        //padding-bottom: $thumbnail-caption-padding;
        text-align: right;
    }

    .title {
        font-weight: 600;
        color: $thumbnail-title-color;
        margin-bottom: 0;
        margin-top: 0;
    }

    .prix {
        display: inline-block;
        position: relative;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        font-weight: 600;
        text-transform: none;
        text-align: center;
        color: #686868;
        background: rgba(0, 0, 0, .01);
        box-shadow: 0 1px 3px -1px rgba(0, 0, 0, .25);
        max-width: 100%;
        overflow: hidden;
        /*height: 23px;*/
        /*font-size: 12px;*/
        padding: 0 .5em;
        /*line-height: 0;*/
        border: 1px solid #a6a6a6;
        border-radius: 3px;
        margin-top: 5px;
        white-space: nowrap;
        user-select: none;

        .prix-text {

            &::after {
                content: ' €';
            }
        }

        &.old {
            text-decoration: line-through;
        }

        &.primary {
            border-color: $btn-primary-border;
            background: $btn-primary-bgln;
            color: $btn-primary-color;
        }
    }

    .reduc-label {
        display: inline-block;
        /*height: 23px;*/
        font-size: 12px;
        line-height: inherit;
        color: #f2f2f2;
        border-radius: 2px;
        padding: 1px .5em;
        font-weight: 600;
        text-align: center;
        white-space: nowrap;

        &::before {
            content: '\2010 ';
            margin-right: -.15em;
        }

        &::after {
            content: ' €';
        }
    }

    .reduc {
        white-space: nowrap;
        overflow: hidden;

        > .reduc-label, > .old {
            font-size: .7em;
            vertical-align: bottom;
        }
    }

    .dropdown-menu-right {
        text-align: right;
    }

</style>