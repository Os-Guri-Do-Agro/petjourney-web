"use client"

import { useEffect, useRef, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import ArtigoImg from "@/assets/home/artigo-img.jpg"
import { artigoService } from "@/service/artigo/artigo-service"
import { categoriaArtigoService } from "@/service/categori-artigo/categoriaArtigo-service"
import { useRouter } from "next/navigation"

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

export default function ArticlesSection() {
    const [mounted, setMounted] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [artigos, setArtigos] = useState<any[]>([])
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(6)
    const router = useRouter()

    const buscarArtigos = async () => {
        try {
            const response = await artigoService.getAllArtigos(page, limit, '', '')
            setArtigos(response.data.data.data || [])
        } catch (e) {
            console.error('Erro ao buscar artigos:', e)
        }
    }



    useEffect(() => {
        setMounted(true)
        buscarArtigos()
    }, [])

    useEffect(() => {
        if (!mounted || artigos.length === 0) return

        const ctx = gsap.context(() => {
            // Title animation
            if (titleRef.current) {
                gsap.from(titleRef.current, {
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    ease: 'power2.out'
                })
            }

            // Cards animation
            const cards = gsap.utils.toArray('.article-card')
            if (cards.length > 0) {
                gsap.from(cards, {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                        toggleActions: 'play none none reverse'
                    },
                    y: 100,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'power3.out'
                })
            }
        })

        return () => ctx.revert()
    }, [mounted, artigos])

    return (
        <section
            ref={sectionRef}
            className="w-full pb-10 bg-[#FAF9F6]"
        >
            <div className="w-full px-5 md:px-30 lg:px-70">

                <div ref={titleRef} className="text-center mb-16 space-y-4">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1D3557] leading-snug">
                        Artigos
                    </h2>
                    <p className="text-gray-700 text-lg xl:text-xl leading-relaxed max-w-3xl mx-auto">
                        Fique por dentro das curiosidades e notícias mais recentes do mundo pet
                    </p>
                </div>

                <div className="relative">
                    {/* Botões de navegação - apenas desktop */}
                    <button
                        onClick={() => {
                            if (containerRef.current) {
                                const newPosition = Math.max(0, scrollPosition - 380)
                                setScrollPosition(newPosition)
                                containerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' })
                            }
                        }}
                        disabled={scrollPosition === 0}
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center bg-[#457B9D] text-white rounded-full shadow-lg hover:bg-[#1b2e47] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        onClick={() => {
                            if (containerRef.current) {
                                const maxScroll = containerRef.current.scrollWidth - containerRef.current.clientWidth
                                const newPosition = Math.min(maxScroll, scrollPosition + 380)
                                setScrollPosition(newPosition)
                                containerRef.current.scrollTo({ left: newPosition, behavior: 'smooth' })
                            }
                        }}
                        disabled={containerRef.current ? scrollPosition >= containerRef.current.scrollWidth - containerRef.current.clientWidth : false}
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center bg-[#457B9D] text-white rounded-full shadow-lg hover:bg-[#1b2e47] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Container dos artigos */}
                    <div ref={containerRef} className="overflow-x-auto md:overflow-x-scroll scrollbar-hide p-10 p12">
                        <div className="flex gap-8">
                            {Array.isArray(artigos) && artigos.slice(0, 4).map((artigo) => {
                                const bannerImage = artigo.imagensArtigo?.find((img: any) => img.isBanner)
                                return (
                                    <div
                                        key={artigo.id}
                                        className="article-card relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl group shrink-0 w-[320px] md:w-[380px] h-[400px] transition-shadow duration-300"
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img
                                            src={bannerImage?.imagemUrl || ArtigoImg.src}
                                            alt={artigo.titulo}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />

                                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent" />

                                        <div className="absolute bottom-0 p-8 text-white space-y-4">
                                            <h3 className="text-xl md:text-2xl font-bold leading-tight line-clamp-2">
                                                {artigo.titulo}
                                            </h3>
                                            <p className="text-sm md:text-base text-gray-200 leading-relaxed line-clamp-2">
                                                {artigo.subTitulo}
                                            </p>

                                            <button onClick={() => router.push(`/artigos/${artigo.id}`)} className="bg-[#457B9D] cursor-pointer hover:bg-[#1b2e47] text-white px-8 py-3 rounded-xl transition-all duration-300 font-semibold hover:scale-105 w-full">
                                                Ler mais
                                            </button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}