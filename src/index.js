import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDom from 'react-dom';

import App from './App';

ReactDom.render(<App />, document.getElementById('app'));
