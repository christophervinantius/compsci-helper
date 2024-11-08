import Navigation from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import { useState } from "react"

export default function App(){
  const [keyword, setKeyword] = useState("")
  const [filteredPosts, setFilteredPosts] = useState([])

  const getPostsByKeyword = async (keyword) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/posts?keyword=${encodeURIComponent(keyword)}`)
    const data = await response.json()
    setFilteredPosts(data.data)
  }

  return (
    <Router>
      <Navigation keyword={keyword} setKeyword={setKeyword} search={() => getPostsByKeyword(keyword)}/>
      <div className="container py-4">
        <Routes>
          <Route path="/" exact element={<HomePage keyword={keyword} filteredPosts={filteredPosts} />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
    </Router>
  )
}
