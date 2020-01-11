import React, { useState, useMemo } from 'react';
import camera from '../../assets/camera.svg'
import './styles.css';
import api from '../../services/api';


export default function New({history}) {

    const [company, setCompany] = useState('');
    const [price, setPrice] = useState('');
    const [techs, setTechs] = useState('');
    const [thumbnail, setThumbnail] = useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail]);

    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData();
        const id_user = localStorage.getItem('id_user');

        data.append('thumbnail', thumbnail);
        data.append('price', price);
        data.append('techs', techs);
        data.append('company', company);

        const resp = await api.post('/spots', data, {
            headers: { id_user }
        });
        console.log(resp);

        history.push("/dashboard");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label id="thumbnail"
                style={{ backgroundImage: `url(${preview})` }}
                className={thumbnail ? "has-thumbnail" : ''}
            >/
                <input
                    type="file"
                    onChange={(event) => setThumbnail(event.target.files[0])}
                ></input>
                <img src={camera} alt="Select img" />
            </label>
            <label htmlFor="company"> EMPRESA</label>
            <input
                type="text"
                id="company"
                placeholder="Sua empresa incrivel"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
            />
            <label htmlFor="price">VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span></label>
            <input
                type="text"
                id="price"
                placeholder="Valor diária"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
            />
            <label htmlFor="techs">TECNLOGIAS * <span>(separadas por vírgula)</span></label>
            <input
                type="text"
                id="techs"
                placeholder=""
                value={techs}
                onChange={(event) => setTechs(event.target.value)}
            />
            <button type="submit" className="btn"> Enviar </button>
            
        </form>);
};