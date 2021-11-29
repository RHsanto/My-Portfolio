import './App.css';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/Home/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Resume from './components/Home/Resume/Resume';
import Navigation from './components/Home/Navigation/Navigation';

function App() {
  return (
    <div className="App">
     <Router>
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
         {/* <Route path ='/resume'>
          <Resume/>
         </Route> */}
         <Route path ='/contact'>
          <Contact/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
