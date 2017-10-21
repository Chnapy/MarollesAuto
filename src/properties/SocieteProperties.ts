import {Markdown} from "./Markdown";

export enum Jour {
    Lundi, Mardi, Mercredi, Jeudi, Vendredi, Samedi, Dimanche
}

export interface Adresse {
    ligne1: string;
    codePostal: number;
    ville: string;
    infosSup: Markdown;
}

/**
 * Liste de numero de téléphone (fixe & portable)
 */
export interface Telephone {
    fixe: string[];
    portable: string[];
}

/**
 * Interval entre deux points datés
 */
export interface DateInterval<T> {
    from: T;
    to: T;
}

/**
 * Horaire complète
 */
export interface Horaire {
    jours: DateInterval<Jour>[];
    heures: DateInterval<number>[];
    infosSup: Markdown;
}

export interface Collaborateur {
    photoPath: string;
    nom: string;
    prenom: string;
    fonction: string;
    description: Markdown;
}

export interface SocieteProperties {

    /**
     * Nom de la société
     */
    nom: string;

    /**
     * Chemin vers le logo
     */
    logoPath: string;

    /**
     * Adresse de la société
     */
    adresse: Adresse;

    /**
     * Numeros de téléphone de la société
     */
    telephone: Telephone;

    /**
     * Mails de la société
     */
    mail: string[];

    slogan: Markdown;

    /**
     * Horaire de la société (jour & heures)
     */
    horaires: Horaire;

    siren: number;

    siret: number;

    idLaCentrale: string;

    anneeCreation: number;

    /**
     * Informations des collaborateurs pour le A propos
     */
    collaborateurs: Collaborateur[];
}