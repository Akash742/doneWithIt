import client from "./client";

const register = (pushToken) => client.post('/expoTokens', { token: pushToken });

export default{
    register,
};