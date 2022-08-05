import express from "express";

import { getAllItems } from "../models/models.js";

const emergencyContactsRouter = express.Router();

emergencyContactsRouter.get("/", async function (req, res) {
    console.log("GET request for all items")
    const responseObject = {
        success: true,
        message: "Returned all items",
        payload: await getAllItems()
    };
    res.status(200).json(responseObject);
});

emergencyContactsRouter.get("/asc", async function (req, res) {
    console.log("GET request for all items ASC order")
    const responseObject = {
        success: true,
        message: "Returned all items ASC order",
        payload: await getAllItemsASC()
    };
    res.status(200).json(responseObject);
});

export default emergencyContactsRouter;