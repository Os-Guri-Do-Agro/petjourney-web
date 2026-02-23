"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronDown,
  Check,
  Loader2,
} from "lucide-react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
  Transition,
} from "@headlessui/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tutor from "../../../assets/home/tutor.jpg";
import coelho from "../../../assets/home/coelho.jpg";
import { marketingService } from "@/service/marketing/marketing-server";
import toast, { Toaster } from "react-hot-toast";
import clinicaFooterImg from "@/assets/clinica/clinica-footer.jpg";
import { useRouter } from 'next/navigation'
import { event } from '@/lib/gtag'
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
gsap.registerPlugin(ScrollTrigger);
const assuntos = [
  { id: "duvida", name: "Dúvida" },
  { id: "suporte", name: "Suporte" },
  { id: "parceria", name: "Parceria" },
  { id: "outro", name: "Outro" },
];

export default function Contato() {
  const [mounted, setMounted] = useState(false);
    const router = useRouter()
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [selectedAssunto, setSelectedAssunto] = useState(assuntos[0]);
  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [loading, setLoading] = useState(false);

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone: string) => {
    const cleaned = phone.replace(/\D/g, "");
    return cleaned.length === 11;
  };

  const validateName = (name: string) => {
    return name.trim().length >= 3;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      nome: "",
      email: "",
      telefone: "",
      mensagem: "",
    };

    if (!validateName(formData.nome)) {
      newErrors.nome = "Nome deve ter pelo menos 3 caracteres";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!validatePhone(formData.telefone)) {
      newErrors.telefone = "Telefone deve ter 11 dígitos";
    }

    if (formData.mensagem.trim().length < 10) {
      newErrors.mensagem = "Mensagem deve ter pelo menos 10 caracteres";
    }

    setErrors(newErrors);

    if (
      newErrors.nome ||
      newErrors.email ||
      newErrors.telefone ||
      newErrors.mensagem
    ) {
      return;
    }

    setLoading(true);
    try {
      await marketingService.postContact({
        nome: formData.nome,
        email: formData.email,
        telefone: formData.telefone.replace(/\D/g, ""),
        assunto: selectedAssunto.name,
        mensagem: formData.mensagem,
      });
      setTimeout(() => {
        toast.success("Mensagem enviada com sucesso!");
      }, 300);
      event({
        action: "form_submit",
        category: "contato",
        label: selectedAssunto.name,
      });
      setFormData({ nome: "", email: "", telefone: "", mensagem: "" });
      setSelectedAssunto(assuntos[0]);
    } catch (error) {
      toast.error("Erro ao enviar mensagem");
      event({
        action: "form_error",
        category: "contato",
        label: "Erro na API",
      });
    } finally {
      setLoading(false);
    }
  };

  const heroRef = useRef<any>(null);
  const formRef = useRef<any>(null);
  const imageRef = useRef<any>(null);
  const ctaRef = useRef<any>(null);
  const cardsRef = useRef<any>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const ctx = gsap.context(() => {
      if (heroRef.current?.children) {
        gsap.from(Array.from(heroRef.current.children), {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });
      }

      if (formRef.current) {
        gsap.from(formRef.current, {
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          x: -50,
          duration: 1,
          ease: "power3.out",
        });
      }

      if (imageRef.current) {
        gsap.from(imageRef.current, {
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          x: 50,
          duration: 1,
          ease: "power3.out",
        });
      }

      if (ctaRef.current) {
        gsap.from(ctaRef.current, {
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
          scale: 0.95,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      }
    });

    return () => ctx.revert();
  }, [mounted]);

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handlePhoneChange = (e: React.ChangeEvent<any>) => {
    const value = e.target.value.replace(/\D/g, "");
    const formatted = value
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .slice(0, 15);
    setFormData({ ...formData, telefone: formatted });
    setErrors({ ...errors, telefone: "" });
  };

  return (
    <main className="min-h-screen bg-[#FAF9F6] w-full max-w-[100vw] overflow-x-hidden">
      <Toaster position="top-right" />
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-[url('../assets/contato/celularNaMaoContato.png')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40" />
        <div
          ref={heroRef}
          className="relative z-10 h-full flex flex-col items-center justify-center text-white px-5"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 text-center max-w-2xl">
            Estamos aqui para cuidar da jornada do seu pet
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-5 md:px-20 lg:px-30 py-20 relative z-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Form */}
          <div ref={formRef} className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-3xl font-bold text-[#1D3557] mb-6">
              Envie sua mensagem
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.nome ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#457B9D] transition-all`}
                />
                {errors.nome && (
                  <p className="text-red-500 text-sm mt-1">{errors.nome}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#457B9D] transition-all`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handlePhoneChange}
                  placeholder="(00) 00000-0000"
                  className={`w-full px-4 py-3 border ${errors.telefone ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#457B9D] transition-all`}
                />
                {errors.telefone && (
                  <p className="text-red-500 text-sm mt-1">{errors.telefone}</p>
                )}
              </div>

              <div className="relative z-20">
                <Listbox value={selectedAssunto} onChange={setSelectedAssunto}>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Assunto
                  </label>
                  <ListboxButton className="relative w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#457B9D] bg-white text-left cursor-pointer transition-all">
                    <span className="block truncate">
                      {selectedAssunto.name}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </span>
                  </ListboxButton>
                  <Transition
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <ListboxOptions className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto focus:outline-none">
                      {assuntos.map((assunto) => (
                        <ListboxOption
                          key={assunto.id}
                          value={assunto}
                          className="relative cursor-pointer select-none py-3 pl-10 pr-4 data-focus:bg-[#457B9D] data-focus:text-white bg-white text-gray-900"
                        >
                          {({ selected }) => (
                            <>
                              <span
                                className={`block truncate ${selected ? "font-semibold" : "font-normal"}`}
                              >
                                {assunto.name}
                              </span>
                              {selected && (
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#457B9D] data-focus:text-white">
                                  <Check className="w-5 h-5" />
                                </span>
                              )}
                            </>
                          )}
                        </ListboxOption>
                      ))}
                    </ListboxOptions>
                  </Transition>
                </Listbox>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Mensagem
                </label>
                <textarea
                  name="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 border ${errors.mensagem ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#457B9D] resize-none transition-all`}
                />
                {errors.mensagem && (
                  <p className="text-red-500 text-sm mt-1">{errors.mensagem}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#457B9D] hover:bg-[#1D3557] text-white font-bold py-4 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Mensagem
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Image */}
          <div
            ref={imageRef}
            className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src={tutor}
              alt="Contato Pet Journey"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Socials & Direct Contact */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between bg-white px-8 py-10 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#F1FAEE] to-transparent rounded-full -mr-32 -mt-32 pointer-events-none" />

          <div className="mb-8 md:mb-0 max-w-xl relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1D3557] mb-3">
              Prefere outro canal?
            </h2>
            <p className="text-gray-600 text-lg">
              Fale diretamente conosco através do email
              <a
                href="mailto:atendimento@petjourney.health"
                className="text-[#457B9D] font-bold mx-1 hover:underline transition-all"
              >
                atendimento@petjourney.health
              </a>
              ou acompanhe nossa jornada nas redes sociais.
            </p>
          </div>

          <div className="flex gap-4 relative z-10">
            <a
              href="https://www.instagram.com/petjourney.health/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#FAF9F6] border border-gray-100 flex items-center justify-center text-[#1D3557] hover:bg-[#457B9D] hover:text-white transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-md group"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/petjourney.health/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#FAF9F6] border border-gray-100 flex items-center justify-center text-[#1D3557] hover:bg-[#457B9D] hover:text-white transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-md group"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/petjourney"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#FAF9F6] border border-gray-100 flex items-center justify-center text-[#1D3557] hover:bg-[#457B9D] hover:text-white transition-all duration-300 hover:-translate-y-2 shadow-sm hover:shadow-md group"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${clinicaFooterImg.src})` }}
      >
        <div
          ref={ctaRef}
          className="px-5 md:px-20 lg:px-70 text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
           Faça parte da jornada desde o início
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Seja avisado em primeira mão quando a PetJourney estiver disponível.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                event({
                  action: "click",
                  category: "cta",
                  label: "Clinicas Footer - Lista de Espera",
                });
                window.open("/lista-espera", "_blank");
              }}
              className="bg-[#FFEDD8] hover:bg-[#ffffff] text-[#1D3557] px-10 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
            >
              Lista de Espera
            </button>
            <button
              onClick={() => {
                event({
                  action: "click",
                  category: "cta",
                  label: "Clinicas Footer - Saiba Mais (Artigos)",
                });
                router.push("/artigos");
              }}
              className="bg-transparent border-2 cursor-pointer border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-[#1D3557] transition-all duration-300"
            >
              Saiba Mais
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
