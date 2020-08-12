import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

function Balance() {
    
    const {transactions} = useContext(GlobalContext)
 
    const amounts = transactions.map(transaction => transaction.amount) 

    const totalAmount = amounts.reduce((accumulator,num) =>{
        return accumulator+num;
    },0)

    return (
        <>
            <h4>Your balance</h4>
            <h1 id="balance">{totalAmount}/-</h1>
        </>
    )
}

export default Balance
