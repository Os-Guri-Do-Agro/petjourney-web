'use client'

import { useState, useEffect, useRef, Fragment } from 'react'
import { Loader2, ChevronDown, Check } from 'lucide-react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Transition, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
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
    const [showSuccessModal, setShowSuccessModal] = useState(false)

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
            setShowSuccessModal(true)
            
            // Extract UTM params from the URL search string
            const searchParams = new URLSearchParams(window.location.search)
            const utmSource = searchParams.get('utm_source') || 'direct'
            const utmMedium = searchParams.get('utm_medium') || 'none'
            const utmCampaign = searchParams.get('utm_campaign') || 'none'

            const utmString = ` | Source: ${utmSource} | Medium: ${utmMedium} | Campaign: ${utmCampaign}`

            event({
                action: 'form_submit',
                category: 'lista_espera',
                label: selectedPerfil.name + utmString
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
            
            <Transition show={showSuccessModal}>
                <Dialog as="div" className="relative z-50" onClose={() => setShowSuccessModal(false)}>
                    <div className="fixed inset-0 bg-black/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in" />

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-8 text-center shadow-xl transition-all data-closed:scale-95 data-closed:opacity-0 data-enter:duration-300 data-leave:duration-200 data-enter:ease-out data-leave:ease-in">

                                    <div className="mb-6">
                                        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                            <Check className="w-8 h-8 text-green-600" />
                                        </div>
                                        <DialogTitle className="text-2xl font-bold text-[#1D3557] mb-2">
                                            Você está na lista!
                                        </DialogTitle>
                                        <p className="text-[#457B9D] text-lg">
                                            Siga a PetJourney nas redes sociais e fique por dentro de todas as novidades!
                                        </p>
                                    </div>

                                    <div className="flex gap-4 relative z-10 justify-center mb-6">
                                        <a
                                          href="https://www.instagram.com/petjourney.health/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="w-14 h-14 rounded-full bg-[#FAF9F6] border border-gray-100 flex items-center justify-center text-[#1D3557] hover:bg-[#457B9D] hover:text-white transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-md group"
                                        >
                                          <span className="sr-only">Instagram</span>
                                          <svg
                                            className="w-6 h-6 group-hover:scale-110 transition-transform"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                          </svg>
                                        </a>
                                        <a
                                          href="https://www.facebook.com/petjourney.health/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="w-14 h-14 rounded-full bg-[#FAF9F6] border border-gray-100 flex items-center justify-center text-[#1D3557] hover:bg-[#457B9D] hover:text-white transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-md group"
                                        >
                                          <span className="sr-only">Facebook</span>
                                          <svg
                                            className="w-6 h-6 group-hover:scale-110 transition-transform"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                          </svg>
                                        </a>
                                        <a
                                          href="https://www.linkedin.com/company/petjourney"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="w-14 h-14 rounded-full bg-[#FAF9F6] border border-gray-100 flex items-center justify-center text-[#1D3557] hover:bg-[#457B9D] hover:text-white transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-md group"
                                        >
                                          <span className="sr-only">LinkedIn</span>
                                          <svg
                                            className="w-6 h-6 group-hover:scale-110 transition-transform"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                          </svg>
                                        </a>
                                    </div>

                                    <Link
                                        href="/"
                                        className="block w-full bg-[#1D3557] hover:bg-[#457B9D] text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer text-center"
                                    >
                                        Voltar
                                    </Link>
                                </DialogPanel>
                        </div>
                    </div>
                </Dialog>
            </Transition>
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