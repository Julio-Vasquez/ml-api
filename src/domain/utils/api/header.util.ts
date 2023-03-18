export const getHeader = (params = {}) => {
    return {
        params,
        headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
            'Access-Control-Allow-Origin': 'https://javascript.info',
        },
    }
}
