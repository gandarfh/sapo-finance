import * as S from './styled'

export const TesteComponent = ({ title = 'teste components' }) => {
  return (
    <>
      <S.Heading>{title}</S.Heading>
    </>
  )
}
