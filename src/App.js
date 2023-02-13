import { Route, Routes } from 'react-router-dom'

//component
import Layout from './component/layout/Layout'
import HomePage from './component/home/HomePage'
import BlogPage from './component/blog/BlogPage'
import AuthorPage from './component/author/AuthorPage'
import ScrollToTop from './component/shared/ScroolToTop'

function App() {
  return (
    <>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs/:slug" element={<BlogPage />} />
          <Route path="/authors/:slug" element={<AuthorPage />} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
