import { SET_ERROR, PLAYER_LOGIN } from '../actions/playerActions';

const initialState = {
    jwt: null,
    playerId: null,
    name: null,
    error: null
}

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case SET_ERROR:
            return { ...state, error: action.payload };
        case PLAYER_LOGIN:
            return { ...state, ...action.payload, error: null };
        default:
            return state;
    }
}