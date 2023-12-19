const Home = () => {
  return (
    <div>
      <Component foo />
    </div>
  )
}

const Component: React.FC<{ foo?: true }> = ({ foo }) => {
  if (foo) return <div>a</div>

  return <div>test</div>
}

export default Home
