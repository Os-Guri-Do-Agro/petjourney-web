import { apiClient } from '../api'

export const artigoService = {

    handlerequest<T>(promise: Promise<T>): Promise<T> {
        return promise
    },

    getAllArtigos(page: number, limit: number, categoriaArtigoId: string, titulo: string): Promise<any> {
        return this.handlerequest(
            apiClient.get(`/artigo?page=${page}&limit=${limit}&categoriaArtigoId=${categoriaArtigoId}&titulo=${titulo}`)
        )
        'Erro ao buscar Artigos'
    },

    getArtigoById(id: string): Promise<any> {
        return this.handlerequest(
            apiClient.get(`/artigo/${id}`)
        )
        'Erro ao buscar Artigo por id'
    }
}