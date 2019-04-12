import React, {
  Component
} from 'react';

import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './CatchData.css';
import axios from '../../axios-catches';
import Input from '../../components/UI/Input/Input';

class CatchData extends Component {
  state = {
    catchForm: {
      species: {
        elementType: 'select',
        elementConfig: {
          options: [{
              value: 'pike',
              displayValue: 'Pike'
            },
            {
              value: 'grayling',
              displayValue: 'Grayling'
            },
            {
              value: 'chub',
              displayValue: 'Chub'
            },
            {
              value: 'trout',
              displayValue: 'Trout'
            },
            {
              value: 'dace',
              displayValue: 'Dace'
            },
            {
              value: 'roach',
              displayValue: 'Roach'
            }
          ]
        },
        value: '',
        validation: {},
        valid: true
      },
      imperialWeight: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'weight in lb, oz'
        },
        value: '',
        validation: {
          required: true,
          isNumeric: true
        },
        valid: false,
        touched: false
      },
      metricWeight: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'weight in grams'
        },
        value: '',
        validation: {
          required: true,
          isNumeric: true
        },
        valid: false,
        touched: false
      },
      metricLength: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'length in cm'
        },
        value: '',
        validation: {
          required: true,
          isNumeric: true
        },
        valid: false,
        touched: false
      },
      imperialLength: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'length in feet and inches'
        },
        value: '',
        validation: {
          required: true,
          isNumeric: true
        },
        valid: false,
        touched: false
      },
      latitude: {
        elementType: 'input',
        elementConfig: {
          // note, type value here needs to match actual html types
          type: 'text',
          placeholder: 'Latitude'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      longitude: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Longitude'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      }
      // angler
      // photoUrls
      // id
    },
    formIsValid: false,
    loading: false
  }

  uploadHandler = (event) => {
    // don't send a request automatically - that would reload the page
    event.preventDefault();
    this.setState({
      loading: true
    });
    // get the data from state - when the form is submitted
    const formData = new FormData();
    // add an 'angler' in the absence of a logged in user
    formData.set('angler', 'kong')
    for (let formElementIdentifier in this.state.catchForm) {
      formData.set(formElementIdentifier, this.state.catchForm[formElementIdentifier].value) ;
    }

    axios.post('/api/catches', formData)
      .then(response => {
        this.setState({
          loading: false
        });
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({
          loading: false
        });
      });
  }

  checkValidity(value, rules) {
    let isValid = true;

    if (!rules) {
      return true;
    }

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length>= rules.minLength && isValid
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
      const pattern = /^\d+$/;
      isValid = pattern.test(value) && isValid
    }

    console.log(`isValid for ${value} : ${isValid}`)

    return isValid;
  }

  // this method needs both
  // 1. the input value (event.target.value) and,
  // 2. an identifier for the 'element' of state to update
  inputChangedHandler = (event, inputIdentifier) => {
    // mutation is done (immutably!) via setState(...) and should always start by making a copy of existing state
    // to copy the state we clone it, one level of properties at a time
    const updatedCatchForm = {
      ...this.state.catchForm
    }
    // we also want to get child elements - as far as 'value'...
    // ...so use the identifier to clone an element deeper inside the cloned form
    const updatedCatchFormElement = {
      ...updatedCatchForm[inputIdentifier]
    }
    updatedCatchFormElement.value = event.target.value
    updatedCatchFormElement.valid = this.checkValidity(updatedCatchFormElement.value, updatedCatchFormElement.validation)
    // now we can update the copy, ahead of updating the state
    updatedCatchForm[inputIdentifier] = updatedCatchFormElement
    this.setState({
      catchForm: updatedCatchForm,
      formIsValid: updatedCatchFormElement.valid
    })
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.catchForm) {
      // 'key'(s) here are just the property names
      formElementsArray.push({
        id: key,
        config: this.state.catchForm[key]
      });
    }
    let form = (
      <form onSubmit = { this.uploadHandler }> {
        formElementsArray.map(formElement => (
          <Input
            key = { formElement.id }
            elementType = { formElement.config.elementType }
            elementConfig = { formElement.config.elementConfig }
            value = { formElement.config.value }
            // invalid = { !formElement.config.valid } shouldValidate = { formElement.config.validation }
            invalid = { !formElement.config.valid }
            // shouldValidate = { formElement.config.validation }
            touched = { formElement.config.touched }
            changed = { (event) => this.inputChangedHandler(event, formElement.id) }
          />
        ))
        }
        <Button btnType = "Success" disabled = { !this.state.formIsValid }> UPLOAD </Button>
      </ form>
    );
    if (this.state.loading) {
      form = <Spinner /> ;
    }
    return (
      <div className = { classes.ContactData }>
        <h4> Upload your Catch Data </h4> { form }
      </div>
  );
}
}

export default CatchData;
