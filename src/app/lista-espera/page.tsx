'use client'

import { useState } from 'react'
import { Dog } from 'lucide-react'

export default function ListaEspera() {
    const [formData, setFormData] = useState({
        perfil: '',
        nome: '',
        email: '',
        telefone: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="min-h-screen flex">
            <div className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-[#1D3557] via-[#457b9d] to-[#1D3557] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-60 h-60 bg-white/50 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/50 rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center w-full p-16 text-center">
                    <div className="bg-white/20 backdrop-blur-sm p-8 rounded-full mb-8">
                        <Dog className="w-24 h-24 text-[#FAF9F6]" />
                    </div>
                    <h1 className="text-5xl font-bold text-[#FAF9F6] mb-6">Bem-vindo ao PetJourney</h1>
                    <p className="text-[#FAF9F6]/90 text-xl max-w-md leading-relaxed">
                        O histórico completo do seu pet, acessível quando você precisar. Organize vacinas, exames e prescrições em um só lugar.
                    </p>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#FAF9F6]">
                <div className="w-full max-w-md">
                    <div className="mb-8">
                        <h2 className="text-3xl font-bold text-[#1D3557] mb-2">Entre na lista de espera</h2>
                        <p className="text-[#457B9D] text-lg">Preencha os dados abaixo para fazer parte</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-[#1D3557] font-semibold mb-2">Perfil</label>
                            <select 
                                name="perfil" 
                                value={formData.perfil} 
                                onChange={handleChange}
                                className="w-full border-b-2 border-[#457B9D]/30 focus:border-[#1D3557] outline-none px-2 py-3 bg-transparent text-[#1D3557] transition-colors"
                                required
                            >
                                <option value="">Selecione seu perfil</option>
                                <option value="Tutor">Tutor</option>
                                <option value="Veterinário">Veterinário</option>
                                <option value="Clínica">Clínica</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-[#1D3557] font-semibold mb-2">Nome</label>
                            <input 
                                type="text" 
                                name="nome" 
                                value={formData.nome} 
                                onChange={handleChange}
                                placeholder="Digite seu nome"
                                className="w-full border-b-2 border-[#457B9D]/30 focus:border-[#1D3557] outline-none px-2 py-3 bg-transparent text-[#1D3557] placeholder:text-[#457B9D]/50 transition-colors"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-[#1D3557] font-semibold mb-2">E-mail</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange}
                                placeholder="Digite seu e-mail"
                                className="w-full border-b-2 border-[#457B9D]/30 focus:border-[#1D3557] outline-none px-2 py-3 bg-transparent text-[#1D3557] placeholder:text-[#457B9D]/50 transition-colors"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-[#1D3557] font-semibold mb-2">Telefone</label>
                            <input 
                                type="tel" 
                                name="telefone" 
                                value={formData.telefone} 
                                onChange={handleChange}
                                placeholder="Digite seu telefone"
                                className="w-full border-b-2 border-[#457B9D]/30 focus:border-[#1D3557] outline-none px-2 py-3 bg-transparent text-[#1D3557] placeholder:text-[#457B9D]/50 transition-colors"
                                required
                            />
                        </div>

                        <button 
                            type="submit"
                            className="w-full bg-linear-to-l from-[#457b9d] to-[#1D3557] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                        >
                            Entrar na lista
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}