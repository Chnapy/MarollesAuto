<template>
    <div id="mainWrapper">

        <!--<img :src="bgSrc" alt="" id="mainBg">-->
        <!--<div :style="style" id="mainBg"></div>-->

        <div id="main">

            <!--HEADER-->
            <HeaderC></HeaderC>

            <InfosAnnoncesC></InfosAnnoncesC>

            <div class="container-fluid">

                <ContentAnnoncesC></ContentAnnoncesC>

            </div>

        </div>

        <footer id="main-footer">
            <!--<div class="row top">-->
            <!--</div>-->
            <div class="top-footer container-fluid">
                <div class="container">
                    <div class="row-table">
                        <div class="col-table">
                            <div class="text-center title">
                                Qui sommes-nous
                            </div>
                            <div class="content">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                        <nav id="accesrap" class="col-table">
                            <div class="text-center title">
                                Accès rapide
                            </div>
                            <div class="content">
                                <ul class="list-unstyled">
                                    <li><a href="#">Accueil</a></li>
                                    <li><a href="#">Liste des annonces</a></li>
                                    <li><a href="#">Informations sur les garanties</a></li>
                                    <li><a href="#">Service de carte grise</a></li>
                                    <li><a href="#">Notre vitrine sur LaCentrale</a></li>
                                    <li><a href="#">Nous contacter</a></li>
                                    <li><a href="#">Comment venir</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            <div class="bottom-footer container-fluid">
                <div class="container">
                    <div class="row-table">

                        <div class="col-table">
                            <ul class="list-inline">
                                <li><a href="#">Mentions légales</a></li>
                            </ul>
                        </div>

                        <div class="col-table copyright text-right">
                            MAROLLES AUTOS © 2003 - 2017
                        </div>

                    </div>

                </div>
            </div>
        </footer>

    </div>

</template>
<script lang="ts" src="./root.ts"></script>
<!--<link rel="stylesheet" href="../scss/root.scss">-->