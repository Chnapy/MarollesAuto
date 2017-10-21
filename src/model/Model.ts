import {SocieteProperties} from "../properties/SocieteProperties";
import {VoitureProperties} from "../properties/VoitureProperties";
import Axios, {AxiosRequestConfig} from "axios";
import {DEBUG} from "../index";

enum ServerModule {
    SOCIETE = 'societe',
    VOITURE = 'voiture',
    LIST_ANNONCES = 'annonces'
}

interface AxiosParams {
    m: ServerModule;
}

interface VoitureParams extends AxiosParams {
    m: ServerModule.VOITURE,
    id: number;
}

interface SocieteParams extends AxiosParams {
    m: ServerModule.SOCIETE
}

export class Model {

    private static readonly AXIOS_CONFIG = DEBUG ? {
        url: '/datatest/voiture.json',
        method: 'get'
    } : {
        url: 'server.php',
        method: 'get'
    };

    private societeProperties: SocieteProperties;
    private voiturePropertiesList: VoitureProperties[];

    constructor() {
        this.voiturePropertiesList = [];
    }

    getSocieteProperties(): Promise<SocieteProperties> {
        if(!this.societeProperties) {
            const request = this.axiosRequest<SocieteParams, SocieteProperties>({
                m: ServerModule.SOCIETE
            }, {
                url: '/datatest/societe.json'
            }).then(data => {
                this.societeProperties = data;
                return this.societeProperties;
            });

            return new Promise((resolve, reject) => {
                request.then(resolve)
                    .catch(reject);
            });
        }
        return new Promise(resolve => resolve(this.societeProperties));
    }

    getVoitureProperties(id: number): Promise<VoitureProperties> {
        const voiturePropertiesIndex = this.voiturePropertiesList.findIndex(vp => vp.id === id);
        if (voiturePropertiesIndex === -1) {

            const request = this.axiosRequest<VoitureParams, VoitureProperties>({
                m: ServerModule.VOITURE,
                id: id
            }).then(data => {
                const voitureProperties = data;
                this.voiturePropertiesList.push(data);
                return voitureProperties;
            });

            return new Promise((resolve, reject) => {
                request.then(resolve)
                    .catch(reject);
            });
        }
        return new Promise(resolve => resolve(this.voiturePropertiesList[voiturePropertiesIndex]));
    }

    private axiosRequest<A extends AxiosParams, P>(params: A, config?: AxiosRequestConfig): Promise<P> {

        return Axios({
            ...Model.AXIOS_CONFIG,
            ...(config || {}),
            params: params
        })
            .then(res => {
                if (DEBUG) {
                    console.debug('Axios then', res);
                }
                return res.data;
            })
            .catch(res => {
                // console.error('Axios catch', res);
                throw res;
            });
    }

}