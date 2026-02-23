'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ArtigoImg from '../../../assets/home/artigo-img.jpg'
import artigosHeaderImg from '@/assets/artigos/artigos-header.jpg'
import artigosFooterImg from '@/assets/artigos/artigos-footer.jpg'
import { artigoService } from '@/service/artigo/artigo-service'
import { categoriaArtigoService } from '@/service/categori-artigo/categoriaArtigo-service'
import { useRouter } from 'next/navigation'
import { event } from '@/lib/gtag'


if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function Artigos() {
    const [mounted, setMounted] = useState(false)
    const heroRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const missionRef = useRef<HTMLDivElement>(null)
    const featuredRef = useRef<HTMLDivElement>(null)
    const articlesRef = useRef<HTMLDivElement>(null)
    const finalRef = useRef<HTMLDivElement>(null)
    const [artigos, setArtigos] = useState<any[]>([])
    const [artigosDestaque, setArtigosDestaque] = useState<any[]>([])
    const [categoria, setCategoria] = useState<any[]>([])
    const router = useRouter()
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(9)
    const [titleFilter, setTitleFilter] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')

    const buscarArtigos = async () => {
        try {
            const response = await artigoService.getAllArtigos(page, limit, selectedCategory, titleFilter)
            setArtigos(response.data.data.data || [])
        } catch (e) {
            console.error('Erro ao buscar artigos:', e)
        }
    }

    const buscarArtigosDestaque = async () => {
        try {
            const response = await artigoService.getAllArtigos(1, 3, '', '')
            setArtigosDestaque(response.data.data.data || [])
        } catch (e) {
            console.error('Erro ao buscar artigos em destaque:', e)
        }
    }

    const buscarCategoriaArtigo = async () => {
        try {
            const response = await categoriaArtigoService.getAllCategoriaArtigo()
            const data = response?.data?.data?.data || response?.data?.data || []
            setCategoria(Array.isArray(data) ? data : [])
        } catch (e) {
            console.error('Erro ao buscar categorias:', e)
            setCategoria([])
        }
    }

    useEffect(() => {
        setMounted(true)
        buscarCategoriaArtigo()
        buscarArtigosDestaque()
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            buscarArtigos()
        }, 500)
        return () => clearTimeout(timeout)
    }, [selectedCategory, titleFilter, page])

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

            if (missionRef.current) {
                gsap.from(missionRef.current, {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: missionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
                })
            }

            if (featuredRef.current?.children) {
                gsap.from(Array.from(featuredRef.current.children), {
                    scrollTrigger: {
                        trigger: featuredRef.current,
                        start: 'top 75%',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power2.out'
                })
            }

            if (articlesRef.current?.children) {
                gsap.from(Array.from(articlesRef.current.children), {
                    scrollTrigger: {
                        trigger: articlesRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 0,
                    y: 80,
                    duration: 0.8,
                    stagger: 0.1,
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
            <section className="min-h-[60vh] flex items-center bg-cover bg-top" style={{ backgroundImage: `url(${artigosHeaderImg.src})` }}>
                <div className="w-full px-5 md:px-20 lg:px-70 pt-32 pb-20">
                    <div ref={heroRef} className="text-white space-y-6 max-w-4xl">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                            Artigos
                        </h1>
                        <p className="text-lg md:text-xl text-[#FAF9F6] max-w-2xl">
                            Conteúdos sobre saúde, bem-estar e cuidados com seu pet
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#FAF9F6]">
                <div className="px-5 md:px-20 lg:px-70">
                    <div ref={textRef} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-4">
                            Na PetJourney, acreditamos que cada pet merece <br /> uma vida longa e cheia de cuidado.
                        </h2>
                        <p className="text-lg text-[#457B9D] max-w-3xl mx-auto">
                        Cada tutor merece uma ferramenta para tornar isso possível. <br />
Somos uma plataforma que conecta saúde, bem-estar e tecnologia em uma jornada completa
de cuidado animal.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#FAF9F6]">
                <div className="px-5 md:px-20 lg:px-70">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-4">
                            Últimos Posts
                        </h2>
                        <p className="text-lg text-[#457B9D] max-w-2xl mx-auto">
                            Confira os artigos mais recentes sobre cuidados com pets
                        </p>
                    </div>

                    <div ref={featuredRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {artigosDestaque.length > 0 && (
                            <>
                                <div className="relative h-[400px] md:h-[500px] group cursor-pointer" onClick={() => router.push(`/artigos/${artigosDestaque[0].id}`)}>
                                    <img
                                        src={artigosDestaque[0].imagensArtigo?.find((img: any) => img.isBanner)?.imagemUrl || ArtigoImg.src}
                                        alt={artigosDestaque[0].titulo}
                                        className="w-full h-full object-cover rounded-xl shadow-lg"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent rounded-xl flex flex-col justify-end p-6">
                                        <h4 className="text-2xl font-bold text-white mb-2 line-clamp-2">{artigosDestaque[0].titulo}</h4>
                                        <p className="text-gray-200 text-sm">{new Date(artigosDestaque[0].createdAt).toLocaleDateString('pt-BR')}</p>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-6">
                                    {artigosDestaque[1] && (
                                        <div className="relative h-[190px] md:h-[240px] group cursor-pointer" onClick={() => router.push(`/artigos/${artigosDestaque[1].id}`)}>
                                            <img
                                                src={artigosDestaque[1].imagensArtigo?.find((img: any) => img.isBanner)?.imagemUrl || ArtigoImg.src}
                                                alt={artigosDestaque[1].titulo}
                                                className="w-full h-full object-cover rounded-xl shadow-lg"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent rounded-xl flex flex-col justify-end p-4">
                                                <h4 className="text-lg font-bold text-white mb-1 line-clamp-2">{artigosDestaque[1].titulo}</h4>
                                                <p className="text-gray-200 text-xs">{new Date(artigosDestaque[1].createdAt).toLocaleDateString('pt-BR')}</p>
                                            </div>
                                        </div>
                                    )}

                                    {artigosDestaque[2] && (
                                        <div className="relative h-[190px] md:h-[240px] group cursor-pointer" onClick={() => router.push(`/artigos/${artigosDestaque[2].id}`)}>
                                            <img
                                                src={artigosDestaque[2].imagensArtigo?.find((img: any) => img.isBanner)?.imagemUrl || ArtigoImg.src}
                                                alt={artigosDestaque[2].titulo}
                                                className="w-full h-full object-cover rounded-xl shadow-lg"
                                            />
                                            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent rounded-xl flex flex-col justify-end p-4">
                                                <h4 className="text-lg font-bold text-white mb-1 line-clamp-2">{artigosDestaque[2].titulo}</h4>
                                                <p className="text-gray-200 text-xs">{new Date(artigosDestaque[2].createdAt).toLocaleDateString('pt-BR')}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#FAF9F6]">
                <div className="px-5 md:px-20 lg:px-70">
                <div className="flex flex-col lg:flex-row gap-8">
                    <div className="lg:w-3/4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                            <div className="flex items-center w-full gap-5">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#1D3557]">
                                    Todos
                                </h3>
                                <input
                                    className='w-full max-w-2xl border-[#1D3557] border-2 rounded-lg px-4 py-2 text-[#1D3557] focus:outline-none focus:ring-2 focus:ring-[#1D3557]'
                                    placeholder="O'que está farejando?"
                                    type="text"
                                    value={titleFilter}
                                    onChange={(e) => {
                                        setTitleFilter(e.target.value)
                                        setPage(0)
                                    }}
                                />
                            </div>

                            <select
                                value={selectedCategory}
                                onChange={(e) => {
                                    setSelectedCategory(e.target.value)
                                    setPage(0)
                                }}
                                className="lg:hidden px-4 py-2 rounded-lg border-2 border-[#1D3557] text-[#1D3557] font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
                            >
                                <option value="">Todas as categorias</option>
                                {categoria.map((cat: any) => (
                                    <option key={cat.id} value={cat.id}>
                                        {cat.nome}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div ref={articlesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {artigos.map((artigo: any, index: number) => {
                                const bannerImage = artigo.imagensArtigo?.find((img: any) => img.isBanner)
                                return (
                                    <div
                                        key={artigo.id}
                                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100"
                                    >
                                        <div className="relative h-48">
                                            <img
                                                src={bannerImage?.imagemUrl || ArtigoImg.src}
                                                alt={artigo.titulo}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="p-4 space-y-2">
                                            <div className="flex items-center justify-between text-xs text-gray-500">
                                                <span>{new Date(artigo.createdAt).toLocaleDateString('pt-BR')}</span>
                                            </div>

                                            <h4 className="text-lg font-bold text-[#1D3557] line-clamp-2">
                                                {artigo.titulo}
                                            </h4>

                                            <p className="text-gray-600 text-sm line-clamp-2">
                                                {artigo.subTitulo}
                                            </p>

                                            <button className="text-[#1D3557] text-sm font-semibold hover:underline cursor-pointer" onClick={() => router.push(`/artigos/${artigo.id}`)}>
                                                Ler mais →
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="lg:w-1/4 hidden lg:block">
                        <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24 border border-gray-100">
                            <h3 className="text-xl font-bold text-[#1D3557] mb-4">
                                Categorias
                            </h3>

                            <div className="space-y-2">
                                <button
                                    onClick={() => setSelectedCategory('')}
                                    className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer font-medium ${selectedCategory === ''
                                        ? 'bg-linear-to-r from-[#1D3557] to-[#457B9D] text-white shadow-md'
                                        : 'hover:bg-[#FFEDD8] text-[#1D3557]'
                                        }`}
                                >
                                    Todos
                                </button>

                                {categoria.map((cat: any) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setSelectedCategory(cat.id)}
                                        className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer font-medium ${selectedCategory === cat.id
                                            ? 'bg-linear-to-r from-[#1D3557] to-[#457B9D] text-white shadow-md'
                                            : 'hover:bg-[#FFEDD8] text-[#1D3557]'
                                            }`}
                                    >
                                        {cat.nome}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <section className="py-20 bg-cover bg-center" style={{ backgroundImage: `url(${artigosFooterImg.src})` }}>
                <div ref={finalRef} className="px-5 md:px-20 lg:px-70 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Cada etapa importa, e a PetJourney acompanha você em cada uma delas.
                    </h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto">
                    Fique por dentro das novidades do nosso lançamento.
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button onClick={() => {
                            event({ action: 'click', category: 'cta', label: 'Artigos Footer - Lista de Espera' })
                            window.open('/lista-espera', '_blank')
                        }} className="bg-[#FFEDD8] text-[#1D3557] px-10 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                            Lista de Espera
                        </button>
                        <button onClick={() => {
                            event({ action: 'click', category: 'cta', label: 'Artigos Footer - Contato' })
                            router.push('/contato')
                        }} className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-[#1D3557] transition-all duration-300 cursor-pointer">
                            Entre em contato
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
