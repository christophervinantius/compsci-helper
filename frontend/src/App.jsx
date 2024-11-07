import Navigation from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"

export default function App(){
  return (
    <Router>
      <Navigation />
      <div className="container py-4">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
        </Routes>
      </div>
    </Router>
  )
}
