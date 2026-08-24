"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "./language-context";
import { cn } from "@/lib/utils";
import { LinkedinIcon, InstagramIcon, FacebookIcon, GlobeIcon, YoutubeIcon } from "@/components/icons/social-icons";

const footerLinks = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.expertise", href: "/expertise" },
  { key: "nav.whyZybiov", href: "/why-us" },
  { key: "nav.contact", href: "/contact" },
  { key: "nav.privacy", href: "/privacy-policy" },
];

const socialLinks = [
  { icon: GlobeIcon, label: "Website", href: "https://www.zybiov.com" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/company/zybiov/" },
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/zybiov" },
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/share/176TZy5JGM/" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://www.youtube.com/@Zybiov" },
];

export function Footer() {
  const { language, t, dir } = useLanguage();

  return (
    <footer className="bg-[#1E244B] text-white relative overflow-hidden border-t border-white/10">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-[#5B43D6]/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#2B7DDC]/10 blur-3xl translate-x-1/3 translate-y-1/3" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Top bar */}
        <div className="py-14 border-b border-white/10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-[160px] h-[60px] bg-white rounded-xl shadow-sm">
                <Image
                  src="/logo.webp"
                  alt={t("brandName")}
                  fill
                  className="object-contain p-2.5"
                  sizes="60px"
                />
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              {t("footer.desc")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xs sm:text-sm uppercase tracking-widest mb-5">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/55 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className={cn(
                      "w-3 h-3 opacity-0 transition-all duration-200 text-[#5B43D6]",
                      dir === "rtl" ? "rotate-180 translate-x-2 group-hover:translate-x-0" : "-translate-x-2 group-hover:translate-x-0",
                      "group-hover:opacity-100"
                    )} />
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Expertise */}
          <div>
            <h3 className="text-white font-bold text-xs sm:text-sm uppercase tracking-widest mb-5">
              {language === "en" ? "Our Expertise" : "خبرتنا وتخصصنا"}
            </h3>
            <ul className="space-y-3">
              {[
                { title: t("expertise.sector1Title"), href: "/expertise" },
                { title: t("expertise.sector2Title"), href: "/expertise" },
                { title: t("expertise.sector3Title"), href: "/expertise" },
              ].map((sector, idx) => (
                <li key={idx}>
                  <Link
                    href={sector.href}
                    className="text-white/55 text-sm hover:text-white transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className={cn(
                      "w-3 h-3 opacity-0 transition-all duration-200 text-[#28B7C7]",
                      dir === "rtl" ? "rotate-180 translate-x-2 group-hover:translate-x-0" : "-translate-x-2 group-hover:translate-x-0",
                      "group-hover:opacity-100"
                    )} />
                    {sector.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact details */}
          <div>
            <h3 className="text-white font-bold text-xs sm:text-sm uppercase tracking-widest mb-5">
              {language === "en" ? "Corporate Info" : "معلومات الاتصال"}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/55 text-sm">
                <MapPin className="w-4 h-4 text-[#5B43D6] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-white/40 uppercase tracking-wider font-bold">Headquarters</span>
                  <span>Khartoum, Sudan</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/55 text-sm">
                <MapPin className="w-4 h-4 text-[#28B7C7] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-white/40 uppercase tracking-wider font-bold">Liaison Office</span>
                  <span>Mumbai, India</span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/55 text-sm">
                <Phone className="w-4 h-4 text-[#5B43D6] flex-shrink-0 mt-0.5" />
                <a href="tel:+249111909092" className="hover:text-white transition-colors">
                  +249 111 909 092
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/55 text-sm">
                <Mail className="w-4 h-4 text-[#5B43D6] flex-shrink-0 mt-0.5" />
                <a href="mailto:zybiovofficial@gmail.com" className="hover:text-white transition-colors break-all">
                  zybiovofficial@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} {t("brandName")}. {t("footer.allRights")}
            </p>
            <p className="text-white/30 text-xs mt-1">
              {t("tagline")}
            </p>
          </div>

          {/* Social icons row on the bottom right */}
          <div className="flex gap-3">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#5B43D6] hover:border-transparent transition-all duration-200 hover:scale-105"
              >
                <s.icon className="w-4 h-4 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
