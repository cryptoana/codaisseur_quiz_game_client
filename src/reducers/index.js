import { combineReducers } from 'redux';
import player from './playerReducer';
import game from './game'
import lobby from "./lobby"
//import gamee

export default combineReducers({
  player,
  game,
  lobby
})