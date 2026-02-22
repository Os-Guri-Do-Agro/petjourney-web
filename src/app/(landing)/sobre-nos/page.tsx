'use client'
import Image from 'next/image'
import {
    Book, Watch, Calendar, Star, Heart, Shield, Zap, Users, Activity, BookOpen,
    MessageCircle, Stethoscope, Lightbulb, TrendingUp, Lock, Pill, Rocket, PawPrint
} from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRouter } from 'next/navigation'

gsap.registerPlugin(ScrollTrigger)

// ─── CDN PLACEHOLDER IMAGES (troque pelas suas fotos depois) ───────────────
const HERO_IMG      = 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=80'
const MANIFESTO_IMG = 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=900&q=80'
const CTA_IMG       = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&q=80'
const TEAM_IMGS     = [
    'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80',
    'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80',
    'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80',
    'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80',
]

const stats = [
    { Icon: Heart,         value: 5000, suffix: '+',  label: 'Pets Cadastrados'   },
    { Icon: Star,          value: 98,   suffix: '%',  label: 'Satisfação'         },
    { Icon: Stethoscope,   value: 300,  suffix: '+',  label: 'Clínicas Parceiras' },
    { Icon: MessageCircle, value: 24,   suffix: '/7', label: 'Suporte'            },
]

const oqueFazemos = [
    { icon: Book,     title: 'Histórico Médico',          description: 'Prontuário eletrônico, caderneta digital, alertas de vacinas e exames, tudo centralizado.' },
    { icon: Watch,    title: 'Integração com Hardware',   description: 'Compatível com dispositivos BLE e Wi-Fi para monitoramento constante dos pets.' },
    { icon: Calendar, title: 'Serviços para Tutores',     description: 'Agendamento online, marketplace com produtos selecionados e blog personalizado.' },
    { icon: Star,     title: 'Recursos para Veterinários', description: 'Histórico completo dos pacientes, agendamento facilitado e comunicação direta.' },
]

const valores = [
    { icon: Heart,    bgIcon: Heart,    title: 'Amor pelos Animais',   description: 'Cada decisão que tomamos coloca o bem-estar animal em primeiro lugar, sempre.' },
    { icon: Zap,      bgIcon: Lightbulb, title: 'Inovação Constante',  description: 'Tecnologia de ponta para criar soluções que realmente fazem diferença.' },
    { icon: Shield,   bgIcon: Lock,     title: 'Confiança e Segurança', description: 'Dados protegidos e em conformidade com LGPD para decisões assertivas.' },
    { icon: BookOpen, bgIcon: BookOpen, title: 'Educação Contínua',    description: 'Conteúdo especializado para tutores e profissionais veterinários.' },
    { icon: Activity, bgIcon: Pill,     title: 'Saúde Preventiva',     description: 'Monitoramento proativo para garantir uma vida longa e saudável.' },
    { icon: Users,    bgIcon: Users,    title: 'Comunidade',           description: 'Conectando tutores, veterinários e especialistas em um ecossistema colaborativo.' },
]

const jornada = [
    { ano: '2022', DotIcon: Lightbulb,  titulo: 'A Ideia Nasce',   desc: 'Tudo começou com uma pergunta: por que é tão difícil cuidar da saúde do nosso pet?',              cor: 'from-violet-500 to-purple-600' },
    { ano: '2023', DotIcon: Rocket,     titulo: 'Primeiros Passos', desc: 'Formamos uma equipe apaixonada e desenvolvemos o primeiro protótipo da plataforma.',            cor: 'from-[#457B9D] to-[#1D3557]'   },
    { ano: '2024', DotIcon: TrendingUp, titulo: 'Crescimento',      desc: 'Parcerias com clínicas veterinárias e os primeiros tutores entusiasmados com a solução.',        cor: 'from-emerald-500 to-teal-600'  },
    { ano: '2025', DotIcon: Star,       titulo: 'Expansão',         desc: 'Lançamento oficial e integração com hardwares de monitoramento remoto de saúde dos pets.',       cor: 'from-amber-400 to-orange-500'  },
]

export default function SobreNos() {
    const router = useRouter()

    const heroRef      = useRef(null)
    const statsRef     = useRef<HTMLDivElement>(null)
    const missaoRef    = useRef<(HTMLDivElement | null)[]>([])
    const valoresRef   = useRef<(HTMLDivElement | null)[]>([])
    const jornadaRef   = useRef<(HTMLDivElement | null)[]>([])
    const manifestoRef = useRef(null)
    const ctaRef       = useRef(null)
    const counterEls   = useRef<HTMLSpanElement[]>([])

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Hero
            gsap.from(heroRef.current, { opacity: 0, y: 50, duration: 1, ease: 'power3.out' })

            // Stats counter
            ScrollTrigger.create({
                trigger: statsRef.current,
                start: 'top 80%',
                once: true,
                onEnter: () => {
                    counterEls.current.forEach((el, i) => {
                        if (!el) return
                        gsap.fromTo(el,
                            { textContent: 0 },
                            { textContent: stats[i].value, duration: 2, ease: 'power2.out', snap: { textContent: 1 }, delay: i * 0.15 }
                        )
                    })
                    gsap.from('.stat-card', { opacity: 0, y: 40, stagger: 0.12, duration: 0.7, ease: 'back.out(1.2)' })
                }
            })

            // Features cards
            missaoRef.current.forEach((el, i) => {
                if (!el) return
                gsap.from(el, {
                    scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none reverse' },
                    opacity: 0, y: 50, duration: 0.6, delay: i * 0.1
                })
                el.addEventListener('mouseenter', () => gsap.to(el, { y: -8, duration: 0.3 }))
                el.addEventListener('mouseleave', () => gsap.to(el, { y:  0, duration: 0.3 }))
            })

            // Valores
            valoresRef.current.forEach((el, i) => {
                if (!el) return
                gsap.from(el, {
                    scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none reverse' },
                    opacity: 0, scale: 0.88, duration: 0.55, delay: (i % 3) * 0.1, ease: 'back.out(1.3)'
                })
                el.addEventListener('mouseenter', () => gsap.to(el, { y: -8, duration: 0.3 }))
                el.addEventListener('mouseleave', () => gsap.to(el, { y:  0, duration: 0.3 }))
            })

            // Manifesto
            gsap.from(manifestoRef.current, {
                scrollTrigger: { trigger: manifestoRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
                opacity: 0, x: 60, duration: 1, ease: 'power2.out'
            })

            // Jornada items
            jornadaRef.current.forEach((el, i) => {
                if (!el) return
                gsap.from(el, {
                    scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
                    opacity: 0, x: i % 2 === 0 ? -60 : 60, duration: 0.8, ease: 'power3.out'
                })
            })

            // CTA
            gsap.from(ctaRef.current, {
                scrollTrigger: { trigger: ctaRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
                opacity: 0, y: 30, duration: 0.8
            })
        })

        return () => ctx.revert()
    }, [])

    return (
        <>
            {/* ── HERO ─────────────────────────────────────────────── */}
            <section
                className="min-h-[65vh] flex items-center bg-cover bg-center relative"
                style={{ backgroundImage: `url(${HERO_IMG})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a]/90 via-[#1D3557]/75 to-transparent" />
                <div className="relative z-10 w-full px-5 md:px-20 lg:px-70 pt-32 pb-20">
                    <div ref={heroRef} className="text-white space-y-6 max-w-4xl">
                        <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-1.5 rounded-full text-sm font-medium">
                            <PawPrint className="w-4 h-4" /> Nossa história
                        </span>
                        <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold leading-tight">
                            A Pet Journey
                        </h1>
                        <p className="text-lg md:text-xl text-white/85 max-w-2xl">
                            Uma plataforma que conecta saúde, bem-estar e tecnologia em uma jornada completa de cuidado animal.
                        </p>
                        <button
                            onClick={() => window.open('/lista-espera', '_blank')}
                            className="bg-[#FFEDD8] hover:bg-white text-[#1D3557] px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                        >
                            Entrar na Lista de Espera
                        </button>
                    </div>
                </div>
            </section>

            {/* ── STATS ────────────────────────────────────────────── */}
            <section ref={statsRef} className="w-full py-16 bg-white border-b border-gray-100">
                <div className="px-5 md:px-20 lg:px-70">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((s, i) => {
                            const Icon = s.Icon
                            return (
                                <div key={i} className="stat-card bg-[#FAF9F6] rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
                                    <div className="bg-linear-to-bl from-[#457b9d] to-[#1D3557] w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <Icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-black text-[#1D3557]">
                                        <span ref={el => { if (el) counterEls.current[i] = el }}>0</span>
                                        <span>{s.suffix}</span>
                                    </div>
                                    <p className="text-gray-500 text-sm font-medium mt-1">{s.label}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── MISSÃO / O QUE FAZEMOS ───────────────────────────── */}
            <section className="w-full py-24 bg-[#FAF9F6]">
                <div className="px-5 md:px-20 lg:px-70">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1D3557] mb-6">
                            Na PetJourney, cada pet merece uma vida<br className="hidden md:block" /> longa e cheia de cuidado.
                        </h2>
                        <p className="text-lg md:text-xl text-[#457B9D] max-w-3xl mx-auto">
                            E que cada tutor merece as ferramentas para tornar isso possível.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {oqueFazemos.map((item, i) => {
                            const Icon = item.icon
                            return (
                                <div
                                    key={i}
                                    ref={el => { missaoRef.current[i] = el }}
                                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center"
                                >
                                    <div className="bg-linear-to-bl from-[#457b9d] to-[#1D3557] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-bold text-xl text-[#1D3557] mb-3">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="mt-10 flex justify-center">
                        <button
                            onClick={() => window.open('/lista-espera', '_blank')}
                            className="bg-[#457B9D] hover:bg-[#1D3557] text-white px-10 py-4 rounded-xl font-bold transition-colors duration-300 cursor-pointer"
                        >
                            Cadastre-se
                        </button>
                    </div>
                </div>
            </section>

            {/* ── MANIFESTO ────────────────────────────────────────── */}
            <section className="w-full overflow-hidden">
                <div className="grid md:grid-cols-2">
                    {/* Foto — troque o src pelo seu quando tiver */}
                    <div className="relative h-[420px] md:h-auto min-h-[420px] order-1 md:order-2 overflow-hidden">
                        <Image
                            src={MANIFESTO_IMG}
                            alt="Manifesto — troque pela sua foto"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-[#1D3557]/20" />
                    </div>

                    <div ref={manifestoRef} className="flex items-center px-5 md:px-16 lg:px-20 py-16 order-2 md:order-1 bg-[#F1FAEE]">
                        <div className="w-full space-y-6 max-w-xl">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D3557]">
                                Nosso Manifesto
                            </h2>
                            <div className="space-y-5">
                                {[
                                    'Acreditamos que cada vida merece ser acompanhada com cuidado, carinho e atenção.',
                                    'Transformamos a saúde pet em uma jornada contínua, conectando tutores, tecnologias e especialistas para criar histórias mais longas e felizes.',
                                    'Porque cuidar é viver cada momento da jornada. E na Pet Journey, cada passo importa.',
                                ].map((text, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="shrink-0 w-2 h-2 rounded-full bg-[#457B9D] mt-3" />
                                        <p className="text-lg text-gray-700 leading-relaxed">{text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-gradient-to-br from-[#1D3557] to-[#457B9D] rounded-2xl p-8 text-white">
                                <p className="text-xl font-black leading-snug">
                                    "Cada passo conta.<br />Cada pet importa."
                                </p>
                                <p className="text-white/70 mt-2 text-sm">— Time PetJourney</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── NOSSOS VALORES ───────────────────────────────────── */}
            <section className="w-full py-24 bg-[#FAF9F6]">
                <div className="px-5 md:px-20 lg:px-70">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1D3557] mb-6">
                            Nossos Valores
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                            Os pilares que guiam cada decisão e cada linha de código que escrevemos.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {valores.map((v, i) => {
                            const Icon   = v.icon
                            const BgIcon = v.bgIcon
                            return (
                                <div
                                    key={i}
                                    ref={el => { valoresRef.current[i] = el }}
                                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative overflow-hidden group"
                                >
                                    {/* ícone decorativo de fundo */}
                                    <BgIcon className="absolute -right-4 -top-4 w-24 h-24 text-[#1D3557] opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500" />

                                    <div className="bg-linear-to-bl from-[#457b9d] to-[#1D3557] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-bold text-xl text-[#1D3557] text-center mb-3 relative z-10">{v.title}</h3>
                                    <p className="text-gray-600 text-center leading-relaxed relative z-10">{v.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── NOSSA JORNADA — timeline vertical alternada ───────── */}
            <section className="w-full py-24 bg-white">
                <div className="px-5 md:px-20 lg:px-70">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1D3557] mb-6">
                            Nossa Jornada
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                            De uma ideia a uma plataforma completa de saúde animal.
                        </p>
                    </div>

                    <div className="relative max-w-4xl mx-auto">
                        {/* Linha central vertical */}
                        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#457B9D] via-[#1D3557] to-[#457B9D]" />

                        <div className="flex flex-col gap-12">
                            {jornada.map((item, i) => {
                                const DotIcon = item.DotIcon
                                const isLeft  = i % 2 === 0
                                return (
                                    <div
                                        key={i}
                                        ref={el => { jornadaRef.current[i] = el }}
                                        className={`flex items-center gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col`}
                                    >
                                        {/* Card */}
                                        <div className="flex-1">
                                            <div className="bg-[#FAF9F6] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#457B9D] hover:-translate-y-1">
                                                <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'md:justify-end justify-start' : 'justify-start'}`}>
                                                    <span className={`bg-gradient-to-r ${item.cor} text-white text-sm font-bold px-4 py-1.5 rounded-full`}>
                                                        {item.ano}
                                                    </span>
                                                </div>
                                                <h3 className={`text-xl font-bold text-[#1D3557] mb-2 ${isLeft ? 'md:text-right text-left' : 'text-left'}`}>
                                                    {item.titulo}
                                                </h3>
                                                <p className={`text-gray-600 leading-relaxed ${isLeft ? 'md:text-right text-left' : 'text-left'}`}>
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Dot central com ícone */}
                                        <div className={`hidden md:flex shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${item.cor} items-center justify-center shadow-lg z-10`}>
                                            <DotIcon className="w-6 h-6 text-white" />
                                        </div>

                                        {/* Espaço espelho */}
                                        <div className="hidden md:block flex-1" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── EQUIPE ───────────────────────────────────────────── */}
            <section className="w-full py-24 bg-[#FAF9F6]">
                <div className="px-5 md:px-20 lg:px-70">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1D3557] mb-4">
                            Nossa Equipe
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                            Conheça as pessoas que tornam a Pet Journey possível.
                        </p>
                    </div>

                    {/* Troque os src pelos seus quando tiver as fotos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { nome: 'Nome Completo', cargo: 'Cargo', src: TEAM_IMGS[0] },
                            { nome: 'Nome Completo', cargo: 'Cargo', src: TEAM_IMGS[1] },
                            { nome: 'Nome Completo', cargo: 'Cargo', src: TEAM_IMGS[2] },
                            { nome: 'Nome Completo', cargo: 'Cargo', src: TEAM_IMGS[3] },
                        ].map((m, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#457B9D] hover:-translate-y-1 group"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={m.src}
                                        alt={m.nome}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, 25vw"
                                        unoptimized
                                    />
                                </div>
                                <div className="p-6 text-center space-y-2">
                                    <h4 className="text-lg font-bold text-[#1D3557]">{m.nome}</h4>
                                    <p className="text-[#457B9D] font-semibold text-sm uppercase tracking-wide">{m.cargo}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        Breve descrição sobre o membro da equipe.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA FINAL ────────────────────────────────────────── */}
            {/* Troque o src pela sua foto de footer quando tiver */}
            <section
                className="py-20 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${CTA_IMG})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1D3557]/90 to-[#1D3557]/70" />
                <div ref={ctaRef} className="relative z-10 px-5 md:px-20 lg:px-70 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Cada etapa importa.<br />E você não precisa caminhar sozinho.
                    </h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto text-white/85">
                        Junte-se a milhares de tutores que já estão transformando o cuidado com seus pets.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button
                            onClick={() => window.open('/lista-espera', '_blank')}
                            className="bg-[#FFEDD8] hover:bg-white text-[#1D3557] px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                        >
                            Lista de Espera
                        </button>
                        <button
                            onClick={() => router.push('/contato')}
                            className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-[#1D3557] transition-all duration-300 cursor-pointer"
                        >
                            Entre em Contato
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
