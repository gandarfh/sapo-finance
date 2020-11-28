import styled from 'styled-components'

const textWeight = {
  bold: 'bold',
  semiBold: 600,
  medium: 500,
  regular: 'normal',
  light: 300,
  thin: 200,
}

export const TextTypography = styled.p.attrs((p) => ({ as: p.tag }))`
  color: ${(p) => p.theme.colors[p.color]};
  font-size: ${(props) => props.theme.font.mobile.text[props.variant]};
  font-weight: ${(props) => textWeight[props.weight]};
  text-align: ${(props) => props.alignMobile};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.font.desktop.text[props.variant]};
    text-align: ${(props) => props.alignDesktop};
  }

  ${(p) => (p.fixSize ? `font-size:${p.fixSize}px !important` : '')};
`
