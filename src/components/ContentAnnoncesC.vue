<template>

    <main>

        <div class="row">
            <div class="col-md-4">
                <FiltreC/>
            </div>

            <div class="col-md-8">
                <ListeAnnoncesC/>
            </div>
        </div>

    </main>

</template>

<script lang="ts">

    import Vue from 'Vue';
    import {Component} from "vue-property-decorator";
    import FiltreC from './FiltreC';
    import ListeAnnoncesC from './ListeAnnoncesC';

    @Component({
        components: {
            FiltreC,
            ListeAnnoncesC
        }
    })
    export default class ContentAnnoncesC extends Vue {

    }

</script>

<style lang="scss" scoped>


</style>