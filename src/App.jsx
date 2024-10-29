import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Navigate,Route, Routes } from 'react-router-dom';

import data from './bd';
import Home from './components/Home';
import Login from './components/Login';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = (username, password) => {
        const user = data.users.find(
            (user) => user.username === username && user.password === password
        );
        if (user) {
            setIsLoggedIn(true);
            return true;
        }
        return false;
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <Router>
            <div className="container">
                <header className="header">
                    <h1>📋 Quizness</h1>
                    <p>Worst quiz experience you ever had...</p>
                </header>

                <nav className="menu">
                    <Link to="/">
                        <button>Home</button>
                    </Link>

                    {isLoggedIn ? (
                        <button onClick={handleLogout}>Logout</button>
                    ) : (
                        <Link to="/login">
                            <button>Login</button>
                        </Link>
                    )}
                </nav>

                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/login"
                            element={
                                isLoggedIn ? <Navigate to="/" /> : <Login onLogin={handleLogin} />
                            }
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
