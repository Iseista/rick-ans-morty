import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ResidentInfo from './ResidentInfo';

const Location = () => {

    const [location, setLocation] = useState({})
    const [id, setId] = useState("")



    useEffect(() => {

        const random = Math.floor(Math.random() * 126) + 1;

        axios.get(`https://rickandmortyapi.com/api/location/${random}`)
            .then(res => setLocation(res.data))

    }, [])

    console.log(location);

    const searchLocation = () => {

        console.log(id)
        axios.get(`https://rickandmortyapi.com/api/location/${id}`)
            .then(res => setLocation(res.data))
    }
    return (

        <div className='location-container'>
            <div className='container-buscar'>
                <h1>Rick & Morty</h1>

                <input type="text" onChange={e => setId(e.target.value)} value={id} placeholder={"Type a location ID to search!"} />
                <button onClick={searchLocation}>Search</button>
                <h2>{location.name}</h2>

                <div className='container-buscar-word'>
                    <p>Type:<span>{location.type}</span></p>
                    <p>Dimension:<span>{location.dimension}</span></p>
                    <p>Population:<span>{location?.residents?.length}</span></p>
                </div>
            </div>

            {location.residents?.map(resident => (  // {resident  
                <ResidentInfo url={resident} key={resident} />
            ))}

        </div>
    );
};

export default Location;