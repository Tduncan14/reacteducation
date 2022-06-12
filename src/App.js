
import './App.css';
import Header from './components/heading/Header';
import {BrowserRouter as router, Routes,Route, BrowserRouter} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import CoursesHome from './components/allcourses/CoursesHome';
import Team from './components/team/Team';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element ={<Home />} />
        <Route  path='/about' exact element={<About/>} />
        <Route path="/courses" exact element={<CoursesHome/>} />
        <Route path="/team" excact element={<Team />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
