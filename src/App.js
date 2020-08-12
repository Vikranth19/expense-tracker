import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';

import {GlobalProvider} from './context/GlobalState'

export const ExpenseContext = React.createContext() 

function App() {

  // const [expense,setExpense] = useState(0)
  // const [expensesList,setExpensesList]= useState([])

  return (     
    <GlobalProvider>
       <Nav/>
       <div className="container">
         <Balance/>
         <IncomeExpenses/>
         <TransactionList/>
         <AddTransaction/>
       </div>
    </GlobalProvider>
  );
}

export default App;

//actually id's are not required in JSX since we are not dealing with DOM manipulation

//for smaller applications we can create state in App component itself and we can do props drilling, but in larger applications it's
//better to use Context API which we are using now
