const axios = require('axios')

const fetchData = async (url) => {
    try {
        const response = await axios.get(url)
        return response.data.quote
    } catch (error) {
        console.log(error)
    }
}

module.exports = fetchData