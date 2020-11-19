import styled from 'styled-components'

export const NavWrapper = styled.nav`
  background: var(--primary-color);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  max-width: 100%;
  min-width: 100%;
`

export const NavContent = styled.div`
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: space-between;
  max-height: 80px;
  max-width: 100%;
  min-height: 80px;
  min-width: 100%;
  padding: 18px;

  @media (min-width: ${(p) => p.theme.breakpoints.md}) {
    padding: 0;
    max-width: 1100px;
    min-width: 1100px;
  }
`

export const LogoutButton = styled.button`
  align-items: center;
  background-color: var(--white-color);
  border: none;
  border-radius: 8px;
  color: var(--primary-color);
  display: flex;
  font-size: 14px;
  font-weight: 600;
  height: 40px;
  padding: 0 12px;
`
