import styled, { css } from "styled-components";

// ficará centralizado igual o HeaderContent
export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem; // p subir o sumário e ficar em cima do header
`

// Interface para passar a propriedade da cor de fundo do card total
interface SummaryCardProps {
  variant?: 'green' //se tivesse mais cores basta colocar o ou e ir criando
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background: ${props => props.theme['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  //Estilização condicional do card total. Import o CSS
  ${props => props.variant === 'green' && css`
    background: ${props => props.theme['green-700']};
  `}
`