<template>

    <section>

        <div class="row">
            <div class="col-sm-6 col-md-4">
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
                                        <div class="prix old"><span class="prix-text">7580</span></div>
                                        <span class="label label-warning reduc-label">300</span>
                                    </div>
                                    <div class="prix primary"><span class="prix-text">7280</span></div>
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

    import Vue from 'Vue';
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

    .thumbnail {
        width: $thumbnail-width;
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
        display: table;
        width: 100%;
    }

    .col-table {
        display: table-cell;
        vertical-align: bottom;
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

</style>