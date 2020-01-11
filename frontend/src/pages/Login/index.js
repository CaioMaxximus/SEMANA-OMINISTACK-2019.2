import  React, {useState } from 'react';
import api from '../../services/api';


export default function Login({history}) {
    const [email, set_email] = useState('');

    async function handlesubmit(event) {
        event.preventDefault();
        const res = await api.post('/sessions', { email });
        localStorage.setItem('id_user', res.data._id);
        history.push('/dashboard');
    };
    return (<>
            <p>
                Ofereça <strong> spots</strong> para programadores e encontre <strong>talentos </strong> para a sua empresa
            </p>

            <form onSubmit={handlesubmit}>
                <label htmlFor="email"> E-MAIL * </label>
                <input
                    type="email"
                    id="email"
                    placeholder="Seu melhor email"
                    value={email}
                    onChange={(event) => set_email(event.target.value)} />
                <button type="submit" className="btn"> Entrar</button>
            </form>
        </>)
}   