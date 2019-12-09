import React, { Component } from 'react';
import './EditProfile.css';
import Link from '../../links/Link';

class EditProfile extends Component {
    render() {
        return <div className="EditProfile">
            <h1>Edit Profile</h1>
            <label>Username:</label>
            {/* <label>{this.props.username}</label> */}
            <label>Phone number:</label>
            {/* <label>{this.props.number}</label> */}
            <label>Gender:</label>
            {/* <label>{this.props.gender}</label> */}
            <div className="EditProfileButtons">
                <Link to="/view-profile" className="ConfirmEditProfile">Submit</Link>
                <Link to="/view-profile" className="CancelEditProfile">Cancel</Link>
            </div>
        </div>
    }
}

export default EditProfile;
