import React, {Component} from 'react';

class Login extends Component {

  state = {  }

  render() {
    return (
      // this div wraps the entire page
      <div>
        <p>Login container</p>
        <section className="login">
          <div className="warning">
            <h3>You must be logged-in to record a catch</h3>
          </div>
        </section>
      </div>
    )
  }
}

export default Login
