import { httpClient } from './httpClient'

const USER_API_URL = 'http://' + window.location.hostname + ':8000/api-token-auth/'

const getToken = (username, password) => {
    return httpClient.post(USER_API_URL, {
        'username': username,
        'password': password
    })
}

const UserApi = { getToken }

export {UserApi}
