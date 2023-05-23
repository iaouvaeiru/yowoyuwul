import React from 'react';
import { Link } from 'gatsby'
import ranksBanner from '../images/ranksbanner.png'

const bannerStyle = {
    maxWidth: "100%",
    height: 'auto'
}

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <img src={ranksBanner} alt='ranks banner' style={bannerStyle}/>
            </div>
            <h1>Rough Buddy and Yajjii</h1>
            <h2>Felt Cute Might Whiff Later IDK</h2>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/our-story">Our Story</Link>
                <Link to="/meet-the-presets">Meet the Presets</Link>
                <Link to="/faq">Frequently Asked Questions</Link>
                <Link to="/accommodations">Accommodations</Link>
                <Link to="/attire">Attire</Link>
                <Link to="/map">Venue Map</Link>
                <Link to="/registry">Registry</Link>
            </nav>
        </div>
    );
}

export default Navbar;
