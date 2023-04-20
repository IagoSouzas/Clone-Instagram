import './App.css';
import Feed from './componentes/Feed/Feed';
import Story from './componentes/Stories/Storyes';
import LadoEsquerdo from './componentes/LadoEsquerdo/LadoEsquerdo'
import LadoDireito from './componentes/LadoDireito/LadoDireito'

function App() {
  return (
    <div className="App">
      <LadoEsquerdo />

      <div className='Centro'>
        <Story />
        <Feed />
      </div>

      <div className='LadoDireito'>
        <LadoDireito/>
      </div>
    </div>
  );
}

export default App;
