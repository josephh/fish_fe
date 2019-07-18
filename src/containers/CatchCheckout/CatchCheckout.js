import React, {Component} from 'react';
import CatchSummary from '../../components/catch/CatchSummary/CatchSummary';

class CatchCheckout extends Component {

  state = {
    details: {
      species: 'trout',
      weight: '22',
      length: '11'
    }
  }

  render() {
    return (
      // this div wraps the entire page
      <div>
        <CatchSummary details={this.state.details} />
      </div>
    )
  }
}

export default CatchCheckout
