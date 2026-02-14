import { apiClient } from '../api'

export const categoriaArtigoService = {

    handlerequest<T>(promise: Promise<T>): Promise<T> {
        return promise
    },

    getAllCategoriaArtigo(): Promise<any> {
        return this.handlerequest(
            apiClient.get('/categoria-artigo')
        )
        'Erro ao buscar Artigos'
    },


}