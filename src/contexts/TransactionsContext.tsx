import { ReactNode, createContext, useEffect, useState } from "react";

// Tipando os Estados:
interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transaction[];
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
   async function loadTransaction() {
     const response = await fetch('http://localhost:3333/transactions')
     const data = await response.json()
       
     setTransactions(data)
   }
   
   useEffect(()=> {
     loadTransaction();
   }, [])

  return(
    <TransactionsContext.Provider value={{ transactions }}> 
      {children}
    </TransactionsContext.Provider>
  )
}
