import styled from 'styled-components'
import { alignType, tagType, variantType, weightType, colorType } from './index'

const titleWeight = {
  bold: 'bold',
  semiBold: 600,
  medium: 500,
  regular: 'normal',
  light: 300,
  thin: 200,
}

interface InterfaceTypography {
  children: React.ReactNode | React.ReactNodeArray
  text: boolean
  title: boolean
  uppercase?: boolean
  variant: variantType
  color: colorType
  weight?: weightType
  alignMobile?: alignType
  alignDesktop?: alignType
  fixSize?: number
  tag?: tagType
  style?: React.CSSProperties
  onClick?: () => void
  id?: string
}

interface TesteInterface {
  coloring?: colorType
}

export const Teste = styled.h1.attrs<TesteInterface>(
  (props: InterfaceTypography) => ({
    as: props.tag,
  })
)<TesteInterface>`
  background: ${(props) => props.color};
`

export const TitleTypography = styled.h1.attrs<InterfaceTypography>(
  (props: InterfaceTypography) => ({
    as: props.tag,
  })
)<InterfaceTypography>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.theme.font.mobile[props.variant]};
  font-weight: ${(props) => titleWeight[props.weight]};
  text-align: ${(props) => props.alignMobile};
  text-transform: ${(props) => (props.uppercase ? 'uppercase' : 'none')};

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: ${(props) => props.theme.font.desktop[props.variant]};
    text-align: ${(props) => props.alignDesktop};
  }

  ${(p) => (p.fixSize ? `font-size:${p.fixSize}px !important` : '')};
`
