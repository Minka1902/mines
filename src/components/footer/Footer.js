import React from "react";

export default function Footer({ homeClick }) {
	return (
		<footer className="footer">
			<p className="footer__text">&copy; Powered by Geomage 2003 LTD</p>
			<div className="footer__container-links">
				{/* eslint-disable-next-line */}
				<a className="footer__link" href='#' onClick={homeClick}>Home</a>
				<a className="footer__link" href="https://www.geomage.com" rel="noopener noreferrer" target="_blank">Geomage</a>
			</div>
		</footer>
	);
}
