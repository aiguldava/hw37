import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";

import { Home } from './components/Home';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { Employees } from './components/Employees';
const pages = [
  {
  route: "/",
  name: "Главная",
  component: Home
  },
  {
  route: "/contacts",
  name: "Контакты",
  component: Contacts
  },
  {
  route: "/about",
  name: "О нас",
  component: About
  },
  {
  route: "/employees",
  name: "Сотрудники",
  component: Employees
  },
  ]

function App(){
  return (
   <div>
   <Router>
       <h1>React Router</h1>
       {pages.map((item)=>
           <div>
          <p><Link to={item.route}>{item.name}</Link></p>
       
           </div>
       )}
       {pages.map((item)=>
           <div>
           <Route exact path={item.route}>
               <item.component/>
           </Route>
           </div>
       )}
   </Router>
   </div>

  )
}

export default App;


