import express from 'express';


import {helloWorld} from './routes';

const app = express();

app.get('/', helloWorld);


app.listen(3333, () => {
    console.log(`^_^ Back-end started ^_^`)
  });