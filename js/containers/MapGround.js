import React, { Component } from 'react';
import GoogleMapsLoader from 'google-maps';
import data from 'json!../../payload/artists.json'

export default class MapGround extends Component {
	componentDidMount() {
		console.log(data)
		GoogleMapsLoader.KEY = 'AIzaSyBUTUmR-9IMNkat_3gPKrNsezES4iV-x-o';
		GoogleMapsLoader.load((google) => {
			let mapOptions = {
		        zoom: 10,
		        center: { lat: 51.5126064, lng: -0.1802461 },
		        mapTypeId: google.maps.MapTypeId.ROADMAP
		    }

		    window.map = new google.maps.Map(document.getElementById('my-map'), mapOptions)

		    data.artists.map((artist) => {

		    });
		    
		    new google.maps.event.addDomListener(window, 'resize', () => {
		    	let center = window.map.getCenter();
				new google.maps.event.trigger(window.map, 'resize');
				window.map.setCenter(center);
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

