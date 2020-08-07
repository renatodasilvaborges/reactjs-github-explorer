import React from 'react'; 
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg'; 

import { Title, Form, Repositories } from './styles'; 

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="github" />
            <Title>Explore Repositório no Github</Title>

            <Form>
                <input placeholder="Digite o nome do repositório" />
                <button type="submit"> Pesquisar </button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars1.githubusercontent.com/u/10242905?s=460&u=c77d9a7cf58e8419d7e597d4f344d47b51ef9d21&v=4"
                        alt="Renato Borges"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>uma descrição de exemplo</p>
                    </div>

                    <FiChevronRight size={20} />

                </a>
            </Repositories>

        </>
    );
}

export default Dashboard; 