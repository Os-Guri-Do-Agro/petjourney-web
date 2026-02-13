"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import now from "@/assets/home/logo-apoiadores/now.png";
import bichoMimado from "@/assets/home/logo-apoiadores/bicho-mimado.png";
import dogHero from "@/assets/home/logo-apoiadores/dog-hero.png";
import petHealth from "@/assets/home/logo-apoiadores/pet-health.png";
import dogPlus from "@/assets/home/logo-apoiadores/dog-plus.png";
import cobasi from "@/assets/home/logo-apoiadores/cobasi.png";

export default function Carousel() {
    const containerRef = useRef<HTMLDivElement>(null);

    const imagens = [now, bichoMimado, dogHero, petHealth, dogPlus, cobasi];

    useEffect(() => {
        const ctx = gsap.context(() => {
            const container = containerRef.current;

            if (!container) return;

            const totalWidth = container.scrollWidth / 2;

            gsap.to(container, {
                x: -totalWidth,
                duration: 30,
                ease: "none",
                repeat: -1,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="overflow-hidden w-full bg-[#FAF9F6]">
            <div
                ref={containerRef}
                className="flex w-full"
            >
                {[...imagens, ...imagens].map((img, i) => (
                    <div
                        key={i}
                        className="min-w-[120px] h-[150px] md:min-w-[250px] md:h-[200px] flex items-center justify-center p-4"
                    >
                        <Image src={img} alt="Apoiador" className="max-w-full max-h-full object-contain" width={150} height={120} style={{ width: "auto", height: "auto" }} />
                    </div>
                ))}
            </div>
        </div>
    );
}