import styled from 'styled-components'

const Test = styled.h1`
  color: var(--primary-color);
`

const Main = ({ title = 'React Avançado' }) => {
  return (
    <main>
      <Test>{title}</Test>
    </main>
  )
}

export default Main
