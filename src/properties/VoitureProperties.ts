
export enum TypeLoad {
    APERCU, ALL
}

export enum Energie {
    Diesel, Essence
}

export enum BoiteVitesse {
    Mecanique, Automatique
}

export interface Prix {
    actu: number;
    ancien: number;
    dateReduc: Date;
}

export interface Options {
    [key: string]: string[];
}

export interface InfosGeneral {
    version: string;
    puiFiscale: number;
    energie: Energie;
    coulInt: string;
    coulExt: string;
    premMain: boolean;
    nbPortes: number;
    boiteVitesse: BoiteVitesse;
    miseCircul: Date;
    autoviza: string;
}

export interface InfosOptions {
    confort: Options;
    extChassis: Options;
    interieur: Options;
    securite: Options;
    autre: Options;
}

export interface InfosDonneesCompl {
    puiDIN: number;
    volCoffre: number;
    co2: number;
    consoMixte: number;
    reparations: string[];
}

export interface VoitureProperties {

    /**
     * ID de la BDD
     */
    id: number;

    /**
     * Megane, Scenic, Mondeo...
     */
    modele: string;

    /**
     * Renault, Citroen...
     */
    marque: string;

    /**
     * Durée de la garantie en mois
     */
    garantieDuree: number;

    /**
     * Prix en centimes
     */
    prix: Prix;

    /**
     * Chemin des photos
     */
    photosPath: string[];

    general: InfosGeneral;

    options: InfosOptions;

    donneesComp: InfosDonneesCompl;

    dateAjout: Date;

    dateEdit?: Date;

    typeLoad: TypeLoad;

}