
import './App.css';
import Header from './components/heading/Header';
import {BrowserRouter as router, Routes,Route, BrowserRouter} from 'react-router-dom';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element ={<Home />} />
        {/* <Route  to='/about' element={About}/> */}

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
