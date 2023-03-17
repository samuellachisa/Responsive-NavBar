
import './App.css';
import Navbar from './components/NavBar/Navbar';
import Home from './components/Home'
import Skill from './components/Skill'
import Contact from './components/Contact'
import About from './components/About'
import Signup from './components/Signup';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
function App() {
  return (
    <Router>
       <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} exact>
          
        </Route>
        <Route path='/about' element={<About/>} exact>
         
        </Route>
        <Route path='/skills' element={<Skill/>} exact>
         
        </Route>
        <Route path='/contact' element={<Contact/>} exact>
        
        </Route>
        <Route path='/signup' element={<Signup/>} exact>
        
        </Route>
      
       </Routes>
      
    </Router>
   
    
  
  );
}

export default App;
