import { useContext } from "react"
import { TransactionsContext } from "../contexts/TransactionsContext"

export function useSummary() {
  const { transactions } = useContext(TransactionsContext)

  const summary = transactions.reduce(
    // acc = acumulator , recebe o transaction
    (acc, transaction ) => {
      if (transaction.type === 'income') {
        // Transaction de entrada:
        acc.income += transaction.price
        acc.total += transaction.price;
      } else {
        // Transaction de saída
        acc.outcome += transaction.price
        acc.total -= transaction.price
      }

      return acc 
    }, 
    { //segundo obj
      income: 0, 
      outcome: 0, 
      total: 0 
    }
  )
  return summary;
}