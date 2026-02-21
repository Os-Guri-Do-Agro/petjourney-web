'use client'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Artigos from '../../components/home/articles-section'
import { useRouter } from 'next/navigation'
import {
  Pill,
  FileText,
  Syringe,
  Share2,
  Bell,
  Calendar,
  Shield,
  Lock,
  UserCheck,
  Database
} from "lucide-react";

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLHeadingElement>(null)
  const section1Ref = useRef<HTMLElement>(null)
  const section2Ref = useRef<HTMLDivElement>(null)
  const vetRef = useRef<HTMLDivElement>(null)
  const marketplaceRef = useRef<HTMLDivElement>(null)
  const iconsRef = useRef<HTMLDivElement>(null)
  const finalRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const problemsRef = useRef<HTMLDivElement>(null)
  const benefitsRef = useRef<HTMLDivElement>(null)
  const securityRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  const ItensSaudePet = [
    {
      id: 1,
      icon: Database,
      title: 'Informações espalhadas ',
      description: 'Carteirinha, papéis, Whatsapp e memória- tudo desconectado.'
    },
    {
      id: 2,
      icon: Calendar,
      title: 'Falta de controle',
      description: 'Vacinas esquecidas, exames atrasados, dados perdidos.'
    },
    {
      id: 3,
      icon: Shield,
      title: 'Emergências sem dados',
      description: 'Na urgência, ninguém lembra do histórico completo do pet.'
    },
  ]

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const ctx = gsap.context(() => {
      // Hero animation
      if (heroRef.current?.children) {
        gsap.from(Array.from(heroRef.current.children), {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out'
        })
      }

      // Mission section
      if (missionRef.current) {
        gsap.from(missionRef.current, {
          opacity: 0,
          scale: 0.95,
          duration: 1,
          delay: 0.3,
          ease: 'power2.out'
        })
      }

      // Section 1 - Image slide + text fade
      const img1 = section1Ref.current?.querySelector('.image-container')
      if (img1) {
        gsap.from(img1, {
          scrollTrigger: {
            trigger: section1Ref.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        })
      }

      const text1 = section1Ref.current?.querySelector('.text-content')
      if (text1) {
        gsap.from(text1, {
          scrollTrigger: {
            trigger: section1Ref.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        })
      }

      // Section 2 - Reverse animation
      const text2 = section2Ref.current?.querySelector('.text-content')
      if (text2) {
        gsap.from(text2, {
          scrollTrigger: {
            trigger: section2Ref.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        })
      }

      const img2 = section2Ref.current?.querySelector('.image-container')
      if (img2) {
        gsap.from(img2, {
          scrollTrigger: {
            trigger: section2Ref.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        })
      }

      // Vet section - Scale up
      if (vetRef.current) {
        gsap.from(vetRef.current, {
          scrollTrigger: {
            trigger: vetRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          },
          scale: 0.9,
          opacity: 0,
          duration: 1,
          ease: 'back.out(1.2)'
        })
      }


      // Marketplace text
      if (marketplaceRef.current?.children) {
        gsap.from(Array.from(marketplaceRef.current.children), {
          scrollTrigger: {
            trigger: marketplaceRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out'
        })
      }

      // Service icons - Stagger animation
      if (iconsRef.current?.children) {
        gsap.from(Array.from(iconsRef.current.children), {
          scrollTrigger: {
            trigger: iconsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'back.out(1.7)'
        })
      }

      // Problems section - Cards stagger
      if (problemsRef.current?.children) {
        gsap.from(Array.from(problemsRef.current.children), {
          scrollTrigger: {
            trigger: problemsRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out'
        })
      }

      // Benefits section - Content fade + list stagger
      if (benefitsRef.current?.children) {
        gsap.from(Array.from(benefitsRef.current.children), {
          scrollTrigger: {
            trigger: benefitsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          },
          x: -50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out'
        })
      }

      // Security section - Grid cards stagger
      if (securityRef.current?.children) {
        gsap.from(Array.from(securityRef.current.children), {
          scrollTrigger: {
            trigger: securityRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out'
        })
      }

      // Final section - Newsletter
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
  const serviceIcons = [
    { icon: FileText, label: "Prontuário Digital" },
    { icon: Pill, label: "Exames e Prescrições" },
    { icon: Syringe, label: "Caderneta de Vacinas" },
    { icon: Share2, label: "Compartilhamento com Veterinários" },
    { icon: Bell, label: "Lembretes Automáticos" },
    { icon: Calendar, label: "Agendamento Integrado" }
  ]

  return (
    <>
      <section className="h-[81vh] bg-[url('../assets/home/bg-home.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="relative z-10 w-full px-5 md:px-20 lg:px-70 pt-24">
          <div ref={heroRef} className=" text-white space-y-6 w-full md:mt-20">

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-[#FAF9F6]">
              O histórico completo do seu pet, <br />
              acessível quando você precisar
            </h1>

            <p className="text-[#FAF9F6] text-xl max-w-lg">
              Vacinas, exames, prescrições e agendamentos organizados em um só lugar
            </p>

            <div className=" flex gap-5">
              <button onClick={() => window.open('/lista-espera', '_blank')} className="bg-linear-to-l from-[#457b9d] to-[#1D3557] px-6 py-3 rounded-xl font-semibold shadow-lg w-full max-w-70 hover:bg-linear-to-r hover:from-[#457b9d] hover:to-[#1D3557] duration-300 transition-colors cursor-pointer">
                Faça parte
              </button>
              <button onClick={() => router.push('/tutor')} className="border-2 bg-[#00000050] px-6 py-3 rounded-xl font-semibold shadow-lg w-full max-w-70 hover:bg-[#FAF9F6] duration-300 transition-colors cursor-pointer hover:text-[#1D3557] hover:border-white">
                Saiba mais
              </button>
            </div>

          </div>
        </div>
      </section>

      <section className='flex w-full px-5 md:px-40 lg:px-70 bg-linear-to-b from-[#1D3557] via-[#1d3557d3] py-10'>
        <div className=" flex flex-col w-full items-center justify-center gap-15">
          <div className="w-full flex align-center justify-center">
            <h2 className='text-center text-2xl md:text-3xl lg:text-4xl font-bold text-[#FAF9F6]'>O problema da saúde pet hoje</h2>
          </div>
          <div ref={problemsRef} className="w-full flex gap-5 md:gap-10 items-center justify-center flex-wrap md:flex-nowrap">
            {ItensSaudePet.map((item) => {
              const Icon = item.icon;
              return (
                <div className="w-full flex flex-col items-center justify-center gap-5 p-5 bg-[#FAF9F6] rounded-3xl shadow-lg md:h-full" key={item.id}>
                  <Icon className="w-20 h-20 text-[#1D3557]" />
                  <div className="text-center flex flex-col gap-3">
                    <h3 className='text-xl font-bold text-[#1D3557]'>{item.title}</h3>
                    <p className='max-w-90 text-[#457B9D] text-lg'>{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </section>

      <section className="w-full flex justify-center py-20 bg-[#FAF9F6] px-5 md:px-30 lg:px-70 overflow-hidden">
        <div className="w-full flex flex-col lg:flex-row gap-16">

          <div ref={marketplaceRef} className="lg:w-1/2 space-y-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1D3557] leading-snug">
              Solução: PetJourney <br /> Tudo conectado em um só lugar
            </h2>

            <div className="text-[#457B9D] text-lg leading-relaxed space-y-2">
              <p className=''>
                Não é apenas agenda.
                Não é apenas marketplace.
                É a memória médica estruturada do seu pet.

              </p>
              <p>
                Alimentos, medicamentos, brinquedos, serviços de banho, tosa,
                passeadores e muito mais.
              </p>
              <p>
                Tudo com curadoria, praticidade e vantagens exclusivas.
              </p>
              <p>
                Experiência completa, do clique ao carinho.
              </p>
            </div>
          </div>

          <div ref={iconsRef} className="lg:w-1/2 grid grid-cols-2 md:grid-cols-3 gap-6">

            {serviceIcons.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-linear-to-bl from-[#457b9d] to-[#1D3557]"
                >
                  <Icon className="w-10 h-10 text-[#FAF9F6]" />
                  <span className="text-sm text-[#FAF9F6] font-semibold text-center max-w-30">
                    {item.label}
                  </span>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      <section className="flex py-20 w-full">
        <div className="w-full bg-[url('../assets/home/home-cat-banner.jpg')] bg-no-repeat bg-center bg-cover flex min-h-150 items-center px-5 md:px-30 lg:px-70 justify-start h-full md:p-10">
          <div ref={benefitsRef} className="w-full h-full flex flex-col justify-center gap-5 md:p-10 lg:p-10 rounded-2xl md:bg-linear-to-r from-black/30 max-w-3xl">
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#FaF9F6] leading-snug'>
              Por que tutores e veterinários <br />vão amar a PetJourney
            </h2>

            <ul className='flex flex-col gap-2 '>
              <li className='text-xl md:text-2xl text-[#FAF9F6] list-disc ml-5 md:ml-10'>Tranquilidade para tutores</li>
              <li className='text-xl md:text-2xl text-[#FAF9F6] list-disc ml-5 md:ml-10'>Organização centralizada</li>
              <li className='text-xl md:text-2xl text-[#FAF9F6] list-disc ml-5 md:ml-10'>Economia de tempo</li>
              <li className='text-xl md:text-2xl text-[#FAF9F6] list-disc ml-5 md:ml-10'>Menos repetição de exames</li>
              <li className='text-xl md:text-2xl text-[#FAF9F6] list-disc ml-5 md:ml-10'>Apoio ao diagnóstico veterinário</li>
            </ul>

<div className=" flex gap-5 flex-wrap">
<button className="bg-linear-to-l from-[#457b9d] to-[#1D3557] hover:bg-linear-to-r hover:from-[#457b9d] hover:to-[#1D3557] px-6 py-3 rounded-xl font-semibold shadow-lg w-full max-w-70 hover:bg-white duration-300 transition-colors cursor-pointer text-white" onClick={() => router.push('/tutor')}>
              Sou Tutor
            </button>
            <button className="bg-linear-to-l from-[#457b9d] to-[#1D3557] px-6 py-3 rounded-xl font-semibold shadow-lg w-full max-w-70 hover:bg-white duration-300 transition-colors cursor-pointer text-white hover:bg-linear-to-r hover:from-[#457b9d] hover:to-[#1D3557]" onClick={() => router.push('/clinicas')}>
              Sou Veterinário
            </button>
</div>
          </div>

        </div>
      </section>

      <section className='w-full flex items-center justify-center'>
        <Artigos />
      </section>

      <section className="w-full py-20 px-5 md:px-30 lg:px-70 bg-linear-to-br from-[#1D3557] via-[#457b9d] to-[#1D3557] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/50 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-15">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FAF9F6] mb-4">
              Segurança e privacidade em primeiro lugar
            </h2>
            <p className="text-[#FAF9F6]/80 text-lg md:text-xl max-w-3xl mx-auto">
              Seus dados e os do seu pet protegidos com padrão profissional
            </p>
          </div>

          <div ref={securityRef} className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/15 ">
              <div className="bg-[#FAF9F6] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Lock className="w-8 h-8 text-[#1D3557]" />
              </div>
              <h3 className="text-2xl font-bold text-[#FAF9F6] mb-4">Criptografia de dados</h3>
              <p className="text-[#FAF9F6]/90 text-lg leading-relaxed">
                Todas as informações são criptografadas de ponta a ponta, garantindo que apenas você tenha acesso aos dados do seu pet.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/15 md:mt-12">
              <div className="bg-[#FAF9F6] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#1D3557]" />
              </div>
              <h3 className="text-2xl font-bold text-[#FAF9F6] mb-4">Conformidade com LGPD</h3>
              <p className="text-[#FAF9F6]/90 text-lg leading-relaxed">
                Seguimos rigorosamente a Lei Geral de Proteção de Dados, respeitando sua privacidade e direitos.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/15 ">
              <div className="bg-[#FAF9F6] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <UserCheck className="w-8 h-8 text-[#1D3557]" />
              </div>
              <h3 className="text-2xl font-bold text-[#FAF9F6] mb-4">Controle de compartilhamento</h3>
              <p className="text-[#FAF9F6]/90 text-lg leading-relaxed">
                Você decide quem pode acessar as informações do seu pet. Compartilhe com veterinários de forma segura e controlada.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 hover:bg-white/15 md:mt-12">
              <div className="bg-[#FAF9F6] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-[#1D3557]" />
              </div>
              <h3 className="text-2xl font-bold text-[#FAF9F6] mb-4">Consentimento explícito</h3>
              <p className="text-[#FAF9F6]/90 text-lg leading-relaxed">
                Nenhum dado é compartilhado sem sua autorização prévia. Transparência total em cada etapa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center bg-[#FAF9F6] overflow-hidden">
        <div className="w-full bg-[url('../assets/home/bgFooter-home.jpg')] bg-no-repeat bg-center bg-cover flex min-h-170 items-center px-5 md:px-30 lg:px-70 justify-end">
          <div ref={finalRef} className="bg-white/30 w-200 p-10 min-h-100 rounded-4xl flex flex-col items-center text-center justify-center gap-10">
            <h2 className='font-black text-3xl  lg:text-4xl text-[#1D3557]'>
              Comece agora a organizar a saúde do seu pet
            </h2>

<div className="flex gap-5 flex-wrap">
            <button className='px-5 py-4 bg-linear-to-bl from-[#457b9d] to-[#1D3557] hover:bg-linear-to-r hover:from-[#457b9d] hover:to-[#1D3557] rounded-2xl font-bold text-white max-w-70 cursor-pointer' onClick={() => window.open('/lista-espera', '_blank')}>
              Faça parte da lista de espera
            </button>
            
            <button className='border-2 border-white text-white bg-[#000000af] px-3 py-3 rounded-xl font-semibold shadow-lg hover:bg-[#FAF9F6] duration-300 transition-colors cursor-pointer hover:text-[#1D3557] hover:border-white' onClick={() => router.push('/tutor')}>
              Saiba mais
            </button>  
</div>

          </div>


        </div>
      </section>


    </>
  )
}