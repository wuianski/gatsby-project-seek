import DirectusSDK from '@directus/sdk-js';
import { Item } from '@directus/sdk-js/dist/types/types';
import { Reporter } from 'gatsby';
import { DirectusServiceConfig, FieldInfos, FileInfo, RelationInfo } from './interfaces';
import { joinUrl } from './utils';

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

    public getAssetUrl(id: string): string {
        return joinUrl(this._api.url, 'assets', id);
    }

    public async getItems(collection: string): Promise<Item> {
        return await this._api.items(collection).read();
    }

    public async getRelations(reporter: Reporter): Promise<Array<RelationInfo>> {
        try {
            reporter.info('Start fetching directus relation data...');
            let relations = await this._api.relations.read();
            reporter.success('Directus relations fetched.');
            return relations.data.map(x => {
                const relation: RelationInfo = {
                    oneCollection: x.one_collection ?? '',
                    oneField: x.one_field ?? '',
                    onePrimary: x.one_primary ?? '',
                    manyCollection: x.many_collection ?? '',
                    manyField: x.many_field ?? '',
                    manyPrimary: x.many_primary ?? '',
                }

                return relation;
            });
        } catch (error) {
            reporter.error(error);
        }
    }

    public async getFields(reporter: Reporter): Promise<Array<FieldInfos>> {
        try {
            reporter.info('Start fetching directus field data...');
            let fields = await this._api.fields.read();
            reporter.success('Directus fields fetched.');
            return fields.data.map(x => <FieldInfos>{
                collection: x.collection ?? '',
                field: x.field ?? '',
                type: x.type ?? '',
                interface: x.meta?.interface ?? '',
            });
        } catch (error) {
            reporter.error(error);
        }
    }

    public async getFileInfos(reporter: Reporter): Promise<Array<FileInfo>> {
        try {
            reporter.info('Start fetching directus file data...');
            let files = await this._api.files.read();
            reporter.success('Directus files fetched.');
            return files.data.map(x => <FileInfo>{
                fileId: x.id ?? '',
                filename_download: x.filename_download ?? '',
                title: x.title ?? '',
                description: x.description ?? '',
                tags: x.tags ?? [],
            });
        } catch (error) {
            reporter.error(error);
        }
    }
}