import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:8080/api/v1/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Signup failed');
            }

            // On successful signup
            navigate('/'); // Redirect to login page
        } catch (err) {
            setError(err.message || 'An error occurred during signup');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white md:ml-[40%] mt-32 mb-20 text-gray-500 w-full max-w-[340px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10"
        >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
            
            {error && <div className="mb-4 p-2 bg-red-100 text-red-700 rounded text-sm">{error}</div>}

            <input 
                id="username" 
                className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3" 
                type="text" 
                placeholder="Username"  
                name='username' 
                value={formData.username}
                onChange={handleChange}
                required
            />
            <input 
                id="email" 
                className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3" 
                type="email" 
                placeholder="Email"  
                name='email' 
                value={formData.email}
                onChange={handleChange}
                required
            />
            <input 
                id="password" 
                className="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3" 
                type="password" 
                placeholder="Password"  
                name='password' 
                value={formData.password}
                onChange={handleChange}
                required
            />

            <button 
                type='submit' 
                disabled={isLoading}
                className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium disabled:bg-indigo-400 disabled:cursor-not-allowed"
            >
                {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>

            <p className="text-center mt-4">
                Already have an account? 
                <a href="/signin" className="text-blue-500 underline ml-1">Log In</a>
            </p>
        </form>
    );
};

export default SignUp;