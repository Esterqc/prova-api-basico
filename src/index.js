import 'dotenv/config'

import express from 'express';
import cors from 'cors'
import endpoints from './edpoints.js'

const  server = express();
server.use(cors());
server.use(express.json());
server.use(endpoints);

server.listen(process.env.PORT,() => console.log(`online na porta` +process.env.PORT));
