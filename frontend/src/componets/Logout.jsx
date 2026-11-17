import api from '../api/axiosPeldany';
import { useEffect, useState } from 'react';

export default function Logout() {
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get('/logout');
            } catch (error) {
                console.error('Error during logout:', error);
                setError('Hiba történt a kijelentkezés során.');
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>Kijelentkezés</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}
  
