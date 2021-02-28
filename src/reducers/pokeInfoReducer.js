
//because payload will will return an obj from the individual pokemon info, we need to add it to the [] using spread operator
export default (state = {}, action) => {

  switch(action.type){ 
    case "FETCH_POKE_INFO":
      return { ...state, info: action.payload };
    
    default:
      return state;
  }
}