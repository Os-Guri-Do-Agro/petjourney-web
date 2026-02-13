'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import coelho from '../../assets/home/coelho.jpg'
import { Book, Calendar, Star, Watch, ChevronLeft, ChevronRight } from "lucide-react"

import dog from '../../assets/about/dog-logoMarca.jpg'


if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function SobreNos() {
    const [mounted, setMounted] = useState(false)
    const [currentSlide, setCurrentSlide] = useState(0)
    const heroRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const descRef = useRef<HTMLDivElement>(null)
    const teamRef = useRef<HTMLDivElement>(null)
    const finalRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<HTMLDivElement>(null)
    const manifestoRef = useRef<HTMLElement>(null)
    const buttonRef = useRef<HTMLDivElement>(null)

    const oqueFazemos = [
        {
            id: 1,
            icon: Book,
            descricao: 'Histórico médico completo: prontuário eletrônico, caderneta digital, alertas de vacinas e exames, tudo centralizado e acessível.'
        },
        {
            id: 2,
            icon: Watch,
            descricao: 'Integração com hardwares: compatível com dispositivos BLE, Wi-Fi e entrada manual de dados para monitoramento constante.'
        },
        {
            id: 3,
            icon: Calendar,
            descricao: 'Serviços para tutores: agendamento de consultas online, marketplace com produtos selecionados, blog com recomendações personalizadas.'
        },
        {
            id: 4,
            icon: Star,
            descricao: 'Recursos para veterinários: acesso ao histórico completo dos pacientes, agendamento facilitado, comunicação com tutores e capacitação contínua com cursos especializados.'
        },
    ]

    const equipe = [
        {
            nome: 'Nome Sobrenome',
            cargo: 'Cargo',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imagem: dog
        },
        {
            nome: 'Nome Sobrenome',
            cargo: 'Cargo',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imagem: dog
        },
        {
            nome: 'Nome Sobrenome',
            cargo: 'Cargo',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imagem: dog
        },
        {
            nome: 'Nome Sobrenome',
            cargo: 'Cargo',
            descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imagem: dog
        },
    ]

    const getItemsPerSlide = () => {
        if (typeof window === 'undefined') return 3
        if (window.innerWidth < 768) return 1
        if (window.innerWidth < 1024) return 2
        return 3
    }

    const [itemsPerSlide, setItemsPerSlide] = useState(3)
    const [isMobile, setIsMobile] = useState(false)
    const totalSlides = Math.ceil(equipe.length / itemsPerSlide)

    useEffect(() => {
        const handleResize = () => {
            setItemsPerSlide(getItemsPerSlide())
            setIsMobile(window.innerWidth < 768)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    }

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
                    y: 20,
                    duration: 1,
                    delay: 0.3,
                    ease: 'power2.out'
                })
            }

            if (descRef.current) {
                gsap.from(descRef.current, {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: descRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                })
            }

            if (cardsRef.current) {
                const cards = cardsRef.current.querySelectorAll('.feature-card')
                gsap.fromTo(cards,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.6,
                        stagger: 0.1,
                        ease: 'power2.out',
                        scrollTrigger: {
                            trigger: cardsRef.current,
                            start: 'top 75%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                )
            }

            // Manifesto section
            const imgManifesto = manifestoRef.current?.querySelector('.image-container')
            if (imgManifesto) {
                gsap.from(imgManifesto, {
                    scrollTrigger: {
                        trigger: manifestoRef.current,
                        start: 'top 70%',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                })
            }

            const textManifesto = manifestoRef.current?.querySelector('.text-content')
            if (textManifesto) {
                gsap.from(textManifesto, {
                    scrollTrigger: {
                        trigger: manifestoRef.current,
                        start: 'top 70%',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out'
                })
            }

            if (teamRef.current) {
                const teamCards = teamRef.current.querySelectorAll('.team-card')
                gsap.fromTo(teamCards,
                    { opacity: 0, scale: 0.9 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: 'back.out(1.2)',
                        scrollTrigger: {
                            trigger: teamRef.current,
                            start: 'top 75%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                )
            }

            // Button
            if (buttonRef.current) {
                gsap.from(buttonRef.current, {
                    scrollTrigger: {
                        trigger: buttonRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    },
                    scale: 0.8,
                    opacity: 0,
                    duration: 0.6,
                    ease: 'back.out(1.7)'
                })
            }

            // Final section
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
            <section className="w-full bg-[#1D3557] py-40 px-5 md:px-20 lg:px-30">
                <div ref={heroRef} className="text-center text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        A Pet Journey
                    </h1>
                </div>
            </section>

            <section className="w-full py-20 bg-linear-to-b from-[#F1FAEE] to-[#FAF9F6]">
                <div className="px-5 md:px-20 lg:px-30">
                    <div ref={textRef} className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold leading-relaxed text-[#1D3557] mb-4">
                            Na PetJourney, acreditamos que cada pet merece uma vida longa e cheia de cuidado.
                        </h2>
                        <p className="text-xl md:text-2xl text-[#457B9D] font-medium">
                            E que cada tutor merece as ferramentas para tornar isso possível.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full py-16 bg-[#FAF9F6]">
                <div className="px-5 md:px-20 lg:px-30">
                    <div ref={descRef} className="relative">
                        <div className="absolute top-0 bottom-0 w-1 bg-linear-to-b from-[#457B9D] to-[#1D3557] rounded-full"></div>
                        <p className="text-center text-gray-700 text-lg md:text-xl leading-relaxed pl-6">
                            Somos uma plataforma que conecta saúde, bem-estar e tecnologia em uma jornada completa de cuidado animal. Unimos inovação, empatia e informação para facilitar a rotina de tutores e profissionais da área veterinária.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#FAF9F6]">
                <div className="px-5 md:px-20 lg:px-30">
                    <div className="text-center flex flex-col gap-4 mb-16">
                        <h3 className='text-3xl md:text-4xl font-bold text-[#1D3557]'>O que fazemos</h3>
                        <p className='text-center text-gray-600 text-lg md:text-xl max-w-3xl mx-auto'>
                            Criamos uma solução all-in-one para acompanhar cada etapa da vida dos pets, com foco em saúde preventiva e cuidado contínuo.
                        </p>
                    </div>
                    <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {oqueFazemos.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="feature-card group flex flex-col items-center gap-5 text-center bg-white hover:bg-[#457B9D] min-h-72 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-gray-100"
                                >
                                    <div className="bg-[#457B9D] group-hover:bg-white rounded-full p-5 transition-colors duration-500">
                                        <Icon className='text-white group-hover:text-[#457B9D] w-10 h-10 transition-colors duration-500' />
                                    </div>
                                    <p className='text-gray-700 group-hover:text-white text-base leading-relaxed transition-colors duration-500'>
                                        {item.descricao}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <div ref={buttonRef} className="w-full flex items-center justify-center p-5 py-10">
                        <button className='bg-[#457B9D] w-full max-w-lg py-4 rounded-xl cursor-pointer hover:bg-[#1D3557] duration-200 transition-colors'>
                            <span className='text-white font-semibold'>Cadastre-se</span>
                        </button>
                    </div>
                </div>
            </section>


            <section ref={manifestoRef} className='overflow-hidden'>
                <div className="grid md:grid-cols-2 py-20">

                    <div className="flex items-center px-5 md:px-20 lg:px-30 py-10 order-2 md:order-1 bg-linear-to-b from-[#F1FAEE] to-[#FAF9F6]">
                        <div className="text-content w-full space-y-6">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D3557]">
                                Nosso Manifesto
                            </h2>

                            <div className="space-y-5">
                                <p className="text-lg xl:text-xl text-gray-700 leading-relaxed">
                                    Acreditamos que cada vida merece ser acompanhada com cuidado, carinho e atenção.
                                </p>
                                <p className="text-lg xl:text-xl text-gray-700 leading-relaxed">
                                    Transformamos a saúde pet em uma jornada contínua, conectando tutores, tecnologias e especialistas para criar histórias mais longas e felizes.
                                </p>
                                <p className="text-lg xl:text-xl text-gray-700 leading-relaxed">
                                    Porque cuidar é viver cada momento da jornada. E na Pet Journey, cada passo importa.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="image-container h-[400px] md:h-[500px] order-1 md:order-2 relative">
                        <Image src={dog} alt="Pet care" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#FAF9F6]">
                <div className="md:px-20 lg:px-30">
                    <div className="text-center mb-16 px-5">
                        <h3 className='text-3xl md:text-4xl font-bold text-[#1D3557] mb-4'>Nossa Equipe</h3>
                        <p className='text-gray-600 text-lg md:text-xl max-w-2xl mx-auto'>
                            Conheça as pessoas que tornam a Pet Journey possível
                        </p>
                    </div>
                    <div className="relative max-w-7xl mx-auto">
                        <div className="overflow-x-auto md:overflow-hidden px-5 md:px-12 scrollbar-hide">
                            <div
                                ref={teamRef}
                                className="flex gap-6 md:transition-transform md:duration-500 md:ease-out"
                                style={{ transform: `translateX(-${currentSlide * (100 / itemsPerSlide)}%)` }}
                            >
                                {equipe.map((membro, index) => (
                                    <div
                                        key={index}
                                        className="team-card group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#457B9D] shrink-0 w-80 md:w-auto mb-2"
                                        style={{ width: isMobile ? '320px' : `calc((100% - ${(itemsPerSlide - 1) * 1.5}rem) / ${itemsPerSlide})` }}
                                    >
                                        <div className="relative h-64 w-full overflow-hidden">
                                            <Image
                                                src={membro.imagem}
                                                alt={membro.nome}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="p-6 text-center space-y-3">
                                            <div>
                                                <h4 className="text-xl font-bold text-[#1D3557] mb-1">{membro.nome}</h4>
                                                <p className="text-[#457B9D] font-semibold text-sm uppercase tracking-wide">{membro.cargo}</p>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed text-sm">
                                                {membro.descricao}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {totalSlides > 1 && (
                            <>
                                <button
                                    onClick={prevSlide}
                                    className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 bg-[#457B9D] text-white p-3 rounded-full shadow-lg hover:bg-[#1D3557] transition-colors duration-300 z-10"
                                    aria-label="Anterior"
                                >
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 bg-[#457B9D] text-white p-3 rounded-full shadow-lg hover:bg-[#1D3557] transition-colors duration-300 z-10"
                                    aria-label="Próximo"
                                >
                                    <ChevronRight className="w-6 h-6" />
                                </button>
                                <div className="hidden md:flex justify-center gap-2 mt-8">
                                    {Array.from({ length: totalSlides }).map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentSlide(index)}
                                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#457B9D] w-8' : 'bg-gray-300'}`}
                                            aria-label={`Ir para slide ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
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
                            <button className="cursor-pointer w-full bg-[#FAF9F6] text-[#1D3557] px-8 py-3 rounded-xl font-semibold hover:scale-102 transition-transform duration-300">
                                Entre em contato
                            </button>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}
