import { Router } from "express";

import { specs } from '../data/specdats.mjs';

const router = Router();

router.get('/cars', (request, response)=>{
    response.status(200).send(cars);
});










export default router;