import { useMemo } from "react"
import { TransactionsContext } from "../contexts/TransactionsContext"
import { useContextSelector } from "use-context-selector"


export function useSummary() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  const summary = useMemo(() => {
    return transactions.reduce(
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
  }, [transactions])
  return summary;
}