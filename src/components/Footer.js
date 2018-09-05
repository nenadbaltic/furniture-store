import React from 'react';

const Footer = () => {
    return (
        <div className="footer">
		    <p>&copy; {(new Date().getFullYear())} Furniture Store All Rights Reserved.</p>
	    </div>
    );
}

export default Footer;