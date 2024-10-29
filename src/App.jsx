import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Navigate, Route, Routes } from 'react-router-dom';

import data from './bd';
import Home from './components/Home';
import Login from './components/Login';
import Quiz from './components/Quiz';
import QuizSelection from './components/QuizSelection';

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

                <nav className="menu">
                    <Link to="/">
                        <button>Home</button>
                    </Link>

                    {isLoggedIn && (
                        <Link to="/quiz-selection">
                            <button>Select a Quiz</button>
                        </Link>
                    )}

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
                        <Route
                            path="/quiz-selection"
                            element={
                                isLoggedIn ? <QuizSelection /> : <Navigate to="/" />
                            }
                        />
                        <Route
                            path="/quiz/:id"
                            element={
                                isLoggedIn ? <Quiz /> : <Navigate to="/" />
                            }
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
