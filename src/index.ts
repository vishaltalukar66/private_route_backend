//start server

import { dbIndex } from "./db/dbIndex";
import { runServer } from "./server";
require('dotenv').config({ path: './.env' })


const index = async () => {
    try {
        //Invoke Db connect then start server
        await dbIndex().then(async () => {
            await runServer();
        });


    } catch (error) {
        console.log("Unable to start Server");
    }
}



index();