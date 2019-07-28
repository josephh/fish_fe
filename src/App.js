/**
* Example of how to implement a component.
* You have to import React when using JSX.  Even if the 'React.' module is not
* explicitly used in the code, the render() method and the JSX implicitly needs
it.
* Both coding styles below are valid:  1. returning inline JSX, 2. calling React.createElement
*/
import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import StoreCatch from './containers/save/StoreCatch';
import BrowseCatches from './containers/browse/BrowseCatches';
import Login from './containers/login/Login';
import NewCatch from './containers/new/NewCatch';
import Welcome from './containers/welcome/Welcome';

class App extends Component {
  constructor(props) {
    super(props);
    // learn react hooks
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event, id) => {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  someLinkClickedHandler = () => {
    alert('link Clicked!')
  }

  // render executes every time state changes
  render = () =>  {
    return (
      <div>
        <Route path="/login" component={Login} />
        <Route path="/browse" component={BrowseCatches} />
        <Route path="/new" component={NewCatch} />
        <Route path="/save" component={StoreCatch} />
        <Route path="/" exact component={Welcome} />
      </div>
     )}
  // : JSX provides a nicer coding approach

}

export default App; // export the class by default
