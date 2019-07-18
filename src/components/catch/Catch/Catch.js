import React from 'react';

const catchDetails = ( props ) => {
    console.log('Catch input props? ', props.details);

    return (
        <div>
            <ul> {props.details ?
              Object.keys(props.details).map(elem => (
                <li>{elem} : {props.details[elem]}</li>
              )) : ''}
            </ul>
        </div>
    );
};

export default catchDetails;
