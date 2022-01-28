
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav_bar from './components/Nav_bar/nav_bar';
import Dialogs from './components/Profile/Dialogs/Dialogs';
import Music from './components/Profile/Music/Music';
import News from './components/Profile/News/News';
import Profile from './components/Profile/profile';
import Setings from './components/Profile/Setings/Setings';




function App() {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Nav_bar />
        <div className='main__content'>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs/*' element={<Dialogs />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/setings' element={<Setings />} />

          </Routes>

        </div>

      </div>
    </BrowserRouter>

  );
}

export default App;
