import { ADD_ARTICLE, SET_AUTH, FETCH_ITEMS} from "../constants/action-types";
import { itemsRef } from '../firebase';

export const addArticle = article => ({ type: ADD_ARTICLE, payload: article });
export const setAuth = auth => ({ type: SET_AUTH, payload: auth });
export const fetchItems = () => async dispatch => {
    itemsRef.on("value", snapshot => {
      dispatch({
        type: FETCH_ITEMS,
        payload: snapshot.val()
      });
    });
  };