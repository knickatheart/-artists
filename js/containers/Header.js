import React from 'react';
import { Link } from 'react-router';

// Utils
import { getTime } from '../utils/time.js';

const Header = () => {
	return (
		<header>
			<div className="container-fluid">
				<div className="row">
					<div className="hidden-sm-down col-md-4 text-xs-center">
						Local artists
					</div>
					<div className="col-md-4 text-xs-center">
						<Link to="/"> 
							<img className="img-fluid" src="http://www.heil-bilder.de/images/pinsel.png" />
						</Link>
					</div>
					<div className="col-md-4 text-xs-center">
						Last in: { getTime() }
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;