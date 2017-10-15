<template>

    <section class="container">

        <div class="page-header">
            <h1>FORD  MONDEO 3
                <small>III 2.0 TDCI 140 DPF GHIA 5P</small>
            </h1>
            <span class="lead">109 112 Km - 2008 <span class="label label-danger pull-right">Garantie 6 mois <a
                    class="link">extensible</a></span></span>
        </div>

        <div class="row">
            <div class="col-sm-8">

                <div :class="{'carousel-container': true, fullscreen: carouselFullscreen}">

                    <div class="carousel-bg" v-show="carouselFullscreen" v-on:click="carouselFullscreen = false"></div>

                    <div class="carousel slide" data-ride="carousel" :data-index="carouselIndex">

                        <div class="carousel-inner" role="listbox">

                            <div :class="{active: i === carouselIndex, item: true}" v-for="(link, i) in carouselLinks"
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
                              v-show="carouselIndex < carouselLinks.length - 1">
                        <span class="glyphicon glyphicon-chevron-right"></span>
                        <span class="sr-only">Next</span>
                    </span>

                    </div>

                    <div class="carousel-list">

                        <div :class="{active: i === carouselIndex, thumbnail: true}" role="button"
                             v-for="(link, i) in carouselLinks"
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
                                    <td>III 2.0 TDCI 140 DPF GHIA 5P</td>
                                </tr>
                                <tr>
                                    <td>Puissance Fiscale</td>
                                    <td>8 CV</td>
                                </tr>
                                <tr>
                                    <td>Energie</td>
                                    <td>Diesel</td>
                                </tr>
                                <tr>
                                    <td>Boite de vitesse</td>
                                    <td>Mécanique</td>
                                </tr>
                                <tr>
                                    <td>Mise en circulation</td>
                                    <td>08/04/2008</td>
                                </tr>

                            </table>

                        </div>

                        <div class="col-sm-6">

                            <table class="caracs">

                                <tr>
                                    <td>Année</td>
                                    <td>2008</td>
                                </tr>
                                <tr>
                                    <td>Kilométrage</td>
                                    <td>109 112 Km</td>
                                </tr>
                                <tr>
                                    <td>Nombre de portes</td>
                                    <td>5</td>
                                </tr>
                                <tr>
                                    <td>Couleur intérieure</td>
                                    <td>Tissus gris</td>
                                </tr>
                                <tr>
                                    <td>Couleur extérieure</td>
                                    <td>Gris clair métal</td>
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

                                <tr>
                                    <td>Antivol</td>
                                    <td>Anti démarrage</td>
                                </tr>

                                <tr>
                                    <td>Extérieur et chassis</td>
                                    <td>Aide parking av/ar</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Jantes alu 16"</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Rétroviseurs rabattables électriquement</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Rétroviseurs électriques et dégivrants</td>
                                </tr>

                                <tr>
                                    <td>Sécurité</td>
                                    <td>6 airbags</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>ABS</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Détecteur de pluie</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>ESP</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Essuie-glaces automatiques</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Feux automatiques</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Essuie-glaces automatiques</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Fixations ISOFIX</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Kit téléphone main libre bluetooth</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Projecteurs antibrouillard</td>
                                </tr>

                                <tr>
                                    <td>Autre</td>
                                    <td>Carnet d'entretien</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Factures d'entretien</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Non fumeur</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Roue de secours</td>
                                </tr>


                            </table>

                        </div>

                        <div class="col-sm-6">

                            <table class="caracs">

                                <tr>
                                    <td>Confort</td>
                                    <td>Bluetooth</td>
                                </tr>

                                <tr>
                                    <td>Intérieur</td>
                                    <td>4 vitres électriques</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Accoudoir central arrière</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Accoudoir central avant</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Appuis-têtes arrière</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Banquette 1/3 - 2/3</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Banquette fractionnable</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Banquette rabattable</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Boite 6 vitesses</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Boite à gants réfrigérée</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Climatisation automatique multi zone</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Direction assistée</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Fermeture électrique automatique</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Kit téléphone main libre</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Ordinateur de bord</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Pack clim</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Pack électrique</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Prises audio auxiliaires</td>
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
                                    <td>140 ch</td>
                                </tr>
                                <tr>
                                    <td>Volume de coffre</td>
                                    <td>Nom communiqué</td>
                                </tr>
                                <tr>
                                    <td>Réparations</td>
                                    <td>Freins</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Pneus</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Embrayage</td>
                                </tr>

                            </table>

                        </div>

                        <div class="col-sm-6">

                            <table class="caracs">

                                <tr>
                                    <td>Emission de CO2</td>
                                    <td>156 g/km</td>
                                </tr>
                                <tr>
                                    <td>Consommation mixte</td>
                                    <td>Non communiquée</td>
                                </tr>

                            </table>

                        </div>
                    </div>

                </div>


            </div>

            <div class="col-sm-4">

                <div class="row">
                    <div class="prix-container lg">
                        <div class="reduc">
                            <div class="prix old"><span class="prix-text">7 580</span></div>
                            <span class="label label-warning reduc-label">300</span>
                        </div>
                        <div class="prix primary"><span class="prix-text">7 280</span></div>
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

                    <button class="btn btn-default btn-block"><i class="glyphicon glyphicon-map-marker"></i>
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
