import {AiOutlineSearch} from "react-icons/ai"
import {AiOutlineHome} from "react-icons/ai"

function App() {
  return (
    <div className="Container">
      <h1 className="title">LojinhaCell</h1>
        <div className="ContainerInput">
            <input 
            type="text"
            placeholder="Pesquise aqui">
            </input>
            <button className="buttonSearch">
              <AiOutlineSearch
              size={18}
              color="black"/>
            </button>
            <button className="buttonHome">
              <AiOutlineHome
              size={18}
              color="black">
              </AiOutlineHome>
            </button>
            <button className="buttonLogin"
            type="button">
              Login
            </button>

          
        </div>

    </div>
  );
}

export default App;
