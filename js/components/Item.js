import React, { Component } from 'react';

export default class Item extends Component {
	render() {
		return (
			<a href="#" className="list-group-item list-group-item-action" onClick={e => e.preventDefault()}>
				<p className="list-group-item-heading">Age: <small>{this.props.artist.age}</small></p>
				<p className="list-group-item-heading">Gender: <small>{this.props.artist.gender}</small></p>
				<h5 className="list-group-item-heading">Rate: <small>{this.props.artist.rate}</small></h5>
			</a>
		);
	}
}