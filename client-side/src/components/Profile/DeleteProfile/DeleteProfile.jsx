import React, { Component } from 'react';
import './DeleteProfile.css';
import Link from '../../Link/Link';

class DeleteProfile extends Component {
    render() {
        return <div className="DeleteProfile">
            <img src="/deleteProfile.gif" alt="deleteProfilePenguin"/>
            <div className="Content">
                <h1>Are you sure?</h1>
                <h2>There's no going back afterwords!</h2>
                <div className="DeleteProfileButtons">
                    <Link to="/">Proceed</Link>
                    <Link to="/">Cancel</Link>
                </div>
            </div>
        </div>
    }
}

export default DeleteProfile;