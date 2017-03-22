import React from 'react';

function PetDetail(props) {
    const pet = props.pets.filter(pet => {
        return pet.pet_id === +props.match.params.pet_id;
    });
    return (
        <div>
            {pet.length && (
                <div>
                    <h1>{pet[0].name} </h1>
                    <p>Pet Type: {pet[0].type}</p>
                    <p>Price: {pet[0].cost}</p>
                </div>
            )}
            {pet.length <= 0 && <h1>No pet found here</h1>}
        </div>
    )
};
export default PetDetail;