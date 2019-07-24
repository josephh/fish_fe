import React from 'react'
import Catch from '../Catch/Catch'
import Button from '../../UI/Button/Button'
import './CatchSummary.css'

// functional style of declaration
const catchSummary = (props) => {
  console.log('props ? ', props.details)
  return (
    <div className='CatchSummary'>
      <h1>Happy to store these catch details?</h1>
      <div style={{width: '300px', height: '300px', margin: 'auto'}}>
        <Catch details={props.details}/>
        <Button
          btnType="Danger"
          clicked>Cancel</Button>
        <Button
          btnType="Success"
          clicked>Ok</Button>
      </div>
    </div>
  )
}

export default catchSummary;
