
import {BoiteVitesse, Energie} from "./properties/VoitureProperties";

export default class Tools {

    static nbrToStr(nbr: number): string {
        const parsed = nbr + '';
        let final = '';
        for (let i = parsed.length - 1, j = 0; i >= 0; i--, j++) {
            if (j && j % 3 === 0) {
                final = ' ' + final;
            }
            final = parsed[i] + final;
        }
        return final;
    }

    static nbrToPrix(nbr: number): string {
        const str = nbr + '';
        const centimes = str.substr(str.length - 2, 2);
        const int = this.nbrToStr(Number.parseInt(nbr / 100 + ''));
        return int + ',' + centimes;
    }

    static enumToEnergieStr(energie: Energie): string {
        switch (energie) {
            case Energie.Diesel:
                return 'Diesel';
            case Energie.Essence:
                return 'Essence';
        }
    }

    static enumToBoiteStr(boite: BoiteVitesse): string {
        switch (boite) {
            case BoiteVitesse.Mecanique:
                return 'Mecanique';
            case BoiteVitesse.Automatique:
                return 'Automatique';
        }
    }

}