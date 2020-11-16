import { Home } from '#components/home'

const Index = () => <Home />

Index.getInitialProps = async () => ({
  namespacesRequired: ['home'],
})

export default Index
