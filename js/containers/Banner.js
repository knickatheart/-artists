import React, { Component } from 'react';

export default class Banner extends Component {
	render() {
		return (
			<div className="jumbotron jumbotron-fluid">
				<div className="container text-xs-center">
					{ this.props.error ?
						<div>
							<h1 className="display-3">404</h1>
							<p className="lead">Page not found!!!</p>
						</div>	:
						<div>
							<h1 className="display-3">Welcome</h1>
							<p className="lead">Display available artists in London.</p>
						</div>
					}
				</div>
			</div>
		)
	}
}