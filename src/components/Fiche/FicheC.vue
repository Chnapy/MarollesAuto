<template>

    <section class="container">

        <div class="page-header">
            <h1>{{voitureProps.marque}} {{voitureProps.modele}}
                <small>{{voitureProps.general.version}}</small>
            </h1>
            <span class="lead">{{nbrToStr(voitureProps.general.kmetrage)}} Km - {{voitureProps.general.annee}} <span class="label label-danger pull-right">Garantie {{voitureProps.garantieDuree}} mois <a
                    class="link">extensible</a></span></span>
        </div>

        <div class="row">
            <div class="col-sm-8">

                <div :class="{'carousel-container': true, fullscreen: carouselFullscreen}">

                    <div class="carousel-bg" v-show="carouselFullscreen" v-on:click="carouselFullscreen = false"></div>

                    <div class="carousel slide" data-ride="carousel" :data-index="carouselIndex">

                        <div class="carousel-inner" role="listbox">

                            <div :class="{active: i === carouselIndex, item: true}" v-for="(link, i) in voitureProps.photosPath"
                                 :key="i">
                                <img :src="link" alt="..." v-on:click="carouselFullscreen = !carouselFullscreen"/>
                            </div>

                        </div>

                        <span class="left carousel-control" role="button"
                              v-on:click="setCarouselIndex(carouselIndex - 1)" v-show="carouselIndex > 0">
                        <span class="glyphicon glyphicon-chevron-left"></span>
                        <span class="sr-only">Previous</span>
                    </span>
                        <span class="right carousel-control" role="button"
                              v-on:click="setCarouselIndex(carouselIndex + 1)"
                              v-show="carouselIndex < voitureProps.photosPath.length - 1">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                    </span>

                    </div>

                    <div class="carousel-list">

                        <div :class="{active: i === carouselIndex, thumbnail: true}" role="button"
                             v-for="(link, i) in voitureProps.photosPath"
                             :key="i" v-on:click="setCarouselIndex(i)">
                            <img :src="link" alt="..."/>
                        </div>

                    </div>

                </div>

                <div class="bloc">

                    <div class="lead">Informations générales</div>

                    <div class="row caracs-parent">
                        <div class="col-sm-6">

                            <table class="caracs">

                                <tr>
                                    <td>Version</td>
                                    <td>{{voitureProps.general.version}}</td>
                                </tr>
                                <tr>
                                    <td>Puissance Fiscale</td>
                                    <td>{{voitureProps.general.puiFiscale}} CV</td>
                                </tr>
                                <tr>
                                    <td>Energie</td>
                                    <td>{{enumToEnergieStr(voitureProps.general.energie)}}</td>
                                </tr>
                                <tr>
                                    <td>Boite de vitesse</td>
                                    <td>{{enumToBoiteStr(voitureProps.general.boiteVitesse)}}</td>
                                </tr>
                                <tr>
                                    <td>Mise en circulation</td>
                                    <td>{{voitureProps.general.miseCircul}}</td>
                                </tr>

                            </table>

                        </div>

                        <div class="col-sm-6">

                            <table class="caracs">

                                <tr>
                                    <td>Année</td>
                                    <td>{{voitureProps.general.annee}}</td>
                                </tr>
                                <tr>
                                    <td>Kilométrage</td>
                                    <td>{{nbrToStr(voitureProps.general.kmetrage)}} Km</td>
                                </tr>
                                <tr>
                                    <td>Nombre de portes</td>
                                    <td>{{voitureProps.general.nbPortes}}</td>
                                </tr>
                                <tr>
                                    <td>Couleur intérieure</td>
                                    <td>{{voitureProps.general.coulInt}}</td>
                                </tr>
                                <tr>
                                    <td>Couleur extérieure</td>
                                    <td>{{voitureProps.general.coulExt}}</td>
                                </tr>

                            </table>

                        </div>
                    </div>

                </div>

                <div class="bloc">

                    <div class="lead">Options et équipements</div>

                    <div class="row caracs-parent">
                        <div class="col-sm-6">

                            <table class="caracs">

                                <tr v-for="(v, i) in voitureProps.options.antivol">
                                    <td><slot v-if="i === 0">Antivol</slot></td>
                                    <td>{{v}}</td>
                                </tr>

                                <tr v-for="(v, i) in voitureProps.options.securite">
                                    <td><slot v-if="i === 0">Sécurité</slot></td>
                                    <td>{{v}}</td>
                                </tr>

                                <tr v-for="(v, i) in voitureProps.options.extChassis">
                                    <td><slot v-if="i === 0">Extérieur et chassis</slot></td>
                                    <td>{{v}}</td>
                                </tr>

                                <tr v-for="(v, i) in voitureProps.options.autre">
                                    <td><slot v-if="i === 0">Autre</slot></td>
                                    <td>{{v}}</td>
                                </tr>

                            </table>

                        </div>

                        <div class="col-sm-6">

                            <table class="caracs">

                                <tr v-for="(v, i) in voitureProps.options.confort">
                                    <td><slot v-if="i === 0">Confort</slot></td>
                                    <td>{{v}}</td>
                                </tr>

                                <tr v-for="(v, i) in voitureProps.options.interieur">
                                    <td><slot v-if="i === 0">Intérieur</slot></td>
                                    <td>{{v}}</td>
                                </tr>

                            </table>

                        </div>
                    </div>

                </div>

                <div class="bloc">

                    <div class="lead">Données complémentaires</div>

                    <div class="row caracs-parent">
                        <div class="col-sm-6">

                            <table class="caracs">

                                <tr>
                                    <td>Puissance DIN</td>
                                    <td>{{voitureProps.donneesComp.puiDIN}}</td>
                                </tr>

                                <tr>
                                    <td>Volume de coffre</td>
                                    <td>{{voitureProps.donneesComp.volCoffre}}</td>
                                </tr>

                                <tr v-for="(v, i) in voitureProps.donneesComp.reparations">
                                    <td><slot v-if="i === 0">Réparations</slot></td>
                                    <td>{{v}}</td>
                                </tr>

                            </table>

                        </div>

                        <div class="col-sm-6">

                            <table class="caracs">

                                <tr>
                                    <td>Emission de CO2</td>
                                    <td>{{voitureProps.donneesComp.co2}} g/km</td>
                                </tr>
                                <tr>
                                    <td>Consommation mixte</td>
                                    <td>{{voitureProps.donneesComp.consoMixte}}</td>
                                </tr>

                            </table>

                        </div>
                    </div>

                </div>


            </div>

            <div class="col-sm-4">

                <div class="row">
                    <div class="prix-container lg">
                        <div class="reduc" v-if="voitureProps.prix.ancien">
                            <div class="prix old"><span class="prix-text">{{nbrToPrix(voitureProps.prix.ancien)}}</span></div>
                            <span class="label label-warning reduc-label">{{nbrToPrix(voitureProps.prix.ancien - voitureProps.prix.actu)}}</span>
                        </div>
                        <div class="prix primary"><span class="prix-text">{{nbrToPrix(voitureProps.prix.actu)}}</span></div>
                    </div>
                </div>

                <div class="row">
                    <div class="bloc well well-sm">

                        <div class="h3 text-center">
                            Nous contacter
                        </div>

                        <address class="text-center">

                            <div>
                                <b><i class="glyphicon glyphicon-earphone"></i> 01 45 69 28 33</b>
                            </div>

                            <div>
                                <b><i class="glyphicon glyphicon-phone"></i> 06 12 34 56 78</b>
                            </div>

                            <div class="strong">
                                <b><i class="glyphicon glyphicon-envelope"></i> <a href="mailto:marolleauto@aol.com"
                                                                                   class="link">marolleauto@aol.com</a></b>
                            </div>

                        </address>

                    </div>

                    <button class="btn btn-default btn-block btn-acces">
                        <i class="glyphicon glyphicon-map-marker"></i>
                        Se rendre sur place
                    </button>

                    <div class="bloc well well-sm">

                        <div class="h3 text-center">
                            <div>Marolles Autos s'engage</div>
                            <small>Sécurité - Fiabilité - Confiance</small>
                        </div>
                        <dl class="text-justify">
                            <dt>Controle technique récent</dt>
                            <dd>
                                Chacune de nos voiture a passé un contrôle technique au maximum X ans avant la date d'achat.
                            </dd>
                            <dt>Garantie européenne 3 mois extensible</dt>
                            <dd>Chacune de nos voitures est garantie au minimum 3 mois au niveau européen.</dd>
                            <dt>Voiture révisée</dt>
                            <dd>Toutes nos voitures en vente ont été révisées et testées par nos soins.</dd>
                        </dl>


                    </div>

                    <div class="bloc">
                        <p>
                            Marolles Autos.<br/>
                            Nous avons l'auto qu'il vous faut.
                        </p>
                        <p>
                            L'auto garantie.<br/>
                            Au meilleur prix.
                        </p>
                        <p>
                            Satisfait ou remboursé.<br/>
                            Une voiture achetée, une voiture offerte !<br/>
                            Participez à la tombola et gagnez jusqu'à 5 voitures !
                        </p>
                    </div>

                </div>

            </div>
        </div>

    </section>

</template>

<script lang="ts" src="./Fiche.ts"></script>
<style src="./FicheC.scss" lang="scss"></style>
