import ActionTypes from '../Constants/action-type'
const setItems=(items)=>{
    return{
        type:ActionTypes.SET_ITEM,
        payload:items,
    };
};

export {setItems};