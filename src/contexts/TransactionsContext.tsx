import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

// Tipando os Estados:
interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface CreateTransactionInput {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransaction: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode;
}

// Add o TypeScrip ao contexto "as TransactionContextType"
export const TransactionsContext = createContext({} as TransactionContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
   // acessando os dados da API: armazenando info(Estado) p ser consumida
   const [transactions, setTransactions] = useState<Transaction[]>([])

   //forma de fazer sem escrever dentro do useEffect pois ele n pdoe ser async
   async function fetchTransaction(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        // _sort: 'createdAt',
        // _order: 'desc',
        q: query,
      }
    })
       
    setTransactions(response.data)
   }

   async function createTransaction(data: CreateTransactionInput) {
    const { description, price, category, type } = data;
    
    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions(state => [response.data, ...state]);
   }
   
   useEffect(()=> {
     fetchTransaction();
   }, [])

  return(
    <TransactionsContext.Provider value={{ 
      transactions,
      fetchTransaction,
      createTransaction,
    }}> 
      {children}
    </TransactionsContext.Provider>
  )
}
