import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineSearch} from "react-icons/ai"

export default function Navbar() {
  return <nav>
    <div className="Container">
      <h1 className="title">LOJINHACELL</h1>
        <div className="ContainerInput">
            <div>
            <input 
            type="text"
            placeholder="Pesquise aqui" className="pesquisa">
            </input>
            </div>
            <div>
            <button className="buttonSearch">
              <AiOutlineSearch
              size={18}
              color="black"/>
            </button>
            </div>
            <div>
            <a href="/"> <button  className="buttonHome">
              <AiOutlineHome
              size={18}
              color="black">
              </AiOutlineHome>
            </button> </a>
            </div>
            <div>
            <a href="/login"> <button className="buttonLogin"
            type="button">
              Login
            </button></a>
            </div>
            <div>
            <a href="/registrar"> <button className="buttonRegister"
            type="button">
              Registrar
            </button></a>
            </div>
           
        <div className="produtos">
            
        </div>

        </div>

    </div>


  </nav>
    
  
}
