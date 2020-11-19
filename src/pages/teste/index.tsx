const Teste = () => {
  return (
    <>
      <h1>Teste</h1>
    </>
  )
}
Teste.getInitialProps = async () => ({
  namespacesRequired: ['home'],
})
export default Teste
