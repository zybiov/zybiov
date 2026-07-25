"use client";

import { useLanguage } from "@/components/layout/language-context";
import { motion } from "framer-motion";
import { ShieldCheck, Cookie, Scale, HelpCircle } from "lucide-react";

export function PrivacyPolicyClientPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Privacy Policy",
      description: "How we collect, use, and protect your data at Zybiov Multi-Activities Limited.",
      sections: [
        {
          id: "privacy",
          icon: ShieldCheck,
          title: "Privacy & Data Collection",
          text: "At Zybiov Multi-Activities Limited, we prioritize the protection of your personal and business information. We collect data necessary to provide our pharmaceutical distribution services, process inquiries, and improve user experience on our platform. This data is securely stored and never sold to third parties without your explicit consent."
        },
        {
          id: "cookies",
          icon: Cookie,
          title: "Cookies Policy",
          text: "We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. We use session cookies to operate our service and preference cookies to remember your settings."
        },
        {
          id: "terms",
          icon: Scale,
          title: "Terms and Conditions",
          text: "By accessing this website, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. The materials contained in this website are protected by applicable copyright and trademark law. Any images we have used on this website are sourced from free to use platforms and are property of their respective creators; we claim no direct ownership over generic visual assets unless otherwise stated."
        },
        {
          id: "faq",
          icon: HelpCircle,
          title: "Frequently Asked Questions",
          text: "Q: How do we protect your data? A: We implement a variety of security measures to maintain the safety of your personal information. Q: Do we disclose any information to outside parties? A: We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. Q: How often is this policy updated? A: We may update our Privacy Policy from time to time, and changes will be posted on this page."
        }
      ]
    },
    ar: {
      title: "سياسة الخصوصية",
      description: "كيف نقوم بجمع واستخدام وحماية بياناتك في شركة زيبوف للأنشطة المتعددة المحدودة.",
      sections: [
        {
          id: "privacy",
          icon: ShieldCheck,
          title: "الخصوصية وجمع البيانات",
          text: "في شركة زيبوف للأنشطة المتعددة المحدودة، نضع حماية معلوماتك الشخصية والتجارية على رأس أولوياتنا. نقوم بجمع البيانات اللازمة لتقديم خدمات التوزيع الصيدلاني الخاصة بنا، ومعالجة الاستفسارات، وتحسين تجربة المستخدم على منصتنا. يتم تخزين هذه البيانات بشكل آمن ولا يتم بيعها أبدًا لأطراف ثالثة دون موافقتك الصريحة."
        },
        {
          id: "cookies",
          icon: Cookie,
          title: "سياسة ملفات تعريف الارتباط (Cookies)",
          text: "نستخدم ملفات تعريف الارتباط وتقنيات التتبع المماثلة لتتبع النشاط على موقعنا الإلكتروني والاحتفاظ بمعلومات معينة. ملفات تعريف الارتباط هي ملفات تحتوي على كمية صغيرة من البيانات. يمكنك توجيه متصفحك لرفض جميع ملفات تعريف الارتباط أو للإشارة إلى وقت إرسال ملف تعريف الارتباط. نحن نستخدم ملفات الجلسة لتشغيل خدمتنا وملفات التفضيلات لتذكر إعداداتك."
        },
        {
          id: "terms",
          icon: Scale,
          title: "الشروط والأحكام",
          text: "من خلال الوصول إلى هذا الموقع، فإنك توافق على الالتزام بشروط الخدمة هذه، وجميع القوانين واللوائح المعمول بها. المواد الواردة في هذا الموقع محمية بموجب قوانين حقوق النشر والعلامات التجارية المعمول بها. أي صور استخدمناها على هذا الموقع تم الحصول عليها من منصات مجانية الاستخدام وهي ملك لمبدعيها المعنيين؛ لا ندعي أي ملكية مباشرة على الأصول المرئية العامة ما لم يُنص على خلاف ذلك."
        },
        {
          id: "faq",
          icon: HelpCircle,
          title: "أسئلة مكررة (FAQ)",
          text: "س: كيف نحمي بياناتك؟ ج: نحن ننفذ مجموعة متنوعة من الإجراءات الأمنية للحفاظ على سلامة معلوماتك الشخصية. س: هل نكشف عن أي معلومات لأطراف خارجية؟ ج: نحن لا نبيع أو نتاجر أو ننقل معلوماتك الشخصية التي يمكن التعرف عليها إلى أطراف خارجية. س: كم مرة يتم تحديث هذه السياسة؟ ج: قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من وقت لآخر، وسيتم نشر التغييرات على هذه الصفحة."
        }
      ]
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <main className="min-h-screen bg-[#F9FAFB] pt-[80px] sm:pt-[88px]">
      <div className="bg-[#5B43D6] py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">{t.description}</p>
      </div>

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgba(30,36,75,0.04)] border border-[#E4E7F2]">
            <div className="space-y-12">
              {t.sections.map((section, idx) => (
                <motion.div 
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F5F4FF] flex items-center justify-center flex-shrink-0 text-[#5B43D6] group-hover:bg-[#5B43D6] group-hover:text-white transition-colors duration-300">
                      <section.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl md:text-2xl font-bold text-[#1E244B] mb-2">
                        {section.title}
                      </h2>
                      <p className="text-[#1E244B]/70 leading-relaxed text-sm md:text-base">
                        {section.text}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-[#E4E7F2] text-sm text-[#1E244B]/60 text-center">
              {language === "en" ? "Last updated: July 2026" : "آخر تحديث: يوليو ٢٠٢٦"}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
