import React from 'react';
import { Link } from 'react-router-dom';

function Stores(props) {
    return (
        <div>
            <h1>Pet Stores in Your Town</h1>
            <ul>
                {props.stores.map(store => {
                    return (
                        <li key={store.store_id}>
                            <Link to={{
                                pathname: `/store/${store.store_id}`,
                                state: [{ location: store.location },
                                { id: store.store_id }]
                            }}>
                                {store.location}
                            </Link>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}
export default Stores;