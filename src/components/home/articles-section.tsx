"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@heroui/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import ArtigoImg from "@/assets/home/artigo-img.jpg"

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const articles = [
    {
        id: 1,
        title: "Título artigo",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        image: ArtigoImg,
    },
    {
        id: 2,
        title: "Título artigo",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        image: ArtigoImg,
    },
    {
        id: 3,
        title: "Título artigo",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        image: ArtigoImg,
    },
    {
        id: 4,
        title: "Título artigo",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        image: ArtigoImg,
    },
    {
        id: 5,
        title: "Título artigo",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
        image: ArtigoImg,
    },
]

export default function ArticlesSection() {
    const [mounted, setMounted] = useState(false)
    const [scrollPosition, setScrollPosition] = useState(0)
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const articlesToShow = articles.slice(0, 4)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        if (!mounted) return

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
    }, [mounted])

    return (
        <section
            ref={sectionRef}
            className="w-full py-10 bg-[#FAF9F6]"
        >
            <div className="max-w-7xl mx-auto px-6">

                <div ref={titleRef} className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557]">
                        Artigos
                    </h2>
                    <p className="text-gray-600 mt-3">
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
                        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
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
                        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Container dos artigos */}
                    <div ref={containerRef} className="overflow-x-auto md:overflow-x-scroll scrollbar-hide pb-4">
                        <div className="flex gap-6">
                            {articlesToShow.map((article) => (
                                <div
                                    key={article.id}
                                    className="article-card relative rounded-2xl overflow-hidden shadow-lg group shrink-0 w-[300px] md:w-[350px] max-h-110"
                                >
                                    <Image
                                        src={article.image}
                                        alt={article.title}
                                        width={400}
                                        height={400}
                                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                    />

                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                                    <div className="absolute bottom-0 p-6 text-white">
                                        <h3 className="text-lg font-semibold mb-2">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-gray-200 mb-4">
                                            {article.description}
                                        </p>

                                        <Button
                                            variant="outline"
                                            className="text-white border-white hover:bg-white hover:text-black transition"
                                        >
                                            Ler mais
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}