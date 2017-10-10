<template>

    <div :class="classes">
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

</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component, Prop, Provide} from "vue-property-decorator";

    const test = require('../../public/img/W100812182.jpg');

    @Component
    export default class CarItemC extends Vue {

        @Prop()
        inline?: boolean;

        @Provide()
        test = test;

        get classes() {
            return 'thumbnail ' + (this.inline ? 'thumbnail-inline' : '');
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