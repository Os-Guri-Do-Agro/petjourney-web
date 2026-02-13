'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import coelho from '../../assets/home/coelho.jpg'
import ArtigoImg from '../../assets/home/artigo-img.jpg'
import {
    House,
    ShowerHead,
    Volleyball,
    Birdhouse,
    Shirt,
    Ham,
    Grid2X2
} from 'lucide-react'

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger)
}

const storeCategories = [
    { name: 'Todas', icon: Grid2X2 },
    { name: 'Alimentação', icon: Ham },
    { name: 'Brinquedos', icon: Volleyball },
    { name: 'Creche', icon: House },
    { name: 'Higiene', icon: ShowerHead },
    { name: 'Hospedagem', icon: Birdhouse },
    { name: 'Roupas', icon: Shirt }
]

const stores = [
    {
        id: 1,
        name: 'PetShop Central',
        description: 'Tudo para seu pet em um só lugar',
        category: 'Alimentação',
        image: ArtigoImg,
        social: { instagram: 'https://www.instagram.com/', facebook: 'https://www.facebook.com/' }
    },
    {
        id: 2,
        name: 'Diversão Pet',
        description: 'Os melhores brinquedos para seu amigo',
        category: 'Brinquedos',
        image: ArtigoImg,
        social: { instagram: 'https://www.instagram.com/', facebook: 'https://www.facebook.com/' }
    },
    {
        id: 3,
        name: 'Creche Feliz',
        description: 'Cuidado e diversão para seu pet',
        category: 'Creche',
        image: ArtigoImg,
        social: { instagram: 'https://www.instagram.com/', facebook: 'https://www.facebook.com/' }
    },
    {
        id: 4,
        name: 'Banho & Tosa Premium',
        description: 'Higiene e beleza para seu pet',
        category: 'Higiene',
        image: ArtigoImg,
        social: { instagram: 'https://www.instagram.com/', facebook: 'https://www.facebook.com/' }
    },
    {
        id: 5,
        name: 'Hotel Pet Paradise',
        description: 'Hospedagem confortável e segura',
        category: 'Hospedagem',
        image: ArtigoImg,
        social: { instagram: 'https://www.instagram.com/', facebook: 'https://www.facebook.com/' }
    },
    {
        id: 6,
        name: 'Fashion Pet',
        description: 'Roupas e acessórios estilosos',
        category: 'Roupas',
        image: ArtigoImg,
        social: { instagram: 'https://www.instagram.com/', facebook: 'https://www.facebook.com/' }
    }
]


export default function Marketplace() {
    const [mounted, setMounted] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState('Todas')
    const [searchTerm, setSearchTerm] = useState('')
    const heroRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)
    const missionRef = useRef<HTMLDivElement>(null)
    const storesRef = useRef<HTMLDivElement>(null)
    const finalRef = useRef<HTMLDivElement>(null)

    const filteredStores = stores.filter(store => {
        const matchesCategory = selectedCategory === 'Todas' || store.category === selectedCategory
        const matchesSearch = store.name.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

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

            if (storesRef.current) {
                gsap.from(storesRef.current, {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: storesRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    }
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
            <section className="w-full bg-[#1D3557] py-40 px-5 md:px-20 lg:px-30">
                <div ref={heroRef} className="text-center text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        Lojas Parceiras
                    </h1>
                </div>
            </section>

            <section className="w-full py-20 bg-linear-to-b from-[#F1FAEE] to-[#FAF9F6]">
                <div className="px-5 md:px-20 lg:px-30">
                    <div ref={textRef} className="text-center">
                        <h2 className="text-2xl md:text-4xl font-bold leading-relaxed text-[#1D3557] mb-4">
                            Tudo que seu pet precisa em um só lugar
                        </h2>
                    </div>
                </div>
            </section>

            <section className="w-full py-16 bg-[#FAF9F6]">
                <div className="px-5 md:px-20 lg:px-30">
                    <div ref={missionRef} className="space-y-12">
                        <div className="relative">
                            <div className="absolute top-0 bottom-0 w-1 bg-linear-to-b from-[#457B9D] to-[#1D3557] rounded-full"></div>
                            <p className="text-center text-gray-700 text-lg md:text-xl leading-relaxed pl-6">
                                Comodidade, qualidade e curadoria: nosso marketplace reúne os melhores produtos e serviços para o bem-estar do seu pet. De ração e brinquedos a exames e serviços, aqui você encontra tudo o que precisa para cada etapa da jornada do seu melhor amigo.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
                            {storeCategories.filter(cat => cat.name !== 'Todas').map((cat) => {
                                const IconComponent = cat.icon
                                return (
                                    <div key={cat.name} className="flex flex-col items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                                        <div className="w-16 h-16 bg-[#457B9D] rounded-full flex items-center justify-center">
                                            <IconComponent className="text-white" size={32} />
                                        </div>
                                        <span className="text-sm font-semibold text-[#1D3557] text-center">{cat.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>


            <section ref={storesRef} className="w-full py-20 bg-[#FAF9F6]">
                <div className="px-5 md:px-20 lg:px-30">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1D3557] text-center mb-12">Nossas Lojas</h2>

                    <div className="mb-8 space-y-4">
                        <input
                            type="text"
                            placeholder="Buscar por nome da loja..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
                        />

                        <div className="flex flex-wrap gap-3 justify-center">
                            {storeCategories.map((cat) => {
                                const IconComponent = cat.icon
                                return (
                                    <button
                                        key={cat.name}
                                        onClick={() => setSelectedCategory(cat.name)}
                                        className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${selectedCategory === cat.name
                                            ? 'bg-[#457B9D] text-white'
                                            : 'bg-white text-[#1D3557] hover:bg-gray-100'
                                            }`}
                                    >
                                        <IconComponent size={20} />
                                        {cat.name}
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredStores.map((store) => (
                            <div key={store.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                <div className="relative h-60">
                                    <Image src={store.image} alt={store.name} fill className="object-cover" />
                                </div>
                                <div className="p-6 space-y-4">
                                    <div className="flex items-start gap-3">
                                        <div className="w-12 h-12 bg-[#457B9D] rounded-lg flex items-center justify-center shrink-0">
                                            {(() => {
                                                const IconComponent = storeCategories.find(c => c.name === store.category)?.icon || Ham
                                                return <IconComponent className="text-white" size={24} />
                                            })()}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-[#1D3557]">{store.name}</h3>
                                            <p className="text-sm text-gray-500">{store.category}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-700">{store.description}</p>
                                    <div className="flex gap-3 pt-2">
                                        <a href={store.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-2 bg-linear-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all">
                                            <FaInstagram size={18} />
                                            <span className="text-sm font-medium">Instagram</span>
                                        </a>
                                        <a href={store.social.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#0C63D4] transition-all">
                                            <FaFacebook size={18} />
                                            <span className="text-sm font-medium">Facebook</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredStores.length === 0 && (
                        <p className="text-center text-gray-500 text-lg mt-8">Nenhuma loja encontrada.</p>
                    )}
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
