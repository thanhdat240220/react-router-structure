import React, { Component } from 'react';

import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<article>
			<h1>Nothing here.abc</h1>
			<Link to="/home" className="btn">Go Home</Link>
		</article>
	);
}

export default NotFound;