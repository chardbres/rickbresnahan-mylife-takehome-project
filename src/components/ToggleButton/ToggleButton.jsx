import React from 'react'
import Button from 'react-bootstrap/Button'
import './ToggleButton.scss'

const ToggleButton = props => {

    const setVariant = type => {
        return type === true ? 'dark' : 'outline-dark'
    }

    return (
        <Button className='toggleButton' variant={setVariant(props.selected)} onClick={props.handleChange} >{props.name}</Button>
    )
}

export default ToggleButton