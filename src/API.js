import axios from 'axios'

import helpers from './helpers'

export const client = () => {
    let token = null

    axios.defaults.baseURL = 'http://localhost:3000/'

    const defaultOptions = token ? {
        headers: {
            Authorization: `Bearer ${token}`
        },
    } : {}

    // Add a request
    axios.interceptors.request.use((config) => {
        helpers.showSplashScreen()

        return config
    }, (error) => {
        //TODO: log error
    })

    // Add a response
    axios.interceptors.response.use((response) => {
        helpers.hideSplashScreen()

        return response
    }, (err) => {
        //TODO: error
        helpers.hideSplashScreen()

        throw err
    })

    return {
        get: (url, options = {}) => axios.get(url, {...defaultOptions, ...options}),
        post: (url, data, options = {}) => axios.post(url, data, {...defaultOptions, ...options}),
        put: (url, data, options = {}) => axios.put(url, data, {...defaultOptions, ...options}),
        delete: (url, options = {}) => axios.delete(url, {...defaultOptions, ...options}),
    }
}

/**
 * Helper transform data from Api response.
 *
 * @param response
 */
// export const transFormData = (response) => {
//     if (response.status) {
//         return response.data
//     }
//
//     return response.error
// }
