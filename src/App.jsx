import { Routes, Route } from 'react-router-dom'
import Splash_page from './Splash_page'
import Login_page from './Login_page'
import Homepage from './Homepage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash_page/>} />
      <Route path="/login" element={<Login_page/>} />
      <Route path="/home" element={<Homepage/>} />
    </Routes>
  )
}

export default App

