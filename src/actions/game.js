//make action file here
export const ADD_QUESTION =  'ADD_QUESTION';
export const ADD_ROOMS = 'ADD_ROOMS'
export const ADD_ONE_ROOM = 'ADD_ONE_ROOM'


export const addQuestion = (question) => ({
    type: ADD_QUESTION,
    payload: {
      question
    }
  
})

export const addLobbyItems = (payload) => ({
  type: ADD_ROOMS,
  payload
})

export const addNewRoom = (payload) =>  ({
  type: ADD_ONE_ROOM,
  payload
})



