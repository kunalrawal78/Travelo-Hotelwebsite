import {
    ADD_TO_BOOK,
    REMOVE_FROM_BOOK
} from './actionTypes';

import { initialState } from './initialState';

const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_BOOK:
            return {
                ...state,
                bookedHotels: [...state.bookedHotels, action.payload],
            };

         
      
        case REMOVE_FROM_BOOK:
            return {
              ...state,
              bookedHotels: state.bookedHotels.filter((hotel) => hotel.id !== action.payload),
            };
            
          
        default:
            return state;
    }
}

export default bookReducer;

