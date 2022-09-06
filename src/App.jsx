import React from 'react';
import { Routes, Route } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';
import List from './pages/List/List';

import { AppContainer } from './styles/reset';

function App() {
  return (
    <AppContainer className="App">
      <Header />
      <Routes>
        <Route path="/" element={<List />} />
      </Routes>
      <Footer />
    </AppContainer>
  );
}

export default App;
