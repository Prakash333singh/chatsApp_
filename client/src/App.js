import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chat from './components/chat/Chat';
import Join from './components/join/Join';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  </BrowserRouter>
);

export default App;
