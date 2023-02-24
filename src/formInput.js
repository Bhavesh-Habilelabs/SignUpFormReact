import React from 'react'
import "./formInput.css"

export const FormInput = (props) => {
    const {
        id,
        label,
        handleChange,
        valid,
        setValid,
        errorMsg,
        ...inputProps
    } = props

    const handleBlur = (e) => {
        let val = e.target.value
        setValid({
            ...valid,
            [e.target.name]: !!val
        })
    }

    return (
        <div className='formInput'>
            <div className='inputBox'>
                <label htmlFor="id">{label}</label>
                <input
                    {...inputProps}
                    onBlur={handleBlur}
                />
            </div>
            <div className='errorBox'>
                <span style={{display: `${!valid[inputProps.name] ? "initial" : "none"}`}} >{errorMsg}</span>
            </div>
        </div>
    )
}
