import './App.css';
import Feed from './componentes/Feed/Feed';

function App() {
  return (
    <div className="App">
      <div className='LadoEsquerdo'>
        Lado Esquerdo
      </div>

      <div className='Centro'>
        <div className='Stories'>Stories</div>
        
        <Feed />
        <div className='Feed'>Feed</div>
      </div>

      <div className='LadoDireito'>
        Lado Direito
      </div>
    </div>
  );
}

export default App;
