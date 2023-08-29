import { BrowserRouter as Router,Routes, Route } from "react-router-dom"
import Inicio from "./components/pages/Inicio"
import MainTemplate from "./components/template/MainTemplate"

function App() {
    return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/*" element={<MainTemplate/>}/>
      </Routes>
    </Router>

  )
}

export default App
