import { mount } from 'enzyme'
import { Home } from './index'

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate hook can use it without a warning being shown
  useTranslation: () => {
    return {
      t: (str: string) => str,
    }
  },
}))
it('title render translate', () => {
  const mounted = mount(<Home />)

  expect(mounted.contains(<h1>home:teste</h1>)).toBe(true)
})
