import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ email, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ email });

    if (!user) {
      throw new Error('Combinação incorreta de e-mail / senha.');
    }

    const passwordMatched = await compare(password, user.password);

    // user.password - senha critografada
    // password - senha não critografada

    if (!passwordMatched) {
      throw new Error('Combinação incorreta de e-mail / senha.');
    }

    // usuario autenticado

    const token = sign({}, 'e1fb72c969075767273c60628ce1abf0', {
      subject: user.id,
      expiresIn: '1d',
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
