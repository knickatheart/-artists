import React, { Component } from 'react';

// Containers
import Header from '../containers/Header.js';
import Banner from '../containers/Banner.js';

export default class NotFound extends Component {
	render() {
		return (
			<div>
				<Header />
				<main>
					<Banner error={true} />
				</main>
			</div>
		);
	}
}