import DirectusSDK from '@directus/sdk-js';
import { Item } from '@directus/sdk-js/dist/types/types';

export interface DirectusServiceConfig {
    url: string;
    auth: {
        email: string;
        password: string;
    }
}

export class DirectusService {
    private _api: DirectusSDK;
    private _ready: Promise<void>;

    constructor(config: DirectusServiceConfig) {
        try {
            this._api = this._initSDK(config.url);
            this._ready = this._login(config.auth);
        } catch (error) {
            throw error;
        }
    }

    private _initSDK(host: string): DirectusSDK {
        return new DirectusSDK(host);
    }

    private async _login(credentials: { email: string; password: string }): Promise<void> {
        try {
            if (!this._api.auth.token) {
                const response = await this._api.auth.login(credentials);
                if (!response || !response.data.access_token) {
                    throw new Error('Invalid response returned.');
                }
            }
        } catch (error) {
            throw error;
        }
    }

    public async init(): Promise<void> {
        await this._ready;
    }

    public async getItems(collection: string): Promise<Item> {
        return await this._api.items(collection).read();
    }
}