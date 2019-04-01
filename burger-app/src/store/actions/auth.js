import * as actionTypes from './actionTypes';
import axios from 'axios';


export const authStart = () =>{
    console.log('auth')
    return ({
        type:actionTypes.AUTH_START,

    })
}


export const authSuccess = (token, userId) =>{
    return{
        type:actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId
    }
}

export const authFail = (error) =>{
    return ({
        type:actionTypes.AUTH_FAIL,
        error : error
    })
}


export const logout = () =>{
    return {
        type: actionTypes.AUTH_LOGOUT,
    }
}

// logheaza userul afara dupa 60 minute

export const checkAuthTimeout = (expirationTime) =>{

    return dispatch=>{
        setTimeout(()=>{
            dispatch(logout())
        }, expirationTime * 1000)
    }

}


export const auth = (email,password, isSignup) =>{
    return dispatch =>{
        dispatch(authStart());

        const authData = {
            email:email,
            password: password,
            returnSecureToken : true
        }

        let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBJG_-mnC53EQeF0BU3RaFGJWo6SrHpKD8';
        if(!isSignup){
            url ='https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBJG_-mnC53EQeF0BU3RaFGJWo6SrHpKD8'
        }
        // primesc inapoi un token pe care il folosesc sa determin daca userul este logat sau nu;
        axios.post(url,authData)
        .then(response =>{
            console.log(response);
            dispatch(authSuccess(response.data.idToken, response.data.localId));
            dispatch(checkAuthTimeout(response.data.expiresIn))
        })
        .catch(err=>{
            console.log(err.response.data.error.message);
            dispatch(authFail(err.response.data.error.message))
        })
    }
}