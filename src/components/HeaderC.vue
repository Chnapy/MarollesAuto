<template>


    <header class="navbar navbar-default navbar-fixed-top">
        <div class="container">

            <div class="navbar-header">
                <a id="logo" class="navbar-brand" href="#">
                    <img alt="logo" src="/public/img/logo_100x100.gif" width="35" height="35">
                </a>
                <a href="../" class="navbar-brand">
                    Marolles Auto
                </a>
                <button class="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
            </div>

            <div class="navbar-collapse collapse" id="navbar-main">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="http://news.bootswatch.com">Annonces</a>
                    </li>
                    <li>
                        <a href="../help/">Garanties</a>
                    </li>
                    <li>
                        <a href="http://news.bootswatch.com">Carte grise</a>
                    </li>
                </ul>

                <ul class="nav navbar-nav navbar-right">
                    <li><a href="http://builtwithbootstrap.com/" target="_blank">Contact</a></li>
                    <li><a href="https://wrapbootstrap.com/?ref=bsw" target="_blank">LaCentrale</a></li>
                </ul>

            </div>

        </div>
    </header>


</template>

<script lang="ts">

    import Vue from 'Vue';
    import {Component, Prop, Provide} from "vue-property-decorator";

    @Component
    export default class HeaderC extends Vue {

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