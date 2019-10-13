import {ADD_QUESTION} from '../actions/game';



export default function (state = [], action = {}) {
    switch (action.type) {
        case ADD_QUESTION:
            return [ ...state, ...action.payload.question ];
        default:
            return state;
    }
}