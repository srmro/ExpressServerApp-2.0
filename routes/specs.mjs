import { Router } from "express";

import { specs } from '../data/specdats.mjs';
import cars from "../data/cardats.mjs";

const router = Router();

router.get('/specs', (request, response)=>{
    response.status(200).send(specs);
});

router.get('/specs/:id',(request, response) =>{
    console.log(request.params);

    const parsedId = parseInt(request.params.id);
    if (isNaN(parsedId))
        return response.status(400).send({ msg: "Bad Request. Invalid ID."});

    const findSpecs = specs.find((spec) => spec.id === parsedId);
    if (!findSpecs) return response.sendStatus(404);
    return response.send(findCar);
});

router.post('/specs', (request, response) =>{
    console.log(request.body);
    const { body } = request;
    const newSpec = { id: specs[specs.length -1].id + 1, ...body };

    cars.push(newSpec);
    return response.status(201).send(newSpec);
});

router.patch('/specs/:id', (request, response) => {
    const {body, params: {id},} = request;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return response.status(400);

    const findSpecIndex = specs.findIndex((spec) => spec.id === parsedId);

    if(findSpecIndex === -1) return response.sendStatus(404);
    specs[findSpecIndex] = { id: parsedId, ...body};

    return response.sendStatus(200);
});

router.delete('/specs/:id', (request, response) => {
    const { params:{id}, } = request;
    const parsedId = parseInt(id);

    if(isNaN(parsedId)) return response.sendStatus(400);
    const findSpecIndex = specs.findIndex((spec) => spec.id === parsedId);

    if (findSpecIndex === -1) return response.sendStatus(404);
    cars.splice(findSpecIndex, 1);

    return response.sendStatus(200);
})






export default router;