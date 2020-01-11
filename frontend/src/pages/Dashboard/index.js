import React, { useEffect, useState } from 'react';
import api from '../../services/api.js';
import './styles.css'
import {Link} from 'react-router-dom'


export default function Dashboard() {

    const [spots, setSpots] = useState([]);

    useEffect(() => {
        async function loadSpots() {
            const user_id = localStorage.getItem('id_user');
            const res = await api.get('/profile', {
                headers: { id_user: user_id }
            });
            setSpots(res.data);
            console.log(res.data);
        }
        loadSpots();
    }, []);

    return (
        <>
            <ul className="spot-list" >
                {spots.map(spot => (
                    <li key = {spot._id} >
                        <header style = {{backgroundImage : `url(${spot.thumbnail_url})`}}></header>
                        <strong>{spot.company}</strong>
                        <span>{spot.price ? `R$${spot.price}/dia` :'GRATUITO'}</span>
                    </li>
                ))}
            </ul>
            <Link to = '/new'>
                    <button className = 'btn'>
                        Cadastrar novo Spot
                    </button>
            </Link>
        </>
    )

};