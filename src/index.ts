//start server

import { runServer } from "./server";

try {
    runServer();
} catch (error) {
    console.log("Unable to Run Server");
}