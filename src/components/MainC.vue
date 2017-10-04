<template>


    <div id="main">

        <!--HEADER-->
        <HeaderC></HeaderC>

        <InfosAnnoncesC></InfosAnnoncesC>

        <div class="container-fluid">

            <ContentAnnoncesC></ContentAnnoncesC>

        </div>

    </div>


</template>

<script lang="ts">

    import Vue from 'Vue';
    import {Component, Prop, Provide} from "vue-property-decorator";
    import HeaderC from './HeaderC.vue';
    //    import BandeauC from './BandeauC.vue';
    import InfosAnnoncesC from './InfosAnnoncesC.vue';
    import ContentAnnoncesC from './ContentAnnoncesC.vue';

    @Component({
        components: {
            HeaderC,
            InfosAnnoncesC,
            ContentAnnoncesC
        }
    })
    export default class MainC extends Vue {


//        @Prop()
//        value: string;
//
//        @Prop()
//        onClick?: () => void;
//
//        @Provide()
//        msg: number = 1234;
//
//        @Provide()
//        helloMsg = 'Hello, ' + this.propMessage;
//
//        // lifecycle hook
//        mounted() {
//            this.greet();
//        }
//
//        // computed
//        get computedMsg() {
//            return 'computed ' + this.msg;
//        }
//
//        // method
//        greet() {
//            console.log('greeting: ' + this.msg);
//        }
    }

</script>

<style lang="scss" scoped>

    @import "../../scss/bootstrap-custom-variables";

    #main {
        padding-top: $navbar-height + $navbar-margin-bottom;
    }

</style>