'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Heart, FileX, Calendar, ClipboardX, Link2Off, BookOpen, CalendarCheck, Video, Shield, Bell, FileText, Sparkles } from 'lucide-react'
import coelho from '../../../assets/home/coelho.jpg'
import tutor from '../../../assets/home/tutor.jpg'
import ave from '../../../assets/home/ave.jpg'
import { useRouter } from 'next/navigation'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function Servicos() {
    const [mounted, setMounted] = useState(false)
    const heroRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<HTMLDivElement>(null)
    const careRef = useRef<HTMLHeadingElement>(null)
    const careContentRef = useRef<HTMLDivElement>(null)
    const connectTitleRef = useRef<HTMLDivElement>(null)
    const connectCardsRef = useRef<HTMLDivElement>(null)
    const finalRef = useRef<HTMLDivElement>(null)
    const router = useRouter();

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return

        const ctx = gsap.context(() => {
            if (heroRef.current) {
                gsap.from(heroRef.current, {
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    ease: 'power3.out'
                })
            }

            if (textRef.current) {
                gsap.from(textRef.current, {
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    delay: 0.3,
                    ease: 'power2.out'
                })
            }

            if (imageRef.current) {
                gsap.from(imageRef.current, {
                    opacity: 0,
                    duration: 1,
                    delay: 0.5,
                    ease: 'power3.out'
                })
            }

            if (cardsRef.current?.children) {
                gsap.from(Array.from(cardsRef.current.children), {
                    scale: 0,
                    opacity: 0,
                    duration: 0.5,
                    delay: 0.7,
                    stagger: 0.1,
                    ease: 'back.out(1.7)'
                })
            }

            if (careRef.current) {
                gsap.from(careRef.current, {
                    scrollTrigger: {
                        trigger: careRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    ease: 'power2.out'
                })
            }

            if (careContentRef.current) {
                const leftCards = careContentRef.current.querySelector('.w-full.md\\:w-1\\/2:first-child')
                const rightImage = careContentRef.current.querySelector('.w-full.md\\:w-1\\/2:last-child')

                if (leftCards) {
                    gsap.from(leftCards, {
                        scrollTrigger: {
                            trigger: careContentRef.current,
                            start: 'top 70%',
                            toggleActions: 'play none none reverse'
                        },
                        opacity: 0,
                        duration: 1,
                        ease: 'power3.out'
                    })
                }

                if (rightImage) {
                    gsap.from(rightImage, {
                        scrollTrigger: {
                            trigger: careContentRef.current,
                            start: 'top 70%',
                            toggleActions: 'play none none reverse'
                        },
                        opacity: 0,
                        duration: 1,
                        ease: 'power3.out'
                    })
                }
            }

            if (connectTitleRef.current) {
                gsap.from(connectTitleRef.current, {
                    scrollTrigger: {
                        trigger: connectTitleRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 0,
                    y: 30,
                    duration: 1,
                    ease: 'power2.out'
                })
            }

            if (finalRef.current) {
                gsap.from(finalRef.current, {
                    scrollTrigger: {
                        trigger: finalRef.current,
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



    return (
        <>
            <section className="w-full bg-[#1D3557] py-40 px-5 md:px-20 lg:px-20 xl:px-40 2xl:px-70lg:px-30">
                <div ref={heroRef} className="text-center text-white space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Serviços
                    </h1>
                </div>
            </section>

            <section className="w-full py-24 bg-linear-to-b from-[#F1FAEE] to-[#FAF9F6]">
                <div className="px-5 md:px-20 lg:px-20 xl:px-40 2xl:px-70text-center space-y-10">
                    <div ref={textRef}>
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1D3557]">
                            Antes da tecnologia, existe amor.
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mt-6">
                            Pets são família. São filhos peludos, companheiros incondicionais,
                            apoio emocional nos momentos difíceis.
                            Amar é responsabilidade. Amar é querer fazer melhor todos os dias.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center mt-12">
                        <div ref={imageRef} className="w-full md:w-1/2 relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                            <Image src={tutor} alt="Tutor com pet" fill className="object-cover" />
                        </div>
                        <div ref={cardsRef} className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-center">
                                <FileX className="w-10 h-10 text-[#E63946] mb-4" />
                                <h3 className="font-semibold text-[#1D3557] text-xl mb-2">Exames espalhados</h3>
                                <p className="text-gray-600">Documentos perdidos em gavetas, celulares e e-mails diferentes.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-center">
                                <Calendar className="w-10 h-10 text-[#E63946] mb-4" />
                                <h3 className="font-semibold text-[#1D3557] text-xl mb-2">Vacinas esquecidas</h3>
                                <p className="text-gray-600">Datas importantes passam sem lembretes adequados.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-center">
                                <ClipboardX className="w-10 h-10 text-[#E63946] mb-4" />
                                <h3 className="font-semibold text-[#1D3557] text-xl mb-2">Histórico perdido</h3>
                                <p className="text-gray-600">Informações não chegam ao veterinário no momento certo.</p>
                            </div>
                            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center justify-center">
                                <Link2Off className="w-10 h-10 text-[#E63946] mb-4" />
                                <h3 className="font-semibold text-[#1D3557] text-xl mb-2">Falta de integração</h3>
                                <p className="text-gray-600">Cada clínica mantém registros isolados.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-24 bg-[#FAF9F6]">
                <div className="px-5 md:px-20 lg:px-20 xl:px-40 2xl:px-70space-y-12">
                    <div ref={connectTitleRef} className="text-center space-y-6">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1D3557]">
                            Conectar é reduzir fricção no cuidado.
                        </h2>
                        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                            Nossa plataforma integra prontuários, caderneta digital,
                            agenda inteligente, teleconsulta, marketplace e conteúdo educativo
                            em uma única jornada sincronizada.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                            <div className="bg-[#457B9D] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-semibold text-xl text-[#1D3557] text-center mb-3">Caderneta Digital</h3>
                            <p className="text-gray-600 text-center">Vacinas e medicamentos organizados com alertas inteligentes.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                            <div className="bg-[#457B9D] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CalendarCheck className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-semibold text-xl text-[#1D3557] text-center mb-3">Agenda Inteligente</h3>
                            <p className="text-gray-600 text-center">Compromissos sincronizados com lembretes personalizados.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                            <div className="bg-[#457B9D] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Video className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-semibold text-xl text-[#1D3557] text-center mb-3">Teleconsulta</h3>
                            <p className="text-gray-600 text-center">Conexão segura entre tutores e veterinários habilitados.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-24 bg-[#F1FAEE]">
                <div className="px-5 md:px-20 lg:px-20 xl:px-40 2xl:px-70text-center space-y-12">
                    <h2 ref={careRef} className="text-3xl md:text-5xl font-bold text-[#1D3557]">
                        Cuidar é prevenir, acompanhar e proteger.
                    </h2>

                    <div ref={careContentRef} className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="w-full md:w-1/2 grid grid-cols-1 gap-6">
                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <Shield className="w-8 h-8 text-[#457B9D]" />
                                    <h3 className="font-semibold text-xl text-[#1D3557]">Prevenção Inteligente</h3>
                                </div>
                                <ul className="text-gray-600 space-y-3">
                                    <li className="flex items-start gap-2">
                                        <Bell className="w-5 h-5 text-[#457B9D] mt-0.5 shrink-0" />
                                        <span>Alertas automáticos para vacinas e check-ups</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Sparkles className="w-5 h-5 text-[#457B9D] mt-0.5 shrink-0" />
                                        <span>Monitoramento contínuo da saúde</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <FileText className="w-5 h-5 text-[#457B9D] mt-0.5 shrink-0" />
                                        <span>Histórico acessível em segundos</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg">
                                <div className="flex items-center gap-3 mb-4">
                                    <Heart className="w-8 h-8 text-[#E63946] fill-[#E63946]" />
                                    <h3 className="font-semibold text-xl text-[#1D3557]">Cuidado Conectado</h3>
                                </div>
                                <ul className="text-gray-600 space-y-3">
                                    <li className="flex items-start gap-2">
                                        <FileText className="w-5 h-5 text-[#457B9D] mt-0.5 shrink-0" />
                                        <span>Prescrições digitais integradas</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Video className="w-5 h-5 text-[#457B9D] mt-0.5 shrink-0" />
                                        <span>Comunicação facilitada</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <Sparkles className="w-5 h-5 text-[#457B9D] mt-0.5 shrink-0" />
                                        <span>Conteúdo personalizado por pet</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                            <Image src={ave} alt="Pet saudável" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>



            <section className="w-full flex justify-center pt-20 bg-[#FAF9F6] overflow-hidden">
                <div ref={finalRef} className="w-full bg-[#457B9D] flex flex-col md:flex-row items-center gap-10">

                    <div className=" w-full md:w-1/2 relative h-[500px] md:h-[450px]">
                        <Image src={coelho} alt='coelho' fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    </div>

                    <div className="w-full md:w-1/2 text-white space-y-6 p-5">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-center">
                            Cada etapa importa.
                            E você não precisa caminhar sozinho.
                        </h2>

                        <div className="flex gap-3 flex-col md-flex-row">
                            <button className="cursor-pointer w-full bg-[#1D3557] text-[#FAF9F6] px-8 py-3 rounded-xl font-semibold hover:scale-102 transition-transform duration-300">
                                Assine nosso newsletter
                            </button>
                            <button onClick={() => router.push('/contato')} className="cursor-pointer w-full bg-[#FAF9F6] text-[#1D3557] px-8 py-3 rounded-xl font-semibold hover:scale-102 transition-transform duration-300">
                                Entre em contato
                            </button>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
