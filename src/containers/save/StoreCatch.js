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

  saveCancelledHandler = () => {
    this.props.history.goBack();
  }

  saveConfirmedHandler = () => {
    this.props.history.replace('/save/summary')
  }

  render() {
    return (
      <div>
        <CatchSummary
          details={this.state.details}
          saveConfirmed={this.saveConfirmedHandler}
          saveCancelled={this.saveCancelledHandler}/>
      </div>
    )
  }
}

export default CatchCheckout
