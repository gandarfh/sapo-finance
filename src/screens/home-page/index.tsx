import { useTranslation } from 'react-i18next'
import { Column, Container, Row } from '@components/layout'

import * as S from './styled'
import { LayoutWithHeaderComponent } from '@components/layout-with-header'

const HomePage = () => {
  const { t } = useTranslation('home')
  return (
    <>
      <LayoutWithHeaderComponent>
        <Container>
          <Row>
            <Column
              alignDesktop="center"
              alignMobile="center"
              justifyDesktop="center"
              justifyMobile="center"
            >
              <S.Heading>{t('home:TITLE')}</S.Heading>
            </Column>
          </Row>
        </Container>
      </LayoutWithHeaderComponent>
    </>
  )
}

export default HomePage
