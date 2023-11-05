//start server

import { dbIndex } from "./db/dbIndex";
import { runServer } from "./server";
require('dotenv').config({ path: './.env' })


const index = async () => {
    try {
        await dbIndex();
        await runServer();

    } catch (error) {
        console.log("Unable to Run Server");
    }
}



index();