'use client'
import Image from 'next/image'
import {
    Book, Watch, Calendar, Star, Heart, Shield, Zap, Users, Activity, BookOpen,
    MessageCircle, Stethoscope, Lightbulb, TrendingUp, Lock, Pill, Rocket, PawPrint
} from 'lucide-react'
<<<<<<< HEAD
import { useEffect, useRef } from 'react'
=======
import { useEffect, useRef, useCallback } from 'react'
>>>>>>> 70f282e85e6952e0928be0a7dd87c9e158f650b2
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRouter } from 'next/navigation'

gsap.registerPlugin(ScrollTrigger)

// ─── CDN PLACEHOLDER IMAGES (troque pelas suas fotos depois) ───────────────
const HERO_IMG      = 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1920&q=80'
const MANIFESTO_IMG = 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=900&q=80'
const CTA_IMG       = 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&q=80'
<<<<<<< HEAD
const TEAM_IMGS     = [
    'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80',
    'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80',
    'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80',
    'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80',
=======
// Troque cada URL pela foto real do membro quando tiver
const TEAM_MEMBERS = [
    { nome: 'Nome Completo', cargo: 'Cargo', src: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80' },
    { nome: 'Nome Completo', cargo: 'Cargo', src: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80' },
    { nome: 'Nome Completo', cargo: 'Cargo', src: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80' },
    { nome: 'Nome Completo', cargo: 'Cargo', src: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80' },
    { nome: 'Nome Completo', cargo: 'Cargo', src: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80' },
    { nome: 'Nome Completo', cargo: 'Cargo', src: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80' },
>>>>>>> 70f282e85e6952e0928be0a7dd87c9e158f650b2
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
<<<<<<< HEAD
=======
    const carouselRef  = useRef<HTMLDivElement>(null)
    const carouselTween = useRef<gsap.core.Tween | null>(null)
>>>>>>> 70f282e85e6952e0928be0a7dd87c9e158f650b2

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
<<<<<<< HEAD

            // Jornada items
            jornadaRef.current.forEach((el, i) => {
                if (!el) return
                gsap.from(el, {
                    scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
                    opacity: 0, x: i % 2 === 0 ? -60 : 60, duration: 0.8, ease: 'power3.out'
                })
            })

=======

            // Jornada — agora é controlada pelo componente JornadaScrub
            // (pin + scrub via ScrollTrigger dentro do próprio componente)

>>>>>>> 70f282e85e6952e0928be0a7dd87c9e158f650b2
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
<<<<<<< HEAD
=======
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

            {/* ── SEÇÃO ESCURA — marca / propósito ──────────────────── */}
            <section className="w-full py-28 bg-[#0d1b2a] relative overflow-hidden">
                {/* Ornamento de fundo */}
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#1D3557] rounded-full opacity-30 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#457B9D] rounded-full opacity-20 blur-3xl" />

                <div className="relative z-10 px-5 md:px-20 lg:px-70">
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 items-center gap-16">
                            <div className="space-y-6">
                                <span className="inline-block text-[#457B9D] text-sm font-bold uppercase tracking-widest">
                                    Missão
                                </span>
                                <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                                    Tecnologia a serviço
                                    <span className="text-[#457B9D]"> da vida.</span>
                                </h2>
                                <p className="text-lg text-white/65 leading-relaxed">
                                    Criamos a PetJourney porque acreditamos que cada animal merece
                                    uma saúde acompanhada com a mesma seriedade e cuidado que
                                    dedicamos às pessoas.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { num: '5k+',   label: 'Pets cadastrados'},
                                    { num: '300+',  label: 'Clínicas parceiras'},
                                    { num: '98%',   label: 'Satisfação' },
                                    { num: '24/7',  label: 'Suporte ativo' },
                                ].map((item, i) => (
                                    <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-[#1D3557]/60 transition-colors duration-300">
                                        <p className="text-3xl font-extrabold text-white mb-1">{item.num}</p>
                                        <p className="text-white/50 text-sm">{item.label}</p>
>>>>>>> 70f282e85e6952e0928be0a7dd87c9e158f650b2
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

<<<<<<< HEAD
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
=======
            {/* ── NOSSA JORNADA — scroll-driven horizontal ──────────── */}
            <JornadaScrub />

            {/* ── EQUIPE — carrossel infinito ───────────────────────── */}
            <TeamCarousel />
>>>>>>> 70f282e85e6952e0928be0a7dd87c9e158f650b2

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

// ── Carrossel infinito da equipe ────────────────────────────────────────────
function TeamCarousel() {
    const trackRef = useRef<HTMLDivElement>(null)
    const tweenRef = useRef<gsap.core.Tween | null>(null)

    // Duplicamos os membros para criar o loop perfeito
    const items = [...TEAM_MEMBERS, ...TEAM_MEMBERS]

    useEffect(() => {
        const track = trackRef.current
        if (!track) return

        // Largura de um "ciclo" completo (metade do total — os originais)
        const totalWidth = track.scrollWidth / 2

        tweenRef.current = gsap.to(track, {
            x: `-${totalWidth}px`,
            duration: 40,
            ease: 'none',
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(x => parseFloat(x) % totalWidth),
            },
        })

        return () => {
            tweenRef.current?.kill()
        }
    }, [])

    return (
        <section className="w-full py-24 bg-[#FAF9F6] overflow-hidden">
            <div className="px-5 md:px-20 lg:px-70 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-[#1D3557] mb-4">
                    Nossa Equipe
                </h2>
                <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                    Conheça as pessoas que tornam a Pet Journey possível.
                </p>
            </div>

            {/* Faixas de fade nas bordas */}
            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#FAF9F6] to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#FAF9F6] to-transparent pointer-events-none" />

                <div
                    className="flex gap-6 w-max"
                    ref={trackRef}
                    onMouseEnter={() => tweenRef.current?.pause()}
                    onMouseLeave={() => tweenRef.current?.resume()}
                >
                    {items.map((m, i) => (
                        <div
                            key={i}
                            className="w-72 shrink-0 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#457B9D] hover:-translate-y-2 group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={m.src}
                                    alt={m.nome}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="288px"
                                    unoptimized
                                />
                            </div>
                            <div className="p-6 text-center space-y-2">
                                <h4 className="text-lg font-bold text-[#1D3557]">{m.nome}</h4>
                                <p className="text-[#457B9D] font-semibold text-sm uppercase tracking-wide">{m.cargo}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    Breve descrição sobre o membro da equipe.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ── Jornada — horizontal desktop / vertical mobile ──────────────────────────
function JornadaScrub() {
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        // Linha animada (cresce da esquerda no desktop, de cima no mobile)
        gsap.fromTo('.jornada-line',
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out',
              transformOrigin: 'left center',
              scrollTrigger: { trigger: section, start: 'top 70%' } }
        )

        // Dots pulso
        gsap.fromTo('.jornada-dot',
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)',
              stagger: 0.18,
              scrollTrigger: { trigger: section, start: 'top 70%' } }
        )

        // Cards de cima (desktop) / todos no mobile
        gsap.fromTo('.jornada-card-top',
            { y: -35, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
              stagger: 0.15,
              scrollTrigger: { trigger: section, start: 'top 70%' } }
        )

        // Cards de baixo (desktop)
        gsap.fromTo('.jornada-card-bot',
            { y: 35, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out',
              stagger: 0.15,
              scrollTrigger: { trigger: section, start: 'top 70%' } }
        )
    }, [])

    return (
        <section ref={sectionRef} className="w-full py-24 bg-white overflow-hidden">
            <div className="px-5 md:px-20 lg:px-70">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1D3557] mb-4">
                        Nossa Jornada
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        De uma ideia a uma plataforma completa de saúde animal.
                    </p>
                </div>

                {/* ── DESKTOP: horizontal zig-zag ─────────────────────── */}
                <div className="hidden md:block relative">
                    {/* Cards de cima (0 e 2) */}
                    <div className="grid grid-cols-4 gap-4">
                        {jornada.map((item, i) => {
                            const DotIcon = item.DotIcon
                            const isTop = i % 2 === 0
                            return (
                                <div key={i} className={isTop ? 'jornada-card-top' : 'invisible pointer-events-none'}>
                                    {isTop && (
                                        <div className="bg-[#FAF9F6] rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                                            <DotIcon className="absolute -right-3 -bottom-3 w-16 h-16 text-[#457B9D]/8" />
                                            <span className={`inline-block bg-gradient-to-r ${item.cor} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                                                {item.ano}
                                            </span>
                                            <h3 className="text-base font-bold text-[#1D3557] mb-2">{item.titulo}</h3>
                                            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>

                    {/* Linha + dots */}
                    <div className="relative flex items-center my-4">
                        <div className="jornada-line absolute left-0 right-0 h-0.5 bg-gradient-to-r from-[#457B9D] via-[#1D3557] to-[#457B9D] origin-left" />
                        <div className="grid grid-cols-4 gap-4 w-full relative z-10">
                            {jornada.map((item, i) => {
                                const DotIcon = item.DotIcon
                                return (
                                    <div key={i} className="flex justify-center">
                                        <div className={`jornada-dot w-12 h-12 rounded-full bg-gradient-to-br ${item.cor} flex items-center justify-center shadow-lg ring-4 ring-white`}>
                                            <DotIcon className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* Cards de baixo (1 e 3) */}
                    <div className="grid grid-cols-4 gap-4">
                        {jornada.map((item, i) => {
                            const DotIcon = item.DotIcon
                            const isBot = i % 2 !== 0
                            return (
                                <div key={i} className={isBot ? 'jornada-card-bot' : 'invisible pointer-events-none'}>
                                    {isBot && (
                                        <div className="bg-[#FAF9F6] rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                                            <DotIcon className="absolute -right-3 -bottom-3 w-16 h-16 text-[#457B9D]/8" />
                                            <span className={`inline-block bg-gradient-to-r ${item.cor} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}>
                                                {item.ano}
                                            </span>
                                            <h3 className="text-base font-bold text-[#1D3557] mb-2">{item.titulo}</h3>
                                            <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* ── MOBILE: vertical ────────────────────────────────── */}
                <div className="md:hidden relative pl-7 max-w-xs mx-auto">
                    {/* Linha vertical */}
                    <div className="jornada-line absolute left-2.5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#457B9D] via-[#1D3557] to-[#457B9D] origin-top" />

                    <div className="flex flex-col gap-5">
                        {jornada.map((item, i) => {
                            const DotIcon = item.DotIcon
                            return (
                                <div key={i} className="jornada-card-top relative ">
                                    {/* Dot na linha */}
                                    <div className={`jornada-dot absolute -left-8 top-3.5 w-8 h-8 rounded-full bg-gradient-to-br ${item.cor} flex items-center justify-center shadow-md ring-3 ring-white`}>
                                        <DotIcon className="w-3.5 h-3.5 text-white" />
                                    </div>

                                    {/* Card */}
                                    <div className="bg-[#FAF9F6] rounded-xl p-4 shadow-sm border border-gray-100 relative overflow-hidden">
                                        <DotIcon className="absolute -right-2 -bottom-2 w-10 h-10 text-[#457B9D]/8" />
                                        <span className={`inline-block bg-gradient-to-r ${item.cor} text-white text-xs font-bold px-2.5 py-0.5 rounded-full mb-2`}>
                                            {item.ano}
                                        </span>
                                        <h3 className="text-sm font-bold text-[#1D3557] mb-1">{item.titulo}</h3>
                                        <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

