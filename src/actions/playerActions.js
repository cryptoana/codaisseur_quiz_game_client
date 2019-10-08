import request from 'superagent';

const baseUrl = 'http://localhost:3002'

export const SET_ERROR = 'SET_ERROR';

// User login
export const PLAYER_LOGIN = 'PLAYER_LOGIN';
export const login = (email, password) => {
    return (dispatch) => {
        request
            .post(`${baseUrl}/login`)
            .send({ email, password })
            .then(response => {
                const {jwt, playerId, username} = response.body;
                dispatch({
                    type: PLAYER_LOGIN,
                    payload: {jwt, playerId, username}
                })
            })
            .catch(error => {
                console.error(error)
                dispatch({
                    type: SET_ERROR,
                    payload: error.response.body.message
                })
            });
    }
}

// User signup
export const PLAYER_SIGNUP = 'PLAYER_SIGNUP';
export const signup = (data) => {
    return (dispatch) => {
        request
            .post(`${baseUrl}/signup`)
            .send(data)
            .then(() => {
                // If user is created successfully, login user
                return request
                    .post(`${baseUrl}/login`)
                    .send({email: data.email, password: data.password});
            })
            .then(response => {
                dispatch({
                    type: PLAYER_LOGIN,
                    payload: response.body.jwt
                })
            })
            .catch(error => {
                console.error(error);
                dispatch({
                    type: SET_ERROR,
                    payload: error.response.body.message
                })
            })
    }
}