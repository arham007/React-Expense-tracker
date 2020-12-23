import React, { useContext } from 'react';
import { TransContext } from "./TransContext";

const HistoryTrans=()=>{
    const {transaction,del}=useContext(TransContext)
    console.log(del)
    return (
        <>
          <h2 className="textCenter">History</h2>
            <hr />
            <ul className="transaction_list">
                {transaction.map((contact,i)=>{
                    return(
                        <>
                <li><span className="del" onClick={()=>{del(contact.id)}}>x</span><span className="arham">{contact.desc}</span> <span style={{paddingTop:"5px"}}>$ {contact.amount}</span></li>
                        </>
                    )
                })}

                {/* <li><span className="del">x</span><span className="arham">cow</span> <span style={{paddingTop:"5px"}}>+600</span></li> */}
               
            </ul>
        </>
    )
}

export default HistoryTrans;