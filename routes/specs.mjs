import { Router } from "express";

import { specs } from '../data/specdats.mjs';

const router = Router();

router.get('/specs', (request, response)=>{
    response.status(200).send(specs);
});

router.get('/specs/:id',(request,resposne) =>{
    console.log(request.params);

    const parsedId = parseInt(request.params.id);
    if (isNaN(parsedId))
        return response.status(400).send({ msg: "Bad Request. Invalid ID."});

    const findSpecs = specs.find((spec) => spec.id === parsedId);
    if (!findSpecs) return response.sendStatus(404);
    return response.send(findCar);
});












export default router;