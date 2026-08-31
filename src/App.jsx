// stili
import './App.css';

import { useState } from 'react';

// componenti
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';

//dati (privatizzati dentro App)
import { comics } from './data/comics';
import { links } from './data/links';
import { services } from './data/services';

const App = () => (
    <>
    <Header links={links} />
    <Main comics={comics} />
    <Footer services={services} />
    </>
);

export default App
