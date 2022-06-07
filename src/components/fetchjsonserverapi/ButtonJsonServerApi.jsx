import React from 'react'

const ButtonJsonServerApi = ({ buttonText, reqType,
    setReqType }) => {
    return (
        <button
            className={buttonText === reqType ? 'selected' : 'null'}
            type='button'
            onClick={() => setReqType(buttonText)}
        >
            {buttonText}
        </button>
    )
}

export default ButtonJsonServerApi