import React from 'react';

import classes from './Input.css';

// functional form of component implementation
const input = ( props ) => {
    let inputElement = null;

    // rather than just having an <input>, we make it more generic by testing
    //  what kind of html element we are dealing with
    // (the switch statement allows us to avoid having to provide a wrapper for every html element type)
    switch ( props.elementType ) {
        case ( 'input' ):
            inputElement = <input
                className={classes.InputElement}
                // distribute all the config items (must use actual html property names)
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'textarea' ):
            inputElement = <textarea
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={classes.InputElement}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        case ( 'radio' ):
            inputElement = (
                <input
                    type="radio"
                    className={classes.InputElement}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed}
                    checked={props.checked ? true : ''}>
                </input>
            );
            break;
        default:
            inputElement = <input
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
      // return a div - to act as a container - so that multiple elements can be returned
        <div className={classes.Input}>
        {/* prop is expected to be passed in - 'label' */}
            <label className={classes.Label}>{props.label}</label>
            {/* having created it above, output the inputElement object */}
            {inputElement}
        </div>
    );

};

export default input;
