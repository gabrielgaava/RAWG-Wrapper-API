import axios from "axios"
import { IGameDetails } from "../types/GameDetails";
import { QueryParamGamesList } from "../types/QueryParams";
import { getGamesUri, getRawgEndpoint } from "../utils/uri";

const Games = {

    list: async (params?: QueryParamGamesList): Promise<IGameDetails[]> => {

        const uri  = getGamesUri(params);
        const response = await axios.get(uri);

        return response.data;
    },

    getBySlug: async (slug: string): Promise<IGameDetails> => {

        const uri  = getRawgEndpoint(`/games/${slug}`);
        const response = await axios.get(uri);
        const data: IGameDetails = response.data;

        return data;
    }
}



export { Games };