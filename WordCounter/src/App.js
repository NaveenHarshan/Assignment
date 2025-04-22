import './App.css';
import { WordCounter } from './components/WordCounter '
import { Routes,Route } from 'react-router-dom';
import { PageNotFound } from './components/PageNotFound'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WordCounter/>}/>
          <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
