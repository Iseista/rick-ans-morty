import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../App.css';

const ResidentInfo = ({ url }) => {

    const [resident, setResident] = useState({})



    useEffect(() => {

        axios.get(url)
            .then(res => setResident(res.data))

    }, [url])

    return (
        <div className='resident-info-container'>
            <div className='caja'>
                <img src={resident.image} alt="avatar-person" />
                <h1>{resident.name}</h1>

                <div className='caja-info'>
                    <p className='caja-info-status'>{resident.status}</p>
                    <p>{resident.species}</p>
                    <p>Origin: {resident.origin?.name}</p>
                    <p>Episodes where it appear:<span>E{resident.episode?.length}</span></p>
                </div>
            </div>
        </div>
    );
};

export default ResidentInfo;