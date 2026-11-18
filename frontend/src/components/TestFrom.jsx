import api from '../api/axiosInstance';
import { useEffect, useState } from 'react';

export default function TestForm() {
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get('/test');
            } catch (error) {
                console.error('Error fetching test data:', error);
                setError('Hiba történt az adatok lekérése során.');
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <h2>Test Form</h2>
        </div>
    )
}