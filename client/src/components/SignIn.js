import React, { useState, useEffect } from 'react';
import { useAuth } from "../contexts/AuthContext";
import { useNavigate, Link } from "react-router-dom";

function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const { currentUser, register, setError } = useAuth();
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     if (currentUser) {
    //         navigate("/");
    //     }
    // }, [currentUser, navigate]);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            setLoading(true);
            await register(email, password);
            navigate("/profile");
        } catch (e) {
            setError("Failed to register");
        }

        setLoading(false);
    };


    return (
        <div className="auth-form-container">

            <form onSubmit={handleSubmit} className="auth-form">
                <h1>Sign In!</h1>
                <input id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)} />

                <input id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)} />

                <button type="submit" disabled={loading}>Sign Up</button>
                <Link to="/sign_up" >
                    Don't have an account yet? Sign Up
                </Link>
            </form>

        </div>
    );
}

export default SignIn;
