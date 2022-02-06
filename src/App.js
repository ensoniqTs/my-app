
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
import store from './Redux/state';




function App(props) {

  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <Nav_bar />
        <div className='main__content'>
          <Routes>
            <Route path='/profile' element={<Profile pMessage={props.state.profilePage} 
                                                    addPost={props.store.addPost.bind(store)} 
                                                    changeNewText= {props.store.changeNewText.bind(store)}/>} />
            <Route path='/dialogs/*' element={<Dialogs dialogs={props.state.dialogsPage.dialogsItem} 
                                                        message={props.state.dialogsPage}
                                                        changeNewMessage={props.store.changeNewMessage.bind(store)}
                                                        addNewMessage={props.store.addNewMessage.bind(store)} />} />
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
