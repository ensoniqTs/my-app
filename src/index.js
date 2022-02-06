
import store from './Redux/state';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



let rerenderTree=(state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} store = {store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(rerenderTree)


rerenderTree(store.getState())





reportWebVitals();
