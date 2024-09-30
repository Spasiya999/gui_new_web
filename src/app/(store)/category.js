// src/app/(store)/category.js
"use client";
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    // Function to login and get token
    const login = async () => {
        try {
            const response = await axios.post('https://admin.guisrilanka.com/api/login', {
                // Include your login payload here
                email: 'admin@guisrilanka.com',
                password: 'gui12345',
            });

            const { token } = response.data.payload;
            setToken(token);
            return token;
        } catch (error) {
            console.error('Failed to login:', error);
            setLoading(false);
        }
    };

    // Function to fetch categories with token
    const fetchCategories = async (token) => {
        try {
            const response = await axios.get('https://admin.guisrilanka.com/api/categories', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setCategories(response.data);
        } catch (error) {
            console.error('Failed to fetch categories:', error);
        } finally {
            setLoading(false);
        }
    };

    // Login and fetch data on component mount
    useEffect(() => {
        const getData = async () => {
            const token = await login();
            if (token) {
                await fetchCategories(token);
            }
        };

        getData();
    }, []);

    return (
        <DataContext.Provider value={{ categories, loading }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;
