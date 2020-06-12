import React from 'react';
import './AboutUs.scss';

function AboutUs() {
    return <div className="about-us">
        <div className="about-us__header">
            <img className="about-us__tree" src="../../../tree.png" alt="tree"/>
            <h1 className="about-us__title">About Us</h1>
            <img className="about-us__tree" src="../../../tree.png" alt="tree"/>
        </div>
        <p className="about-us__description">Social Cabin is a place where you can escape from your busy routine. Join our secluted community and enjoy a moment of peace from the office or the world. Here you can read other users' posts, create your own, edit or delete them.</p>
    </div>
}

export default AboutUs;