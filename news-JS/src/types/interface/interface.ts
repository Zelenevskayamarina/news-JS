import { DataItemInfo, DataItemSourceType, DataSourceItemType } from '../type/type';

export interface IData {
    status: string;
    totalResults: number;
    articles: Array<IDataItem>;
}

export interface IDataSource {
    status: string;
    sources: Array<DataSourceItemType>;
}

export interface IDataItem extends Partial<DataItemInfo> {
    source: DataItemSourceType;
    title: string;
    url: string;
    publishedAt: string;
    content: string;
    description: string;
}

export interface IProcessKey {
    apiKey: string | undefined;
}

export interface IUrlOptions {
    [optionName: string]: string;
}
