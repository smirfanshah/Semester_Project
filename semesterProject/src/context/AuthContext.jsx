import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null); // User object will include role, name, etc.

    const login = (token, userData) => {
        console.log('Login triggered in AuthContext');
        localStorage.setItem("token", token);
        console.log("Token sent to backend:", localStorage.getItem("token"));
        setIsAuthenticated(true);
        setUser(userData); // Store the entire user data including role
    };

    const logout = () => {
        console.log('Logout triggered in AuthContext');
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
