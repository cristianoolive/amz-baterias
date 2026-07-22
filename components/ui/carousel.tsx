"use client";

import { useRef, useState, useEffect } from "react";
import { motion, type PanInfo } from "framer-motion";
import Image from "next/image";
import type { StaticImageData } from "next/image";

interface CarouselImageItem {
  src: StaticImageData;
  alt: string;
  description?: string;
}

interface CarouselProps {
  images: CarouselImageItem[];
  interval?: number; // Tempo em milissegundos
  className?: string;
  itemSpacingClassName?: string;
  imageAreaClassName?: string;
}

export function Carousel({
  images,
  interval = 5000,
  className,
  itemSpacingClassName = "px-2 sm:px-3",
  imageAreaClassName,
}: CarouselProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const autoplayStartRef = useRef<number | null>(null);
  const rafIdRef = useRef<number | null>(null);
  const pendingResetRef = useRef<"toMiddle" | "toEnd" | null>(null);
  const isInteractingRef = useRef(false);

  const [currentIndex, setCurrentIndex] = useState(() =>
    images.length > 0 ? images.length : 0,
  );
  const [progress, setProgress] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isResetting, setIsResetting] = useState(false);

  const total = images.length;
  const extendedImages = total > 0 ? [...images, ...images, ...images] : [];

  const getSrcKey = (src: StaticImageData) => src.src;

  const goToSlide = (index: number) => {
    // Mantém o carrossel na “faixa do meio” para permitir loop infinito sem flicker
    const target = total + index;
    setCurrentIndex(target);
    setProgress(0);
    pendingResetRef.current = null;
    autoplayStartRef.current = null;
  };

  // Define itens por view: mobile=2, desktop (md+)=4
  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setItemsPerView(media.matches ? 4 : 3);
    update();

    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  // Mede a largura do container para calcular o deslocamento em px
  useEffect(() => {
    if (!containerRef.current) return;

    const element = containerRef.current;
    const ro = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      setContainerWidth(entry.contentRect.width);
    });

    ro.observe(element);
    return () => ro.disconnect();
  }, []);

  // Inicializa o índice na cópia do meio (para loop infinito)
  useEffect(() => {
    if (total <= 0) return;
    const id = window.setTimeout(() => setCurrentIndex(total), 0);
    return () => window.clearTimeout(id);
  }, [total]);

  // Marca quando chegamos na primeira imagem da 3a cópia.
  // Aí, ao final da animação, resetamos para a cópia do meio (mesma imagem/posição visual).
  useEffect(() => {
    if (total <= 0) return;
    if (currentIndex >= total * 2) {
      pendingResetRef.current = "toMiddle";
      return;
    }

    if (currentIndex < total) {
      pendingResetRef.current = "toEnd";
      return;
    }

    pendingResetRef.current = null;
  }, [currentIndex, total]);

  useEffect(() => {
    if (!isResetting) return;
    const id = window.setTimeout(() => setIsResetting(false), 0);
    return () => window.clearTimeout(id);
  }, [isResetting]);

  // Auto-play e barra de progresso (via rAF para evitar timers duplicados em dev/Strict Mode)
  useEffect(() => {
    if (total <= 1) {
      const id = window.setTimeout(() => setProgress(0), 0);
      return () => window.clearTimeout(id);
    }

    if (rafIdRef.current != null) {
      window.cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }

    autoplayStartRef.current = performance.now();

    const tick = (now: number) => {
      if (isInteractingRef.current) {
        autoplayStartRef.current = now;
        setProgress(0);
        rafIdRef.current = window.requestAnimationFrame(tick);
        return;
      }

      if (autoplayStartRef.current == null) {
        autoplayStartRef.current = now;
      }

      const elapsed = now - autoplayStartRef.current;
      const pct = Math.min(100, (elapsed / interval) * 100);

      setProgress(pct);

      if (elapsed >= interval) {
        autoplayStartRef.current = now;
        setProgress(0);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }

      rafIdRef.current = window.requestAnimationFrame(tick);
    };

    rafIdRef.current = window.requestAnimationFrame(tick);

    return () => {
      if (rafIdRef.current != null) {
        window.cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      autoplayStartRef.current = null;
    };
  }, [interval, total]);

  if (images.length === 0) {
    return null;
  }

  const computedImageAreaClassName = imageAreaClassName ?? "h-full";

  const stepPx = containerWidth > 0 ? containerWidth / itemsPerView : 0;
  const xPx = stepPx * currentIndex;
  const logicalIndex =
    total > 0 ? (((currentIndex - total) % total) + total) % total : 0;

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden rounded-xl h-55 sm:h-70 md:h-85 ${className ?? ""}`}
    >
      {/* Trilho (mostra 2 no mobile e 4 no desktop) */}
      <motion.div
        className="absolute inset-0 flex items-center"
        animate={{ x: -xPx }}
        drag="x"
        dragMomentum={false}
        dragElastic={0.08}
        onDragStart={() => {
          isInteractingRef.current = true;
          autoplayStartRef.current = null;
          setProgress(0);
        }}
        onDragEnd={(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
          isInteractingRef.current = false;

          if (stepPx <= 0) return;

          const rawIndex = currentIndex - info.offset.x / stepPx;
          let snappedIndex = Math.round(rawIndex);

          const velocityThreshold = 900;
          if (Math.abs(info.velocity.x) > velocityThreshold) {
            // velocity.x < 0 => swipe left => próximo
            snappedIndex += info.velocity.x < 0 ? 1 : -1;
          }

          setCurrentIndex(snappedIndex);
          setProgress(0);
          autoplayStartRef.current = null;
        }}
        onAnimationComplete={() => {
          if (!pendingResetRef.current) return;

          const reset = pendingResetRef.current;
          pendingResetRef.current = null;

          setIsResetting(true);
          if (reset === "toMiddle") {
            setCurrentIndex(total);
          } else {
            setCurrentIndex(total * 2 - 1);
          }
        }}
        transition={
          isResetting
            ? { duration: 0 }
            : { type: "spring", stiffness: 260, damping: 30 }
        }
      >
        {extendedImages.map((item, idx) => {
          const hasDescription = Boolean(
            item.description && item.description.trim().length > 0,
          );

          return (
            <div
              key={`${getSrcKey(item.src)}-${idx}`}
              className="h-full shrink-0"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              {/*
              Espaçamento entre itens: use padding em cada slide.
              Evita o problema do `gap-*` (o gap muda a largura efetiva e o translate em px fica “errado”, cortando itens).
            */}
              <div className={`h-full w-full ${itemSpacingClassName}`}>
                {hasDescription ? (
                  <div className=" w-full rounded-xl bg-white/90 shadow-lg items-center justify-center overflow-hidden flex flex-col">
                    <div
                      className={`relative h-full w-full ${computedImageAreaClassName}`}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        sizes="(min-width: 768px) 25vw, 50vw"
                        className="object-contain"
                      />
                    </div>
                    <div className="px-1 py-3 text-center text-sm font-secondary text-zinc-900">
                      {item.description}
                    </div>
                  </div>
                ) : (
                  <div className="h-full w-full flex items-center justify-center">
                    <div
                      className={`relative w-full ${computedImageAreaClassName}`}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 768px) 25vw, 50vw"
                        className="object-contain"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* Indicadores com progresso */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="relative w-6 md:w-12 h-0.5  bg-green-secondary overflow-hidden hover:bg-green-secondary/50 transition-colors"
            aria-label={`Ir para imagem ${index + 1}`}
          >
            {/* Barra de progresso */}
            {index === logicalIndex && (
              <motion.div
                className="absolute top-0 left-0 h-full bg-green-tertiary"
                initial={{ width: "0%" }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.05, ease: "linear" }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
