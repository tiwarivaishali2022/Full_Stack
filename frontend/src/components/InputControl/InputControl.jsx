import React from 'react'
import styles from "./InputControl.css"

function InputControl(props) {
  return (
    <div>
      <div className={styles.container}>
        {props.label && <label>{props.label}</label>}
        <input type='text' {...props} />
      </div>
    </div>
  )
}

export default InputControl;
