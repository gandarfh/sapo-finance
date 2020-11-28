import React from 'react'
import styled from 'styled-components'

type directType = 'column' | 'row'
type alignType = 'flex-start' | 'flex-end' | 'center'
type justifyType =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
type wrapType = 'wrap' | 'nowrap'

interface InterfaceRow {
  children: React.ReactNode | React.ReactNodeArray
  directionMobile?: directType
  directionDesktop?: directType
  alignMobile?: alignType
  alignDesktop?: alignType
  alignSelfDesktop?: alignType
  alignSelfMobile?: alignType
  justifyMobile?: justifyType
  justifyDesktop?: justifyType
  justifySelfMobile?: justifyType
  justifySelfDesktop?: justifyType
  wrapMobile?: wrapType
  wrapDesktop?: wrapType
  topMobile?: number
  topDesktop?: number
}

const RowStyle = styled.div<InterfaceRow>`
  align-items: ${(props) => props.alignMobile};
  align-self: ${(props) => props.alignSelfMobile};
  display: flex;
  flex-direction: ${(props) => props.directionMobile};
  flex-wrap: ${(props) => props.wrapMobile};
  justify-content: ${(props) => props.justifyMobile};
  justify-self: ${(props) => props.justifySelfMobile};
  margin-top: ${(props) => props.topMobile}px;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: ${(props) => props.directionDesktop};
    align-items: ${(props) => props.alignDesktop};
    align-self: ${(props) => props.alignSelfDesktop};
    justify-content: ${(props) => props.justifyDesktop};
    justify-self: ${(props) => props.justifySelfDesktop};
    flex-wrap: ${(props) => props.wrapDesktop};
    margin-top: ${(props) => props.topDesktop}px;
  }
`

const Row = React.forwardRef<HTMLDivElement, InterfaceRow>(
  (
    {
      children,
      directionMobile = 'row',
      directionDesktop = 'row',
      alignMobile = 'flex-start',
      alignDesktop = 'flex-start',
      alignSelfDesktop = 'flex-start',
      alignSelfMobile = 'flex-start',
      justifyMobile = 'flex-start',
      justifyDesktop = 'flex-start',
      justifySelfMobile = 'flex-start',
      justifySelfDesktop = 'flex-start',
      wrapMobile = 'wrap',
      wrapDesktop = 'wrap',
      topMobile = 0,
      topDesktop = 0,
      ...props
    },
    ref
  ) => {
    return (
      <RowStyle
        directionMobile={directionMobile}
        directionDesktop={directionDesktop}
        alignMobile={alignMobile}
        alignSelfDesktop={alignSelfDesktop}
        alignSelfMobile={alignSelfMobile}
        alignDesktop={alignDesktop}
        justifyMobile={justifyMobile}
        justifyDesktop={justifyDesktop}
        justifySelfMobile={justifySelfMobile}
        justifySelfDesktop={justifySelfDesktop}
        wrapMobile={wrapMobile}
        wrapDesktop={wrapDesktop}
        topMobile={topMobile}
        topDesktop={topDesktop}
        {...props}
        ref={ref}
      >
        {children}
      </RowStyle>
    )
  }
)

export default Row
