export interface DirectusServiceConfig {
    url: string;
    auth: {
        email: string;
        password: string;
    }
}

export interface RelationInfo {
    oneCollection: string,
    oneField: string
    onePrimary: string,
    manyCollection: string,
    manyField: string
    manyPrimary: string
}

export interface FieldInfos {
    collection: string,
    field: string,
    type: string,
    interface: string
}

export interface FileInfo {
    fileId: string,
    filename_download: string,
    title: string
    description: string,
    tags: Array<string>
}