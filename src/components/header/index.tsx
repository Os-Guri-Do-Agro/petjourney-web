'use client'
import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TransitionLink } from '@/components/transition-link'

gsap.registerPlugin(ScrollTrigger)

const headerItems = [
    {
        link: '/',
        label: 'Home'
    },
    // {
    //     link: '/sobre-nos',
    //     label: 'PetJourney'
    // },
    // {
    //     link: '/servicos',
    //     label: 'Serviços'
    // },
    {
        link: '/tutor',
        label: 'Tutor'
    },
    // {
    //     link: '/educacional',
    //     label: 'Educacional'
    // },
    {
        link: '/clinicas',
        label: 'Clínicas'
    },
    {
        link: '/artigos',
        label: 'Artigos'
    },
    {
        link: '/sobre-nos',
        label: 'Sobre-nos'
    },
]

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const headerRef = useRef(null)
    const logoRef = useRef(null)

    useEffect(() => {
        const hasAnimated = sessionStorage.getItem('headerAnimated')
        
        if (!hasAnimated && headerRef.current) {
            gsap.from(headerRef.current, { y: -100, opacity: 0, duration: 0.8, ease: 'power3.out' })
            sessionStorage.setItem('headerAnimated', 'true')
        }

        const trigger = ScrollTrigger.create({
            start: 'top -50',
            end: 99999,
            onEnter: () => {
                gsap.to(headerRef.current, {
                    backgroundColor: 'rgba(29, 53, 87, 0.95)',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                    duration: 0.4,
                    ease: 'power2.out'
                })
                gsap.to(logoRef.current, { scale: 0.85, duration: 0.4, ease: 'power2.out' })
            },
            onLeaveBack: () => {
                gsap.to(headerRef.current, {
                    backgroundColor: 'transparent',
                    paddingTop: '19px',
                    paddingBottom: '19px',
                    boxShadow: '0 0 0 rgba(0, 0, 0, 0)',
                    duration: 0.4,
                    ease: 'power2.out'
                })
                gsap.to(logoRef.current, { scale: 1, duration: 0.4, ease: 'power2.out' })
            }
        })

        return () => trigger.kill()
    }, [])

    return (
        <div ref={headerRef} className="fixed top-0 left-0 right-0 z-50 px-5 md:px-30 lg:px-70 py-4 md:py-6 bg-[#0d1b2a]/95 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none">
            <div className="flex justify-between items-center">
                <div>
                    <TransitionLink href={'/'}>
                        <img ref={logoRef} className='w-30 md:w-35 lg:w-45 object-contain hover:scale-105 transition-transform duration-200' src="./logo.png" alt="logo Pet Journey" />
                    </TransitionLink>
                </div>

                <div className="hidden lg:flex gap-5">
                    <ul className='flex gap-3'>
                        {headerItems.map((item) => (
                            <li className='font-semibold hover:scale-110 transition-transform duration-300 text-sm xl:text-base' key={item.link} style={{ color: 'var(--secondary)' }}>
                                <TransitionLink className='hover:text-[#1D3557] hover:bg-[#FFEDD8] px-3 rounded-2xl py-1' href={item.link}>{item.label}</TransitionLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="hidden lg:flex gap-3">
                    {/* <button className='text-white font-bold py-2 px-4 rounded-lg hover:scale-105 duration-200 transition-translate text-sm xl:text-base cursor-pointer'
                        style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)' }}>
                        Login
                    </button>
                    <button className='font-bold py-2 px-4 rounded-lg hover:scale-105 duration-200 transition-translate text-sm xl:text-base  cursor-pointer'
                        style={{ borderWidth: 2, borderColor: 'var(--secondary)', color: 'var(--secondary)' }}>
                        Cadastre-se
                    </button> */}
                                        <button className='font-bold py-2 px-4 rounded-lg hover:scale-105 duration-200 transition-translate text-sm xl:text-base  cursor-pointer'
                        style={{ borderWidth: 2, borderColor: 'var(--secondary)', color: 'var(--secondary)' }} onClick={() => window.open('/lista-espera', '_blank')}>
                        Lista de Espera
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
                                <TransitionLink href={item.link} onClick={() => setIsMenuOpen(false)}>{item.label}</TransitionLink>
                            </li>
                        ))}
                    </ul>
                    <div className="flex flex-col gap-3 mt-4">
                        {/* <button className='text-white font-bold py-2 px-4 rounded-lg'
                            style={{ backgroundColor: 'var(--secondary)', color: 'var(--primary)' }}>
                            Login
                        </button> */}
                        {/* <button className='font-bold py-2 px-4 rounded-lg'
                            style={{ borderWidth: 2, borderColor: 'var(--secondary)', color: 'var(--secondary)' }}>
                            Cadastre-se
                        </button> */}
                          <button className='font-bold py-2 px-4 rounded-lg hover:scale-105 duration-200 transition-translate text-sm xl:text-base  cursor-pointer'
                        style={{ borderWidth: 2, borderColor: 'var(--secondary)', color: 'var(--secondary)' }} onClick={() => window.open('/lista-espera', '_blank')}>
                        Lista de Espera
                    </button>
                    </div>
                </div>
            )}
        </div>
    )
}
