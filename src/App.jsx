import React from 'react';
import { Routes, Route } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';
import List from './pages/List/List';
import Upcoming from './pages/Upcoming/Upcoming';
import Now_playing from './pages/Now_playing/Now_playing';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path="/now_playing" element={<Now_playing />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/" element={<List />} />
        </Routes>
        <Footer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
