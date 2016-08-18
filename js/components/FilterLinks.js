import React, { Component } from 'react';
import { connect } from 'react-redux';
import { byAge, byRate } from '../actions/artists.js';

class FilterLinks extends Component {
	render() {
		let cbtn, dbtn;

		return (
			<div className="text-xs-center">
				<div className="btn-group" role="group" data-toggle="buttons">
					<button type="button" ref={c => cbtn = c} className="btn btn-secondary age" onClick={e => {
						e.preventDefault();
						dbtn.disabled = false;
						cbtn.disabled = true;
						this.props.dispatch(byAge());
					}}>Age</button>
					<button type="button" ref={d => dbtn = d} className="btn btn-secondary rate" onClick={e => {
						e.preventDefault();
						cbtn.disabled = false;
						dbtn.disabled = true;
						this.props.dispatch(byRate());
					}}>Rate</button>
				</div>
			</div>	
		);
	}
}

export default connect()(FilterLinks);