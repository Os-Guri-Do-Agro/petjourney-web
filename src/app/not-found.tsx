import Link from 'next/link'
import { Construction } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
            <div className="text-center space-y-6 p-8">
                <Construction className="w-24 h-24 text-[#457B9D] mx-auto" />
                <h1 className="text-5xl font-bold text-[#1D3557]">Ops! Estamos construindo isso aqui 🚧</h1>
                <p className="text-[#1D3557]/70 max-w-md mx-auto">Essa página ainda está no forno! Nossa equipe está trabalhando duro para trazer novidades incríveis pra você.</p>
                <Link 
                    href="/"
                    className="inline-block mt-6 px-8 py-3 bg-[#457B9D] text-white font-medium rounded-lg hover:bg-[#1D3557] transition-colors"
                >
                    Voltar para home
                </Link>
            </div>
        </div>
    )
}