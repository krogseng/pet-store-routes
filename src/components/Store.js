import React from 'react';
import { Link, Route } from 'react-router-dom';
import PetDetail from './PetDetail';

function Pets(props) {
    const match = props.match.url;

    const petsAtThisStore = props.pets.filter(pet => {
        return pet.storeId === props.storeId;
    })

    return (
        <ul>
            {
                petsAtThisStore.map(pet => {
                    return (
                        <li key={pet.pet_id}>
                            {<Link to={{
                                pathname: `${match}/pets/${pet.pet_id}`,
                                state: [{
                                    id: pet.pet_id,
                                    name: pet.name,
                                    type: pet.type
                                }]
                            }}>
                                {pet.type}....... {pet.name}
                            </Link>}
                        </li >
                    )
                })
            }
        </ul >
    ) // end of petsatthisstore
}


function Store(props) {
    const pets = props.pets;
    const storeId = props.match.params.store_id;
    const selected = props.selectedValue;
    console.log('select', selected);
    return (
        <div>
            <h1>Your Pet Store has your new pet!
            </h1>
            <p>Street Addresss</p>
            <div>
                <select id="petTypes" name="petType">
                    <option value="all" defaultValue>All</option>
                    <option value="sloth">Sloths</option>
                    <option value="parakeet">Parakeets</option>
                    <option value="cat">Cats</option>
                    <option value="dog">Dogs</option>
                </select>

            </div>
            <Route path={props.match.url} render={(props) => {
                return <Pets { ...props } pets={pets} storeId={+storeId} />
            }}
            />
            <Route path={`${props.match.url}/pets/:pet_id`} render={(props) => {
                return <PetDetail { ...props } pets={pets} />
            }}
            />
        </div >
    )
};

export default Store;
