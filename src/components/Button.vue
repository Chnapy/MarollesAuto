<!-- Button.vue -->

<template>
    <button @click="onClick">{{value}}</button>
</template>

<script lang="ts">

    import Vue from 'vue';
    import {Component, Prop} from "vue-property-decorator";

    @Component
    export default class Button extends Vue {

        @Prop()
        value: string;

        @Prop()
        onClick?: () => void;

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

    button {
        background: green;
    }

</style>

