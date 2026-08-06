"use client";

import { useState, useEffect } from "react";
import { Reveal } from "@/components/animations/reveal";
import { motion } from "framer-motion";
import { Send, User, Mail, Phone, Building2, MessageSquare, MapPin, Globe, FileText, Settings, Award, Loader2, AlertCircle } from "lucide-react";
import { LinkedinIcon, InstagramIcon, FacebookIcon, GlobeIcon, YoutubeIcon } from "@/components/icons/social-icons";
import { useLanguage } from "../layout/language-context";
import { cn } from "@/lib/utils";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const socialLinks = [
  { icon: GlobeIcon, label: "Website", href: "https://www.zybiov.com", handle: "www.zybiov.com" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/zybiov-co-ltd-976298421", handle: "LinkedIn Profile" },
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/zybiov.ltd", handle: "@zybiov.ltd" },
  { icon: FacebookIcon, label: "Facebook", href: "https://www.facebook.com/share/176TZy5JGM/", handle: "Facebook Page" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://www.youtube.com/@Zybiov", handle: "YouTube Channel" },
];

export function ContactSection() {
  const { language, t, dir } = useLanguage();
  const [inquiryType, setInquiryType] = useState<"general" | "client" | "manufacturer">("general");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    licenseNumber: "",
    businessType: "pharmacy",
    manufacturingCountry: "",
    certifications: "",
    therapeuticArea: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const subjectParam = params.get("subject");
      if (subjectParam) {
        setFormData((prev) => ({
          ...prev,
          message: language === "en" 
            ? `Dear Sourcing Team,\n\nI am requesting information regarding: ${subjectParam}.\n\nPlease let me know pricing and sourcing parameters.`
            : `إلى فريق التوريد الموقر،\n\nأود طلب معلومات تسعير وتفاصيل استيراد بخصوص: ${subjectParam}.\n\nشاكرين لكم تعاونكم.`,
        }));
      }
    }
  }, [language]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for field on typing
    if (formErrors[name]) {
      setFormErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = language === "en" ? "Full Name is required." : "الاسم الكامل مطلوب.";
    } else if (formData.name.trim().length < 2) {
      errors.name = language === "en" ? "Name must be at least 2 characters." : "يجب أن يتكون الاسم من حرفين على الأقل.";
    }

    if (!formData.email.trim()) {
      errors.email = language === "en" ? "Email address is required." : "البريد الإلكتروني مطلوب.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = language === "en" ? "Please enter a valid email address." : "يرجى إدخال بريد إلكتروني صحيح.";
    }

    if (!formData.message.trim()) {
      errors.message = language === "en" ? "Message is required." : "الرسالة مطلوبة.";
    } else if (formData.message.trim().length < 10) {
      errors.message = language === "en" ? "Message must be at least 10 characters long." : "يجب أن تتكون الرسالة من 10 أحرف على الأقل.";
    }

    if (inquiryType === "client") {
      if (!formData.licenseNumber.trim()) {
        errors.licenseNumber = language === "en" ? "Healthcare License Number is required." : "رقم الترخيص مطلوب.";
      }
    } else if (inquiryType === "manufacturer") {
      if (!formData.manufacturingCountry.trim()) {
        errors.manufacturingCountry = language === "en" ? "Manufacturing Country is required." : "بلد التصنيع مطلوب.";
      }
      if (!formData.certifications.trim()) {
        errors.certifications = language === "en" ? "Certifications are required." : "الشهادات مطلوبة.";
      }
      if (!formData.therapeuticArea.trim()) {
        errors.therapeuticArea = language === "en" ? "Therapeutic Focus is required." : "التخصص العلاجي مطلوب.";
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validateForm()) {
      console.warn("[Contact Form] Validation failed. Correct form errors:", formErrors);
      return;
    }

    setIsSubmitting(true);

    let prefix = "General Inquiry";
    let extraDetailsText = "";
    let extraFields: Record<string, string> = {};

    if (inquiryType === "client") {
      prefix = "Client Application (B2B)";
      extraDetailsText = `Business Type: ${formData.businessType}\nLicense Number: ${formData.licenseNumber}\n`;
      extraFields = {
        businessType: formData.businessType,
        licenseNumber: formData.licenseNumber,
      };
    } else if (inquiryType === "manufacturer") {
      prefix = "Manufacturer Proposal (Sourcing)";
      extraDetailsText = `Manufacturing Country: ${formData.manufacturingCountry}\nCertifications: ${formData.certifications}\nTherapeutic Area: ${formData.therapeuticArea}\n`;
      extraFields = {
        manufacturingCountry: formData.manufacturingCountry,
        certifications: formData.certifications,
        therapeuticArea: formData.therapeuticArea,
      };
    }

    const payload = {
      inquiryType,
      prefix,
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim() || null,
      company: formData.company.trim() || null,
      message: formData.message.trim(),
      ...extraFields,
      createdAt: serverTimestamp(),
      status: "new",
    };

    console.log("[Firestore] Attempting to save inquiry payload to 'inquiries' collection...", payload);

    try {
      const docRef = await addDoc(collection(db, "inquiries"), payload);
      console.log(`%c[Firestore Success] Document written successfully! Document ID: ${docRef.id}`, "color: #10B981; font-weight: bold;");
    } catch (err: any) {
      console.error(
        `%c[Firestore Connection Error] Failed to write inquiry to Cloud Firestore database!`,
        "color: #EF4444; font-weight: bold;",
        {
          errorCode: err?.code || "unknown",
          errorMessage: err?.message || String(err),
          errorStack: err?.stack,
          targetCollection: "inquiries",
          payload,
        }
      );
      setServerError(
        language === "en"
          ? "There was a network or server issue submitting your message. Please check your connection or send us an email directly."
          : "حدثت مشكلة في الاتصال بالخادم. يرجى التحقق من الاتصال بالإنترنت أو مراسلتنا مباشرة."
      );
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }

    const subject = encodeURIComponent(`[${prefix}] from ${formData.name} (${formData.company || "Individual"})`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "N/A"}\n` +
      `Company/Facility: ${formData.company || "N/A"}\n` +
      extraDetailsText +
      `\nMessage:\n${formData.message}`
    );

    // Redirect to mailto link after success animation begins
    setTimeout(() => {
      window.location.href = `mailto:zybiov.ltd88@gmail.com?subject=${subject}&body=${body}`;
    }, 1000);

    setTimeout(() => setSubmitted(false), 5000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      licenseNumber: "",
      businessType: "pharmacy",
      manufacturingCountry: "",
      certifications: "",
      therapeuticArea: "",
    });
    setFormErrors({});
  };

  return (
    <section
      id="contact"
      className="relative py-16 sm:py-24 lg:py-32 overflow-hidden"
      style={{ background: "#FFFFFF" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #5B43D6 0%, transparent 70%)", transform: "translate(-30%, -30%)" }} />
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #2B7DDC 0%, transparent 70%)", transform: "translate(20%, 20%)" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="text-center mb-12 sm:mb-16">
          <span className="section-tag mb-4 sm:mb-5 inline-flex">{t("contactPage.tag")}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            style={{ color: "#1E244B", fontFamily: "Manrope, sans-serif" }}>
            {language === "en" ? (
              <>
                Let&apos;s{" "}
                <span style={{
                  background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  Connect
                </span>
              </>
            ) : (
              <>
                دعنا{" "}
                <span style={{
                  background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>
                  نتواصل
                </span>
              </>
            )}
          </h2>
          <p className="text-base sm:text-lg max-w-xl mx-auto" style={{ color: "#5E647A" }}>
            {t("contactPage.desc")}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10">
          {/* Left: Info */}
          <Reveal direction="left" className="lg:col-span-2">
            <div className="flex flex-col gap-6 h-full">
              {/* Info card */}
              <div className="rounded-3xl p-6 sm:p-8 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #5B43D6 0%, #2B7DDC 100%)",
                  boxShadow: "0 20px 60px rgba(91,67,214,0.25)"
                }}>
                <div className="absolute inset-0 opacity-[0.05] rounded-3xl overflow-hidden"
                  style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-5 sm:mb-6" style={{ fontFamily: "Manrope, sans-serif" }}>
                  {t("contactPage.infoTitle")}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-[10px] sm:text-xs mb-0.5">{t("contactPage.locationLabel")}</p>
                      <p className="text-white text-xs sm:text-sm font-medium">{t("contactPage.locationValue")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-[10px] sm:text-xs mb-0.5">{t("contactPage.locationIndiaLabel")}</p>
                      <p className="text-white text-xs sm:text-sm font-medium">{t("contactPage.locationIndiaValue")}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-[10px] sm:text-xs mb-0.5">{language === "en" ? "Phone" : "الهاتف"}</p>
                      <a href="tel:+249111909092" className="text-white text-xs sm:text-sm font-medium hover:text-[#28B7C7] transition-colors">
                        +249 111 909 092
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-[10px] sm:text-xs mb-0.5">{language === "en" ? "Email" : "البريد الإلكتروني"}</p>
                      <a href="mailto:zybiov.ltd88@gmail.com" className="text-white text-xs sm:text-sm font-medium hover:text-[#28B7C7] transition-colors">
                        zybiov.ltd88@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Globe className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-white/60 text-[10px] sm:text-xs mb-0.5">Website</p>
                      <a href="https://www.zybiov.com" target="_blank" rel="noopener noreferrer"
                        className="text-white text-xs sm:text-sm font-medium hover:text-[#28B7C7] transition-colors">
                        www.zybiov.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="rounded-3xl p-6 sm:p-8 border flex-1"
                style={{ background: "#FAFBFD", borderColor: "#E4E7F2", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
                <h3 className="text-sm sm:text-[16px] font-bold mb-4 sm:mb-5" style={{ color: "#1E244B" }}>{t("contactPage.followUs")}</h3>
                <div className="space-y-3 sm:space-y-4">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 sm:gap-4 group"
                    >
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                        style={{ background: "linear-gradient(135deg, #5B43D6, #2B7DDC)" }}>
                        <s.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold" style={{ color: "#1E244B" }}>{s.label}</p>
                        <p className="text-[10px] sm:text-xs" style={{ color: "#8892A4" }}>{s.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal delay={0.15} direction="right" className="lg:col-span-3">
            <div className="rounded-3xl p-6 sm:p-8 lg:p-10 border h-full"
              style={{ background: "#FAFBFD", borderColor: "#E4E7F2", boxShadow: "0 8px 40px rgba(0,0,0,0.06)" }}>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full min-h-[300px] sm:min-h-[400px] text-center"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-5"
                    style={{ background: "linear-gradient(135deg, #5B43D6, #28B7C7)" }}>
                    <Send className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: "#1E244B", fontFamily: "Manrope, sans-serif" }}>
                    {t("contactPage.successTitle")}
                  </h3>
                  <p className="text-sm sm:text-base" style={{ color: "#5E647A" }}>{t("contactPage.successDesc")}</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:gap-5">
                  <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2" style={{ color: "#1E244B", fontFamily: "Manrope, sans-serif" }}>
                    {t("contactPage.formTitle")}
                  </h3>

                  {serverError && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3.5 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-xs font-medium"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{serverError}</span>
                    </motion.div>
                  )}

                  {/* Inquiry Type Selector (B2B Dynamic Routing) */}
                  <div className="relative">
                    <label htmlFor="contact-inquiry-type" className="block text-xs font-semibold mb-1.5" style={{ color: "#5E647A" }}>
                      {language === "en" ? "Purpose of Inquiry" : "الغرض من التواصل"}
                    </label>
                    <div className="relative">
                      <Settings className={cn("absolute top-1/2 -translate-y-1/2 w-4 h-4", dir === "rtl" ? "right-4" : "left-4")} style={{ color: "#8892A4" }} />
                      <select
                        id="contact-inquiry-type"
                        name="inquiryType"
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value as any)}
                        className="form-input !ps-11 !pe-4 appearance-none cursor-pointer text-start"
                      >
                        <option value="general">{language === "en" ? "General Business Inquiry" : "استفسار تجاري عام"}</option>
                        <option value="client">{language === "en" ? "Become a Client (Pharmacy / Hospital Registration)" : "تسجيل كعميل صيدلية / مستشفى"}</option>
                        <option value="manufacturer">{language === "en" ? "Become a Partner (Manufacturer Sourcing Proposal)" : "تقديم عرض توريد / جهة تصنيع"}</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    {/* Name */}
                    <div className="relative">
                      <label htmlFor="contact-name" className="block text-xs font-semibold mb-1.5" style={{ color: "#5E647A" }}>{t("contactPage.labelName")}</label>
                      <div className="relative">
                        <User className={cn("absolute top-1/2 -translate-y-1/2 w-4 h-4", dir === "rtl" ? "right-4" : "left-4")} style={{ color: "#8892A4" }} />
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t("contactPage.placeholderName")}
                          className={cn("form-input !ps-11 !pe-4 text-start", formErrors.name && "!border-red-500 focus:!ring-red-200")}
                        />
                      </div>
                      {formErrors.name && (
                        <p className="text-[11px] text-red-500 mt-1 font-medium">{formErrors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-semibold mb-1.5" style={{ color: "#5E647A" }}>{t("contactPage.labelEmail")}</label>
                      <div className="relative">
                        <Mail className={cn("absolute top-1/2 -translate-y-1/2 w-4 h-4", dir === "rtl" ? "right-4" : "left-4")} style={{ color: "#8892A4" }} />
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t("contactPage.placeholderEmail")}
                          className={cn("form-input !ps-11 !pe-4 text-start", formErrors.email && "!border-red-500 focus:!ring-red-200")}
                        />
                      </div>
                      {formErrors.email && (
                        <p className="text-[11px] text-red-500 mt-1 font-medium">{formErrors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="contact-phone" className="block text-xs font-semibold mb-1.5" style={{ color: "#5E647A" }}>{t("contactPage.labelPhone")}</label>
                      <div className="relative">
                        <Phone className={cn("absolute top-1/2 -translate-y-1/2 w-4 h-4", dir === "rtl" ? "right-4" : "left-4")} style={{ color: "#8892A4" }} />
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t("contactPage.placeholderPhone")}
                          className="form-input !ps-11 !pe-4 text-start"
                        />
                      </div>
                    </div>

                    {/* Company / Facility */}
                    <div>
                      <label htmlFor="contact-company" className="block text-xs font-semibold mb-1.5" style={{ color: "#5E647A" }}>
                        {inquiryType === "client" 
                          ? (language === "en" ? "Pharmacy / Facility Name" : "اسم الصيدلية / المنشأة") 
                          : t("contactPage.labelCompany")}
                      </label>
                      <div className="relative">
                        <Building2 className={cn("absolute top-1/2 -translate-y-1/2 w-4 h-4", dir === "rtl" ? "right-4" : "left-4")} style={{ color: "#8892A4" }} />
                        <input
                          id="contact-company"
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder={inquiryType === "client" 
                            ? (language === "en" ? "e.g., Al-Amal Pharmacy" : "مثال: صيدلية الأمل")
                            : t("contactPage.placeholderCompany")}
                          className="form-input !ps-11 !pe-4 text-start"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dynamic Fields for Client Onboarding */}
                  {inquiryType === "client" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 p-4 rounded-2xl bg-blue-50/50 border border-blue-100"
                    >
                      <div>
                        <label htmlFor="contact-business-type" className="block text-xs font-semibold mb-1.5 text-blue-900">
                          {language === "en" ? "Facility Type" : "نوع المنشأة"}
                        </label>
                        <select
                          id="contact-business-type"
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          className="form-input border-blue-200 text-start"
                        >
                          <option value="pharmacy">{language === "en" ? "Retail Pharmacy" : "صيدلية تجزئة"}</option>
                          <option value="hospital">{language === "en" ? "Hospital / Clinical Center" : "مستشفى / مركز طبي"}</option>
                          <option value="wholesale">{language === "en" ? "Wholesale Distributor" : "موزع جملة"}</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="contact-license-number" className="block text-xs font-semibold mb-1.5 text-blue-900">
                          {language === "en" ? "Healthcare License Number" : "رقم ترخيص المنشأة الطبية"}
                        </label>
                        <div className="relative">
                          <FileText className={cn("absolute top-1/2 -translate-y-1/2 w-4 h-4", dir === "rtl" ? "right-4" : "left-4")} style={{ color: "#2B7DDC" }} />
                          <input
                            id="contact-license-number"
                            type="text"
                            name="licenseNumber"
                            value={formData.licenseNumber}
                            onChange={handleChange}
                            placeholder={language === "en" ? "e.g., LIC-8742-SD" : "مثال: LIC-8742-SD"}
                            className={cn("form-input !ps-11 !pe-4 border-blue-200 text-start", formErrors.licenseNumber && "!border-red-500 focus:!ring-red-200")}
                          />
                        </div>
                        {formErrors.licenseNumber && (
                          <p className="text-[11px] text-red-500 mt-1 font-medium">{formErrors.licenseNumber}</p>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Dynamic Fields for Manufacturer Partnership */}
                  {inquiryType === "manufacturer" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-purple-50/50 border border-purple-100"
                    >
                      <div>
                        <label htmlFor="contact-manufacturing-country" className="block text-xs font-semibold mb-1.5 text-purple-900">
                          {language === "en" ? "Country of Origin" : "بلد المنشأ"}
                        </label>
                        <div className="relative">
                          <Globe className={cn("absolute top-1/2 -translate-y-1/2 w-4 h-4", dir === "rtl" ? "right-4" : "left-4")} style={{ color: "#5B43D6" }} />
                          <input
                            id="contact-manufacturing-country"
                            type="text"
                            name="manufacturingCountry"
                            value={formData.manufacturingCountry}
                            onChange={handleChange}
                            placeholder={language === "en" ? "e.g., India, Germany" : "مثال: الهند، ألمانيا"}
                            className={cn("form-input !ps-11 !pe-4 border-purple-200 text-start", formErrors.manufacturingCountry && "!border-red-500 focus:!ring-red-200")}
                          />
                        </div>
                        {formErrors.manufacturingCountry && (
                          <p className="text-[11px] text-red-500 mt-1 font-medium">{formErrors.manufacturingCountry}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="contact-certifications" className="block text-xs font-semibold mb-1.5 text-purple-900">
                          {language === "en" ? "Certifications" : "الشهادات والاعتمادات"}
                        </label>
                        <div className="relative">
                          <Award className={cn("absolute top-1/2 -translate-y-1/2 w-4 h-4", dir === "rtl" ? "right-4" : "left-4")} style={{ color: "#5B43D6" }} />
                          <input
                            id="contact-certifications"
                            type="text"
                            name="certifications"
                            value={formData.certifications}
                            onChange={handleChange}
                            placeholder={language === "en" ? "e.g., WHO-GMP, FDA" : "مثال: WHO-GMP, FDA"}
                            className={cn("form-input !ps-11 !pe-4 border-purple-200 text-start", formErrors.certifications && "!border-red-500 focus:!ring-red-200")}
                          />
                        </div>
                        {formErrors.certifications && (
                          <p className="text-[11px] text-red-500 mt-1 font-medium">{formErrors.certifications}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="contact-therapeutic-area" className="block text-xs font-semibold mb-1.5 text-purple-900">
                          {language === "en" ? "Therapeutic Focus" : "التخصص العلاجي"}
                        </label>
                        <div className="relative">
                          <FileText className={cn("absolute top-1/2 -translate-y-1/2 w-4 h-4", dir === "rtl" ? "right-4" : "left-4")} style={{ color: "#5B43D6" }} />
                          <input
                            id="contact-therapeutic-area"
                            type="text"
                            name="therapeuticArea"
                            value={formData.therapeuticArea}
                            onChange={handleChange}
                            placeholder={language === "en" ? "e.g., Oncology, Cardiology" : "مثال: الأورام، أمراض القلب"}
                            className={cn("form-input !ps-11 !pe-4 border-purple-200 text-start", formErrors.therapeuticArea && "!border-red-500 focus:!ring-red-200")}
                          />
                        </div>
                        {formErrors.therapeuticArea && (
                          <p className="text-[11px] text-red-500 mt-1 font-medium">{formErrors.therapeuticArea}</p>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-semibold mb-1.5" style={{ color: "#5E647A" }}>{t("contactPage.labelMessage")}</label>
                    <div className="relative">
                      <MessageSquare className={cn("absolute w-4 h-4", dir === "rtl" ? "right-4 top-4" : "left-4 top-4")} style={{ color: "#8892A4" }} />
                      <textarea
                          id="contact-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={t("contactPage.placeholderMessage")}
                          rows={5}
                          className={cn("form-input resize-none !ps-11 !pe-4 !pt-3.5 text-start", formErrors.message && "!border-red-500 focus:!ring-red-200")}
                      />
                    </div>
                    {formErrors.message && (
                      <p className="text-[11px] text-red-500 mt-1 font-medium">{formErrors.message}</p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.01, boxShadow: "0 12px 36px rgba(91,67,214,0.4)" }}
                    whileTap={{ scale: 0.99 }}
                    className="btn-primary justify-center mt-2 w-full sm:w-auto sm:self-start disabled:opacity-60 disabled:cursor-not-allowed"
                    id="contact-submit"
                  >
                    {isSubmitting ? (
                      <>
                        <span>{language === "en" ? "Sending..." : "جاري الإرسال..."}</span>
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </>
                    ) : (
                      <>
                        {t("contactPage.btnSend")}
                        <Send className={cn("w-4 h-4", dir === "rtl" && "rotate-180")} />
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
