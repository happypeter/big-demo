import React from 'react';
import {render} from 'react-dom';
import {Router,hashHistory} from 'react-router';

import routes from './routes.js';
import './style/main.css';
import './style/hljs.css';


render(<Router routes={routes} history={hashHistory} />
  ,document.getElementById('root'));
