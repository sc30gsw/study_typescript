import StickyHeadTable from '@/Components/StrickyHeadTable'

const Home = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return <StickyHeadTable rows={posts} />
}

export default Home
