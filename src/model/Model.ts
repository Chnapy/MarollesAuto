import {SocieteProperties} from "../properties/SocieteProperties";
import {VoitureProperties} from "../properties/VoitureProperties";
import Axios, {AxiosRequestConfig} from "axios";
import {DEBUG} from "../index";

enum ServerModule {
    SOCIETE = 'societe',
    VOITURE = 'voiture',
    LIST_ANNONCES = 'annonces'
}

export enum Order {
    // NONE = 'none',
    DATE = 'date',
    PRIX = 'prix'
}

interface AxiosParams {
    m: ServerModule;
}

interface VoiturePropertiesObject {
    [key: number]: VoitureProperties;
}

interface SocieteParams extends AxiosParams {
    m: ServerModule.SOCIETE;
}

interface VoitureParams extends AxiosParams {
    m: ServerModule.VOITURE;
    id: number;
}

interface AllVoituresParams extends AxiosParams {
    m: ServerModule.LIST_ANNONCES;
    ownedId: number[];
    limit: number | null;
    orderBy: Order;
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
    private voiturePropertiesList: VoiturePropertiesObject;
    private allLoaded: boolean;

    constructor() {
        this.voiturePropertiesList = {};
        this.allLoaded = false;
    }

    getSocieteProperties(): Promise<SocieteProperties> {
        if (!this.societeProperties) {
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
        const voiturePropertiesIndex = this.voiturePropertiesList[id];
        if (!voiturePropertiesIndex) {

            const request = this.axiosRequest<VoitureParams, VoitureProperties>({
                m: ServerModule.VOITURE,
                id: id
            }).then(data => {
                const voitureProperties = data;
                this.voiturePropertiesList[data.id] = data;
                return voitureProperties;
            });

            return new Promise((resolve, reject) => {
                request.then(resolve)
                    .catch(reject);
            });
        }
        return new Promise(resolve => resolve(voiturePropertiesIndex));
    }

    getAllVoitureProperties(limit: number | null, order: Order): Promise<VoitureProperties[]> {
        if (this.allLoaded) {
            return new Promise(resolve => resolve(this.voitureListToArray()));
        }

        const request = this.axiosRequest<AllVoituresParams, VoitureProperties[]>({
            m: ServerModule.LIST_ANNONCES,
            ownedId: Object.keys(this.voiturePropertiesList).map(v => this.voiturePropertiesList[v].id),
            limit: limit,
            orderBy: order
        }).then(data => {
            if(!data.length)//TODO remove
                data = [data] as any;
            for (const d of data) {
                this.voiturePropertiesList[d.id] = d;
            }
            this.allLoaded = true;
            return this.voitureListToArray();
        });

        return new Promise((resolve, reject) => {
            request.then(resolve)
                .catch(reject);
        });
    }

    private voitureListToArray(): VoitureProperties[] {
        return Object.keys(this.voiturePropertiesList).map(v => this.voiturePropertiesList[v]);
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