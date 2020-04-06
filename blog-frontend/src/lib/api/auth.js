import client from "./client";



export const login =({username, password})=> client.post('/api/auth/login', {username,password});

export const register= ({username, password})=>client.post('/api/auth/register', {username,password});

export const check = ()=>client.get('/api/auth/check');

export const logout = ()=>client.post('/api/auth/logout');

// const REGISTER ='auth/REGISTER';

// const REGISTER_SUCCESS ='auth/REGISTER_SUCCESS';

// const REGISTER_FAILURE ='auth/REGISTER_FAILURE';

// const LOGIN ='auth/LOGIN';
// const LOGIN_SUCCESS ='auth/LOGIN_SUCCESS';
// const LOGIN_FAILURE ='auth/LOGIN_FAILURE';
