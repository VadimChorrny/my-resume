import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './Layouts/MainLayout';
import Home from './pages/Home/Home';
import Skills from './pages/Skill';
import Work from './pages/Work';
import './scss/app.scss';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/works' element={<Work />} />
      </Route>
    </Routes>
  );
};

export default App;
