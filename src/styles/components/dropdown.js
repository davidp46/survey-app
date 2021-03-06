import styled, { css } from 'styled-components'

const layout = css`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  gap: 0.5rem;
  border-radius: 0.375rem;
  padding: 0;
  user-select: none;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;
`

export const DetailsStyled = styled.details`
  ${layout};
  width: max-content;
  background: var(--gray-400);
  color: var(--gray-200);
  position: relative;
  
  &[open] {
    border-radius: 0.375rem 0.375rem 0 0;
  }
`

export const SummaryStyled = styled.summary`
  ${layout};
  //grid-template-columns: 1fr auto;
  outline: 0;
  padding: 0.5rem 1rem;
  
  span {
    display: inherit;
    grid-template-columns: auto 1fr;
    align-self: center;
  }
  
  &::-webkit-details-marker {
    display: none;
  }
`

export const OptionsStyled = styled.ol`
  width: 100%;
  position: absolute;
  border-radius: 0 0 0.375rem 0.375rem;
  background: var(--gray-400);
  color: var(--gray-200);
  top: 100%;
  list-style: none;
  padding: 0;
`

export const ItemStyled = styled.li`
  ${layout};
  grid-template-columns: auto 1fr;
  margin: 0;
  padding: 0.5rem 1rem;
  
  &:hover {
    background: var(--gray-300);
  }
`
