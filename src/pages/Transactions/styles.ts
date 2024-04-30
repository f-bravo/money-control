import styled from "styled-components";

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`

// A table vai ter bastante estilização. É melhor criar um styled components pra ela

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate; // p criar separação entre as linhas da tabela
  border-spacing: 0 0.5rem; // espaço separação das linhas da tabela
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background: ${props => props.theme['gray-700']}; // ao por background da p ver a separação
    
    //Estilizando a premeira td de cada linha
    &:first-child { // lado esquerdo
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
    &:last-child { // lado direito
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`

// Cor de entrada verde cor de saída vermelho
interface PriceHighLightProps {
  variant?: 'income' | 'outcome'
}

// vai receber uma propriedade dizendo qual a cor do texto
export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: 
    ${props => 
    props.variant === 'income' ? props.theme['green-300'] : props.theme['red-300']};
`