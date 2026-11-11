export default function AdminPage() {

    const [message, setMessage] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const checkAdminPage = async () => {
            try {
                const response = await fetch('/api/users/admin');
                const data = await response.json();
                setMessage(data.message);
            } catch (error) {
                console.error('Error fetching admin page:', error);
                setError('Hiba történt az admin oldal betöltésekor.');
            }
        };
        checkAdminPage();
    }, []);

    if (error) {
        return <p style={{ color: 'red' }}>{error}</p>;
    }
    if (!message) {
        return <p>Betöltés...</p>;
    }  

    return(
        <div className="admin-page">
            <h2>Admin oldal</h2>
            <p>{message}</p>
        </div>
    )
}
