import axios from 'axios'

const getAxiosInstance = () => {
    let token = localStorage.getItem('token')
    if (token) {
        return axios.create({
            headers: {Authorization: 'JWT ' + token}
        })
    } else {
        return axios.create()
    }
}

const post = (url = '', data = '', config = {}) => {
    return getAxiosInstance().post(url, data, config)
}

const get = (url) => {
    return getAxiosInstance().get(url)
}

const put = (url = '', data ='', config = {}) => {
    return getAxiosInstance().put(url,  data, config)
}

const del = (url = '', config = {}) => {
    return getAxiosInstance().delete(url, config)
}


const httpClient = {
    post,
    get,
    put,
    delete: del
}

export {httpClient}
