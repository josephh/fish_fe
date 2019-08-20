import React, {Component} from 'react';
import Button from '../../components/UI/Button/Button';

class NewCatch extends Component {

  state = {  }

  saveCancelled = () => {
    this.props.history.replace('/');
  }

  saveConfirmed = () => {
    this.props.history.replace('/save');
  }

  render() {
    return (
      // this div wraps the entire page
      <div>
        <p>New Catch container</p>
        <section className="store-catch">
          <form onSubmit={this.handleSubmit} className="store-catch-form">
            <label htmlFor="species">Species
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
              <label htmlFor="weight-integer">
                <input id="weight-integer" type="number" value={this.state.value} onChange={this.handleChange} />
                Lb
              </label>
              <label htmlFor="weight-fraction">
                <input id="weight-fraction" type="number" value={this.state.value} onChange={this.handleChange} />
                Oz
              </label>
            </div>
            <div id="weight-metric" className="store-catch-form-weight">
              <label htmlFor="weight-integer">
                <input id="weight-integer" type="number" value={this.state.value} onChange={this.handleChange} />
                G
              </label>
              <label htmlFor="weight-fraction">
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
              <label htmlFor="height-integer">
                <input id="height-integer" type="number" value={this.state.value} onChange={this.handleChange} />
                feet
              </label>
              <label htmlFor="height-fraction">
                <input id="height-fraction" type="number" value={this.state.value} onChange={this.handleChange} />
                inches
              </label>
            </div>
            <div id="height-metric" className="store-catch-form-height">
              <label htmlFor="height-integer">
                <input id="height-integer" type="number" value={this.state.value} onChange={this.handleChange} />
                cm
              </label>
              <label htmlFor="height-fraction">
                <input id="height-fraction" type="number" value={this.state.value} onChange={this.handleChange} />
                mm
              </label>
            </div>
            <label htmlFor="image">Choose a profile picture:</label>
              <input type="file"
                   id="image" name="image"
                   accept="image/png, image/jpeg" />
            <label>
            Notes
              <textarea value="Hello there, this is some text in a text area" onChange={this.handleChange}>
              </textarea>
            </label>
            <Button btnType="Danger" clicked={this.saveCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={this.saveConfirmed}>Save</Button>
          </form>
        </section>
      </div>
    )
  }
}

export default NewCatch
