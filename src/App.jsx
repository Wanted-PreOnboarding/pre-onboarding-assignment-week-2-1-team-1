import React from 'react';
import { Routes, Route } from 'react-router';

import Header from './components/Header';
import Footer from './components/Footer';
import List from './pages/List/List';
import Upcoming from './pages/Upcoming/Upcoming';
import Search from './pages/Search/Search';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import TopRated from './pages/TopRated/TopRated';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Header />
        <Routes>
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/top_rated" element={<TopRated />} />
          <Route path="/search" element={<Search />} />
          <Route path="/" element={<List />} />
        </Routes>
        <Footer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
