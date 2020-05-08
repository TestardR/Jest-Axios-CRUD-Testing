const axios = require('axios')

const fetchData = async (url) => {
    try {
        const response = await axios.get(url)
        return response.data.quote
    } catch (error) {
        console.log(error)
    }
}



const postData = async (url) => {
    const params = {
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }

    try {
        const response = await axios.post(url, params)
        return response.data.body
    } catch (error) {
        console.log(error)
    }
}

module.exports = { fetchData, postData }