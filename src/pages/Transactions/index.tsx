import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighLight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transaction () {
  return(
    <div>
      <Header />
      <Summary />
      <TransactionsContainer >
        <SearchForm />  
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>
                <PriceHighLight variant="income">
                  R$ 12.000.00
                </PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/05/2024</td>
            </tr>
            <tr>
              <td width="50%">Hamburger</td>
              <td>
                <PriceHighLight variant="outcome">
                  - 59.00
                </PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>13/05/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}