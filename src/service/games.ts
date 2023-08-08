import axios from "axios"
import { IGameDetails, IGamesListResponse } from "../types/GameDetails";
import { IScreenshotResponse } from "../types/IScreenshot";
import { QueryParamGamesList } from "../types/QueryParams";
import { getGamesUri, getRawgEndpoint } from "../utils/uri";

const Games = {
    
    getEmptyState: (): IGamesListResponse => ({
        count: 0,
        next: null,
        previous: null,
        results: []
    }),

    /* List all games based on filters in the params */
    list: async (params?: QueryParamGamesList): Promise<IGamesListResponse> => {

        const uri  = getGamesUri(params);
        
        try {
            const response = await axios.get(uri);
            return response.data;
        } 
        
        catch (error) {
            return Games.getEmptyState();
        }
   
    },

    /* Get specific game based on slug */
    getBySlug: async (slug: string): Promise<IGameDetails> => {

        const uri  = getRawgEndpoint(`/games/${slug}`);
        const response = await axios.get(uri);
        
        return response.data;

    },

    /* Get screenshots of a game based on its slug */
    getScreenshots: async (slug: string): Promise<IScreenshotResponse> => {
        const uri  = getRawgEndpoint(`/games/${slug}`);
        const response = await axios.get(uri);
        
        return response.data;
    },

    /* Get dlcs of a game based on its slug */
    getEditionsAndDlcs: async (slug: string) => {

        const uri  = getRawgEndpoint(`/games/${slug}/additions`);
        const response = await axios.get(uri);

        return response.data;
    },

    /* Get achievements of a game based on its slug */
    getAchievements: async (slug: string) => {
        return null;
    }
}



export { Games };