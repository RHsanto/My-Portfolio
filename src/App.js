import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/Home/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Navigation from './components/Home/Navigation/Navigation';
import Example from './Example';
import Blog from './components/Blog/Blog';
import Project1 from './components/Projects/AllProjects/Project1';
import Project2 from './components/Projects/AllProjects/Project2';
import Project3 from './components/Projects/AllProjects/Project3';

function App() {
  return (
    <div className="App">
     <Router>
       {/* <Example/> */}
       <Navigation/>
       <Switch>
         <Route exact path ='/'>
          <Home/>
         </Route>
         <Route path ='/home'>
          <Home/>
         </Route>
         <Route path ='/about'>
          <About/>
         </Route>
         <Route path ='/projects'>
          <Projects/>
         </Route>
         <Route path ='/project-1'>
           <Project1/>
         </Route>
         <Route path ='/project-2'>
           <Project2/>
         </Route>
         <Route path ='/project-3'>
           <Project3/>
         </Route>
         <Route path ='/blog'>
          <Blog/>
         </Route>
         <Route path ='/contact'>
          <Contact/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
