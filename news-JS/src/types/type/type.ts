import { IData, IDataSource } from '../interface/interface';

export type DataItemInfo = Record<'urlToImage' | 'author', 'string | null'>;

export type DataItemSourceType = {
    id: 'string | null';
    name: 'string | null'
}

export type DataSourceItemType = Record<'id' | 'name' | 'category' | 'language' | 'country' | 'description' | 'url', 'string'>;

export type AllDataType = IData | IDataSource;

export type OptionsType<T> = { [key: string]: T };
