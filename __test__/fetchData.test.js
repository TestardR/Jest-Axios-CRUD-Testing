const fetchData = require('../fetchData')
const mockAxios = require('axios')

it('calls axios and returns a quote', async () => {
    mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve({
            data: {
                quote: 'This is my quote'
            }
        })
    )

    const quote = await fetchData("https://api.kanye.rest/")

    expect(quote).toEqual('This is my quote')
    expect(mockAxios.get).toHaveBeenCalledTimes(1)
    expect(mockAxios.get).toHaveBeenCalledWith("https://api.kanye.rest/")
})