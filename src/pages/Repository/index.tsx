import React from 'react'; 
import { useRouteMatch, Link } from 'react-router-dom'
import { FiChevronLeft,FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'; 

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
    repository: string; 
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>(); 
    
    return (
        <>
            <Header>
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://avatars1.githubusercontent.com/u/10242905?s=460&u=c77d9a7cf58e8419d7e597d4f344d47b51ef9d21&v=4" alt="Rocketseat" />
                    <div>
                        <strong>rocketsear/unform</strong>
                        <p>Descrição</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1800</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>45</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Issues Abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to={'eijeie'} >
                    <div>
                        <strong>teste</strong>
                        <p>teste</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </> 
    );
}

export default Repository; 