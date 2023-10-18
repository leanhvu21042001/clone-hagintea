import React from 'react';

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import { Home, About, Shop, TeaStory, Contact, NotFound } from './pages';

import { Layout } from './default-layout/Layout';

export const RoutesWrapper = () => {
  const location = useLocation();

  return (
    <Routes key={location.pathname} location={location}>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/tea-story" element={<TeaStory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export const BrowserRouterWrapper = () => {
  return (
    <BrowserRouter>
      <RoutesWrapper />
    </BrowserRouter>
  );
};
