import React from 'react';
import './ViewProfile.css';
import Link from '../../Link/Link';

function ViewProfile() {
    return <div className="ViewProfile">
        <h1>My Profile</h1>
        <label>Username:</label>
        {/* <label>{this.props.username}</label> */}
        <label>Phone number:</label>
        {/* <label>{this.props.number}</label> */}
        <label>Gender:</label>
        {/* <label>{this.props.gender}</label> */}
        <div className="Buttons">
            <Link to="/edit-profile" className="EditButton">Edit</Link>
            <Link to="/delete-profile" className="DeleteButton">Delete</Link>
        </div>
    </div>
}

export default ViewProfile;