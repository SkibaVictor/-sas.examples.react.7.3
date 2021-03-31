import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './store/redux-store';

function renderAll() {
  ReactDOM.render(
    <App data={store.getState().newsPage} 
    dispatch={store.dispatch.bind(store)} />,
    document.getElementById('root')
  );
}
store.subscribe(renderAll);
renderAll();

