import React from 'react';

const TransReducer=(state,action)=>{
    switch(action.type){
        case 'Add_Trans':
            return{
                ...state,
                transaction:[...state.transaction,action.payload]
            }
        case 'Delete_Trans':
            let arr=state.transaction.filter((arham)=> arham.id != action.payload)
            return {
                ...state,
                transaction:[...arr]                
            }
        default:
            return state
    }

}

export default TransReducer;