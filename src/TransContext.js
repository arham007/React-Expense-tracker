import React, { createContext, useReducer } from 'react';
import TransReducer from "./TransReducer";

export const TransContext=createContext()

const initial={
    transaction:[]
}

const TransProvider=({children})=>{
    let [state,dispatch]=useReducer(TransReducer,initial)

    function add(transObj){
        console.log(transObj)
        dispatch({
            type:"Add_Trans",
            payload:{
                id:transObj.id,
                amount:Number(transObj.amount),
                desc:transObj.desc
                
            }
        })

    }
    function del(id) {
        console.log(id)
        dispatch({
            type:"Delete_Trans",
            payload:id
        })        
    }

    return(
        <>
        <TransContext.Provider value={{
            transaction:state.transaction,add,del
        }}>
            {children}
        </TransContext.Provider>
        </>
    )
}

export default TransProvider;