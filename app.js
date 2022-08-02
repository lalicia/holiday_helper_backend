import express, { application } from "express";
import 'dotenv/config';
import pg from "pg";



const port = process.env.PORT || 3001;










application.listen(port, () => {
    console.log(`Server listening at port: ${port}`)
});