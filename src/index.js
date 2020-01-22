import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import Main from './Main';
import './index.css';

ReactDOM.render(
  <HashRouter>
      <Main />
  </HashRouter>,
  document.getElementById('root'));
