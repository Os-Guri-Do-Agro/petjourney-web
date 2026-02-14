'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ave from '../assets/home/ave.jpg'
import coelho from '../assets/home/coelho.jpg'
import tutor from '../assets/home/tutor.jpg'
import bgPetJourney from '../assets/home/bg-logo-petjourney.jpg'
import Carousel from '../components/home/carousel-wrap'
import Artigos from '../components/home/articles-section'
import {
  Beef,
  Pill,
  ToyBrick,
  ShowerHead,
  Stethoscope,
  Dog
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
    { icon: Beef, label: "Alimentos" },
    { icon: Pill, label: "Medicamentos" },
    { icon: ToyBrick, label: "Brinquedos" },
    { icon: ShowerHead, label: "Banho & Tosa" },
    { icon: Stethoscope, label: "Consultas" },
    { icon: Dog, label: "Passeadores" }
  ]

  return (
    <>
      <section className="h-[90vh] bg-[url('../assets/home/bg-web.jpg')] bg-no-repeat bg-bottom bg-cover">
        <div className="relative z-10 w-full px-5 md:px-20 lg:px-30 pt-24">
          <div ref={heroRef} className=" text-white space-y-6 w-full mt-20">

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight ">
              Amar, <br />
              Conectar e Cuidar
            </h1>

            <p className=" text-2xl md:text-4xl font-semibold text-gray-200">
              Durante toda a jornada.
            </p>

            <p className="text-gray-300 text-xl md:text-2xl max-w-md">
              Somos a ponte entre a tecnologia e o cuidado animal contínuo,
              preventivo e acessível.
            </p>

            <button className="bg-[#4F7C99] px-6 py-3 rounded-xl font-semibold shadow-lg w-full max-w-70 hover:bg-[#00000038] duration-300 transition-colors cursor-pointer">
              Iniciar Jornada
            </button>
          </div>
        </div>
      </section>

      <section className="w-full min-h-50 flex items-center justify-center py-5 mb-7" style={{ background: 'linear-gradient(to bottom, var(--secondary), var(--background))' }}>
        <div className="flex w-full items-center justify-cente h-full px-5 md:px-20 lg:px-30">
          <div className=" flex w-full h-full text-center items-center justify-center">
            <h2 ref={missionRef} className="text-lg md:text-2xl font-semibold leading-light text-[#1D3557]">
              Transformamos a jornada com a saúde do seu pets em uma experiência completa, inteligente e humanizada, conectamos tecnologia, monitoramento, histórico médico, rede de profissionais e um ecossistema de bem-estar para que tutores possam cuidar dos seus animais com mais segurança, praticidade e amor em cada etapa da vida.
            </h2>
          </div>

        </div>
      </section>

      <section ref={section1Ref} className="w-full py-20 overflow-hidden" style={{ background: 'var(--background)' }}>

        <div className="grid md:grid-cols-2">

          <div className="image-container h-[400px] md:min-h-[500px] relative">
            <Image src={ave} alt="Pet care" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>

          <div className="flex items-center px-5 md:px-20 py-10 md:py-0 lg:px-30">
            <div className="text-content w-full space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D3557]">
                Saúde integrada:
                do chip ao check-up
              </h2>

              <p className="text-lg xl:text-2xl text-gray-700 leading-relaxed">
                Toda a jornada de saúde do seu pet em um só lugar:
                prontuário eletrônico, caderneta digital, exames,
                vacinas, dados do chip e compatibilidade com dispositivos inteligentes.
              </p>

              <button className="bg-[#457B9D] hover:bg-[#1b2e47] text-white px-8 py-3 rounded-xl transition-colors cursor-pointer w-full font-semibold">
                Saiba mais
              </button>
            </div>
          </div>
        </div>

        <div ref={section2Ref} className="grid md:grid-cols-2">

          <div className="flex items-center px-5 md:px-20 lg:px-30 py-10 order-2 md:order-1">
            <div className="text-content w-full space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D3557]">
                Para o tutor
              </h2>

              <p className="text-lg xl:text-2xl text-gray-700 leading-relaxed">
                Consultas online com veterinários de confiança.
                Agendamentos práticos, direto pelo app.
                Blog com dicas personalizadas para seu pet.
                Cursos rápidos sobre saúde, bem-estar e comportamento.
                Marketplace completo com os melhores produtos e serviços.
              </p>

              <button className="bg-[#457B9D] hover:bg-[#1b2e47] text-white px-10 py-3 rounded-xl transition-colors cursor-pointer w-full font-semibold">
                Saiba mais
              </button>
            </div>
          </div>

          <div className="image-container h-[400px] md:h-[500px] order-1 md:order-2 relative">
            <Image src={tutor} alt="Pet care" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
          </div>
        </div>

      </section>

      <section className="w-full flex justify-center py-20 bg-[#FAF9F6] px-5 md:px-20 lg:px-30 overflow-hidden">
        <div ref={vetRef} className="w-full bg-[#457B9D] rounded-2xl flex flex-col md:flex-row items-center gap-10">

          <div className=" w-full md:w-1/2 relative h-[500px] md:h-[450px] md:m-5">
            <Image src={coelho} alt='coelho' fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover rounded-tr-2xl rounded-tl-2xl md:rounded-2xl" />
          </div>

          <div className="w-full md:w-1/2 text-white space-y-6 p-5">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
              Para Veterinários
            </h2>

            <p className="text-gray-100 text-lg xl:text-2xl leading-relaxed">
              Acesso instantâneo ao histórico do animal.
              Agendamentos otimizados e comunicação direta com tutores.
              Cursos e especializações para sua evolução contínua.
              Ferramentas que simplificam o atendimento e fortalecem o vínculo com o tutor.
            </p>

            <button className="cursor-pointer w-full bg-[#FAF9F6] text-[#1D3557] px-8 py-3 rounded-xl font-semibold hover:scale-102 transition-transform duration-300">
              Saiba mais
            </button>
          </div>

        </div>
      </section>

      <section className="w-full flex justify-center py-20 bg-[#FAF9F6] px-5 md:px-20 lg:px-30 overflow-hidden">
        <div className="w-full flex flex-col lg:flex-row gap-16">

          <div ref={marketplaceRef} className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E3A5F] leading-snug">
              Tudo o que seu pet precisa, em um só lugar
            </h2>

            <div className="text-gray-700 text-lg leading-relaxed space-y-2">
              <p>
                O Marketplace Pet Journey conecta você aos melhores produtos,
                serviços e profissionais.
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
                  className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl bg-[#457B9D]"
                >
                  <Icon className="w-10 h-10 text-[#FAF9F6]" />
                  <span className="text-sm text-[#FAF9F6] font-semibold text-center">
                    {item.label}
                  </span>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      <section className='py-10 bg-[#FAF9F6]'>
        <div className="">
          <Carousel />
        </div>
      </section>

      <section className='w-full flex items-center justify-center py-10'>
        <Artigos />
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