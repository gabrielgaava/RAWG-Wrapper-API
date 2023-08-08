export interface IPlataform {
    platform: number,
    name: string;
    slug: string;
}

export interface IMetacritic {
    metascore: number,
    url: string,
    platform: IPlataform;
}

export interface IRatings {
    id: number;
    title: string;
    count: number;
    percent: number;
}

export interface IGameDetails {
    id: number;
    slug: string;
    name: string;
    name_original: string;
    description: string;
    description_raw: string;
    metacritic: number,
    metacritic_platforms: IMetacritic[];
    released: string;
    tba: boolean,
    updated: string,
    background_image: string,
    background_image_additional: string,
    website: string,
    rating: number,
    rating_top: number,
    ratings: IRatings[],
    added: number,
    playtime: number,
    screenshots_count: number,
    movies_count: number,
    creators_count: number,
    achievements_count: number,
    parent_achievements_count: number,
    reddit_url: string,
    reddit_name: string,
    reddit_description: string,
    reddit_logo: string,
    reddit_count: number,
    twitch_count: number,
    youtube_count: number,
    reviews_text_count: number,
    ratings_count: number,
    suggestions_count: number,
    alternative_names: [],
    metacritic_url: string,
    parents_count: number,
    additions_count: number,
    game_series_count: number,
    user_game: null,
    reviews_count: number,
    saturated_color: string,
    dominant_color: string,
    platforms: [
        {
            platform: {
                id: number,
                name: string,
                slug: string,
                image: null,
                year_end: null,
                year_start: null,
                games_count: number,
                image_background: string
            },
            released_at: string,
            requirements: {
                minimum: string,
                recommended: string,
            }
        },
    ],
    stores: [
        {
            id: number,
            url: string,
            store: {
                id: number,
                name: string,
                slug: string,
                domain: string
                games_count: number,
                image_background: string
            }
        },
    ],
    developers: [
        {
            id: number,
            name: string,
            slug: string,
            games_count: number,
            image_background: string
        }
    ],
    genres: [
        {
            id: number,
            name: string,
            slug: string,
            games_count: number,
            image_background: string
        },
    ],
    tags: [
        {
            id: number,
            name: string,
            slug: string,
            language: string,
            games_count: number,
            image_background: string
        },
    ],
    publishers: [
        {
            id: number,
            name: string,
            slug: string,
            games_count: number,
            image_background: string
        },
    ],
    esrb_rating: {
        id: number,
        name: string,
        slug: string
    },
    clip: null,
}