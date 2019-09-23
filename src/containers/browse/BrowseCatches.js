import React, {Component} from 'react';
import axios from '../../axios-catches.js';

class BrowseCatch extends Component {

  state = {
    catches: [],
    loading: true
 }

  componentDidMount() {
    axios.get('/catches')
      .then(res => {
        this.setState({loading: false, catches: res.data.catches })
      })
  }

  render() {
    return (
      // this div wraps the entire page
      <div>
        <p>Browse Catch container</p>
        <section className="catches">
          {this.state.catches.map( c =>
            <div key={c.id} className="catch" style={{
              backgroundImage:  `url(${c.photoUrls[0]})`
            }}>
              <p>{c.species} caught by {c.angler}</p>
              <p>31st December 2018</p>
              <p>{c.species}</p>
              <p>{c.latitude} : {c.longitude}</p>
              <p>{c.weight}</p>
              <p>{c.length}</p>
            </div>
          )}
        </section>
      </div>
    )
  }
}

export default BrowseCatch
