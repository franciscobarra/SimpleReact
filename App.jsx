import React from 'react';
import { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Dropdown } from 'semantic-ui-react';
import { BrowserRouter, Route, Router, NavLink , Switch, Link } from 'react-router-dom'

class Home extends Component {
    render(){
        return (<h1>Hi</h1>);
    }
}

class Home2 extends Component {
    render(){
        return (<h1>Holi</h1>);
    }
}

const AppRo = () => (
  <div>
    <Header />
    <Main />
  </div>
)

const Main = () => (
  <main>
 <Switch>
      <Route exact path='/dd' component={Home}/>
       <Route exact path='/home2' component={Home2}/>
 </Switch>
  </main>
)


const Header = () => (
  <header>
      <ul>
        <li><Link to='/dd'>Home</Link></li>
        <li><Link to='/home2'>Home2</Link></li>
      </ul>
  </header>
)

class App extends React.Component {
   render() {
      return (
      <BrowserRouter>
        <AppRo/>
      </BrowserRouter>
      );
   }
}

const ButtonExampleButton = () => (
  <Button>
    Click Here
  </Button>
);

const DropdownExampleSearchSelectionTwo = () => (
  <Dropdown placeholder='State' search selection options={
  [
  	{ key: 'AL', value: 'AL', text: 'Alabama' },
  	{ key: 'ALA', value: 'ALA', text: 'Potito' }
  ]


  } />
)




export default App;

