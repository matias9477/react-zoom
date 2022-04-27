import './App.css';
import Zoom from './components/Zoom';

function App() {
  return (
    <div className="App">
      <Zoom img={"http://www.jacklmoore.com/img/daisy.jpg"} id={1} alt={"dog"}/>
    </div>
  );
}

export default App;
