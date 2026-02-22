'use client'
import { createContext, useContext, useRef, useCallback, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import gsap from 'gsap'

interface TransitionContextType {
    navigate: (href: string) => void
}

const TransitionContext = createContext<TransitionContextType>({
    navigate: () => {},
})

// Número de faixas da cortina
const STRIPS = 7

export function TransitionProvider({ children }: { children: ReactNode }) {
    const router = useRouter()
    const stripsRef = useRef<HTMLDivElement[]>([])
    const isAnimating = useRef(false)

    const navigate = useCallback((href: string) => {
        // ── Transição animada só para /sobre-nos ─────────────────────────────
        if (href !== '/lista-espera') {
            router.push(href)
            return
        }

        if (isAnimating.current) return
        isAnimating.current = true

        const strips = stripsRef.current.filter(Boolean)
        if (!strips.length) {
            router.push(href)
            isAnimating.current = false
            return
        }

        const tl = gsap.timeline()

        // ── ENTRADA: faixas deslizam da direita para cobrir a tela ──────────
        tl.set(strips, { x: '100%', display: 'block' })
        tl.to(strips, {
            x: '0%',
            duration: 0.55,
            ease: 'power4.inOut',
            stagger: {
                each: 0.055,
                from: 'start',
            },
        })

        // ── Navega assim que a cobertura está completa ───────────────────────
        tl.call(() => {
            router.push(href)
        })

        // ── SAÍDA: faixas deslizam para a esquerda revelando a nova página ──
        tl.to(strips, {
            x: '-110%',
            duration: 0.55,
            ease: 'power4.inOut',
            stagger: {
                each: 0.055,
                from: 'end', // saída em ordem reversa — visual de "abertura"
            },
            delay: 0.15,
            onComplete: () => {
                gsap.set(strips, { display: 'none', x: '100%' })
                isAnimating.current = false
            },
        })
    }, [router])

    return (
        <TransitionContext.Provider value={{ navigate }}>
            {/* ── Faixas da cortina ─────────────────────────────────── */}
            <div className="fixed inset-0 z-[9999] pointer-events-none flex flex-col" aria-hidden="true">
                {Array.from({ length: STRIPS }).map((_, i) => (
                    <div
                        key={i}
                        ref={el => { if (el) stripsRef.current[i] = el }}
                        className="flex-1 hidden"
                        style={{
                            /*
                             * Cada faixa tem uma tonalidade ligeiramente diferente
                             * para criar profundidade visual na cortina.
                             */
                            background: i % 2 === 0 ? '#1D3557' : '#16294a',
                        }}
                    />
                ))}
            </div>
            {children}
        </TransitionContext.Provider>
    )
}

export const useTransition = () => useContext(TransitionContext)
