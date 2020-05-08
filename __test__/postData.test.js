const { postData } = require('../index')
const mockAxios = require('axios')

it('calls POST axios and returns a body', async () => {
    mockAxios.post.mockImplementationOnce(() =>
        Promise.resolve({
            data: {
                body: '{"title":"foo","body":"bar","userId":1}'
            }
        })
    )

    const result = await postData('https://jsonplaceholder.typicode.com/posts')

    expect(result).toEqual('{"title":"foo","body":"bar","userId":1}')
    expect(mockAxios.post).toHaveBeenCalledTimes(1)
    expect(mockAxios.post).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts', {
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
})

