import React, { Component } from 'react';
import GoogleMapsLoader from 'google-maps';
import MarkerContent from '../components/MarkerContent.js';
import { render } from 'react-dom';
import { init } from '../actions/artists.js';
import { connect } from 'react-redux';

import $ from 'jquery';

class MapGround extends Component {
	constructor(props) {
		super(props);

		this.props.dispatch(init());
	}

	componentDidMount() {
		GoogleMapsLoader.KEY = 'AIzaSyBUTUmR-9IMNkat_3gPKrNsezES4iV-x-o';
		GoogleMapsLoader.load((google) => {
			let mapOptions = {
		        zoom: 10,
		        center: { lat: 51.5126064, lng: -0.1802461 }
		    };

		    window.map = new google.maps.Map(document.getElementById('my-map'), mapOptions)

		    new google.maps.event.addDomListener(window, 'resize', () => {
		    	let center = window.map.getCenter();
				new google.maps.event.trigger(window.map, 'resize');
				window.map.setCenter(center);
		    });

		    this.props.data.map((artist) => {
		    	let marker = new google.maps.Marker({
			    	position: new google.maps.LatLng(artist.latitude, artist.longitude),
			    	icon: 'http://www.gla.ac.uk/t4/robertburns/files/map/images/marker-icon-mint.png',
			    	map: window.map
			    });

			    let domNode = document.createElement('div');
			    let markerContent = render(<MarkerContent artist={artist} />, domNode);

			    let infowindow = new google.maps.InfoWindow({
				    content: domNode
				});

			    new google.maps.event.addListener(marker, 'click', () => {
			    	infowindow.open(window.map, marker);
				});
		    });

		    let marker = new google.maps.Marker({
		    	position: new google.maps.LatLng(51.5126064, -0.1802461),
		    	icon: 'http://www.gla.ac.uk/t4/robertburns/files/map/images/marker-icon-mint.png',
		    	map: window.map
		    })
		});
	}

	render() {
		return (
			<div id="map-component">
				<div id="my-map"></div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	data: state.artists
});

export default connect(mapStateToProps)(MapGround);