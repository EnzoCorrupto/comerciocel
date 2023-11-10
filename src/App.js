import navbar from "./components/navbar"
import {Routes, Route} from "react-router-dom"
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import Navbar from "./components/navbar"
import "../src/index.css"



function App() {
  return (
      <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
         <Route path="/login" element={<Login/>}/> 
         <Route path="/registrar" element={<Register/>}/>
  
      </Routes>
      </>
  )
}

export default App;
