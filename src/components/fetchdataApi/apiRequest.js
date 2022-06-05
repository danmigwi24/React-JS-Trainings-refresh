

const apiRequest = async (url = '', optionObj = null, errMsg = null) => {
    try {

        const response = await fetch(url, optionObj)
        if (!response.ok) throw Error('Please reload the application')
        console.log(`======${response.ok}===${JSON.stringify(optionObj)}===== \n${JSON.stringify(response.json())}`)
    } catch (error) {
        errMsg = error.message
    } finally {
        return errMsg
    }
}

export default apiRequest;