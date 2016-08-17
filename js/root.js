import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import { store } from './configs/store.js';

// Libraries
window.$, window.jQuery = require('jquery');
window.Tether = require('tether');
window.Bootstrap = require('../node_modules/bootstrap/dist/js/bootstrap.min.js');

// Routes
import { routes } from './routing/routes.js';

const Root = () => {
	return render (
		<Provider store={store}>
			<Router history={ browserHistory }>
				{ routes }
			</Router>
		</Provider>,
		document.getElementById('root')
	)
}

new Root;