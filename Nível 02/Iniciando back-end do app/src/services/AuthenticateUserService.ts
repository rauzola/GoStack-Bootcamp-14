import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';

import User from '../models/User';

interface Request {
  email: string;
  password: string;
}

interface Response {
  user: User;
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

    return {
      user,
    };
  }
}

export default AuthenticateUserService;
