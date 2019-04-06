import React, { Component } from 'react';

import CatchData from '../CatchData/CatchData';

class UploadCatch extends Component {

    state = {
    }

    componentWillMount () {

    }

    uploadCancelledHandler = () => {
        this.props.history.goBack();
    }

    uploadContinuedHandler = () => {
        // this.props.history.replace( '/upload/catch-data' );
    }

    render () {
        return (
            <div>
                <CatchData  />
            </div>
        );
    }
}

export default UploadCatch;
