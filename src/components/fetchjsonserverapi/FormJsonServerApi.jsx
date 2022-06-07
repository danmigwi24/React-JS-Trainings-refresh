import React from 'react'
import ButtonJsonServerApi from './ButtonJsonServerApi'

const FormJsonServerApi = ({ reqType, setReqType }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <ButtonJsonServerApi
                buttonText='users'
                reqType={reqType}
                setReqType={setReqType}
            /><ButtonJsonServerApi
                buttonText='posts'
                reqType={reqType}
                setReqType={setReqType}
            /><ButtonJsonServerApi
                buttonText='comments'
                reqType={reqType}
                setReqType={setReqType}
            />
        </form>
    )
}

export default FormJsonServerApi