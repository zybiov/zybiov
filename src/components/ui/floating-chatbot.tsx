"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/layout/language-context";
import { cn } from "@/lib/utils";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Message {
  id: string;
  role: "bot" | "user";
  text: string;
  suggestions?: string[];
}

// ─── FAQ knowledge base (bilingual) ──────────────────────────────────────────
const FAQ_EN = [
  {
    keywords: ["who", "what is", "about", "company", "zybiov"],
    answer:
      "Zybiov Multi-Activities Limited is a leading pharmaceutical and medical supplies importer and distributor based in Khartoum, Sudan. We bridge globally certified manufacturers — primarily from India, Germany, and China — with healthcare providers across Sudan and East Africa.",
    suggestions: ["What products do you offer?", "Where are you located?", "How can I partner with you?"],
  },
  {
    keywords: ["product", "offer", "sell", "supply", "medicine", "pharmaceutical", "medical", "supplement", "equipment"],
    answer:
      "We supply three core categories:\n\n• **Pharmaceutical Products** — branded & generic medicines, imported from certified global manufacturers.\n• **Medical Equipment** — diagnostic devices, surgical tools, lab instruments, imaging systems.\n• **Nutritional Supplements** — vitamins, minerals, herbal formulas, sports nutrition & wellness products.",
    suggestions: ["Who are your partners?", "Do you deliver nationwide?", "How do I place an order?"],
  },
  {
    keywords: ["partner", "manufacturer", "supplier", "pfizer", "novartis", "haleon", "alexion", "grifols"],
    answer:
      "Our partner network includes globally recognized names like Pfizer, Novartis, Roche, AstraZeneca, GSK, Bayer, AbbVie, Haleon, Alexion, and Grifols — among 100+ international manufacturers. All partners are internationally certified and comply with our quality standards.",
    suggestions: ["What certifications do you hold?", "How can I become a partner?", "What products do you offer?"],
  },
  {
    keywords: ["location", "address", "where", "office", "headquarters", "khartoum", "mumbai", "india", "sudan"],
    answer:
      "We have two offices:\n\n• **Headquarters:** Khartoum, Sudan — our main distribution and operations hub.\n• **India Liaison & Sourcing Office:** Mumbai, India — managing pharmaceutical sourcing and manufacturing partnerships.",
    suggestions: ["How can I contact you?", "Do you deliver nationwide?", "What are your working hours?"],
  },
  {
    keywords: ["contact", "reach", "email", "phone", "call", "message", "inquiry"],
    answer:
      "You can reach us through our Contact page at zybiov.com/contact. Our team typically responds within 1 business day. You can also send a message directly through the contact form on our website.",
    suggestions: ["Where are you located?", "What are your working hours?", "How can I partner with you?"],
  },
  {
    keywords: ["deliver", "coverage", "nationwide", "ship", "distribution", "area"],
    answer:
      "Yes — we operate a nationwide distribution network across Sudan, serving hospitals, pharmacies, medical centers, and healthcare institutions throughout the country. We also handle regional and international distribution.",
    suggestions: ["What products do you offer?", "How do I place an order?", "Contact information"],
  },
  {
    keywords: ["order", "purchase", "buy", "how to", "procurement"],
    answer:
      "To place an order or inquire about procurement, please visit our Contact page and fill out the inquiry form. Our sales team will get back to you with pricing, availability, and lead times.",
    suggestions: ["Where are you located?", "Who are your partners?", "What products do you offer?"],
  },
  {
    keywords: ["certif", "iso", "quality", "standard", "compliance", "gmp", "regulatory"],
    answer:
      "Quality is at the core of everything we do. We adhere to ISO standards and international GMP (Good Manufacturing Practice) guidelines. All our pharmaceutical products are sourced from certified manufacturers and comply with Sudan's regulatory requirements.",
    suggestions: ["Who are your partners?", "What products do you offer?", "How can I partner with you?"],
  },
  {
    keywords: ["partner", "collaborate", "work with", "business", "distributor", "resell"],
    answer:
      "We welcome partnership inquiries from distributors, healthcare providers, and manufacturers. Please reach out via our Contact page with details about your organization and area of interest. Our business development team will follow up promptly.",
    suggestions: ["Contact information", "Where are you located?", "What certifications do you hold?"],
  },
  {
    keywords: ["hour", "working", "open", "time", "schedule", "available"],
    answer:
      "Our offices are open Sunday to Thursday, 8:00 AM – 5:00 PM (Sudan Standard Time, GMT+2). For urgent inquiries outside working hours, please use our website contact form and we will respond on the next working day.",
    suggestions: ["How can I contact you?", "Where are you located?", "How do I place an order?"],
  },
  {
    keywords: ["vision", "mission", "goal", "aspiration", "future", "expand"],
    answer:
      "Our vision is to be the preferred destination for high-quality healthcare solutions across the region. Our mission is to provide premium pharmaceutical and medical products through strategic global partnerships, while ensuring supply chain efficiency and full compliance with international standards.",
    suggestions: ["Who are your partners?", "What products do you offer?", "Why choose Zybiov?"],
  },
  {
    keywords: ["why", "choose", "difference", "unique", "better", "advantage"],
    answer:
      "What sets Zybiov apart:\n\n• **Global Partnerships** — 100+ internationally certified manufacturers.\n• **Full Compliance** — ISO standards, GMP practices, regulatory adherence.\n• **Scalable Model** — flexible distribution network across Sudan and beyond.\n• **Professional Management** — rigorous quality control and supply chain precision.",
    suggestions: ["What certifications do you hold?", "Who are your partners?", "Contact information"],
  },
  {
    keywords: ["price", "cost", "pricing", "quote", "rate"],
    answer:
      "Pricing varies by product, quantity, and delivery requirements. Please contact our sales team via the Contact page for a tailored quote. We work with hospitals, pharmacies, and institutions to offer competitive pricing.",
    suggestions: ["How do I place an order?", "How can I contact you?", "What products do you offer?"],
  },
];

const FAQ_AR = [
  {
    keywords: ["من", "ما هي", "عن", "شركة", "زيبوف"],
    answer:
      "زيبوف للأنشطة المتعددة المحدودة شركة رائدة متخصصة في استيراد وتوزيع الأدوية والمستلزمات الطبية، مقرها الرئيسي في الخرطوم بالسودان. نربط بين المصنعين المعتمدين عالمياً — بشكل رئيسي من الهند وألمانيا والصين — ومزودي الرعاية الصحية في السودان وشرق أفريقيا.",
    suggestions: ["ما هي المنتجات التي تقدمونها؟", "أين يقع مقركم؟", "كيف يمكنني الشراكة معكم؟"],
  },
  {
    keywords: ["منتج", "يقدم", "يبيع", "يورد", "دواء", "دوائي", "طبي", "مكمل", "معدات"],
    answer:
      "نوفر ثلاث فئات رئيسية:\n\n• **المنتجات الدوائية** — أدوية مبتكرة وجنيسية من مصنعين معتمدين عالمياً.\n• **المعدات الطبية** — أجهزة تشخيص، أدوات جراحية، معدات مختبرية، أنظمة التصوير الطبي.\n• **المكملات الغذائية** — فيتامينات، معادن، تركيبات عشبية، تغذية رياضية ومنتجات العافية.",
    suggestions: ["من هم شركاؤكم؟", "هل تقدمون خدمة التوصيل في كل السودان؟", "كيف أضع طلباً؟"],
  },
  {
    keywords: ["شريك", "مصنع", "مورد", "فايزر", "نوفارتس", "روش", "جي إس كيه"],
    answer:
      "تشمل شبكة شركائنا أسماء عالمية بارزة مثل فايزر، نوفارتس، روش، أسترازينيكا، جي إس كيه، باير، أبفي، هاليون، وأليكسيون — من بين أكثر من 100 مصنع دولي. جميع الشركاء معتمدون دولياً ويستوفون معايير الجودة لدينا.",
    suggestions: ["ما هي شهاداتكم؟", "كيف يمكنني أن أصبح شريكاً؟", "ما هي المنتجات التي تقدمونها؟"],
  },
  {
    keywords: ["موقع", "عنوان", "أين", "مكتب", "مقر", "الخرطوم", "مومباي", "الهند", "السودان"],
    answer:
      "لدينا مكتبان:\n\n• **المقر الرئيسي:** الخرطوم، السودان — مركز التوزيع والعمليات الرئيسي.\n• **مكتب الاتصال والتوريد في الهند:** مومباي، الهند — إدارة التوريد الدوائي وشراكات التصنيع.",
    suggestions: ["كيف يمكنني التواصل معكم؟", "هل تقدمون خدمة التوصيل الوطني؟", "ما هي ساعات العمل؟"],
  },
  {
    keywords: ["تواصل", "اتصال", "بريد", "هاتف", "رسالة", "استفسار"],
    answer:
      "يمكنك التواصل معنا من خلال صفحة الاتصال على موقعنا zybiov.com/contact. يرد فريقنا عادةً خلال يوم عمل واحد.",
    suggestions: ["أين يقع مقركم؟", "ما هي ساعات العمل؟", "كيف يمكنني الشراكة معكم؟"],
  },
  {
    keywords: ["توصيل", "تغطية", "شحن", "توزيع", "منطقة"],
    answer:
      "نعم — نشغّل شبكة توزيع وطنية في جميع أنحاء السودان، تخدم المستشفيات والصيدليات والمراكز الطبية. كما نتعامل مع التوزيع الإقليمي والدولي.",
    suggestions: ["ما هي المنتجات التي تقدمونها؟", "كيف أضع طلباً؟", "معلومات التواصل"],
  },
  {
    keywords: ["طلب", "شراء", "كيف", "مشتريات"],
    answer:
      "لتقديم طلب أو الاستفسار عن المشتريات، يرجى زيارة صفحة الاتصال وملء نموذج الاستفسار. سيتواصل معك فريق المبيعات بشأن الأسعار والتوفر.",
    suggestions: ["أين يقع مقركم؟", "من هم شركاؤكم؟", "ما هي المنتجات التي تقدمونها؟"],
  },
  {
    keywords: ["شهادة", "ISO", "جودة", "معيار", "امتثال", "GMP", "تنظيمي"],
    answer:
      "الجودة في صميم كل ما نقوم به. نلتزم بمعايير ISO وإرشادات GMP الدولية. جميع منتجاتنا الدوائية مصدرها مصنعون معتمدون وتمتثل للمتطلبات التنظيمية في السودان.",
    suggestions: ["من هم شركاؤكم؟", "ما هي المنتجات التي تقدمونها؟", "كيف يمكنني الشراكة معكم؟"],
  },
  {
    keywords: ["لماذا", "اختيار", "ميزة", "أفضل", "مختلف"],
    answer:
      "ما يميز زيبوف:\n\n• **شراكات عالمية** — أكثر من 100 مصنع معتمد دولياً.\n• **امتثال كامل** — معايير ISO وممارسات GMP.\n• **نموذج قابل للتوسع** — شبكة توزيع مرنة في السودان وخارجه.\n• **إدارة احترافية** — ضبط جودة صارم ودقة في سلسلة التوريد.",
    suggestions: ["ما هي شهاداتكم؟", "من هم شركاؤكم؟", "معلومات التواصل"],
  },
];

// ─── Bot logic ────────────────────────────────────────────────────────────────
function getBotResponse(input: string, lang: "en" | "ar"): { answer: string; suggestions: string[] } {
  const faq = lang === "ar" ? FAQ_AR : FAQ_EN;
  const lower = input.toLowerCase();
  let best: (typeof FAQ_EN)[number] | null = null;
  let bestScore = 0;

  for (const entry of faq) {
    const score = entry.keywords.reduce((acc, kw) => acc + (lower.includes(kw) ? 1 : 0), 0);
    if (score > bestScore) { bestScore = score; best = entry; }
  }

  if (best && bestScore > 0) {
    return { answer: best.answer, suggestions: best.suggestions ?? [] };
  }

  return {
    answer: lang === "ar"
      ? "شكراً لتواصلك! لم أتمكن من فهم سؤالك تماماً. هل يمكنك إعادة الصياغة؟ أو يمكنك التواصل مباشرة عبر صفحة الاتصال."
      : "Thanks for reaching out! I didn't quite catch that. Could you rephrase? Or visit our Contact page for direct assistance.",
    suggestions: lang === "ar"
      ? ["ما هي المنتجات التي تقدمونها؟", "كيف يمكنني التواصل معكم؟", "من هم شركاؤكم؟"]
      : ["What products do you offer?", "How can I contact you?", "Who are your partners?"],
  };
}

// Format markdown-lite bold (**text**) into spans
function formatText(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) =>
    p.startsWith("**") && p.endsWith("**")
      ? <strong key={i} className="font-semibold text-[#1E244B]">{p.slice(2, -2)}</strong>
      : <span key={i}>{p}</span>
  );
}

const INITIAL_SUGGESTIONS_EN = [
  "What is Zybiov?",
  "What products do you offer?",
  "Who are your partners?",
  "Where are you located?",
  "How can I contact you?",
];

const INITIAL_SUGGESTIONS_AR = [
  "ما هي شركة زيبوف؟",
  "ما هي المنتجات التي تقدمونها؟",
  "من هم شركاؤكم؟",
  "أين يقع مقركم؟",
  "كيف يمكنني التواصل معكم؟",
];


// ─── Component ────────────────────────────────────────────────────────────────
export function FloatingChatbot() {
  const { language, dir } = useLanguage();
  const isAr = language === "ar";
  const lang = isAr ? "ar" : "en";

  const [isOpen, setIsOpen]   = useState(false);
  const [input, setInput]     = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef  = useRef<HTMLInputElement>(null);

  // Init welcome message when first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcome: Message = {
        id: "welcome",
        role: "bot",
        text: isAr
          ? "مرحباً! أنا المساعد الذكي لشركة زيبوف. يمكنني مساعدتك في الإجابة عن أسئلتك حول منتجاتنا وشراكاتنا وطرق التواصل معنا. كيف يمكنني المساعدة؟"
          : "Hi! I'm Zybiov's AI assistant. I can help you with questions about our products, partnerships, locations, and more. What would you like to know?",
        suggestions: isAr ? INITIAL_SUGGESTIONS_AR : INITIAL_SUGGESTIONS_EN,
      };
      setMessages([welcome]);
    }
  }, [isOpen, isAr]);

  // Reset on language change
  useEffect(() => { setMessages([]); }, [lang]);

  // Auto-scroll to bottom
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 120);
  }, [isOpen]);

  const sendMessage = useCallback((text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: Message = { id: Date.now().toString(), role: "user", text: trimmed };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay (400–800ms)
    const delay = 400 + Math.random() * 400;
    setTimeout(() => {
      const { answer, suggestions } = getBotResponse(trimmed, lang);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: answer,
        suggestions,
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, delay);
  }, [lang]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* ── Floating button ── */}
      <button
        onClick={() => setIsOpen(o => !o)}
        aria-label={isOpen ? "Close chat" : "Open chat"}
        className={cn(
          "fixed bottom-6 z-50 w-14 h-14 rounded-full shadow-[0_8px_28px_rgba(91,67,214,0.35)] flex items-center justify-center transition-all duration-300",
          "bg-[#5B43D6] hover:bg-[#4A31C0] text-white",
          "focus:outline-none focus:ring-4 focus:ring-[#5B43D6]/40",
          dir === "rtl" ? "left-5" : "right-5",
        )}
      >
        <span className={cn("transition-all duration-300", isOpen ? "scale-100 rotate-0" : "scale-100")}>
          {isOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
        </span>
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#28B7C7] rounded-full border-2 border-white animate-pulse" />
        )}
      </button>

      {/* ── Chat window ── */}
      {isOpen && (
        <div
          className={cn(
            "fixed bottom-24 z-50 flex flex-col rounded-2xl bg-white overflow-hidden",
            "border border-[#E4E7F2] shadow-[0_16px_56px_rgba(30,36,75,0.18)]",
            "w-80 sm:w-[360px]",
            dir === "rtl" ? "left-5" : "right-5",
          )}
          style={{ height: 520, maxHeight: "calc(100dvh - 120px)" }}
          dir={dir}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3.5 flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #1E244B 0%, #2d3a6e 100%)" }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-xl bg-[#5B43D6] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-none">
                  {isAr ? "مساعد زيبوف" : "Zybiov Assistant"}
                </p>
                <p className="text-white/50 text-[10px] mt-0.5 leading-none">
                  {isAr ? "متصل الآن" : "Online now"}
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label={isAr ? "إغلاق نافذة المحادثة" : "Close chat window"}
              className="text-white/60 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-[#F9FAFB]">
            {messages.map((msg) => (
              <div key={msg.id} className={cn("flex flex-col gap-2", msg.role === "user" && (isAr ? "items-start" : "items-end"))}>
                <div
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm leading-relaxed max-w-[88%]",
                    msg.role === "bot"
                      ? "bg-white border border-[#E4E7F2] text-[#1E244B] rounded-tl-sm shadow-sm"
                      : "bg-[#5B43D6] text-white rounded-tr-sm",
                  )}
                >
                  {msg.text.split("\n").map((line, i) => (
                    <p key={i} className={i > 0 ? "mt-1" : ""}>{formatText(line)}</p>
                  ))}
                </div>

                {/* Suggestion chips */}
                {msg.role === "bot" && msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 max-w-[92%]">
                    {msg.suggestions.map((s) => (
                      <button
                        key={s}
                        onClick={() => sendMessage(s)}
                        className="text-[11px] px-3 py-1.5 rounded-full border border-[#5B43D6]/25 text-[#5B43D6] bg-[#5B43D6]/5 hover:bg-[#5B43D6] hover:text-white hover:border-[#5B43D6] transition-all duration-200 font-medium"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 px-4 py-3 bg-white border border-[#E4E7F2] rounded-2xl rounded-tl-sm w-fit shadow-sm">
                {[0, 1, 2].map(i => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-[#8892A4] animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-3 py-3 bg-white border-t border-[#E4E7F2] flex-shrink-0"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder={isAr ? "اكتب رسالتك..." : "Ask me anything..."}
              className="flex-1 bg-[#F3F5FC] rounded-xl px-4 py-2.5 text-sm text-[#1E244B] placeholder-[#8892A4] outline-none border border-transparent focus:border-[#5B43D6]/40 focus:bg-white transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label={isAr ? "إرسال الرسالة" : "Send message"}
              className="w-9 h-9 rounded-xl bg-[#5B43D6] text-white flex items-center justify-center flex-shrink-0 hover:bg-[#4A31C0] disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200"
            >
              <Send className={cn("w-4 h-4", isAr && "rotate-180")} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
