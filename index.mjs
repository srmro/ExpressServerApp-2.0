import express from "express";
import carsRouter from './routes/cars.mjs'
import specsRouter from './routes/specs.mjs'
const app = express();

app.use(express.json());
app.use(carsRouter);
app.use(specsRouter);

const PORT = process.env.PORT || 3060;

app.listen(PORT, () => {
    console.log(`Port is running...${PORT}`);
});

app.get("/", (request, response) =>{
    response.status(201).send({msg: "You made it :)!"});
});

