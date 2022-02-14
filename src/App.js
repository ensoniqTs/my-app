
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
import store from './Redux/redux_store';
import DialogsContainer from './components/Profile/Dialogs/Dialogs_conteiner';




function App(props) {

  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Nav_bar />
        <div className='main__content'>
          <Routes>
            <Route path='/profile' element={<Profile pMessage={props.state.profilePage} dispatch={props.store.dispatch.bind(store)} />} />
            <Route path='/dialogs/*' element={<DialogsContainer dialogs={props.state.dialogsPage}
              message={props.state.dialogsPage} dispatch={props.store.dispatch.bind(store)} />} />
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
