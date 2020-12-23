import React, { useContext, useState } from 'react';
import { TransContext } from "./TransContext";
import { v4 as uuidv4 } from 'uuid';

const NewTrans = () => {
    let [amount,setAmount]=useState("")
    let [desc,setDesc]=useState("")
    let {add}=useContext(TransContext)
    console.log(add)
    const handleChange=(event)=>{

        event.preventDefault();
        if(amount==0){
            alert("Please enter a correct amount")
            return
        }
        add({
            id:uuidv4(),
            amount:amount,
            desc:desc
        })
     
        setDesc("")
        setAmount("")
    }
    return (
        <>
            <h3 className="textCenter">Add New Transaction</h3>
            <hr />
            <form onSubmit={handleChange}>

                <label>Description

                    <span style={{ display: "block" }}><input type="text" required value={desc} placeholder="Detail of Transaction" onChange={(e)=>{setDesc(e.target.value)}} /></span>
                </label>
                <br />

                <label>Transaction Amount</label>

                <span style={{ display: "block" }}><input type="number" required value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Dollar Value od Transaction" /></span>



                <span style={{ display: "block" }}> <button className="add_btn">Add Trasaction</button> </span>


            </form>
        </>
    )
}

export default NewTrans;