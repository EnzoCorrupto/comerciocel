import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineHome} from "react-icons/ai"

function App() {
  return (
    <div className="Container">
      <h1 className="title">LojinhaCell</h1>
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
            <button className="buttonHome">
              <AiOutlineHome
              size={18}
              color="black">
              </AiOutlineHome>
            </button>
            </div>
            <div>
            <button className="buttonLogin"
            type="button">
              Login
            </button>
            </div>
           
        </div>




    </div>
  );
}

export default App;
