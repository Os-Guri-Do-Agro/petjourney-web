'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import artigoImg from '@/assets/home/artigo-img.jpg'
import tutorImg from '@/assets/home/tutor.jpg'
import aveImg from '@/assets/home/ave.jpg'
import coelhoImg from '@/assets/home/coelho.jpg'
import bgSection from '@/assets/home/bg-section_2.jpg'
import { artigoService } from '@/service/artigo/artigo-service'
import { useParams } from 'next/navigation'

gsap.registerPlugin(ScrollTrigger)

export default function ArtigoPage() {
    const [mounted, setMounted] = useState(false)
    const [loading, setLoading] = useState(true)
    const coverRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const [artigo, setArtigo] = useState<any>(null)
    const params = useParams()
    const id = params.id as string
    const [artigos, setArtigos] = useState<any[]>([])

    const infoArtigo = async () => {
        try {
            setLoading(true)
            const response = await artigoService.getArtigoById(id)
            setArtigo(response.data.data)
        } catch (error) {
            console.error('Erro ao buscar artigo:', error)
        } finally {
            setLoading(false)
        }
    }

    const buscarArtigos = async () => {
        try {
            const response = await artigoService.getAllArtigos(1, 4, '', '')
            setArtigos(response.data.data.data || [])
        } catch (e) {
            console.error('Erro ao buscar artigos:', e)
        }
    }

    useEffect(() => {
        infoArtigo()
        buscarArtigos()
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return

        const ctx = gsap.context(() => {
            if (coverRef.current) {
                gsap.from(coverRef.current, {
                    opacity: 0,
                    scale: 1.1,
                    duration: 1.2,
                    ease: 'power2.out'
                })
            }

            if (contentRef.current?.children) {
                gsap.from(Array.from(contentRef.current.children), {
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 0,
                    y: 50,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'power2.out'
                })
            }
        })

        return () => ctx.revert()
    }, [mounted])

    const bannerImage = artigo?.imagensArtigo?.find((img: any) => img.isBanner)?.imagemUrl || artigoImg
    const galeriaImages = artigo?.imagensArtigo?.filter((img: any) => !img.isBanner) || []
    const dataFormatada = artigo?.createdAt ? new Date(artigo.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }) : ''

    const outrosArtigosFiltrados = artigos.filter((a: any) => a.id !== id).slice(0, 4)

    const getCategoryColor = (category: string) => {
        const colors: { [key: string]: string } = {
            'Saúde': 'bg-gradient-to-r from-[#10b981] to-[#059669]',
            'Comportamento': 'bg-gradient-to-r from-[#8b5cf6] to-[#7c3aed]',
            'Alimentação': 'bg-gradient-to-r from-[#f59e0b] to-[#d97706]',
            'Bem-estar': 'bg-gradient-to-r from-[#ec4899] to-[#db2777]',
            'Dicas': 'bg-gradient-to-r from-[#3b82f6] to-[#2563eb]',
            'Novidades': 'bg-gradient-to-r from-[#ef4444] to-[#dc2626]'
        }
        return colors[category] || 'bg-gradient-to-r from-[#1D3557] to-[#457B9D]'
    }

    if (loading) {
        return (
            <>
                <section className="relative w-full h-[60vh] md:h-[70vh] bg-gray-200 animate-pulse" />
                <section className="w-full bg-[#FAF9F6] py-16">
                    <div className="max-w-7xl mx-auto px-5 md:px-10">
                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="lg:w-2/3 space-y-8">
                                <div className="h-8 bg-gray-200 rounded animate-pulse" />
                                <div className="h-32 bg-gray-200 rounded animate-pulse" />
                                <div className="h-64 bg-gray-200 rounded animate-pulse" />
                            </div>
                            <aside className="lg:w-1/3">
                                <div className="h-8 bg-gray-200 rounded animate-pulse mb-6" />
                                <div className="space-y-4">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="h-48 bg-gray-200 rounded animate-pulse" />
                                    ))}
                                </div>
                            </aside>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    return (
        <>
            <section className="relative w-full h-[60vh] md:h-[70vh]">
                <div ref={coverRef} className="relative w-full h-full">
                    <Image
                        src={bannerImage}
                        alt={artigo?.titulo || 'Artigo'}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 px-5 md:px-20 lg:px-20 xl:px-40 2xl:px-70pb-12">
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            {artigo?.titulo}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-4">
                            {artigo?.subTitulo}
                        </p>
                        <p className="text-gray-300 text-sm">{dataFormatada}</p>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#FAF9F6] py-16">
                <div className="max-w-7xl mx-auto px-5 md:px-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div ref={contentRef} className="lg:w-2/3 space-y-8">
                            <div>
                                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                                    {artigo?.introducao}
                                </p>
                            </div>

                            <div
                                className="text-md lg:text-lg prose prose-lg max-w-none text-gray-800"
                                dangerouslySetInnerHTML={{ __html: artigo?.conteudo || '' }}
                            />

                            {galeriaImages.length > 0 && (
                                <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                                    <Image
                                        src={galeriaImages[0].imagemUrl}
                                        alt="Imagem do artigo"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}

                            <div className="bg-linear-to-r from-[#1D3557] to-[#457B9D] p-8 rounded-xl shadow-lg">
                                <p className="text-lg text-gray-100 leading-relaxed">
                                    {artigo?.conclusao}
                                </p>
                            </div>

                            <div className="pt-8">
                                <Link
                                    href="/artigos"
                                    className="inline-flex items-center gap-2 bg-[#1D3557] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#457B9D] transition-colors"
                                >
                                    ← Voltar para Artigos
                                </Link>
                            </div>
                        </div>

                        <aside className="lg:w-1/3">
                            <div className="lg:sticky lg:top-8">
                                <h3 className="text-2xl font-bold text-[#1D3557] mb-6">Outros Artigos</h3>

                                <div className="hidden lg:flex lg:flex-col lg:space-y-6">
                                    {outrosArtigosFiltrados.map((art: any) => {
                                        const banner = art.imagensArtigo?.find((img: any) => img.isBanner)?.imagemUrl || artigoImg
                                        const data = new Date(art.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
                                        return (
                                            <Link key={art.id} href={`/artigos/${art.id}`}>
                                                <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                                                    <div className="relative h-40">
                                                        <Image
                                                            src={banner}
                                                            alt={art.titulo}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div className="p-4">
                                                        <span className="bg-linear-to-r from-[#1D3557] to-[#457B9D] text-white px-2 py-1 rounded-full text-xs font-semibold inline-block mb-2">
                                                            {art.categoriaArtigo?.nome || 'Artigo'}
                                                        </span>
                                                        <h4 className="text-lg font-bold text-[#1D3557] mb-2">{art.titulo}</h4>
                                                        <p className="text-gray-500 text-sm">{data}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>

                                <div className="lg:hidden overflow-x-auto scrollbar-hide">
                                    <div className="flex gap-4 pb-4">
                                        {outrosArtigosFiltrados.map((art: any) => {
                                            const banner = art.imagensArtigo?.find((img: any) => img.isBanner)?.imagemUrl || artigoImg
                                            const data = new Date(art.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
                                            return (
                                                <Link key={art.id} href={`/artigos/${art.id}`}>
                                                    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer min-w-[280px] w-[280px]">
                                                        <div className="relative h-40">
                                                            <Image
                                                                src={banner}
                                                                alt={art.titulo}
                                                                fill
                                                                className="object-cover"
                                                            />
                                                        </div>
                                                        <div className="p-4">
                                                            <span className="bg-linear-to-r from-[#1D3557] to-[#457B9D] text-white px-2 py-1 rounded-full text-xs font-semibold inline-block mb-2">
                                                                {art.categoriaArtigo?.nome || 'Artigo'}
                                                            </span>
                                                            <h4 className="text-lg font-bold text-[#1D3557] mb-2">{art.titulo}</h4>
                                                            <p className="text-gray-500 text-sm">{data}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}
