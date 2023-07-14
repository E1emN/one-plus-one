import React from 'react';
import { Game } from '../components/game/game';
import { Header } from '../components/header/header';

const HomePage: React.FC = () => {
    return(
        <>
            <Header />
            <Game />
        </>
    )
};

export default HomePage;