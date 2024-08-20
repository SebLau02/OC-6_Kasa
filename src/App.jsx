import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Suspense } from "react"
import { Home, Housing, Error, About } from "./pages"
import { Layout } from "./components"

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Layout>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/housing/:id" element={<Housing />} />
            <Route path="*" element={<Error />} />
            <Route path="/about" element={<About />} />
          </Routes>
          {/* <div>
            <Link to="/home">Home</Link>
            <Link to="/housing/1">Housing</Link>
            <Link to="/about">About</Link>
            <Link to="/zsdfvgbn">Error</Link>
          </div> */}
        </Layout>
      </Suspense>
    </Router>
  )
}

export default App
