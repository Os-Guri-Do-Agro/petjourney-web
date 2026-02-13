'use client'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'

const headerItems = [
    {
        link: '/',
        label: 'Home'
    },
    {
        link: '/sobre',
        label: 'PetJourney'
    },
    {
        link: '/consultas',
        label: 'Consultas'
    },
    {
        link: '/articles',
        label: 'Artigos'
    },
    {
        link: '/educacional',
        label: 'Educacional'
    },
    {
        link: '/marketplace',
        label: 'Marketplace'
    },
]

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const headerRef = useRef(null)

    useEffect(() => {
        gsap.from(headerRef.current, { y: -100, opacity: 0, duration: 0.8 })
    }, [])

    return (
        <div ref={headerRef} className="absolute top-0 left-0 right-0 z-50 bg-black/40 px-4 md:px-8 lg:px-15 py-4 md:py-6" >
            <div className="flex justify-between items-center">
                <div className='px-2 md:px-5'>
                    <Link href={'/'}>
                        <img className='w-30 md:w-35 lg:w-45 object-contain hover:scale-105 transition-transform duration-200' src="/logo.png" alt="logo Pet Journey" />
                    </Link>
                </div>

                <div className="hidden lg:flex gap-5">
                    <ul className='flex gap-3'>
                        {headerItems.map((item) => (
                            <li className='font-semibold hover:scale-110 transition-transform duration-300 text-sm xl:text-base' key={item.link} style={{ color: 'var(--secondary)' }}>
                                <Link className='hover:text-[#1D3557] hover:bg-[#FFEDD8] px-3 rounded-2xl py-1' href={item.link}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden lg:flex gap-3">
                    <button className='text-white font-bold py-2 px-4 rounded-lg hover:scale-105 duration-200 transition-translate text-sm xl:text-base cursor-pointer'
                        style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)' }}>
                        Login
                    </button>
                    <button className='font-bold py-2 px-4 rounded-lg hover:scale-105 duration-200 transition-translate text-sm xl:text-base  cursor-pointer'
                        style={{ borderWidth: 2, borderColor: 'var(--secondary)', color: 'var(--secondary)' }}>
                        Cadastre-se
                    </button>
                </div>

                <button
                    className="lg:hidden p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="var(--secondary)" viewBox="0 0 24 24">
                        {isMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {isMenuOpen && (
                <div className="lg:hidden mt-4 pb-4">
                    <ul className='flex flex-col gap-4'>
                        {headerItems.map((item) => (
                            <li className='font-semibold text-center' key={item.link} style={{ color: 'var(--secondary)' }}>
                                <Link href={item.link} onClick={() => setIsMenuOpen(false)}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-3 mt-4">
                        <button className='text-white font-bold py-2 px-4 rounded-lg'
                            style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)' }}>
                            Login
                        </button>
                        <button className='font-bold py-2 px-4 rounded-lg'
                            style={{ borderWidth: 2, borderColor: 'var(--secondary)', color: 'var(--secondary)' }}>
                            Cadastre-se
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
