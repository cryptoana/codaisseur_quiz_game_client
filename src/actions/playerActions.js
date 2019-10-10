import request from 'superagent';

// add https://infinite-lake-40479.herokuapp.com/
const baseUrl = 'http://localhost:4050';

export const SET_ERROR = 'SET_ERROR';

// User login
export const PLAYER_LOGIN = 'PLAYER_LOGIN';
export const login = (email, password) => {
    console.log(email, password)
    return (dispatch) => {
        request
            .post(`${baseUrl}/login`)
            .send({ email, password })
            .then(response => {
                const {jwt, playerId, name} = response.body;
                dispatch({
                    type: PLAYER_LOGIN,
                    payload: {jwt, playerId, name}
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

// Player signup
export const PLAYER_SIGNUP = 'PLAYER_SIGNUP';
export const signup = (data) => {
    console.log(data)
    return (dispatch) => {
        request
            .post(`${baseUrl}/signup`)
            .send(data)
            .then(() => {
                // If player is created successfully, login player
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
                console.log(error);
                dispatch({
                    type: SET_ERROR,
                    payload: error.response.body.message
                })
            })
    }
}