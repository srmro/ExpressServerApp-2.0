import { request, response, Router } from "express";

import { cars } from '../data/cardats.mjs';

const router = Router();


router.get('/cars', (request, response) =>{
    response.status(200).send(cars);
});

router.get('/cars/:id', (request, response) => {
    console.log(request.params);

    const parsedId = parseInt(request.params.id);
    if (isNaN(parsedId))
        return response.status(400).send({ msg: "Bad Request. Invalid ID." });

const findCar = cars.find((car) => car.id === parsedId);
if (!findCar) return response.sendStatus(404);
return response.send(findCar);

})


router.post('/cars', (request,response) => {
console.log(request.body);
const { body } = request;
const newCar = {id: cars[cars.length -1].id + 1, ...body };

cars.push(newCar);
return response.status(201).send(newCar);

});

router.patch('/cars/:id', (request,response) => {
const {body, params:{id},} = request;

const parsedId = parseInt(id);
if (isNaN(parsedId)) return response.status(400);

const findCarIndex = cars.findIndex((car) => car.id === parsedId);

if(findCarIndex === -1) return response.sendStatus(404);
cars[findCarIndex] = { id: parsedId, ...body};

return response.sendStatus(200);

});

router.delete('/cars/:id', (request,response) =>{
const { params:{id}, } = request;
const parsedId = parseInt(id);

if(isNaN(parsedId)) return response.sendStatus(400);
const findCarIndex = cars.findIndex((car) => car.id === parsedId);

if (findCarIndex === -1) return response.sendStatus(404);
cars.splice(findCarIndex);

return response.sendStatus(200);

})

export default router;