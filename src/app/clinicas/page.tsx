'use client'
import Image from 'next/image'
import { Building2, Palette, Smartphone, BarChart3, Users, Clock, Shield, Zap, Heart, Activity, Bell, TrendingUp, Stethoscope, FileText, Video, GraduationCap } from 'lucide-react'
import coelho from '../../assets/home/coelho.jpg'
import { useRouter } from 'next/navigation'

export default function ClinicaScreen() {
    const router = useRouter()

    const whiteLabelFeatures = [
        {
            icon: Palette,
            title: 'Identidade Visual Personalizada',
            description: 'Plataforma com as cores, logo e identidade da sua clínica'
        },
        {
            icon: Smartphone,
            title: 'App com Sua Marca',
            description: 'Aplicativo mobile personalizado para seus clientes'
        },
        {
            icon: Users,
            title: 'Gestão Completa',
            description: 'Controle total de pacientes, agendamentos e prontuários'
        },
        {
            icon: Shield,
            title: 'Dados Seguros',
            description: 'Informações protegidas e em conformidade com LGPD'
        }
    ]

    const rpmFeatures = [
        {
            icon: Activity,
            title: 'Monitoramento em Tempo Real',
            description: 'Acompanhe sinais vitais dos pets remotamente'
        },
        {
            icon: Bell,
            title: 'Alertas Inteligentes',
            description: 'Notificações automáticas para alterações críticas'
        },
        {
            icon: BarChart3,
            title: 'Análise de Dados',
            description: 'Gráficos e relatórios detalhados de evolução'
        },
        {
            icon: Clock,
            title: 'Histórico Completo',
            description: 'Acesso a todo histórico de monitoramento'
        }
    ]

    const vetFeatures = [
        {
            icon: Stethoscope,
            title: 'Prontuário Eletrônico',
            description: 'Acesso rápido ao histórico completo dos pacientes'
        },
        {
            icon: FileText,
            title: 'Prescrições Digitais',
            description: 'Emita receitas e laudos de forma digital e segura'
        },
        // {
        //     icon: Video,
        //     title: 'Teleconsulta Integrada',
        //     description: 'Atenda seus pacientes remotamente com qualidade'
        // },
    ]



    return (
        <>
            <section className="min-h-[70vh] bg-linear-to-b from-[#1D3557] to-[#457B9D] flex items-center">
                <div className="w-full px-5 md:px-20 lg:px-70 pt-32 pb-20">
                    <div className="text-white space-y-6 max-w-4xl">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                            Soluções para Clínicas Veterinárias
                        </h1>
                        <p className="text-lg md:text-xl text-[#FAF9F6] max-w-2xl">
                            Tecnologia white label e monitoramento remoto para elevar o padrão de atendimento da sua clínica
                        </p>
                        {/* <button className="bg-[#FFEDD8] text-[#1D3557] px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform duration-300">
                            Solicitar Demonstração
                        </button> */}
                    </div>
                </div>
            </section>

            <section className="w-full py-24 bg-[#FAF9F6]">
                <div className="px-5 md:px-30 lg:px-70">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1D3557] mb-6">
                            White Label: Sua Marca, Nossa Tecnologia
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                            Ofereça aos seus clientes uma plataforma completa de gestão de saúde pet com a identidade visual da sua clínica
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whiteLabelFeatures.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300 border border-gray-100"
                                >
                                    <div className="bg-linear-to-bl from-[#457b9d] to-[#1D3557] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-bold text-xl text-[#1D3557] text-center mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-center leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="mt-16 bg-white p-10 rounded-3xl shadow-xl">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-full md:w-1/2 space-y-6">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#1D3557]">
                                    Fortaleça o relacionamento com seus clientes
                                </h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <Zap className="w-6 h-6 text-[#457B9D] mt-1 shrink-0" />
                                        <span className="text-gray-700">Aplicativo personalizado com logo e cores da sua clínica</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="w-6 h-6 text-[#457B9D] mt-1 shrink-0" />
                                        <span className="text-gray-700">Portal web exclusivo para seus clientes</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="w-6 h-6 text-[#457B9D] mt-1 shrink-0" />
                                        <span className="text-gray-700">Comunicação direta e segura com tutores</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Zap className="w-6 h-6 text-[#457B9D] mt-1 shrink-0" />
                                        <span className="text-gray-700">Gestão completa de prontuários e agendamentos</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 bg-linear-to-br from-[#457b9d] to-[#1D3557] p-10 rounded-2xl text-white">
                                <Smartphone className="w-16 h-16 mb-6" />
                                <h4 className="text-2xl font-bold mb-4">Diferencie sua clínica</h4>
                                <p className="text-lg leading-relaxed">
                                    Ofereça uma experiência digital premium aos seus clientes, mantendo sua marca sempre presente no dia a dia deles.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-24 bg-[#FAF9F6]">
                <div className="px-5 md:px-30 lg:px-70">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1D3557] mb-6">
                            RPM: Monitoramento Remoto de Pacientes
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                            Acompanhe a saúde dos seus pacientes em tempo real, mesmo à distância
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {rpmFeatures.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300 border border-gray-100"
                                >
                                    <div className="bg-linear-to-bl from-[#457b9d] to-[#1D3557] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-bold text-xl text-[#1D3557] text-center mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-center leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="bg-linear-to-br from-[#1D3557] via-[#457b9d] to-[#1D3557] p-10 md:p-16 rounded-3xl text-white relative overflow-hidden">
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-10 left-10 w-40 h-40 bg-white/50 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/50 rounded-full blur-3xl"></div>
                        </div>
                        <div className="relative z-10">
                            <div className="flex flex-col md:flex-row gap-10 items-center">
                                <div className="w-full md:w-1/2 space-y-6">
                                    <Activity className="w-16 h-16" />
                                    <h3 className="text-3xl md:text-4xl font-bold">
                                        Cuidado contínuo e preventivo
                                    </h3>
                                    <p className="text-lg leading-relaxed text-white/90">
                                        Integração com dispositivos IoT para monitoramento de sinais vitais, atividade física, alimentação e comportamento dos pets.
                                    </p>
                                </div>
                                <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
                                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                        <Heart className="w-8 h-8 mb-3" />
                                        <h4 className="font-bold mb-2">Frequência Cardíaca</h4>
                                        <p className="text-sm text-white/80">Monitoramento contínuo</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                        <Activity className="w-8 h-8 mb-3" />
                                        <h4 className="font-bold mb-2">Atividade Física</h4>
                                        <p className="text-sm text-white/80">Rastreamento diário</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                        <TrendingUp className="w-8 h-8 mb-3" />
                                        <h4 className="font-bold mb-2">Peso e Nutrição</h4>
                                        <p className="text-sm text-white/80">Controle alimentar</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                                        <Bell className="w-8 h-8 mb-3" />
                                        <h4 className="font-bold mb-2">Alertas Críticos</h4>
                                        <p className="text-sm text-white/80">Notificações em tempo real</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-24 bg-[#FAF9F6]">
                <div className="px-5 md:px-30 lg:px-70">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1D3557] mb-6">
                            Ferramentas para Veterinários
                        </h2>
                        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
                            Recursos profissionais que facilitam seu trabalho e melhoram o atendimento
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {vetFeatures.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <div
                                    key={index}
                                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 duration-300 border border-gray-100"
                                >
                                    <div className="bg-linear-to-bl from-[#457b9d] to-[#1D3557] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="font-bold text-xl text-[#1D3557] text-center mb-3">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 text-center leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>

                    <div className="bg-white p-10 md:p-16 rounded-3xl shadow-xl">
                        <div className="flex flex-col md:flex-row gap-10 items-center">
                            <div className="w-full md:w-1/2 space-y-6">
                                <Stethoscope className="w-16 h-16 text-[#457B9D]" />
                                <h3 className="text-3xl md:text-4xl font-bold text-[#1D3557]">
                                    Atendimento mais eficiente e preciso
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Tenha todas as informações do paciente em um só lugar. Histórico médico, exames, vacinas e monitoramento em tempo real para decisões mais assertivas.
                                </p>
                            </div>
                            <div className="w-full md:w-1/2 space-y-4">
                                <div className="flex items-start gap-4 p-4 bg-[#F1FAEE] rounded-xl">
                                    <FileText className="w-6 h-6 text-[#457B9D] mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-[#1D3557] mb-1">Prontuário Completo</h4>
                                        <p className="text-gray-600 text-sm">Histórico médico detalhado e organizado</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-[#F1FAEE] rounded-xl">
                                    <Activity className="w-6 h-6 text-[#457B9D] mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-[#1D3557] mb-1">Dados em Tempo Real</h4>
                                        <p className="text-gray-600 text-sm">Monitoramento contínuo dos pacientes</p>
                                    </div>
                                </div>
                                {/* <div className="flex items-start gap-4 p-4 bg-[#F1FAEE] rounded-xl">
                                    <Video className="w-6 h-6 text-[#457B9D] mt-1 shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-[#1D3557] mb-1">Atendimento Remoto</h4>
                                        <p className="text-gray-600 text-sm">Teleconsulta segura e profissional</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full py-24 bg-[#FAF9F6]">
                <div className="px-5 md:px-30 lg:px-70">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#1D3557] mb-6">
                            Benefícios para sua clínica
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="bg-[#457B9D] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <TrendingUp className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-bold text-xl text-[#1D3557] text-center mb-4">
                                Aumente a receita
                            </h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                Ofereça serviços premium de monitoramento e fidelize clientes com tecnologia de ponta
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="bg-[#457B9D] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-bold text-xl text-[#1D3557] text-center mb-4">
                                Melhore o atendimento
                            </h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                Acesso rápido ao histórico completo e dados em tempo real para decisões mais precisas
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <div className="bg-[#457B9D] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="font-bold text-xl text-[#1D3557] text-center mb-4">
                                Fortaleça sua marca
                            </h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                Plataforma personalizada que mantém sua clínica presente no dia a dia dos tutores
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-linear-to-b from-[#457B9D] to-[#1D3557]">
                <div className="px-5 md:px-20 lg:px-70 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Transforme o atendimento da sua clínica
                    </h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto">
                        Descubra como nossas soluções podem elevar o padrão de cuidado veterinário
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button
                            onClick={() => router.push('/contato')}
                            className="bg-[#FFEDD8] text-[#1D3557] px-10 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform duration-300"
                        >
                            Lista de Espera
                        </button>
                        <button className="bg-transparent border-2 border-white text-white px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-[#1D3557] transition-all duration-300">
                            Saiba Mais
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}