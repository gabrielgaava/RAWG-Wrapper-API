import express from "express";
import {setGamesRoutes} from "./games";

export const createRoutes = (app: express.Application) => {
    
    setGamesRoutes(app);
    
}