import * as actions from '../actions';




//because payload will will return an obj from the individual pokemon info, we need to add it to the [] using spread operator
// export default (state = {}, action) => {

//   switch(action.type){ 
//     case "FETCH_POKE_INFO":
//       return { ...state, info: action.payload };
    
//     default:
//       return state;
//   }
// }



export const initialState = {
  info: {},
  loading: false,
  hasErrors: false
}

export default function infoReducer(state = initialState, action) {

  switch (action.type) { 
    case actions.GET_INFO:
      return { ...state, loading: true }
    case actions.GET_INFO_SUCCESS:
      return { info: action.payload, loading: false, hasErrors: false }
    case actions.GET_INFO_FAILURE:
      return { ...state, loading: false, hasErrors: true }
    default:
      return state
  }
}