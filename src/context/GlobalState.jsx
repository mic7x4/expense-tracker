import axios from 'axios';
import React,{createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    transactions:[],
    error:null,
    loading:true
}
// Create Context
export const GlobalContext = createContext(initialState);
// Provider Component
export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState);

    // Actions
    async function getTransaction(){
        try {
            const res = await axios.get('/api/v1/transactions');
            dispatch({
                type:'GET_TRANSACTIONS',
                payload: res.data.data
            })
        } catch (error) {
            
        }
    }

    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }
    return ( <GlobalContext.Provider 
        value={{
            transactions:state.transactions,
            deleteTransaction,
            addTransaction
        }}
    >
        {children}
    </GlobalContext.Provider>)
    
}