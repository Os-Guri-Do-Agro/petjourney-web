'use client'

import { useState, useEffect, useRef, Fragment } from 'react'
import { Loader2, ChevronDown, Check } from 'lucide-react'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Transition } from '@headlessui/react'
import { marketingService } from '@/service/marketing/marketing-server'
import gsap from 'gsap'
import toast, { Toaster } from 'react-hot-toast'
import Link from 'next/link'
import { event } from '@/lib/gtag'


const perfis = [
    { id: '', name: 'Selecione seu perfil' },
    { id: 'TUTOR', name: 'Tutor' },
    { id: 'VETERINARIO', name: 'Veterinário' },
    { id: 'CLINICA', name: 'Clínica' }
]

export default function ListaEspera() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: ''
    })
    const [selectedPerfil, setSelectedPerfil] = useState(perfis[0])
    const [errors, setErrors] = useState({
        nome: '',
        email: '',
        telefone: ''
    })
    const [loading, setLoading] = useState(false)

    const leftPanelRef = useRef(null)
    const dogIconRef = useRef(null)
    const formRef = useRef(null)
    const formFieldsRef = useRef<(any)[]>([])

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(leftPanelRef.current, {
                x: -100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })

            gsap.from(dogIconRef.current, {
                y: -50,
                opacity: 0,
                duration: 1.2,
                delay: 0.3,
                ease: 'power3.out'
            })

            gsap.from(formRef.current, {
                x: 100,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            })

            gsap.from(formFieldsRef.current, {
                y: 30,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                delay: 0.5,
                ease: 'power2.out'
            })
        })

        return () => ctx.revert()
    }, [])

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }

    const validatePhone = (phone: string) => {
        const cleaned = phone.replace(/\D/g, '')
        return cleaned.length === 11
    }

    const validateName = (name: string) => {
        return name.trim().length >= 3
    }

    const handleSubmit = async(e: React.FormEvent) => {
        e.preventDefault()
        
        const newErrors = {
            nome: '',
            email: '',
            telefone: ''
        }

        if (!validateName(formData.nome)) {
            newErrors.nome = 'Nome deve ter pelo menos 3 caracteres'
        }

        if (!validateEmail(formData.email)) {
            newErrors.email = 'E-mail inválido'
        }

        if (!validatePhone(formData.telefone)) {
            newErrors.telefone = 'Telefone deve ter 11 dígitos'
        }

        setErrors(newErrors)

        if (newErrors.nome || newErrors.email || newErrors.telefone) {
            return
        }

        setLoading(true)
        try {
            await marketingService.postWhiteList({
                perfil: selectedPerfil.id,
                nome: formData.nome,
                email: formData.email,
                telefone: formData.telefone.replace(/\D/g, '')
            })
            toast.success('Cadastro realizado com sucesso!')
            event({
                action: 'form_submit',
                category: 'lista_espera',
                label: selectedPerfil.name,
            })
            setFormData({ nome: '', email: '', telefone: '' })
            setSelectedPerfil(perfis[0])
        } catch (error) {
            toast.error('Erro ao adicionar à lista de espera')
            event({
                action: 'form_error',
                category: 'lista_espera',
                label: 'Erro na API',
            })
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<any>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        setErrors({ ...errors, [name]: '' })
    }

    const handlePhoneChange = (e: React.ChangeEvent<any>) => {
        const value = e.target.value.replace(/\D/g, '')
        const formatted = value
            .replace(/^(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .slice(0, 15)
        setFormData({ ...formData, telefone: formatted })
        setErrors({ ...errors, telefone: '' })
    }

    return (
        <div className="min-h-screen flex">
            <Toaster position="top-right" />
            <div ref={leftPanelRef} className="hidden lg:flex lg:w-1/2 bg-linear-to-br from-[#1D3557] via-[#457b9d] to-[#1D3557] relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-20 w-60 h-60 bg-white/50 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-80 h-80 bg-white/50 rounded-full blur-3xl"></div>
                </div>
                <div className="relative z-10 flex flex-col items-center justify-center w-full p-16 text-center">
                    <div ref={dogIconRef} className=" rounded-full mb-8">
                        <Link href={'/'}>
                        <img className='w-90 h-auto' src="./logo-total.png" alt="" />                        
                        </Link>

                    </div>
                    <h1 className="text-5xl font-bold text-[#FAF9F6] mb-6">Bem-vindo ao PetJourney</h1>
                    <p className="text-[#FAF9F6]/90 text-xl max-w-md leading-relaxed">
                        O histórico completo do seu pet, acessível quando você precisar. Organize vacinas, exames e prescrições em um só lugar.
                    </p>
                </div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-[#FAF9F6]">
                <div ref={formRef} className="w-full max-w-md">
                    <div className="w-full items-center justify-center flex mb-10 lg:hidden">
                        <Link href={'/'}>
                        <img className='w-60 h-auto object-contain' src="./logo-com-pata.png" alt="logo" />                        
                        </Link>
                    </div>
                    <div ref={el => { formFieldsRef.current[0] = el }} className="mb-8">
                        <h2 className="text-3xl font-bold text-[#1D3557] mb-2 text-center lg:text-start">Entre na lista de espera</h2>
                        <p className="text-[#457B9D] text-lg text-center lg:text-start">Preencha os dados abaixo para fazer parte</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div ref={el => { formFieldsRef.current[1] = el }} className="relative z-20">
                            <Listbox value={selectedPerfil} onChange={setSelectedPerfil}>
                                <label className="block text-[#1D3557] font-semibold mb-2">Perfil</label>
                                <ListboxButton className="relative w-full border-b-2 border-[#457B9D]/30 focus:border-[#1D3557] outline-none px-2 py-3 bg-[#FAF9F6] text-[#1D3557] transition-colors cursor-pointer text-left">
                                    <span className="block truncate">{selectedPerfil.name}</span>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <ChevronDown className="w-5 h-5 text-[#457B9D]" />
                                    </span>
                                </ListboxButton>
                                <Transition
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <ListboxOptions className="absolute z-10 mt-1 w-full bg-white border border-[#457B9D]/30 rounded-lg shadow-lg max-h-60 overflow-auto focus:outline-none">
                                        {perfis.map((perfil) => (
                                            <ListboxOption
                                                key={perfil.id}
                                                value={perfil}
                                                className="relative cursor-pointer select-none py-3 pl-10 pr-4 data-focus:bg-[#457B9D] data-focus:text-white bg-white text-[#1D3557]"
                                            >
                                                {({ selected }) => (
                                                    <>
                                                        <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                                                            {perfil.name}
                                                        </span>
                                                        {selected && (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#457B9D] data-focus:text-white">
                                                                <Check className="w-5 h-5" />
                                                            </span>
                                                        )}
                                                    </>
                                                )}
                                            </ListboxOption>
                                        ))}
                                    </ListboxOptions>
                                </Transition>
                            </Listbox>
                        </div>

                        <div ref={el => { formFieldsRef.current[2] = el }}>
                            <label className="block text-[#1D3557] font-semibold mb-2">Nome</label>
                            <input 
                                type="text" 
                                name="nome" 
                                value={formData.nome} 
                                onChange={handleChange}
                                placeholder="Digite seu nome"
                                className={`w-full border-b-2 ${errors.nome ? 'border-red-500' : 'border-[#457B9D]/30'} focus:border-[#1D3557] outline-none px-2 py-3 bg-transparent text-[#1D3557] placeholder:text-[#457B9D]/50 transition-colors`}
                            />
                            {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome}</p>}
                        </div>

                        <div ref={el => { formFieldsRef.current[3] = el }}>
                            <label className="block text-[#1D3557] font-semibold mb-2">E-mail</label>
                            <input 
                                type="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange}
                                placeholder="exemplo@email.com"
                                className={`w-full border-b-2 ${errors.email ? 'border-red-500' : 'border-[#457B9D]/30'} focus:border-[#1D3557] outline-none px-2 py-3 bg-transparent text-[#1D3557] placeholder:text-[#457B9D]/50 transition-colors`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div ref={el => { formFieldsRef.current[4] = el }}>
                            <label className="block text-[#1D3557] font-semibold mb-2">Telefone</label>
                            <input 
                                type="tel" 
                                name="telefone" 
                                value={formData.telefone} 
                                onChange={handlePhoneChange}
                                placeholder="(00) 00000-0000"
                                className={`w-full border-b-2 ${errors.telefone ? 'border-red-500' : 'border-[#457B9D]/30'} focus:border-[#1D3557] outline-none px-2 py-3 bg-transparent text-[#1D3557] placeholder:text-[#457B9D]/50 transition-colors`}
                                required
                            />
                            {errors.telefone && <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>}
                        </div>

                        <button 
                            ref={el => { formFieldsRef.current[5] = el }}
                            type="submit"
                            disabled={loading}
                            className="w-full bg-linear-to-l from-[#457b9d] to-[#1D3557] text-white font-bold py-4 rounded-xl shadow-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Enviando...
                                </>
                            ) : (
                                'Entrar na lista'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}