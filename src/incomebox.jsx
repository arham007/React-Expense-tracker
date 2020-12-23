import React, { useContext } from 'react';
import { TransContext } from "./TransContext";


const Incomebox = () => {
    let { transaction } = useContext(TransContext)
    if(transaction.amount=0){
        alert("hi")
        return{}
    }
    
    let expense = 0;
    var b=function addExpense(){
        for (var i = 0; i < transaction.length; i++) {
            
            if ((transaction[i].amount) < 0) {
                // console.log(transaction[i].amount)
                expense = expense + transaction[i].amount
            }
        }
        
        return expense;
        
    }
    
    let income = 0;
    var a=function addIncome (){
        for (var i = 0; i < transaction.length; i++) {
            // console.log(transaction[i].amount)
            
            if ((transaction[i].amount) > 0) {
                income = income + transaction[i].amount
                
            }
        }

        return income
      
        
    }
    var first=a();
    var Second=b();
    var c=first + Second
    // alert(c)
    
 


    return (
        <>
            <h1 style={{ textAlign: "center" }}>Expense Tracker App</h1>

            <h3>Your Balance <br /> <span style={{ fontSize: "24px" }}>$ {c}</span></h3>
            <div className="trans_box">

                <div><h4>Income <br /> <span style={{ fontSize: "24px", color: "#b6960a" }}>$ {first}</span></h4></div>
                <div> <h4>Expense <br /> <span style={{ fontSize: "24px", color: "#2da3ad" }}>$ {Second}</span></h4></div>
            </div>
        </>
    )
}

export default Incomebox;