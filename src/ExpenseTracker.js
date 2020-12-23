import React from 'react';

import Incomebox from "./incomebox";
import HistoryTrans from "./HistoryTrans";
import NewTrans from "./NewTrans";
import TransProvider from "./TransContext";


const ExpenseTracker = () => {
    return (
        <>
            <TransProvider>
                <div className="container">

                  
                    <Incomebox />
                    <HistoryTrans />
                    <NewTrans />


                </div>
            </TransProvider>
        </>
    )
}

export default ExpenseTracker;