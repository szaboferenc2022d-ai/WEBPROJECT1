import {useState} from 'react';

export default function MultiFrom() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const nextStep = () => {
        setStep(prevStep => prevStep < 3 ? prevStep + 1 : prevStep);
    }
    const prevStep = () => {
        setStep(prevStep => prevStep > 1 ? prevStep - 1 : prevStep);
    }

    return (
            <div>
                {step === 1 && (
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                )}
                {step === 2 && (
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                )}
                {step === 3 && (
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={(e) => setFormData({...formData, password: e.target.value})}
                        />
                    </div>
                )}
                <div>
                    {step > 1 && <button type="button" onClick={prevStep}>Vissza</button>}
                    {step < 3 && <button type="button" onClick={nextStep}>Következő</button>}
                    {step === 3 && <button type="submit">Beküldés</button>}
                </div>
            </div>
    );
}