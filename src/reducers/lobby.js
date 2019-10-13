import {ADD_ROOMS, ADD_ONE_ROOM} from '../actions/game';



export default function (state = [] , action = {}) {
  console.log("reducer", action.payload, action.type)
    switch (action.type) {
        case ADD_ROOMS:
            return action.payload;
          case ADD_ONE_ROOM:
            return [...state, action.payload]
        default:
            return state;
    }
}