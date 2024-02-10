import {FILTERBYCATEGORY} from './actionTypes';

export const Showbycategory=(filter)=>({
  type: FILTERBYCATEGORY,
  payload: { filter },

})