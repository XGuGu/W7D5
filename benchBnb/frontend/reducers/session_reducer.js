import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/sessions_actions';


const defaultState = {
  currentUserId: null
};

const sessionReducer = (state = defaultState, action) => {
  // debugger
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      return {
        currentUserId: action.user_id
      };
    case LOGOUT_CURRENT_USER:
      return defaultState;
    default:
      return state;
  }
};


export default sessionReducer;
