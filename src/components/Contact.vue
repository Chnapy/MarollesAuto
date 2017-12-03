<template>

    <section :class="{'container': !embed, 'text-center': true}">

        <div class="h3 text-center">
            Nous contacter
        </div>

        <div v-if="!open" class="alert alert-warning">
            <i class="glyphicon glyphicon-exclamation-sign"></i>
            Le magasin est actuellement fermé.<br/>
            Merci d'appeller en suivant les horaires d'ouverture, ou envoyez un mail.
        </div>

        <address class="text-center">

            <div v-for="fixe in societeProps.telephone.fixe">
                <b>
                    <i class="glyphicon glyphicon-earphone"></i>
                    {{getSpacedPhone(fixe)}}
                </b>
            </div>

            <div v-for="portable in societeProps.telephone.portable">
                <b>
                    <i class="glyphicon glyphicon-phone"></i>
                    {{getSpacedPhone(portable)}}
                </b>
            </div>

            <div class="strong mail" v-for="mail in societeProps.mail">
                <b><i class="glyphicon glyphicon-envelope"></i> <a :href="'mailto:' + mail"
                                                                   class="link">{{mail}}</a></b>
            </div>

        </address>

        <div class="h3 text-center">
            Horaires
        </div>

        Le magasin est ouvert
        <slot v-for="jour in societeProps.horaires.jours">
            de <b>{{getDayName(jour.from)}}</b> à <b>{{getDayName(jour.to)}}</b>,
        </slot>
        <slot v-for="(heure, i) in societeProps.horaires.heures">
            <slot v-if="i > 0 && i === societeProps.horaires.heures.length - 1">
                et de <b>{{getHeure(heure.from)}}</b> à <b>{{getHeure(heure.to)}}</b>.
            </slot>
            <slot v-else>
                 de <b>{{getHeure(heure.from)}}</b> à <b>{{getHeure(heure.to)}}</b>,
            </slot>
        </slot>

    </section>

</template>

<script lang="ts">

    import VueComponent from "./VueComponent";
    import {Component, Prop, Provide} from "vue-property-decorator";
    import {Controller} from "../controller/Controller";

    @Component
    export default class Contact extends VueComponent {

        @Prop()
        embed: boolean;

        @Provide()
        open: boolean;

        constructor() {
            super();
            this.open = Controller.isSocieteOpenNow(this.societeProps.horaires);
        }

        @Provide()
        getSpacedPhone(num: number): string {
            const numStr = num + '';
            let str = '';
            for(let i = 0; i < numStr.length - 1; i = i + 2) {
                str = str + numStr[i] + numStr[i + 1] + ' ';
            }
            return str.trim();
        }

        @Provide()
        getDayName(dayNumber: number): string {
            switch(dayNumber) {
                case 0:
                    return 'Lundi';
                case 1:
                    return 'Mardi';
                case 2:
                    return 'Mercredi';
                case 3:
                    return 'Jeudi';
                case 4:
                    return 'Vendredi';
                case 5:
                    return 'Samedi';
                case 6:
                    return 'Dimanche';
            }
            throw new Error();
        }

        @Provide()
        getHeure(heureNumber: number): string {
            let minutes = heureNumber % 100 + '';
            while(minutes.length < 2) {
                minutes = '0' + minutes;
            }
            const heure = Number.parseInt(heureNumber / 100 + '');
            return heure + 'h' + minutes;
        }

    }

</script>

<style scoped>

    .low {
        opacity: .5;
    }

    /*section {*/
        /*text-align: center;*/
    /*}*/

    .alert {
        display: inline-block;
        max-width: 100%;
    }

    .mail {
        margin-top: 5px;
    }

</style>