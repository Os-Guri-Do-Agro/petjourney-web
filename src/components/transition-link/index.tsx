'use client'
import { useTransition } from '@/context/transition-context'
import { usePathname } from 'next/navigation'
import { MouseEvent, ReactNode } from 'react'

interface TransitionLinkProps {
    href: string
    children: ReactNode
    className?: string
    onClick?: () => void
}

export function TransitionLink({ href, children, className, onClick }: TransitionLinkProps) {
    const { navigate } = useTransition()
    const pathname = usePathname()

    function handleClick(e: MouseEvent<HTMLAnchorElement>) {
        e.preventDefault()
        // Não anima se já estiver na mesma rota
        if (pathname === href) return
        onClick?.()
        navigate(href)
    }

    return (
        <a href={href} onClick={handleClick} className={className}>
            {children}
        </a>
    )
}
