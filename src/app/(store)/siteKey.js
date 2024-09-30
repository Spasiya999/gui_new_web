import axios from 'axios';

let authToken = null;

export const login = async () => {
    const formData = new URLSearchParams();
    formData.append('email', 'admin@guisrilanka.com');
    formData.append('password', 'gui12345');

    try {
        const res = await axios.post('https://admin.guisrilanka.com/api/login', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        if (res.data && res.data.payload && res.data.payload.token) {
            authToken = res.data.payload.token;
            return authToken;
        } else {
            throw new Error('Login failed: Token not found in response');
        }
    } catch (error) {
        throw new Error('Login failed: ' + (error.response ? error.response.data.message : error.message));
    }
};

export const fetchDataWithToken = async (endpoint) => {
    if (!authToken) {
        throw new Error('No authentication token found. Please login first.');
    }

    try {
        const res = await axios.get(`https://admin.guisrilanka.com/api/${endpoint}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        });

        return res.data;
    } catch (error) {
        throw new Error(`Failed to fetch ${endpoint}: ${error.response ? error.response.data.message : error.message}`);
    }
};

export const fetchAllData = async () => {
    try {
        const [categories, projects, posts, careers] = await Promise.all([
            fetchDataWithToken('categories'),
            fetchDataWithToken('categories/projects'),
            fetchDataWithToken('posts'),
            fetchDataWithToken('careers'),
        ]);
        return { categories, projects, posts, careers };
    } catch (error) {
        throw new Error('Failed to fetch all data: ' + error.message);
    }
};

const runApp = async () => {
    try {
        if (!authToken) {
            await login();
        }
        await fetchAllData();
    } catch (error) {
        console.error(error.message);
    }
};

runApp();
