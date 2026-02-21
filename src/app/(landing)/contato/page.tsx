'use client'
import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { Mail, Phone, MapPin, Send, ChevronDown, Check } from 'lucide-react'
import { Listbox, ListboxButton, ListboxOptions, ListboxOption, Transition } from '@headlessui/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import tutor from '../../../assets/home/tutor.jpg'
import coelho from '../../../assets/home/coelho.jpg'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const assuntos = [
    { id: 'duvida', name: 'Dúvida' },
    { id: 'suporte', name: 'Suporte' },
    { id: 'parceria', name: 'Parceria' },
    { id: 'outro', name: 'Outro' }
]

export default function Contato() {
    const [mounted, setMounted] = useState(false)
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    })
    const [selectedAssunto, setSelectedAssunto] = useState(assuntos[0])

    const heroRef = useRef<any>(null)
    const formRef = useRef<any>(null)
    const imageRef = useRef<any>(null)
    const ctaRef = useRef<any>(null)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return

        const ctx = gsap.context(() => {
            if (heroRef.current?.children) {
                gsap.from(Array.from(heroRef.current.children), {
                    opacity: 0,
                    y: 50,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power3.out'
                })
            }

            if (formRef.current) {
                gsap.from(formRef.current, {
                    scrollTrigger: {
                        trigger: formRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 0,
                    x: -50,
                    duration: 1,
                    ease: 'power3.out'
                })
            }

            if (imageRef.current) {
                gsap.from(imageRef.current, {
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 0,
                    x: 50,
                    duration: 1,
                    ease: 'power3.out'
                })
            }

            if (ctaRef.current) {
                gsap.from(ctaRef.current, {
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    },
                    scale: 0.95,
                    opacity: 0,
                    duration: 1,
                    ease: 'power2.out'
                })
            }
        })

        return () => ctx.revert()
    }, [mounted])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <div className="min-h-screen bg-[#FAF9F6]">
            {/* Hero Section */}
            <section className="relative h-[50vh] bg-[url('../assets/home/bg-web.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 bg-black/40" />
                <div ref={heroRef} className="relative z-10 h-full flex flex-col items-center justify-center text-white px-5">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Entre em Contato</h1>
                    <p className="text-xl md:text-2xl text-gray-200 text-center max-w-2xl">
                        Estamos aqui para cuidar da jornada do seu pet
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="px-5 md:px-20 lg:px-30 -mt-16 relative z-20">
                <div className="grid md:grid-cols-3 gap-6 mb-20">
                    <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-transform">
                        <div className="bg-[#457B9D] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1D3557] mb-2">Email</h3>
                        <p className="text-gray-600">atendimento@petjourney.health</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-transform">
                        <div className="bg-[#457B9D] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1D3557] mb-2">Telefone</h3>
                        <p className="text-gray-600">(11) 9999-9999</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-transform">
                        <div className="bg-[#457B9D] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MapPin className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-[#1D3557] mb-2">Localização</h3>
                        <p className="text-gray-600">São Paulo, SP</p>
                    </div>
                </div>
            </section>

            {/* Form Section */}
            <section className="px-5 md:px-20 lg:px-30 py-10">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Form */}
                    <div ref={formRef} className="bg-white p-8 rounded-2xl shadow-xl">
                        <h2 className="text-3xl font-bold text-[#1D3557] mb-6">Envie sua mensagem</h2>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Nome</label>
                                <input
                                    type="text"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#457B9D] transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#457B9D] transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Telefone</label>
                                <input
                                    type="tel"
                                    name="telefone"
                                    value={formData.telefone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#457B9D] transition-all"
                                />
                            </div>

                            <div className="relative z-20">
                                <Listbox value={selectedAssunto} onChange={setSelectedAssunto}>
                                    <label className="block text-gray-700 font-semibold mb-2">Assunto</label>
                                    <ListboxButton className="relative w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#457B9D] bg-white text-left cursor-pointer transition-all">
                                        <span className="block truncate">{selectedAssunto.name}</span>
                                        <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                            <ChevronDown className="w-5 h-5 text-gray-400" />
                                        </span>
                                    </ListboxButton>
                                    <Transition
                                        leave="transition ease-in duration-100"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <ListboxOptions className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto focus:outline-none">
                                            {assuntos.map((assunto) => (
                                                <ListboxOption
                                                    key={assunto.id}
                                                    value={assunto}
                                                    className="relative cursor-pointer select-none py-3 pl-10 pr-4 data-focus:bg-[#457B9D] data-focus:text-white bg-white text-gray-900"
                                                >
                                                    {({ selected }) => (
                                                        <>
                                                            <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                                                                {assunto.name}
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

                            <div>
                                <label className="block text-gray-700 font-semibold mb-2">Mensagem</label>
                                <textarea
                                    name="mensagem"
                                    value={formData.mensagem}
                                    onChange={handleChange}
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#457B9D] resize-none transition-all"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#457B9D] hover:bg-[#1D3557] text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <Send className="w-5 h-5" />
                                Enviar Mensagem
                            </button>
                        </form>
                    </div>

                    {/* Image */}
                    <div ref={imageRef} className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src={tutor}
                            alt="Contato Pet Journey"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-5 md:px-20 lg:px-30 py-20">
                <div ref={ctaRef} className="bg-[#457B9D] rounded-2xl overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        <div className="relative h-[400px]">
                            <Image
                                src={coelho}
                                alt="Pet Journey"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="p-10 flex flex-col justify-center text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">
                                Faça parte da jornada
                            </h2>
                            <p className="text-lg mb-6 text-gray-100">
                                Junte-se a milhares de tutores que já confiam no Pet Journey para cuidar da saúde e bem-estar dos seus pets.
                            </p>
                            <button onClick={() => window.open('/lista-espera', '_blank')} className="bg-white cursor-pointer text-[#1D3557] px-8 py-3 rounded-lg font-bold hover:scale-105 transition-transform w-fit">
                                Começar Agora
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}