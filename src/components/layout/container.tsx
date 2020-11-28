import React from 'react'
import styled from 'styled-components'

interface InterfaceContainer {
  children: React.ReactNode | React.ReactNodeArray
  topMobile?: number
  topDesktop?: number
  bottomMobile?: number
  bottomDesktop?: number
}

const ContainerStyle = styled.main<InterfaceContainer>`
  margin-bottom: ${(props) => props.bottomMobile}px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${(props) => props.topMobile}px;
  max-width: calc(100% - 32px);
  min-width: calc(100% - 32px);
  position: relative;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: ${(props) => props.topDesktop}px;
    margin-bottom: ${(props) => props.bottomDesktop}px;
    max-width: 900px;
    min-width: 900px;
  }
  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    margin-top: ${(props) => props.topDesktop}px;
    margin-bottom: ${(props) => props.bottomDesktop}px;
    max-width: 1200px;
    min-width: 1200px;
  }
`

const Container = React.forwardRef<HTMLDivElement, InterfaceContainer>(
  (
    {
      children,
      topMobile = 0,
      topDesktop = 0,
      bottomMobile = 0,
      bottomDesktop = 0,
      ...props
    },
    ref
  ) => {
    return (
      <ContainerStyle
        topMobile={topMobile}
        topDesktop={topDesktop}
        bottomMobile={bottomMobile}
        bottomDesktop={bottomDesktop}
        {...props}
        ref={ref}
      >
        {children}
      </ContainerStyle>
    )
  }
)

export default Container
