import { load } from "ts-dotenv";
import { EnvType } from "../types/EnvType";
import { QueryParamGamesList } from "../types/QueryParams";

const env = load(EnvType);

const host = env.RAWG_HOST;
const key = env.RAWG_API_KEY;

const getRawgEndpoint = (path: string) => {
    console.log(host, key);
    return `${host}${path}?key=${key}`;
}

const getGamesUri = (query: QueryParamGamesList | any) => {
    let uri = getRawgEndpoint("/games");

    if(Object.keys(query).length > 0) {
        Object.keys(query).forEach((key) => {
            const param: string = query[key];
            uri = uri + `&${key}=${param}`;
        });

        return uri;
    }

    return uri;
}

export { getRawgEndpoint, getGamesUri };