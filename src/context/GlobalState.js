import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

//initial state
const initialState = {
    transactions: [
        //   { id: 1, text: 'Flower', amount: -20 },
        //   { id: 2, text: 'Salary', amount: 300 },
        //   { id: 3, text: 'Book', amount: -10 },
        //   { id: 4, text: 'Camera', amount: 150 }
        ]
}

//create context
export const GlobalContext = createContext(initialState)

//create provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    //Actions which are going to make calls for reducer, to use this in components we need to pass it as values in provider
    function deleteTransaction(id){
        dispatch({type:'DELETE_TRANSACTION',payload: id})
    }

    function addTransaction(transaction){
        dispatch({type:'ADD_TRANSACTION',payload: transaction})
    }

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
//so now we can use state transactions array in any component