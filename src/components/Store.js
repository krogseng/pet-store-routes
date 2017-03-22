import React from 'react';
import { Link, Route } from 'react-router-dom';

function getPets(props) {
    const match = props.match.url;
    const petsAtThisStore = props.pets.filter(pet => {
        return pet.storeId === +props.match.params.store_id;
    })
    return petsAtThisStore.map(pet => {
        return (
            <li key={pet.pet_id}>
                <Link to={{
                    pathname: `${match}/pets/${pet.pet_id}`,
                    state: [{
                        id: pet.pet_id,
                        name: pet.name,
                        type: pet.type
                    }]
                }}>
                    {pet.type} {pet.name}
                </Link>
            </li >
        )
    })
}


function Store(props) {
    return (
        <div>
            <h1>Your Pet Store has your new pet!
            </h1>
            <ul>
                {getPets(props)}
            </ul>
            <Route />
        </div>
    )
};
export default Store;
