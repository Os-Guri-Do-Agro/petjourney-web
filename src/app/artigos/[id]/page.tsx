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

gsap.registerPlugin(ScrollTrigger)

export default function ArtigoPage({ params }: { params: { id: string } }) {
    const [mounted, setMounted] = useState(false)
    const coverRef = useRef<HTMLDivElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const [artigo, setArtigo] = useState<any>(null)

    // const infoArtigo = async () => {
    //     try {
    //         console.log(params.id)
    //         const response = await artigoService.getArtigoById(id)
    //         setArtigo(response.data.data)
    //     } catch (error) {
    //         console.error('Erro ao buscar artigo:', error)
    //     }
    // }

    useEffect(() => {
        // infoArtigo()
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

    const article = {
        capa: artigoImg,
        titulo: 'Como Cuidar da Saúde do Seu Pet',
        subtitulo: 'Dicas essenciais para manter seu animal de estimação saudável e feliz',
        categoria: 'Saúde',
        data: '15 de Janeiro, 2024',
        introducao: 'A saúde do seu pet é fundamental para garantir uma vida longa e feliz. Neste artigo, vamos explorar as melhores práticas e cuidados essenciais que todo tutor deve conhecer.',
        conteudo: `
            <h2>Alimentação Balanceada</h2>
            <p>Uma alimentação adequada é a base da saúde do seu pet. Escolha rações de qualidade e consulte sempre um veterinário para definir a melhor dieta.</p>
            
            <h2>Exercícios Regulares</h2>
            <p>Manter seu pet ativo é essencial. Passeios diários, brincadeiras e atividades físicas ajudam a prevenir obesidade e problemas de comportamento.</p>
            
            <h2>Visitas ao Veterinário</h2>
            <p>Check-ups regulares são fundamentais para detectar problemas de saúde precocemente e manter a vacinação em dia.</p>
        `,
        banner: tutorImg,
        conclusao: 'Cuidar da saúde do seu pet é um compromisso diário que traz recompensas imensuráveis. Com atenção, carinho e os cuidados adequados, você garante que seu companheiro tenha uma vida plena e saudável ao seu lado.'
    }

    const outrosArtigos = [
        { id: 1, titulo: 'Alimentação Natural para Pets', categoria: 'Alimentação', imagem: tutorImg, data: '10 Jan, 2024' },
        { id: 2, titulo: 'Comportamento Canino', categoria: 'Comportamento', imagem: aveImg, data: '08 Jan, 2024' },
        { id: 3, titulo: 'Vacinação em Dia', categoria: 'Saúde', imagem: coelhoImg, data: '05 Jan, 2024' },
        { id: 4, titulo: 'Exercícios para Gatos', categoria: 'Bem-estar', imagem: artigoImg, data: '03 Jan, 2024' }
    ]

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

    return (
        <>
            <section className="relative w-full h-[60vh] md:h-[70vh]">
                <div ref={coverRef} className="relative w-full h-full">
                    <Image
                        src={article.capa}
                        alt={article.titulo}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 px-5 md:px-20 lg:px-30 pb-12">
                        <span className={`${getCategoryColor(article.categoria)} text-white px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4`}>
                            {article.categoria}
                        </span>
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                            {article.titulo}
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-200 mb-4">
                            {article.subtitulo}
                        </p>
                        <p className="text-gray-300 text-sm">{article.data}</p>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#FAF9F6] py-16">
                <div className="max-w-7xl mx-auto px-5 md:px-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div ref={contentRef} className="lg:w-2/3 space-y-8">
                            <div>
                                <p className="text-lg md:text-xl lg:text-2xl text-gray-700 leading-relaxed">
                                    {article.introducao}
                                </p>
                            </div>

                            <div
                                className="text-md lg:text-lg prose prose-lg max-w-none text-gray-800"
                                dangerouslySetInnerHTML={{ __html: article.conteudo }}
                            />

                            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={article.banner}
                                    alt="Banner do artigo"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="bg-linear-to-r from-[#1D3557] to-[#457B9D] p-8 rounded-xl shadow-lg">
                                <p className="text-lg text-gray-100 leading-relaxed">
                                    {article.conclusao}
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
                                    {outrosArtigos.map((artigo) => (
                                        <Link key={artigo.id} href={`/artigos/${artigo.id}`}>
                                            <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                                                <div className="relative h-40">
                                                    <Image
                                                        src={artigo.imagem}
                                                        alt={artigo.titulo}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div className="p-4">
                                                    <span className={`${getCategoryColor(artigo.categoria)} text-white px-2 py-1 rounded-full text-xs font-semibold inline-block mb-2`}>
                                                        {artigo.categoria}
                                                    </span>
                                                    <h4 className="text-lg font-bold text-[#1D3557] mb-2">{artigo.titulo}</h4>
                                                    <p className="text-gray-500 text-sm">{artigo.data}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                <div className="lg:hidden overflow-x-auto scrollbar-hide">
                                    <div className="flex gap-4 pb-4">
                                        {outrosArtigos.map((artigo) => (
                                            <Link key={artigo.id} href={`/artigos/${artigo.id}`}>
                                                <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow cursor-pointer min-w-[280px] w-[280px]">
                                                    <div className="relative h-40">
                                                        <Image
                                                            src={artigo.imagem}
                                                            alt={artigo.titulo}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div className="p-4">
                                                        <span className={`${getCategoryColor(artigo.categoria)} text-white px-2 py-1 rounded-full text-xs font-semibold inline-block mb-2`}>
                                                            {artigo.categoria}
                                                        </span>
                                                        <h4 className="text-lg font-bold text-[#1D3557] mb-2">{artigo.titulo}</h4>
                                                        <p className="text-gray-500 text-sm">{artigo.data}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
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
