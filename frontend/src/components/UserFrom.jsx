import api from '../api/axiosPeldany';
import { useState } from 'react';

export default function UserForm() {
    const [formdata, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        role: 'developer',
        newsletter: false
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formdata,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setMessage(null);

        if (!formdata.firstName || !formdata.lastName || !formdata.email) {
            setError('Minden kötelező mezőt ki kell tölteni!');
            return;
        }
        if (!formdata.email.includes('@')) {
            setError('Az e-mail címnek tartalmaznia kell a @ jelet!');
            return;
        }
        if (formdata.age !== '' && Number(formdata.age) <= 0) {
            setError('Az életkornak 0-nál nagyobbnak kell lennie!');
            return;
        }
        setLoading(true);

        try {
            const response = await api.post('https://jsonplaceholder.typicode.com/users', formdata);
            
            console.log('Regisztráció sikeres:', response.data);
            setMessage(`Sikeres regisztráció! Új ID: ${response.data.id}`);
            
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                age: '',
                role: 'developer',
                newsletter: false
            });
        } catch (err) {
            console.error('Regisztráció sikertelen:', err.response ? err.response.data : err.message);
            setError('Sikertelen regisztráció! Hiba történt a szerverrel való kommunikáció során.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="regist-form">
            <h2>Regisztráció</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">Vezetéknév *:</label>
                    <input type="text" id="firstName" name="firstName" value={formdata.firstName}onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="lastName">Keresztnév *:</label>
                    <input type="text" id="lastName" name="lastName" value={formdata.lastName}onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email *:</label>
                    <input type="email" id="email" name="email" value={formdata.email}onChange={handleChange} required />
                </div>
                <div>
                    <label htmlFor="age">Életkor:</label>
                    <input type="number" id="age" name="age" value={formdata.age}onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="role">Szerepkör:</label>
                    <select id="role" name="role" value={formdata.role} onChange={handleChange}>
                        <option value="developer">Fejlesztő</option>
                        <option value="designer">Designer</option>
                        <option value="manager">Projektmenedzser</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="newsletter">
                        <input type="checkbox" id="newsletter" name="newsletter" checked={formdata.newsletter} onChange={handleChange} />
                        Hírlevél feliratkozás
                    </label>
                </div>
                <button type="submit" disabled={loading}> {loading ? 'Küldés folyamatban...' : 'Regisztráció'}</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {message && <p style={{ color: 'green' }}>{message}</p>}
            </form>
        </div>
    );
}