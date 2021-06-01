import ActionTypes from "../Constants/action-type";

const initialState={
    items:[],
}
export const newsReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case ActionTypes.SET_ITEM:
            return {...state,items:payload};
    
        default:
            return state;
    }
}