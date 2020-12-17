import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no GitHub</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/57502280?s=460&u=ed105966d0a84b65124f66b51889830f456d96e2&v=4"
            alt="Raul Sigoli"
          />
          <div>
            <strong>rauzola/GoStack-Bootcamp-14</strong>
            <p>Código Desenvolvido ao longo do GoStack Bootcamp da Turma 14</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/57502280?s=460&u=ed105966d0a84b65124f66b51889830f456d96e2&v=4"
            alt="Raul Sigoli"
          />
          <div>
            <strong>rauzola/GoStack-Bootcamp-14</strong>
            <p>Código Desenvolvido ao longo do GoStack Bootcamp da Turma 14</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/57502280?s=460&u=ed105966d0a84b65124f66b51889830f456d96e2&v=4"
            alt="Raul Sigoli"
          />
          <div>
            <strong>rauzola/GoStack-Bootcamp-14</strong>
            <p>Código Desenvolvido ao longo do GoStack Bootcamp da Turma 14</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/57502280?s=460&u=ed105966d0a84b65124f66b51889830f456d96e2&v=4"
            alt="Raul Sigoli"
          />
          <div>
            <strong>rauzola/GoStack-Bootcamp-14</strong>
            <p>Código Desenvolvido ao longo do GoStack Bootcamp da Turma 14</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
