import express from "express";
import type { Express } from "express";


export function createApplication():Express{
    const app = express()

    app.use(express.json())



    app.get('/',(req,res) => { 
        res.json({message:"Welcome to chaicode authservice"})
     })


    return app
}