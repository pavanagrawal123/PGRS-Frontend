import { ADD_ARTICLE, SET_AUTH, FETCH_ITEMS } from "../constants/action-types";
const initialState = {
  articles: [],
  auth: null
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return { ...state, articles: [...state.articles, action.payload] };
    case SET_AUTH: 
        return {...state, auth: action.payload};
    case FETCH_ITEMS:
        return action.payload
    default:
    return state;
  }
};
export default rootReducer;