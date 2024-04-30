import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme['gray-900']};
  padding:  2.5rem 0 7.5rem 0;
`

// Conteúdo do header separado. Conteúdo centralizado por isso criou essa DIV
// Para manter o background ocupando td a parte lateral separou.

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NewTransactionButton = styled.button`
  height: 50px;
  border: 0;
  border-radius: 6px;
  font-weight: bold;
  padding: 0 1.25rem;
  background: ${props => props.theme['green-500']};
  color: ${props => props.theme.white};
  cursor: pointer;

  &:hover {
    background: ${props => props.theme['green-700']};
    // Ao por a transição aqui ela só funciona ao por o mouse em cima. AO retirar a mouse n existe transition
    transition: background-color 0.2s; 
  }
` 