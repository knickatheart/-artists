import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../components/Item.js';

class List extends Component {
	render() {
		let items = this.props.data.map((data) => {
			return <Item artist={data} key={data.uuid} />
		});

		return (
			<div className="container">
				<div className="row">
					<div className="list-group">
						{items}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.artists
	};
	
}

export default connect(mapStateToProps)(List);