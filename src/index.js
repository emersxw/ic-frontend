import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import Main from './Main';
import './index.css';

import Store from './Store';

ReactDOM.render(
  <HashRouter>
    <Store>
      <Main />
    </Store>
  </HashRouter>,
  document.getElementById('root')
);
