"use client"

import { Target } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FaInstagram, FaFacebook } from "react-icons/fa"

export function Footer() {
    return (
        <footer className="bg-[#243F63] text-white pt-16 px-5 md:px-20 lg:px-30 relative overflow-hidden">
            <div className="relative z-10 pb-8">
                <div className="flex flex-col gap-6 mb-12">
                    <div className="flex items-center gap-5 md:gap-10 lg:gap-20">
                        <Image
                            src="/logo-footer.png"
                            alt="Pet Journey"
                            width={150}
                            height={60}
                            style={{ width: "auto", height: "auto" }}
                            className="hover:scale-105 transition-transform duration-300"
                        />
                        <div className="bg-white/20 w-full h-[2px]" />
                    </div>

                    <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white hover:text-[#243F63] hover:border-white transition-all duration-300 cursor-pointer">
                            <Link href={'https://www.instagram.com/petjourney.health/'} target="_blank">
                                <FaInstagram />
                            </Link>

                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white hover:text-[#243F63] hover:border-white transition-all duration-300 cursor-pointer">
                            <Link href={'https://www.facebook.com/petjourney.health'} target="_blank">
                                <FaFacebook />
                            </Link>

                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
                    <div>
                        <h4 className="font-bold text-lg mb-5 text-white">Catálogo</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/clinicas" className="inline-block text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">Clínicas</Link></li>
                            <li><Link href="/artigos" className="inline-block text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">Artigos e Dicas</Link></li>
                            <li><Link href="/tutor" className="inline-block text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">Tutor</Link></li>
                            <li><Link href="/contato" className="inline-block text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">Contato</Link></li>
                            {/* <li><Link href="/lojas-parceiras" className="inline-block text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">Lojas Parceiras</Link></li> */}
                        </ul>
                    </div>

                    {/* <div>
                        <h4 className="font-bold text-lg mb-5 text-white">Serviços</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="#" className="inline-block text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">Agendamento Online</Link></li>
                            <li><Link href="#" className="inline-block text-white/70 hover:text-white hover:translate-x-1 transition-all duration-200">Planos de Saúde</Link></li>
                        </ul>
                    </div> */}

                    <div>
                        <h4 className="font-bold text-lg mb-5 text-white">Contato</h4>
                        <div className="space-y-3 text-sm">
                            {/* <Link href="tel:11999999999" className="inline-block text-white/70 hover:text-white transition-colors duration-200">📞 (11) 9999-9999</Link> */}
                            <Link href="mailto:atendimento@petjourney.health" className="inline-block text-white/70 hover:text-white transition-colors duration-200">atendimento@petjourney.health</Link>
                            <p className="text-white/70 mt-4 leading-relaxed">Cuidando do seu pet com amor e dedicação</p>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-5 text-white">Newsletter</h4>
                        <p className="text-sm text-white/70 mb-4 leading-relaxed">Receba dicas e novidades sobre cuidados com seu pet</p>
                        <div className="flex flex-col gap-3">
                            <input
                                className="w-full h-11 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white px-4 placeholder:text-white/40 focus:outline-none focus:border-white/50 focus:bg-white/15 transition-all"
                                placeholder="Seu e-mail"
                                type="email"
                            />
                            <button className="bg-white text-[#243F63] h-11 rounded-lg font-semibold hover:bg-white/90 hover:scale-105 transition-all duration-200 cursor-pointer">
                                Inscrever-se
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/10">
                    <p className="text-center text-sm text-white/50">© 2026 PetJourney. Todos os direitos reservados.</p>
                </div>
            </div>

            <div className="absolute bottom-0 right-5 opacity-20">
                <Image
                    src="/pata-footer.png"
                    alt="Decoração"
                    width={200}
                    height={150}
                    style={{ width: "auto", height: "auto" }}
                />
            </div>
        </footer>
    )
}
