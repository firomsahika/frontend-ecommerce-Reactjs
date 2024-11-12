import api from '@/api';
import { jwtDecode } from 'jwt-decode';
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(false);

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // New loading state
    const [username, setUsername] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [order_items, setOrderItems] = useState([]);

    const handleAuth = () => {
        const token = localStorage.getItem("access");
        if (token) {
            const decoded = jwtDecode(token);
            const expiry_date = decoded.exp;
            const current_time = Date.now() / 1000;

            if (expiry_date > current_time) {
                setIsAuthenticated(true);
            } else {
                localStorage.removeItem("access");
                setIsAuthenticated(false);
            }
        } else {
            setIsAuthenticated(false);
        }
    };

    async function get_user_info() {
        const token = localStorage.getItem("access");
        if (!token) return;

        try {
            const res = await api.get("get_user_info", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setUsername(res.data.username);
            setOrderItems(res.data.order_items);
            setFirstName(res.data.first_name);
            setLastName(res.data.last_name);
            setEmail(res.data.email);
            setPhone(res.data.phone);
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setIsAuthenticated(false);
                localStorage.removeItem("access");
            }
        } finally {
            setIsLoading(false); // Ensure loading completes
        }
    }

    useEffect(() => {
        handleAuth();
        get_user_info();
    }, []);

    const authValue = {
        isAuthenticated,
        isLoading,
        username,
        first_name,
        last_name,
        email,
        phone,
        order_items,
        setIsAuthenticated,
        get_user_info,
    };

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
}
