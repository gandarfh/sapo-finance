import * as S from './styled'
import { useTranslation } from 'react-i18next'

export const Home = () => {
  const { t, i18n } = useTranslation('home')
  return (
    <S.Wrapper>
      <h1>{t('home:teste')}</h1>
      <div>
        <button type="button" onClick={() => i18n.changeLanguage('pt-BR')}>
          trocar para portgues
        </button>
      </div>
      <div>
        <button type="button" onClick={() => i18n.changeLanguage('en')}>
          trocar ingles
        </button>
      </div>
    </S.Wrapper>
  )
}
