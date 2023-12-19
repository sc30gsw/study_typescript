const Home = () => {
  return (
    <div>
      <Component type="a" />
    </div>
  )
}

const Component: React.FC<{ type: 'a' }> = ({ type }) => {
  if (type === 'a') return <div>a</div>

  return <div>test</div>
}

export default Home
