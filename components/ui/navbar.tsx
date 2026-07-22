"use client";

import Link from "next/link";
import Image from "next/image";

import { useEffect, useId, useState } from "react";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValueEvent,
} from "framer-motion";

import { Container } from "@/components/ui/container";
import Logo from "@/assets/icons/amz-logo-novo.png";

export type NavbarLink = {
  href: string;
  label: string;
};

export type NavbarProps = {
  links: NavbarLink[];
  className?: string;
};

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`opacity-100 ${className ?? ""}`}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01" />
    </svg>
  );
}

export function Navbar({ links, className }: NavbarProps) {
  const menuId = useId();
  const { scrollY } = useScroll();

  const [open, setOpen] = useState(false);
  const [useHeroStyle, setUseHeroStyle] = useState(false);

  useEffect(() => {
    const id = window.requestAnimationFrame(() => {
      setUseHeroStyle(window.scrollY < 24);
    });

    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setUseHeroStyle(latest < 24);
  });

  const shrinkDistance = 140;
  const scrollProgress = useTransform(scrollY, [0, shrinkDistance], [0, 1], {
    clamp: true,
  });

  // Header dimensions
  const headerHeight = useTransform(scrollProgress, [0, 1], [140, 64]);

  // Background and border colors
  const headerBg = useTransform(
    scrollProgress,
    [0, 1],
    ["rgba(0, 0, 0, 0.00)", "rgba(255, 255, 255, 0.80)"],
  );

  // Backdrop blur (only when scrolled)
  const headerBlur = useTransform(
    scrollProgress,
    [0, 1],
    ["blur(0px)", "blur(10px)"],
  );

  // Content scaling
  const logoSize = useTransform(scrollProgress, [0, 1], [80, 40]);
  const navScale = useTransform(scrollProgress, [0, 1], [1.06, 1]);

  const panelVariants = {
    open: {
      height: "100dvh",
      transition: {
        duration: 0.28,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
      },
    },
    closed: {
      height: 0,
      transition: {
        duration: 0.22,
        ease: [0.22, 1, 0.36, 1],
        when: "afterChildren",
      },
    },
  } as const;

  const listVariants = {
    open: { transition: { delayChildren: 0.08, staggerChildren: 0.06 } },
    closed: { transition: { staggerChildren: 0.03, staggerDirection: -1 } },
  } as const;

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  } as const;

  return (
    <motion.header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-colors ${className ?? ""}`}
      style={{
        backgroundColor: headerBg,
        backdropFilter: open ? "none" : headerBlur,
      }}
    >
      <div className="w-full h-10 bg-green-secondary flex items-center justify-center">
        <span className="mx-auto font-medium font-secondary text-white flex items-center">
          <LocationIcon className="mr-2 h-5 w-5" />
          <p>Av. Dublin, 1504 - Planalto, Manaus - AM</p>
        </span>
      </div>
      <motion.div style={{ height: headerHeight }}>
        <Container className="flex h-full items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              style={{
                width: logoSize,
                height: logoSize,
              }}
            >
              <Image
                src={Logo}
                alt="Logo"
                className="h-full w-full object-contain rounded-md"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav
            className="hidden items-center gap-3 md:flex"
            aria-label="Navegação principal"
            style={{ scale: navScale }}
          >
            <Link
              href="https://www.instagram.com/amzautopecas/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 font-secondary text-sm font-semibold tracking-wide transition-colors ${
                useHeroStyle
                  ? "text-white/90 hover:text-white"
                  : "text-black/80 hover:text-black"
              }`}
            >
              <InstagramIcon className="h-4 w-4" />
              <span>@amzautopecas</span>
            </Link>
            <span
              aria-hidden="true"
              className={`font-secondary text-sm ${
                useHeroStyle ? "text-white/50" : "text-black/30"
              }`}
            >
              |
            </span>
            {links.map((link) => (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                className={`font-secondary text-sm font-semibold tracking-wide transition-colors ${
                  useHeroStyle
                    ? "text-white/90 hover:text-white"
                    : "text-black/80 hover:text-black"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.nav>

          {/* Instagram (mobile) — fica acima do overlay do menu */}
          <Link
            href="https://www.instagram.com/amzautopecas/"
            target="_blank"
            rel="noopener noreferrer"
            className={`relative z-50 flex items-center gap-1.5 font-secondary text-sm font-semibold tracking-wide transition-colors md:hidden ${
              open || useHeroStyle
                ? "text-white/90 hover:text-white"
                : "text-black/80 hover:text-black"
            }`}
          >
            <InstagramIcon className="h-4 w-4" />
            <span>@amzautopecas</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-lg transition-all md:hidden ${
              useHeroStyle ? "hover:bg-white/10" : "hover:bg-black/5"
            }`}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="sr-only">{open ? "Fechar" : "Abrir"}</span>

            <span className="relative block h-5 w-6">
              <motion.span
                className={`absolute left-0 top-1/2 block h-0.5 w-full rounded-full transition-colors ${
                  open || useHeroStyle ? "bg-white" : "bg-black"
                }`}
                animate={open ? { rotate: 45, y: 0 } : { rotate: 0, y: -6 }}
                transition={{ type: "spring", stiffness: 700, damping: 40 }}
              />
              <motion.span
                className={`absolute left-0 top-1/2 block h-0.5 w-full rounded-full transition-colors ${
                  open || useHeroStyle ? "bg-white" : "bg-black"
                }`}
                animate={open ? { rotate: -45, y: 0 } : { rotate: 0, y: 6 }}
                transition={{ type: "spring", stiffness: 700, damping: 40 }}
              />
            </span>
          </button>
        </Container>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id={menuId}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            animate="open"
            initial="closed"
            exit="closed"
            variants={panelVariants}
            className="fixed inset-0 z-40 bg-[#0B0F09]/90 backdrop-blur md:hidden"
          >
            <div
              className="flex h-full w-full items-start pt-32"
              onClick={(e) => e.stopPropagation()}
            >
              <Container>
                <nav aria-label="Navegação mobile">
                  <motion.ul
                    className="flex flex-col items-end gap-2"
                    variants={listVariants}
                  >
                    {links.map((link) => (
                      <motion.li
                        key={`mobile-${link.href}-${link.label}`}
                        variants={itemVariants}
                        transition={{
                          type: "spring",
                          stiffness: 520,
                          damping: 38,
                        }}
                      >
                        <Link
                          href={link.href}
                          className="block w-full rounded-xl px-3 py-3 text-end font-secondary text-lg font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          {link.label}
                        </Link>
                      </motion.li>
                    ))}
                  </motion.ul>
                </nav>
              </Container>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}
