import React, { Component } from 'react';

export default class MarkerContent extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<dt className="col-sm-3">Age</dt>
					<dd className="col-sm-9">{ this.props.artist.age }</dd>
					<dt className="col-sm-3">Gender</dt>
					<dd className="col-sm-9">{ this.props.artist.gender }</dd>
					<dt className="col-sm-3">Rate</dt>
					<dd className="col-sm-9">{ this.props.artist.rate }</dd>
				</div>
			</div>
		)
	}
}