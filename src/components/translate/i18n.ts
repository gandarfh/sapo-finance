import path from 'path'
import NextI18Next from 'next-i18next'
import { initReactI18next } from 'react-i18next'

type LanguageId = 'en' | 'pt-BR'

const defaultLanguage: LanguageId = 'pt-BR'
const otherLanguages: LanguageId[] = ['en', 'pt-BR']
export const languages: LanguageId[] = [defaultLanguage, ...otherLanguages]

const NextI18NextInstance = new NextI18Next({
  defaultLanguage,
  otherLanguages,
  defaultNS: 'home',
  debug: false,
  use: [initReactI18next],
  localePath: path.resolve('public/locales'),
})

const {
  appWithTranslation,
  useTranslation,
  withTranslation,
} = NextI18NextInstance

export const i18n = NextI18NextInstance.i18n as typeof NextI18NextInstance.i18n & {
  language: LanguageId
}

export {
  appWithTranslation,
  useTranslation,
  withTranslation,
  NextI18NextInstance,
}

export default NextI18NextInstance
