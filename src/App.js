import navbar from "./components/navbar"
import {Routes, Route} from "react-router-dom"
import Home from "./components/pages/Home"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import Navbar from "./components/navbar"
import "../src/index.css"
import ProductCard from './components/cards/cards'; // Importe o componente

const products = [
    {
    id: 1,
    name: 'Iphone 13',
    description: 'Melhor celular do mercado',
    price: 100.00,
    image: ""
    },
    {
      id: 2,
      name: 'Produto 2',
      description: 'Descrição do Produto 2...',
      price: 150.00,
      image: 'caminho/para/imagem2.jpg',
      category: 'Moda'
    },
];

function App() {
  return (
      <>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/> 
         <Route path="/login" element={<Login/>}/> 
         <Route path="/registrar" element={<Register/>}/>
      </Routes>
      {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </>
  )
}

export default App;
