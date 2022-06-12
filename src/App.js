
import './App.css';
import Header from './components/heading/Header';
import {BrowserRouter as router, Routes,Route, BrowserRouter} from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import CoursesHome from './components/allcourses/CoursesHome';
import Team from './components/team/Team';
import Testimonial from './components/testimonial/Testimonial';
import Price from './components/pricing/Price';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element ={<Home />} />
        <Route  path='/about' exact element={<About/>} />
        <Route path="/courses" exact element={<CoursesHome/>} />
        <Route path="/team" exact element={<Team />} />
        <Route path="/testimonial" exact element={<Testimonial />} />
        <Route path="/pricing"  exact element={<Price/>} />
        <Route path="/journal" exact element={<Blog />} />
        <Route path="/contact" exact element={<Contact />} />
 

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
