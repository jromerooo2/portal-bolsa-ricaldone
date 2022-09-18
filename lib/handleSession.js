import axios from 'axios';

export async function handleLogin(username, password) {
    const credentials = {username,password}
    const res = await axios.post('/api/login',credentials)
    if(res.status === 200){
      return true;
    }

}

export async function handleResetPassword(username, password) {
    const credentials = {username,password}
    const res = await axios.post('/api/login',credentials)
    if(res.status === 200){
      return 1;
    }

}