
import store from './Redux/redux_store';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



let rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderTree(state)
})








reportWebVitals();
