import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import './Welcome.css';

class Welcome extends Component {

  state = {
    isLoggedIn: false
  }

  clickHandler = (val)  => {
    console.log('clicked ! ', val)
    if(val === '/browse-mine' && !this.state.isLoggedIn) {
      val = '/login'
    }
    this.props.history.push(val)
  }

  render() {
    return (
      // this div wraps the entire page
      <div>
        <p>Welcome container</p>
        <section className="cards">
          <div className="card">
            <ul>
              <li> <NavLink to="/new"> Record a catch </NavLink> </li>
            </ul>
          </div>
          <div className="card" onClick={ () => this.clickHandler('/browse-mine')}>
            <h3>Browse My Catches</h3>
          </div>
          <div className="card" onClick={ () => this.clickHandler('browse')}>
            <h3>See What Other Anglers Have Caught</h3>
          </div>
        </section>
      </div>
    )
  }
}

export default Welcome
