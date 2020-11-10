import styled from 'styled-components'

const DivWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  max-height: 100vh;
  min-height: 100vh;
  width: 100%;
`
const DivTeste = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 100%;
  min-height: 100vw;
`
export default function Home() {
  return (
    <div>
      <DivWrapper>Hello World</DivWrapper>
      <div></div>
      <DivTeste>teste</DivTeste>
    </div>
  )
}
