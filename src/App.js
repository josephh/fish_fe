/**
* Example of how to implement a component.
* You have to import React when using JSX.  Even if the 'React.' module is not
* explicitly used in the code, the render() method and the JSX implicitly needs
it.
* Both coding styles below are valid:  1. returning inline JSX, 2. calling React.createElement
*/
import React, {Component} from 'react';
import './App.css';

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
        <section className="cards">
          <div className="card">
            <h3>Record a catch</h3>
          </div>
          <div className="card">
            <h3>Browse My Catches</h3>
          </div>
          <div className="card">
            <h3>See What Other Anglers Have Caught</h3>
          </div>
        </section>
        <section className="login">
          <div className="warning">
            <h3>You must be logged-in to record a catch</h3>
          </div>
        </section>
        <section className="catches">
          <div className="catch">
            <p>Catch 1</p>
            <p>31st December 2018</p>
            <p>Trout</p>
            <p>Wiltshire Avon</p>
            <p>1.5 lb</p>
            <p>18cm</p>
          </div>
          <div className="catch">
            <p>Catch 2</p>
            <p>31st December 2018</p>
            <p>Trout</p>
            <p>Wiltshire Avon</p>
            <p>1.5 lb</p>
            <p>18cm</p>
          </div>
          <div className="catch">
            <p>Catch 3</p>
            <p>31st December 2018</p>
            <p>Trout</p>
            <p>Wiltshire Avon</p>
            <p>1.5 lb</p>
            <p>18cm</p>
          </div>
          <div className="catch">
            <p>Catch 4</p>
            <p>31st December 2018</p>
            <p>Trout</p>
            <p>Wiltshire Avon</p>
            <p>1.5 lb</p>
            <p>18cm</p>
          </div>
          <div className="catch">
            <p>Catch 5</p>
            <p>31st December 2018</p>
            <p>Trout</p>
            <p>Wiltshire Avon</p>
            <p>1.5 lb</p>
            <p>18cm</p>
          </div>
          <div className="catch">
            <p>Catch 6</p>
            <p>31st December 2018</p>
            <p>Trout</p>
            <p>Wiltshire Avon</p>
            <p>1.5 lb</p>
            <p>18cm</p>
          </div>
          <div className="catch">
            <p>Catch 7</p>
            <p>31st December 2018</p>
            <p>Trout</p>
            <p>Wiltshire Avon</p>
            <p>1.5 lb</p>
            <p>18cm</p>
          </div>
          <div className="catch">
            <p>Catch 8</p>
            <p>31st December 2018</p>
            <p>Trout</p>
            <p>Wiltshire Avon</p>
            <p>1.5 lb</p>
            <p>18cm</p>
          </div>
          <div className="catch">
            <p>Catch 9</p>
            <p>31st December 2018</p>
            <p>Trout</p>
            <p>Wiltshire Avon</p>
            <p>1.5 lb</p>
            <p>18cm</p>
          </div>
          <div className="catch">
            <p>Catch 10</p>
            <p>31st December 2018</p>
            <p>Trout</p>
            <p>Wiltshire Avon</p>
            <p>1.5 lb</p>
            <p>18cm</p>
          </div>
          <div className="catch">
            <p>Catch 11</p>
            <p>31st December 2018</p>
            <p>Trout</p>
            <p>Wiltshire Avon</p>
            <p>1.5 lb</p>
            <p>18cm</p>
          </div>
          <div className="catch">
            <p>Catch 12</p>
            <p>31st December 2018</p>
            <p>Trout</p>
            <p>Wiltshire Avon</p>
            <p>1.5 lb</p>
            <p>18cm</p>
          </div>
          <div className="catch">
            <p>Catch 13</p>
            <p>31st December 2018</p>
            <p>Trout</p>
            <p>Wiltshire Avon</p>
            <p>1.5 lb</p>
            <p>18cm</p>
          </div>
        </section>
        <section className="store-catch">
          <form onSubmit={this.handleSubmit} className="store-catch-form">
            <label for="species">Species
              <datalist id="species-options">
                <option value="salmon" />
                <option value="trout" />
                <option value="grayling" />
              </datalist>
              <input id="species" type="text" list="species-options" />
            </label>
            <label>Location lat
              <input id="latitude" type="text" />
            </label>
            <label>Location long
              <input id="longitude" type="text" />
            </label>
            <label>Map
            </label>
            <label>Weight Units
              <datalist id="weight-options">
                <option value="metric" />
                <option value="imperial" />
              </datalist>
              <input type="text" list="weight-options" />
            </label>
            <div id="weight-imperial" className="store-catch-form-weight">
              <label for="weight-integer">
                <input id="weight-integer" type="number" value={this.state.value} onChange={this.handleChange} />
                Lb
              </label>
              <label for="weight-fraction">
                <input id="weight-fraction" type="number" value={this.state.value} onChange={this.handleChange} />
                Oz
              </label>
            </div>
            <div id="weight-metric" className="store-catch-form-weight">
              <label for="weight-integer">
                <input id="weight-integer" type="number" value={this.state.value} onChange={this.handleChange} />
                G
              </label>
              <label for="weight-fraction">
                <input id="weight-fraction" type="number" value={this.state.value} onChange={this.handleChange} />
                Mg
              </label>
            </div>
            <label>Height Units
              <datalist id="height-options">
                <option value="metric" />
                <option value="imperial" />
              </datalist>
              <input type="text" list="height-options" />
            </label>
            <div id="height-imperial" className="store-catch-form-height">
              <label for="height-integer">
                <input id="height-integer" type="number" value={this.state.value} onChange={this.handleChange} />
                feet
              </label>
              <label for="height-fraction">
                <input id="height-fraction" type="number" value={this.state.value} onChange={this.handleChange} />
                inches
              </label>
            </div>
            <div id="height-metric" className="store-catch-form-height">
              <label for="height-integer">
                <input id="height-integer" type="number" value={this.state.value} onChange={this.handleChange} />
                cm
              </label>
              <label for="height-fraction">
                <input id="height-fraction" type="number" value={this.state.value} onChange={this.handleChange} />
                mm
              </label>
            </div>
            <label for="image">Choose a profile picture:</label>
              <input type="file"
                   id="image" name="image"
                   accept="image/png, image/jpeg" />
            <label>
            Notes
              <textarea>
                Hello there, this is some text in a text area
              </textarea>
            </label>
            <input type="submit" value="Submit" />
          </form>
        </section>
      </div>
     )}
  // : JSX provides a nicer coding approach

}

export default App; // export the class by default
