import React, { useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'
import Transaction from './Transaction'

function TransactionList() {

    // const context = useContext(GlobalContext)
    // console.log(context)

    const {transactions} = useContext(GlobalContext)

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
            {transactions.length>0 ? 
             transactions.map(transaction => (
                <Transaction transaction={transaction} key={transaction.id}/>
             ) ):
            'No recent transactions'
        }
            </ul>
        </>
    )
}

export default TransactionList
