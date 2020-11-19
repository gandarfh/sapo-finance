import styled from 'styled-components'

export const Inputs = styled.input`
  background: var(--gray-light-color);
  border: solid 1px var(--gray-color);
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  height: 45px;
  margin-bottom: 16px;
  padding: 0 12px;
  width: 320px;

  :last-of-type {
    margin-bottom: 32px;
  }
`
export const Button = styled.button`
  background: var(--primary-color);
  border: none;
  border-radius: 8px;
  color: var(--white-color);
  font-size: 14px;
  font-weight: 500;
  height: 45px;
  padding: 0 12px;
  width: 150px;
  :hover,
  :active {
    background: var(--primary-dark-color);
    transition: 0.5s;
  }
  :disabled {
    background: var(--primary-light-color);
    cursor: no-drop;
  }
`

export const ButtonRegister = styled(Button)`
  background: var(--secondary-color);
  cursor: pointer;
  margin-left: 16px;

  :hover,
  :active {
    background: var(--secondary-dark-color);
    transition: 0.5s;
  }
  :disabled {
    background: var(--secondary-light-color);
    cursor: no-drop;
  }
`
