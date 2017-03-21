import React from 'react';
import { Link } from 'react-router-dom';

function Store(props) {
    console.log('props ', props);
    return (
        <div>

            <h1>Your Pet Store at {props.location.state.location} has your new pet!
            </h1>
            <div>
                <li>Pets go here</li>
            </div>
        </div>
    )
};
export default Store;