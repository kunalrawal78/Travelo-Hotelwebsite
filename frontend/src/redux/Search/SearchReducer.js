import { FILTERBYCATEGORY } from "./actionTypes";
import { initialState } from "./initialState";

const SearchReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FILTERBYCATEGORY:
          return {
            ...state,
            filteredCategory: action.payload.filter,
          };
          
    
        default:
          return state;
    }
}
export default SearchReducer;