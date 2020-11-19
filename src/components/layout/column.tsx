import React from 'react'
import styled from 'styled-components'

interface InterfaceColumn {
  children: React.ReactNode
  directionMobile?: string
  directionDesktop?: string
  alignMobile?: string
  alignDesktop?: string
  alignSelfDesktop?: string
  alignSelfMobile?: string
  justifyMobile?: string
  justifyDesktop?: string
  justifySelfMobile?: string
  justifySelfDesktop?: string
  wrapMobile?: string
  wrapDesktop?: string
  topMobile?: number
  topDesktop?: number
  heightMobile?: string
  heightDesktop?: string
  widthDesktop?: string
  style?: React.CSSProperties
}

const ColStyle = styled.div<InterfaceColumn>`
  align-items: ${(props) => props.alignMobile};
  align-self: ${(props) => props.alignSelfMobile};
  display: flex;
  flex-direction: ${(props) => props.directionMobile};
  flex-wrap: ${(props) => props.wrapMobile};
  justify-content: ${(props) => props.justifyMobile};
  justify-self: ${(props) => props.justifySelfMobile};
  margin-top: ${(props) => props.topMobile}px;
  max-height: ${(props) => props.heightMobile};
  max-width: 100%;
  min-height: ${(props) => props.heightMobile};
  min-width: 100%;
  padding: 0 8px;
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: ${(props) => props.directionDesktop};
    align-items: ${(props) => props.alignDesktop};
    align-self: ${(props) => props.alignSelfDesktop};
    justify-content: ${(props) => props.justifyDesktop};
    justify-self: ${(props) => props.justifySelfDesktop};
    flex-wrap: ${(props) => props.wrapDesktop};
    margin-top: ${(props) => props.topDesktop}px;
    min-height: ${(props) => props.heightDesktop};
    max-height: ${(props) => props.heightDesktop};
    max-width: ${(props) => props.widthDesktop};
    min-width: ${(props) => props.widthDesktop};
    padding: 0;
  }
`

const Column = React.forwardRef<HTMLDivElement, InterfaceColumn>(
  (
    {
      children,
      directionMobile = 'column',
      directionDesktop = 'column',
      alignMobile = 'flex-start',
      alignDesktop = 'flex-start',
      alignSelfDesktop = 'flex-start',
      alignSelfMobile = 'flex-start',
      justifyMobile = 'flex-start',
      justifyDesktop = 'flex-start',
      justifySelfMobile = 'flex-start',
      justifySelfDesktop = 'flex-start',
      wrapMobile = 'nowrap',
      wrapDesktop = 'nowrap',
      topMobile = 0,
      topDesktop = 0,
      heightMobile = 'auto',
      heightDesktop = 'auto',
      widthDesktop = '100%',
      style = {},
      ...props
    },
    ref
  ) => {
    return (
      <ColStyle
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
        heightMobile={heightMobile}
        heightDesktop={heightDesktop}
        widthDesktop={widthDesktop}
        style={style}
        {...props}
        ref={ref}
      >
        {children}
      </ColStyle>
    )
  }
)

export default Column
