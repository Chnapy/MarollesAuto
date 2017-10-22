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
                            <li><a @click="switchOrder('date')">Par date d'ajout</a></li>
                            <li><a @click="switchOrder('prix')">Par prix</a></li>
                            <li><a @click="switchOrder('annee')">Par année</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-4">

                <CarItemC v-for="props in getAllVoitures()" :key="props.id" :voitureProps="props"></CarItemC>

            </div>
        </div>

    </section>

</template>

<!--<script lang="ts" src="./Fiche.ts"></script>-->
<!--<style src="./FicheC.scss" lang="scss"></style>-->

<script lang="ts" src="./ListeAnnonces.ts"></script>

<style lang="scss" scoped>
    @import "../../../scss/bootstrap-custom-variables";

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

    .dropdown-menu-right {
        text-align: right;
    }

</style>