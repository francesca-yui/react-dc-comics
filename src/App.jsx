// stili
import './App.css';

import { useState } from 'react';

// componenti
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/footer/Footer';

//dati (privatizzati dentro App)
import { links } from './components/data/links';
import { services } from './components/data/services';
import { comics } from './components/data/comics';

const App = () => (
    <>
    <Header links={links} />
    <Main comics={comics} />
    <Footer services={services}/>
    </>
);

export default App
