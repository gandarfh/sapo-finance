import styled from 'styled-components'

interface InterfaceSidebar {
  open: boolean
}

export const SiderbarWrapper = styled.aside<InterfaceSidebar>`
  background-color: rgba(1, 1, 1, 0.6);
  display: flex;
  flex-direction: column;
  left: 0;
  max-height: 100vh;
  max-width: 100%;
  min-height: 100vh;
  min-width: 100%;
  position: fixed;
  top: 0;
  transform: ${(props) =>
    props.open ? 'translateX(0)' : 'translateX(-150vw)'};
  transition-duration: 0.2s;
  z-index: 999;
`

export const SidebarMain = styled.div<InterfaceSidebar>`
  background: var(--primary-color);
  border-radius: 0 8px 8px 0;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  max-width: 80%;
  min-height: 100vh;
  min-width: 80%;
  padding: 16px;
  transform: ${(props) =>
    props.open ? 'translateX(0)' : 'translateX(-150vw)'};
  transition-duration: 0.7s;
`

// Header Styles

export const HeaderContent = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
`

export const CloseButton = styled.button`
  align-items: center;
  background: none;
  border: none;
  color: var(--white-color);
  display: flex;
  justify-content: center;
  max-height: 32px;
  max-width: 32px;
  min-height: 32px;
  min-width: 32px;
`

// Language Styles

export const ContentLanguage = styled.div`
  border-radius: 8px;
  box-shadow: 0 0 5px 1px #3336;
  display: none;
  left: 32px;
  position: absolute;
  top: 32px;
`

export const LanguageItem = styled.div`
  align-items: center;
  background-color: var(--white-color);
  border-radius: 0 0 8px 8px;
  display: flex;
  max-height: 36px;
  max-width: 120px;
  min-height: 36px;
  min-width: 120px;
  padding: 0 12px;

  :first-of-type {
    border-radius: 8px 8px 0 0;
  }

  :hover {
    background-color: var(--primary-color);
    color: var(--white-color);
  }
`

export const ChangeLanguage = styled.div`
  align-items: center;
  color: var(--white-color);
  display: flex;
  margin-top: 48px;
  max-height: 32px;
  max-width: 100px;
  min-height: 32px;
  position: relative;

  :hover {
    ${ContentLanguage} {
      display: block;
    }
  }
`
