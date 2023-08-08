import express from "express";
import {Games} from "../service/games";
import {fullMonth} from "../utils/date";
import {FamousStores} from "../types/Stores";

const ROOT = "/games"

export const setGamesRoutes = (app: express.Application) => {
    
    // List games that will be released this month
    app.get(`${ROOT}/soon`, async (_req, _res) => {

        const requestPage: any = _req.query.page;

        const data = await Games.list({
            dates: fullMonth(),
            page: requestPage,
            stores: FamousStores,
            ordering: "released"
        });

        _res.send(data);

    });
    
    // List games that will be released this month
    app.get(`${ROOT}/`, async (_req, _res) => {

        const requestPage: any = _req.query.page;
        const dates: any = _req.query.dates;
        const genres: any = _req.query.genres;
        const stores: any = _req.query.stores;
        const order: any = _req.query.ordering;
        const search: any = _req.query.search;
        

        const data = await Games.list({
            dates: dates,
            page: requestPage,
            stores: stores,
            genres: genres,
            ordering: order,
            search: search
        });

        _res.send(data);

    });
    
    // List games that will be released this month
        app.get(`${ROOT}/`, async (_req, _res) => {

                const requestPage: any = _req.query.page;
                const dates: any = _req.query.dates;
                const genres: any = _req.query.genres;
                const stores: any = _req.query.stores;
                const order: any = _req.query.ordering;
                const search: any = _req.query.search;


                const data = await Games.list({
                        dates: dates,
                        page: requestPage,
                        stores: stores,
                        genres: genres,
                        ordering: order,
                        search: search
                });

                _res.send(data);

        });
        
        // List games that will be released this month
        app.get(`${ROOT}/:id`, async (_req, _res) => {

                const gameId = _req.params.id;


                const data = await Games.getBySlug(gameId);

                _res.send(data);

        });
    
    return app;
}