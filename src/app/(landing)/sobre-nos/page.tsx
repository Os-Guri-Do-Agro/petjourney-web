"use client";
import Image from "next/image";
import {
  Star,
  Heart,
  Shield,
  Zap,
  Users,
  Activity,
  BookOpen,
  Lightbulb,
  TrendingUp,
  Lock,
  Pill,
  Rocket,
  PawPrint,
} from "lucide-react";
import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import { event } from "@/lib/gtag";
gsap.registerPlugin(ScrollTrigger);

import manifestoImage from "@/assets/about/dog-abracando-human.png";
import ctaImage from "@/assets/about/ctaImagem.jpg";

const MANIFESTO_IMG = manifestoImage.src;
const CTA_IMG = ctaImage.src
// Troque cada URL pela foto real do membro quando tiver
const TEAM_MEMBERS = [
  {
    nome: "Nome Completo",
    cargo: "Cargo",
    src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80",
  },
  {
    nome: "Nome Completo",
    cargo: "Cargo",
    src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80",
  },
  {
    nome: "Nome Completo",
    cargo: "Cargo",
    src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80",
  },
  {
    nome: "Nome Completo",
    cargo: "Cargo",
    src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80",
  },
  {
    nome: "Nome Completo",
    cargo: "Cargo",
    src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80",
  },
  {
    nome: "Nome Completo",
    cargo: "Cargo",
    src: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&q=80",
  },
];

const valores = [
  {
    icon: Heart,
    bgIcon: Heart,
    title: "Cuidado em Primeiro Lugar",
    description:
      "Acreditamos que cada pet merece acompanhamento estruturado, contínuo e \nresponsável. O bem-estar animal orienta tudo o que fazemos.",
  },
  {
    icon: Zap,
    bgIcon: Lightbulb,
    title: "Tecnologia com Propósito",
    description:
      "Desenvolvemos soluções digitais que organizam informações, reduzem fricções e \nfortalecem a continuidade do cuidado.",
  },
  {
    icon: Shield,
    bgIcon: Lock,
    title: "Confiança e Transparência",
    description:
      "Protegemos dados com responsabilidade, conformidade à LGPD e governança clara. A \nconfiança vem antes de qualquer crescimento.",
  },
  {
    icon: BookOpen,
    bgIcon: BookOpen,
    title: "Educação e Clareza",
    description:
      "Valorizamos informação acessível e orientações que ajudem tutores e profissionais a \ntomar decisões mais conscientes.",
  },
  {
    icon: Activity,
    bgIcon: Pill,
    title: "Prevenção como Cultura",
    description:
      "Acreditamos que organizar hoje é proteger amanhã. Estrutura é a base da saúde \npreventiva.",
  },
  {
    icon: Users,
    bgIcon: Users,
    title: "Colaboração e Continuidade",
    description:
      "Cuidar é um esforço conjunto. Trabalhamos para fortalecer relações entre tutores, \nprofissionais e o ecossistema de saúde pet.",
  },
];

const jornada = [
  {
    ano: "2025",
    DotIcon: Lightbulb,
    titulo: "A ideia ganha forma",
    desc: "A PETJourney nasce da percepção de um problema silencioso: a saúde dos pets está fragmentada. Começamos a estruturar uma solução baseada em organização, continuidade e responsabilidade digital.",
    cor: "from-violet-500 to-purple-600",
  },
  {
    ano: "2025",
    DotIcon: Rocket,
    titulo: "Fundação da Plataforma",
    desc: "Definição da arquitetura inicial, validação do conceito e desenvolvimento do MVP focado na organização do histórico de saúde dos pets.",
    cor: "from-[#457B9D] to-[#1D3557]",
  },
  {
    ano: "2026",
    DotIcon: TrendingUp,
    titulo: "Primeira Fase: Estrutura do Cuidado",
    desc: "Lançamento oficial da plataforma, permitindo que tutores organizem vacinas, exames e documentos em um ambiente digital seguro e centralizado.",
    cor: "from-emerald-500 to-teal-600",
  },
  {
    ano: "2026",
    DotIcon: Star,
    titulo: "Construindo a Infraestrutura",
    desc: "Início da expansão por módulos, preparando a base para integrações futuras e novas camadas de cuidado.",
    cor: "from-amber-400 to-orange-500",
  },
];

export default function SobreNos() {
  const router = useRouter();

  const heroRef = useRef(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const missaoRef = useRef<(HTMLDivElement | null)[]>([]);
  const valoresRef = useRef<(HTMLDivElement | null)[]>([]);
  const manifestoRef = useRef(null);
  const ctaRef = useRef(null);
  const counterEls = useRef<HTMLSpanElement[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselTween = useRef<gsap.core.Tween | null>(null);
  const sloganRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      // Features cards foram removidos do layout.

      // Valores
      valoresRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          scale: 0.88,
          duration: 0.55,
          delay: (i % 3) * 0.1,
          ease: "back.out(1.3)",
        });
        el.addEventListener("mouseenter", () =>
          gsap.to(el, { y: -8, duration: 0.3 }),
        );
        el.addEventListener("mouseleave", () =>
          gsap.to(el, { y: 0, duration: 0.3 }),
        );
      });

      // Manifesto
      gsap.from(manifestoRef.current, {
        scrollTrigger: {
          trigger: manifestoRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        x: 60,
        duration: 1,
        ease: "power2.out",
      });

      // Slogan
      gsap.fromTo(
        ".slogan-word",
        { opacity: 0, y: 15 },
        {
          scrollTrigger: {
            trigger: sloganRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.25,
          ease: "power2.out",
        },
      );
      gsap.fromTo(
        ".slogan-paw",
        { opacity: 0, scale: 0, rotation: -30 },
        {
          scrollTrigger: {
            trigger: sloganRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          opacity: 1,
          scale: 1,
          rotation: 12,
          delay: 0.8,
          duration: 0.6,
          ease: "back.out(2.5)",
        },
      );

      // Jornada — agora é controlada pelo componente JornadaScrub
      // (pin + scrub via ScrollTrigger dentro do próprio componente)

      // CTA
      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="h-[60vh] bg-[url('../assets/about/about-cachorro-not.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="relative z-10 w-full px-5 md:px-20 lg:px-20 xl:px-40 2xl:px-70 pt-24">
          <div ref={heroRef} className=" text-white space-y-6 w-full md:mt-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-[#FAF9F6]">
              A PetJourney <br />
              Tecnologia a serviço do cuidado animal
            </h1>

            <p className="text-[#FAF9F6] text-xl max-w-lg">
              Nascemos da necessidade de organizar e estruturar a saúde dos pets em 
um ambiente digital seguro e acessível.
            </p>

            <div className=" flex gap-5">
              <button
                onClick={() => {
                  event({
                    action: "click",
                    category: "cta",
                    label: "Sobre Nos Hero - Faça Parte",
                  });
                  window.open("/lista-espera", "_blank");
                }}
                className="bg-linear-to-l from-[#457b9d] to-[#1D3557] px-6 py-3 rounded-xl font-semibold shadow-lg w-full max-w-70 hover:bg-linear-to-r hover:from-[#457b9d] hover:to-[#1D3557] duration-300 transition-colors cursor-pointer"
              >
                Faça parte
              </button>
              <button
                onClick={() => {
                  event({
                    action: "click",
                    category: "cta",
                    label: "Sobre Nos Hero - Saiba Mais",
                  });
                  document.getElementById('valores')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 bg-[#00000050] px-6 py-3 rounded-xl font-semibold shadow-lg w-full max-w-70 hover:bg-[#FAF9F6] duration-300 transition-colors cursor-pointer hover:text-[#1D3557] hover:border-white"
              >
                Saiba mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOSSOS VALORES ───────────────────────────────────── */}
      <section id="valores" className="w-full py-24 bg-[#FAF9F6]">
        <div className="px-5 md:px-20 lg:px-70">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1D3557] mb-6">
              Nossos Valores
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Os pilares que guiam cada decisão e cada linha de código que
              escrevemos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((v, i) => {
              const Icon = v.icon;
              const BgIcon = v.bgIcon;
              return (
                <div
                  key={i}
                  ref={(el) => {
                    valoresRef.current[i] = el;
                  }}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative overflow-hidden group"
                >
                  {/* ícone decorativo de fundo */}
                  <BgIcon className="absolute -right-4 -top-4 w-24 h-24 text-[#1D3557] opacity-[0.04] group-hover:opacity-[0.08] transition-opacity duration-500" />

                  <div className="bg-linear-to-bl from-[#457b9d] to-[#1D3557] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl text-[#1D3557] text-center mb-3 relative z-10">
                    {v.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed relative z-10">
                    {v.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── MANIFESTO ────────────────────────────────────────── */}
      <section className="w-full overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Foto — troque o src pelo seu quando tiver */}
          <div className="relative h-[420px] md:h-auto min-h-[420px] order-1 md:order-2 overflow-hidden">
            <Image
              src={MANIFESTO_IMG}
              alt="Manifesto — troque pela sua foto"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
            <div className="absolute inset-0 bg-[#1D3557]/20" />
          </div>

          <div
            ref={manifestoRef}
            className="flex items-center px-5 md:px-16 lg:px-20 py-16 order-2 md:order-1 bg-[#F1FAEE]"
          >
            <div className="w-full space-y-6 max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D3557]">
                Nosso Manifesto
              </h2>
              <div className="space-y-5">
                {[
                  "A saúde dos pets não pode depender de lembranças soltas ou documentos espalhados.",
                  "Por isso, transformamos cuidado em organização.",
                  "Transformamos preocupação em clareza.",
                  "Transformamos amor em continuidade.",
                  "Porque na PetJourney, cada passo conta.",
                  "Cuidar de um pet é amar todos os dias.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="shrink-0 w-2 h-2 rounded-full bg-[#457B9D] mt-3" />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── FAIXA Slogan ───────────────────────────────────────── */}
        <div
          ref={sloganRef}
          className="w-full bg-[#1D3557] relative py-16 flex justify-center items-center px-5 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1D3557] to-[#457B9D] opacity-95" />
          <h2 className="relative z-10 text-xl md:text-3xl lg:text-4xl font-light text-white tracking-[0.15em] md:tracking-[0.2em] text-center flex flex-wrap justify-center items-baseline gap-2 md:gap-4">
            <span className="slogan-word">amar.</span>
            <span className="slogan-word">conectar.</span>
            <span className="slogan-word font-semibold text-[#FFEDD8] flex items-center gap-1.5 md:gap-2">
              cuidar
              <PawPrint className="slogan-paw w-6 h-6 md:w-8 md:h-8 fill-current text-[#FFEDD8]" />
            </span>
          </h2>
        </div>
      </section>

      {/* ── NOSSA JORNADA — scroll-driven horizontal ──────────── */}
      <JornadaScrub />

      {/* ── FAIXA PRE-TEAM ───────────────────────────────────────── */}
      <section className="w-full bg-gradient-to-r from-[#457B9D] to-[#1D3557] py-16 md:py-24 flex flex-col justify-center items-center px-5 text-center relative overflow-hidden">
        <div className="absolute -top-12 -right-12 opacity-[0.03] pointer-events-none">
          <Heart className="w-64 h-64 text-white" />
        </div>
        <div className="absolute -bottom-12 -left-12 opacity-[0.03] pointer-events-none">
          <Users className="w-64 h-64 text-white" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed">
            Tecnologia criada por pessoas, <br className="md:hidden" />
            para cuidar de quem{" "}
            <span className="font-bold text-[#FFEDD8]">você mais ama</span>.
          </h2>
        </div>
      </section>

      {/* ── EQUIPE — carrossel infinito ───────────────────────── */}
      <TeamCarousel />

      {/* ── CTA FINAL ────────────────────────────────────────── */}
      {/* Troque o src pela sua foto de footer quando tiver */}
      <section
        className="py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${CTA_IMG})` }}
      >
        <div
          ref={ctaRef}
          className="relative z-10 px-5 md:px-20 lg:px-70 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Cada etapa importa.
            <br />E você não precisa caminhar sozinho.
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-white/85">
            Junte-se a milhares de tutores que já estão transformando o cuidado
            com seus pets.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                event({
                  action: "click",
                  category: "cta",
                  label: "Sobre Nos Footer - Lista de Espera",
                });
                window.open("/lista-espera", "_blank");
              }}
              className="bg-[#FFEDD8] hover:bg-white text-[#1D3557] px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              Lista de Espera
            </button>
            <button
              onClick={() => {
                event({
                  action: "click",
                  category: "cta",
                  label: "Sobre Nos Footer - Contato",
                });
                router.push("/contato");
              }}
              className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-[#1D3557] transition-all duration-300 cursor-pointer"
            >
              Entre em Contato
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

// ── Carrossel infinito da equipe ────────────────────────────────────────────
function TeamCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // Duplicamos os membros para criar o loop perfeito
  const items = [...TEAM_MEMBERS, ...TEAM_MEMBERS];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Largura de um "ciclo" completo (metade do total — os originais)
    const totalWidth = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: `-${totalWidth}px`,
      duration: 40,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    return () => {
      tweenRef.current?.kill();
    };
  }, []);

  return (
    <section className="w-full py-24 bg-[#FAF9F6] overflow-hidden">
      <div className="px-5 md:px-20 lg:px-70 mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-[#1D3557] mb-4">
          Nossa Equipe
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Conheça as pessoas que tornam a Pet Journey possível.
        </p>
      </div>

      {/* Faixas de fade nas bordas */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#FAF9F6] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#FAF9F6] to-transparent pointer-events-none" />

        <div
          className="flex gap-6 w-max"
          ref={trackRef}
          onMouseEnter={() => tweenRef.current?.pause()}
          onMouseLeave={() => tweenRef.current?.resume()}
        >
          {items.map((m, i) => (
            <div
              key={i}
              className="w-72 shrink-0 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#457B9D] hover:-translate-y-2 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={m.src}
                  alt={m.nome}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="288px"
                  unoptimized
                />
              </div>
              <div className="p-6 text-center space-y-2">
                <h4 className="text-lg font-bold text-[#1D3557]">{m.nome}</h4>
                <p className="text-[#457B9D] font-semibold text-sm uppercase tracking-wide">
                  {m.cargo}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Breve descrição sobre o membro da equipe.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Jornada — horizontal desktop / vertical mobile ──────────────────────────
function JornadaScrub() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Linha animada (cresce da esquerda no desktop, de cima no mobile)
    gsap.fromTo(
      ".jornada-line",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        transformOrigin: "left center",
        scrollTrigger: { trigger: section, start: "top 70%" },
      },
    );

    // Dots pulso
    gsap.fromTo(
      ".jornada-dot",
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(2)",
        stagger: 0.18,
        scrollTrigger: { trigger: section, start: "top 70%" },
      },
    );

    // Cards de cima (desktop) / todos no mobile
    gsap.fromTo(
      ".jornada-card-top",
      { y: -35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: section, start: "top 70%" },
      },
    );

    // Cards de baixo (desktop)
    gsap.fromTo(
      ".jornada-card-bot",
      { y: 35, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: { trigger: section, start: "top 70%" },
      },
    );
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white overflow-hidden">
      <div className="px-5 md:px-20 lg:px-70">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1D3557] mb-4">
            Nossa Jornada
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            De uma ideia a uma plataforma completa de saúde animal.
          </p>
        </div>

        {/* ── DESKTOP: horizontal zig-zag ─────────────────────── */}
        <div className="hidden md:block relative">
          {/* Cards de cima (0 e 2) */}
          <div className="grid grid-cols-4 gap-4">
            {jornada.map((item, i) => {
              const DotIcon = item.DotIcon;
              const isTop = i % 2 === 0;
              return (
                <div
                  key={i}
                  className={
                    isTop ? "jornada-card-top" : "invisible pointer-events-none"
                  }
                >
                  {isTop && (
                    <div className="bg-[#FAF9F6] rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                      <DotIcon className="absolute -right-3 -bottom-3 w-16 h-16 text-[#457B9D]/8" />
                      <span
                        className={`inline-block bg-gradient-to-r ${item.cor} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}
                      >
                        {item.ano}
                      </span>
                      <h3 className="text-base font-bold text-[#1D3557] mb-2">
                        {item.titulo}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Linha + dots */}
          <div className="relative flex items-center my-4">
            <div className="jornada-line absolute left-0 right-0 h-0.5 bg-gradient-to-r from-[#457B9D] via-[#1D3557] to-[#457B9D] origin-left" />
            <div className="grid grid-cols-4 gap-4 w-full relative z-10">
              {jornada.map((item, i) => {
                const DotIcon = item.DotIcon;
                return (
                  <div key={i} className="flex justify-center">
                    <div
                      className={`jornada-dot w-12 h-12 rounded-full bg-gradient-to-br ${item.cor} flex items-center justify-center shadow-lg ring-4 ring-white`}
                    >
                      <DotIcon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Cards de baixo (1 e 3) */}
          <div className="grid grid-cols-4 gap-4">
            {jornada.map((item, i) => {
              const DotIcon = item.DotIcon;
              const isBot = i % 2 !== 0;
              return (
                <div
                  key={i}
                  className={
                    isBot ? "jornada-card-bot" : "invisible pointer-events-none"
                  }
                >
                  {isBot && (
                    <div className="bg-[#FAF9F6] rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                      <DotIcon className="absolute -right-3 -bottom-3 w-16 h-16 text-[#457B9D]/8" />
                      <span
                        className={`inline-block bg-gradient-to-r ${item.cor} text-white text-xs font-bold px-3 py-1 rounded-full mb-4`}
                      >
                        {item.ano}
                      </span>
                      <h3 className="text-base font-bold text-[#1D3557] mb-2">
                        {item.titulo}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── MOBILE: vertical ────────────────────────────────── */}
        <div className="md:hidden relative pl-7 max-w-xs mx-auto">
          {/* Linha vertical */}
          <div className="jornada-line absolute left-2.5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#457B9D] via-[#1D3557] to-[#457B9D] origin-top" />

          <div className="flex flex-col gap-5">
            {jornada.map((item, i) => {
              const DotIcon = item.DotIcon;
              return (
                <div key={i} className="jornada-card-top relative ">
                  {/* Dot na linha */}
                  <div
                    className={`jornada-dot absolute -left-8 top-3.5 w-8 h-8 rounded-full bg-gradient-to-br ${item.cor} flex items-center justify-center shadow-md ring-3 ring-white`}
                  >
                    <DotIcon className="w-3.5 h-3.5 text-white" />
                  </div>

                  {/* Card */}
                  <div className="bg-[#FAF9F6] rounded-xl p-4 shadow-sm border border-gray-100 relative overflow-hidden">
                    <DotIcon className="absolute -right-2 -bottom-2 w-10 h-10 text-[#457B9D]/8" />
                    <span
                      className={`inline-block bg-gradient-to-r ${item.cor} text-white text-xs font-bold px-2.5 py-0.5 rounded-full mb-2`}
                    >
                      {item.ano}
                    </span>
                    <h3 className="text-sm font-bold text-[#1D3557] mb-1">
                      {item.titulo}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
