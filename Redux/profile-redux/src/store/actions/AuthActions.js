import { apiAuth } from "../../api";

export const handleLogin = async(values , dispatch) =>{
    try{
        const {data} = await apiAuth.post('/auth' , values)
        console.log(data);
        localStorage.setItem('token' , data)
        const logado = {
            type:'SET_LOGIN',
            token:data,
            auth:true
        }
        dispatch(logado)
    }
    catch(error){
        console.log(error);
    }
}

export const handleLogout = (dispatch) =>{
    localStorage.removeItem('token')
    const deslogado = {
        type:'SET_LOGOUT',
        token:'',
        auth:false
    }
    dispatch(deslogado)
}

export const isAuth = () => {
    let isLogged = localStorage.getItem('token')
    return isLogged
}