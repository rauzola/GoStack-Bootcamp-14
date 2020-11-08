import { Request, Response } from 'express';
import createUser from './services/CreateUser';

//string, number, boolean, object, Array,
// interface

export function helloWorld(req: Request, res: Response) {
    const user = createUser({
        email: 'raul_sigoli@hotmail.com',
        password: '123456',
        techs: ['Node.JS', 'ReactJS', 'React Native'],
    });

    console.log(user.)

    return res.json({ message: 'hello world' });
}