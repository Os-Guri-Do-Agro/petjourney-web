'use client'
import { FileText, Syringe, Bell, BookOpen, Dog, Pill, Heart, Shield, Clock, Smartphone } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import{ useRouter } from 'next/navigation'

gsap.registerPlugin(ScrollTrigger)

export default function TutorScreen() {
    const heroRef = useRef(null)
    const funcRef = useRef<(HTMLDivElement | null)[]>([])
    const passosRef = useRef<(HTMLDivElement | null)[]>([])
    const benefRef = useRef<(HTMLDivElement | null)[]>([])
    const ctaRef = useRef(null)

    const router = useRouter();

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(heroRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out'
            })

            funcRef.current.forEach((el, i) => {
                if (el) {
                    gsap.from(el, {
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse'
                        },
                        opacity: 0,
                        y: 50,
                        duration: 0.6,
                        delay: i * 0.1
                    })
                }
            })

            passosRef.current.forEach((el, i) => {
                if (el) {
                    gsap.from(el, {
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse'
                        },
                        opacity: 0,
                        x: i % 2 === 0 ? -50 : 50,
                        duration: 0.8,
                        delay: i * 0.15
                    })
                }
            })

            benefRef.current.forEach((el, i) => {
                if (el) {
                    gsap.from(el, {
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 80%',
                            toggleActions: 'play none none reverse'
                        },
                        opacity: 0,
                        scale: 0.8,
                        duration: 0.6,
                        delay: i * 0.1
                    })
                }
            })

            if (ctaRef.current) {
                gsap.from(ctaRef.current, {
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 0,
                    y: 30,
                    duration: 0.8
                })
            }
        })

        return () => ctx.revert()
    }, [])

    const funcionalidades = [
        {
            icon: FileText,
            titulo: 'Prontuário Digital',
            descricao: 'Mantenha todo o histórico médico do seu pet organizado em um só lugar. Acesse informações importantes a qualquer momento.'
        },
        {
            icon: Syringe,
            titulo: 'Caderneta de Vacinas',
            descricao: 'Registre todas as vacinas e acompanhe o calendário de imunização do seu pet de forma digital e prática.'
        },
        {
            icon: Pill,
            titulo: 'Exames e Prescrições',
            descricao: 'Faça upload de exames, laudos e prescrições médicas. Tenha tudo documentado e facilmente acessível.'
        },
        {
            icon: Bell,
            titulo: 'Lembretes Automáticos',
            descricao: 'Receba notificações sobre vacinas, medicamentos e consultas. Nunca mais esqueça um compromisso importante.'
        },
        {
            icon: BookOpen,
            titulo: 'Caderno de Notas do Tutor',
            descricao: 'Registro de sinais, sintomas e cuidados recorrentes'
        },
        {
            icon: Dog,
            titulo: 'Perfil Completo do Pet',
            descricao: 'Dados do pet como nome, idade, sexo, raça, peso e dados de saúde em um só lugar'
        }
    ]

    const passos = [
        {
            numero: '1',
            titulo: 'Cadastre seu Pet',
            descricao: 'Crie o perfil do seu pet com informações básicas como nome, idade, raça e características.'
        },
        {
            numero: '2',
            titulo: 'Adicione o Histórico',
            descricao: 'Registre vacinas anteriores, exames realizados e informações médicas importantes.'
        },
        {
            numero: '3',
            titulo: 'Configure Lembretes',
            descricao: 'Ative notificações para vacinas, medicamentos e consultas veterinárias.'
        },
        {
            numero: '4',
            titulo: 'Acompanhe a Saúde',
            descricao: 'Monitore a saúde do seu pet e mantenha tudo atualizado em tempo real.'
        }
    ]

    const beneficios = [
        {
            icon: Heart,
            titulo: 'Cuidado Completo',
            texto: 'Todas as informações de saúde do seu pet em um único lugar'
        },
        {
            icon: Shield,
            titulo: 'Segurança de Dados',
            texto: 'Seus dados e do seu pet protegidos com criptografia de ponta'
        },
        {
            icon: Clock,
            titulo: 'Economia de Tempo',
            texto: 'Acesso rápido a informações importantes em emergências'
        },
        {
            icon: Smartphone,
            titulo: 'Acesso Mobile',
            texto: 'Disponível a qualquer hora, em qualquer lugar, no seu celular'
        }
    ]



    return (
        <>
            <section className="min-h-[70vh] bg-linear-to-b from-[#1D3557] to-[#457B9D] flex items-center">
                <div className="w-full px-5 md:px-20 lg:px-70 pt-32 pb-20">
                    <div ref={heroRef} className="text-white space-y-6 max-w-4xl">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                            Guia completo para tutores
                        </h1>
                        <p className="text-lg md:text-xl text-[#FAF9F6] max-w-2xl">
                            Descubra como a PetJourney pode transformar o cuidado com seu pet.
                            Aprenda a usar todas as funcionalidades da plataforma.
                        </p>
                        <button className="bg-[#FFEDD8] hover:bg-[#ffffff] cursor-pointer text-[#1D3557] px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow duration-300">
                            Começar Agora
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#FAF9F6]">
                <div className="px-5 md:px-20 lg:px-70">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-4">
                            Funcionalidades principais
                        </h2>
                        <p className="text-lg text-[#457B9D] max-w-3xl mx-auto">
                            Conheça todas as ferramentas disponíveis para cuidar melhor do seu pet
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {funcionalidades.map((item, index) => {
                            const Icon = item.icon
                            return (
                                <div
                                    key={index}
                                    ref={el => { funcRef.current[index] = el }}
                                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-transparent hover:border-[#457B9D]"
                                    onMouseEnter={(e) => gsap.to(e.currentTarget, { y: -8, duration: 0.3 })}
                                    onMouseLeave={(e) => gsap.to(e.currentTarget, { y: 0, duration: 0.3 })}
                                >
                                    <div className="bg-linear-to-bl from-[#457b9d] to-[#1E3A5F] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1D3557] mb-3">
                                        {item.titulo}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.descricao}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#FAF9F6] rounded-tl-[500px]">
                <div className="px-5 md:px-20 lg:px-70">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-4">
                            Como começar
                        </h2>
                        <p className="text-lg text-[#457B9D] max-w-2xl mx-auto">
                            Siga estes passos simples para começar a usar a PetJourney
                        </p>
                    </div>

                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-15">
                        {passos.map((passo, index) => (
                            <div
                                key={index}
                                ref={el => { passosRef.current[index] = el }}
                                className="flex gap-5 items-start"
                            >
                                <div className="bg-linear-to-bl from-[#457b9d] to-[#1E3A5F] text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shrink-0">
                                    {passo.numero}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-[#1D3557] mb-2">
                                        {passo.titulo}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {passo.descricao}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#FAF9F6]">
                <div className="px-5 md:px-20 lg:px-70">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-4">
                            Por que usar a PetJourney?
                        </h2>
                        <p className="text-lg text-[#457B9D] max-w-2xl mx-auto">
                            Benefícios que fazem a diferença no cuidado com seu pet
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {beneficios.map((beneficio, index) => {
                            const Icon = beneficio.icon
                            return (
                                <div
                                    key={index}
                                    ref={el => { benefRef.current[index] = el }}
                                    className="bg-white p-8 rounded-2xl shadow-lg text-center hover:bg-[#457B9D] group transition-colors duration-300"
                                >
                                    <div className="bg-[#457B9D] group-hover:bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                                        <Icon className="w-10 h-10 text-white group-hover:text-[#457B9D] transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1D3557] group-hover:text-white mb-3 transition-colors duration-300">
                                        {beneficio.titulo}
                                    </h3>
                                    <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
                                        {beneficio.texto}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-linear-to-b from-[#457B9D] to-[#1D3557]">
                <div ref={ctaRef} className="px-5 md:px-20 lg:px-70 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Conheça as funcionalidades para tutores de pets
                    </h2>
                    <div className=" flex flex-col gap-2">
                        <p className="text-xl max-w-2xl mx-auto">
                            Em breve, uma plataforma segura e inteligente.
                        </p>
                        <span className='text-md mb-10'> A PetJourney está em desenvolvimento, inscreva-se e seja o primeiro a ter acesso a plataforma.</span>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="bg-[#FFEDD8] hover:bg-[#ffffff] text-[#1D3557] px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                            Lista de Espera
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-[#1D3557] transition-all duration-300 cursor-pointer" onClick={() => router.push('/clinicas')}>
                            Saiba Mais
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}   