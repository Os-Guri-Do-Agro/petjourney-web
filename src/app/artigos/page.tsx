'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import coelho from '../../assets/home/coelho.jpg'
import ArtigoImg from '../../assets/home/artigo-img.jpg'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const categories = [
    'Saúde',
    'Comportamento',
    'Alimentação',
    'Bem-estar',
    'Dicas',
    'Novidades'
]

const articles = [
    {
        id: 1,
        title: 'Como cuidar da saúde do seu pet',
        excerpt: 'Dicas essenciais para manter seu animal saudável e feliz durante toda a vida.',
        category: 'Saúde',
        image: ArtigoImg,
        date: '15 Jan 2024'
    },
    {
        id: 2,
        title: 'Alimentação balanceada para cães',
        excerpt: 'Entenda a importância de uma dieta equilibrada para o seu melhor amigo.',
        category: 'Alimentação',
        image: ArtigoImg,
        date: '12 Jan 2024'
    },
    {
        id: 3,
        title: 'Comportamento felino: entenda seu gato',
        excerpt: 'Descubra os sinais que seu gato usa para se comunicar com você.',
        category: 'Comportamento',
        image: ArtigoImg,
        date: '10 Jan 2024'
    },
    {
        id: 4,
        title: 'Exercícios para pets: mantenha-os ativos',
        excerpt: 'A importância da atividade física para a saúde e bem-estar do seu pet.',
        category: 'Bem-estar',
        image: ArtigoImg,
        date: '08 Jan 2024'
    },
    {
        id: 5,
        title: 'Vacinação: proteja seu pet',
        excerpt: 'Calendário completo de vacinas essenciais para cães e gatos.',
        category: 'Saúde',
        image: ArtigoImg,
        date: '05 Jan 2024'
    },
    {
        id: 6,
        title: 'Novidades em tecnologia pet',
        excerpt: 'Conheça os dispositivos inteligentes que facilitam o cuidado com seu animal.',
        category: 'Novidades',
        image: ArtigoImg,
        date: '03 Jan 2024'
    }
]

export default function Artigos() {
    const [mounted, setMounted] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('Todos')
    const heroRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const missionRef = useRef<HTMLDivElement>(null)
    const featuredRef = useRef<HTMLDivElement>(null)
    const articlesRef = useRef<HTMLDivElement>(null)
    const finalRef = useRef<HTMLDivElement>(null)

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

    const filteredArticles = selectedCategory === 'Todos'
        ? articles
        : articles.filter(article => article.category === selectedCategory)

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
            <section className="w-full bg-[#1D3557] py-40 px-5 md:px-20 lg:px-30">
                <div ref={heroRef} className="text-center text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        Artigos
                    </h1>
                </div>
            </section>

            <section className="w-full py-20 bg-linear-to-b from-[#F1FAEE] to-[#FAF9F6]">
                <div className="px-5 md:px-20 lg:px-30">
                    <div ref={textRef} className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold leading-relaxed text-[#1D3557] mb-4">
                            Na Pet Journey, acreditamos que cada pet merece uma vida longa e cheia de cuidado.
                        </h2>
                        <p className="text-xl md:text-2xl text-[#457B9D] font-medium">
                            E que cada tutor merece as ferramentas para tornar isso possível.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full py-16 bg-[#FAF9F6]">
                <div className="px-5 md:px-20 lg:px-30">
                    <div ref={missionRef} className="relative">
                        <div className="absolute top-0 bottom-0 w-1 bg-linear-to-b from-[#457B9D] to-[#1D3557] rounded-full"></div>
                        <p className="text-center text-gray-700 text-lg md:text-xl leading-relaxed pl-6">
                            Somos uma plataforma que conecta saúde, bem-estar e tecnologia em uma jornada completa de cuidado animal. Unimos inovação, empatia e informação para facilitar a rotina de tutores e profissionais da área veterinária.
                        </p>
                    </div>
                </div>
            </section>

            <section className="w-full py-16 bg-[#FAF9F6]">
                <div className="w-full px-5 md:px-20 lg:px-30 py-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#1D3557] mb-8">
                        Últimos Posts
                    </h3>

                    <div ref={featuredRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative h-[400px] md:h-[500px] group cursor-pointer">
                            <Image
                                src={articles[0].image}
                                alt={articles[0].title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover rounded-xl shadow-lg"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent rounded-xl flex flex-col justify-end p-6">
                                <span className={`${getCategoryColor(articles[0].category)} text-white px-3 py-1 rounded-full text-xs font-semibold w-fit mb-3`}>
                                    {articles[0].category}
                                </span>
                                <h4 className="text-2xl font-bold text-white mb-2">{articles[0].title}</h4>
                                <p className="text-gray-200 text-sm">{articles[0].date}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="relative h-[190px] md:h-[240px] group cursor-pointer">
                                <Image
                                    src={articles[1].image}
                                    alt={articles[1].title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover rounded-xl shadow-lg"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent rounded-xl flex flex-col justify-end p-4">
                                    <span className={`${getCategoryColor(articles[1].category)} text-white px-3 py-1 rounded-full text-xs font-semibold w-fit mb-2`}>
                                        {articles[1].category}
                                    </span>
                                    <h4 className="text-lg font-bold text-white mb-1">{articles[1].title}</h4>
                                    <p className="text-gray-200 text-xs">{articles[1].date}</p>
                                </div>
                            </div>

                            <div className="relative h-[190px] md:h-[240px] group cursor-pointer">
                                <Image
                                    src={articles[2].image}
                                    alt={articles[2].title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover rounded-xl shadow-lg"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent rounded-xl flex flex-col justify-end p-4">
                                    <span className={`${getCategoryColor(articles[2].category)} text-white px-3 py-1 rounded-full text-xs font-semibold w-fit mb-2`}>
                                        {articles[2].category}
                                    </span>
                                    <h4 className="text-lg font-bold text-white mb-1">{articles[2].title}</h4>
                                    <p className="text-gray-200 text-xs">{articles[2].date}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full px-5 md:px-20 lg:px-30 py-10 bg-[#FAF9F6]">

                <div className="flex flex-col lg:flex-row gap-8">

                    <div className="lg:w-3/4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                            <div className="flex items-center w-full gap-5">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#1D3557]">
                                    Todos
                                </h3>
                                <input className='w-full max-w-2xl border-[#1D3557] border-2 rounded-lg px-4 py-2 text-[#1D3557] focus:outline-none focus:ring-2 focus:ring-[#1D3557]' placeholder="O'que está farejando?" type="text" />
                            </div>


                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="lg:hidden px-4 py-2 rounded-lg border-2 border-[#1D3557] text-[#1D3557] font-semibold cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1D3557]"
                            >
                                <option value="Todos">Todas as categorias</option>
                                {categories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div ref={articlesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredArticles.map((article, index) => (
                                <div
                                    key={article.id}
                                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                                >
                                    <div className="relative h-48">
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover"
                                            loading={index < 2 ? "eager" : "lazy"}
                                            priority={index < 2}
                                        />
                                    </div>

                                    <div className="p-4 space-y-2">
                                        <div className="flex items-center justify-between text-xs text-gray-500">
                                            <span className={`${getCategoryColor(article.category)} text-white px-2 py-1 rounded-full text-xs font-semibold shadow-md`}>
                                                {article.category}
                                            </span>
                                            <span>{article.date}</span>
                                        </div>

                                        <h4 className="text-lg font-bold text-[#1D3557] line-clamp-2">
                                            {article.title}
                                        </h4>

                                        <p className="text-gray-600 text-sm line-clamp-2">
                                            {article.excerpt}
                                        </p>

                                        <button className="text-[#1D3557] text-sm font-semibold hover:underline cursor-pointer">
                                            Ler mais →
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/4 hidden lg:block">
                        <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                            <h3 className="text-xl font-bold text-[#1D3557] mb-4">
                                Categorias
                            </h3>

                            <div className="space-y-2">
                                <button
                                    onClick={() => setSelectedCategory('Todos')}
                                    className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer font-medium ${selectedCategory === 'Todos'
                                        ? 'bg-linear-to-r from-[#1D3557] to-[#457B9D] text-white shadow-md'
                                        : 'hover:bg-[#FFEDD8] text-[#1D3557]'
                                        }`}
                                >
                                    Todos
                                </button>

                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer font-medium ${selectedCategory === category
                                            ? `${getCategoryColor(category)} text-white shadow-md`
                                            : 'hover:bg-[#FFEDD8] text-[#1D3557]'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
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
