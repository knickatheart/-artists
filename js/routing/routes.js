import React from 'react';
import { Route } from 'react-router';

// Components
import Home from '../components/Home.js';
import NotFound from '../components/NotFound.js';

export const routes = (
	<div id="routing">
		<Route path="/" component={ Home }></Route>
		<Route path="*" component={ NotFound } />
	</div>	
)