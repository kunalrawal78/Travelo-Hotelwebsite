import { ADD_TO_BOOK,REMOVE_FROM_BOOK } from "./actionTypes";

export const addToBook=(bookhotel)=>{
    return{
        type:ADD_TO_BOOK,
        payload:bookhotel,
    }
}

export const removeFromBook=(bookhotelId)=>{
    return{
        type:REMOVE_FROM_BOOK,
        payload:bookhotelId,
    }
}
