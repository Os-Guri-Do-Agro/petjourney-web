import { apiClient } from '../api'

export const marketingService = {

    handlerequest<T>(promise: Promise<T>): Promise<T> {
        return promise
    },

    postNewSletter(data: any): Promise<any> {
        return this.handlerequest(
            apiClient.post('/marketing/subscription-newslatter', data)
        )
    },

    postWhiteList(data: any): Promise<any> {
        return this.handlerequest(
            apiClient.post('/marketing/subscription-whitelist', data)
        )
    },

    postContact(data: any): Promise<any> {
        return this.handlerequest(
            apiClient.post('/marketing/contact', data)
        )
    }
}