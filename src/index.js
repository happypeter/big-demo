import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';

import routes from './routes.js';
import './style/main.css';
import './style/hljs.css';
import './style/post.css';


render(<Router routes={routes} history={browserHistory} />
  ,document.getElementById('root'));
