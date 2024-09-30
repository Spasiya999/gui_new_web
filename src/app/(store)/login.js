// src/app/(store)/login.js
"use client";

import axios from 'axios';

export const login = async () => {
    try {
        const response = await axios.post('https://admin.guisrilanka.com/api/login', {
            email: 'admin@guisrilanka.com',
            password: 'gui12345',
        });

        const { token } = response.data.payload;
        return token;
    } catch (error) {
        console.error('Failed to login:', error);
        return null;
    }
};
