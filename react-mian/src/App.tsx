import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from './routes';
import store from './store/index';
import { Provider } from 'react-redux';

export default function render(
  routerBasename = '/', 
  container = document.getElementById("root")
) {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter basename={routerBasename}>
          <Routes/>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    container
  );
}

