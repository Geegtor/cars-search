import './App.css';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';
import CarsList from './containers/CarsList';
import Car from './containers/Car';

function App() {
  return ( 
    <div className = "App">
      <header>
        test
      </header>

      <nav>
        <NavLink to={"/"}>Home page</NavLink>{/* 
        <NavLink to={"/collection"}>Catched Ones</NavLink> */}
      </nav>

      <section className="container">
        <div>
          <Switch>
            <Route path={ "/" } exact component={CarsList} />
            <Route path={ "/car/:pokemon" } exact component={Car} />
            <Redirect to={ "/" }/>
          </Switch>
        </div>
      </section>

    </div> 
  );
}

export default App;
