import React, { Component } from 'react';

// Containers
import Header from '../containers/Header.js';
import Banner from '../containers/Banner.js';
import MapGround from '../containers/MapGround.js';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<main>
					<Banner />

					<MapGround />

					{this.props.children}
				</main>
			</div>
		);
	}
}