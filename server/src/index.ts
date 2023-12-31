import "reflect-metadata";

import Koa from 'koa';

import AppDataSource from "./data-source";
import middleware from './middleware/index';

const app = new Koa();

AppDataSource.initialize()
    .then(() => {
        middleware(app);
        
        app.listen(3000);
        console.log('Server running on port 3000');
    })
    .catch((error) => console.log(error))

