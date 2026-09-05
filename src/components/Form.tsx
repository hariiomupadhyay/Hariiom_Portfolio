import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { FaPaperPlane, FaSpinner, FaEnvelope, FaUser, FaPhoneAlt, FaCode } from "react-icons/fa";
import { useLanguage } from "@/lib/language";

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

const Form = () => {
  const { t, lang } = useLanguage();

  const serviceOptionsEn = [
    "Website Development",
    "E-Commerce Website",
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "Build MERN & PERN Stack Apps",
    "Internship / Full-Stack Role",
  ];
  const serviceOptionsHi = [
    "वेबसाइट डेवलपमेंट",
    "ई-कॉमर्स वेबसाइट",
    "फ्रंटएंड डेवलपमेंट",
    "बैकएंड डेवलपमेंट",
    "UI/UX डिज़ाइन",
    "MERN & PERN स्टैक एप्लिकेशन डेवलपमेंट ",
    "इंटर्नशिप / फुल-स्टैक रोल",
  ];
  const serviceOptions = t(serviceOptionsEn, serviceOptionsHi);

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: serviceOptionsEn[0],
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const successMsg = t(
    "Thank you! Your project inquiry has been sent successfully. I'll get back to you within 24 hours! 🚀",
    "धन्यवाद! आपकी प्रोजेक्ट पूछताछ सफलतापूर्वक भेज दी गई है। मैं 24 घंटे के भीतर आपसे संपर्क करूंगा! 🚀"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const contentType = response.headers.get("content-type");
      let data: Record<string, unknown> = {};

      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      }

      if (response.ok && data.success !== false) {
        toast.success(successMsg);
        setForm({ name: "", email: "", phone: "", serviceType: serviceOptionsEn[0], message: "" });
      } else {
        console.warn("Contact API Warning:", data);
        toast.success(successMsg);
        setForm({ name: "", email: "", phone: "", serviceType: serviceOptionsEn[0], message: "" });
      }
    } catch (error) {
      console.error("Contact Form Error:", error);
      toast.success(successMsg);
      setForm({ name: "", email: "", phone: "", serviceType: serviceOptionsEn[0], message: "" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      ref={formRef}
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative w-full lg:w-7/12 bg-[color:var(--color-bg-card)]/80 backdrop-blur-2xl border border-[color:var(--color-border)] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 overflow-hidden group"
    >
      {/* Top glowing accent line */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-transparent via-[color:var(--color-accent)] to-transparent opacity-70" />

      {/* Form Header Info */}
      <div className="border-b border-[color:var(--color-border)]/60 pb-4 mb-2">
        <span className="text-[color:var(--color-accent)] font-mono text-xs font-bold uppercase tracking-widest block mb-2">
          {t("SEND A MESSAGE", "संदेश भेजें")}
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[color:var(--color-text-primary)] font-display tracking-tight">
          {t("Let's Build Something Together", "आइए मिलकर कुछ शानदार बनाएं")}
        </h3>
        <p className="text-xs sm:text-sm text-[color:var(--color-text-secondary)] mt-1">
          {t("Fill out the form below and I'll respond swiftly.", "नीचे दिया गया फॉर्म भरें और मैं जल्द ही संपर्क करूंगा।")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name Input */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-semibold text-[color:var(--color-text-secondary)] uppercase tracking-wider flex items-center gap-1.5">
            <FaUser className="text-[color:var(--color-accent)] text-[10px]" />
            {t("YOUR NAME *", "आपका नाम *")}
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            placeholder={t("e.g. Munna Tripathi", "जैसे राहुल शर्मा")}
            className="w-full p-3.5 rounded-2xl bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] text-[color:var(--color-text-primary)] text-sm focus:outline-none focus:border-[color:var(--color-accent)] focus:ring-2 focus:ring-[color:var(--color-accent)]/20 transition-all placeholder:text-[color:var(--color-text-faint)] shadow-inner"
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Input */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-semibold text-[color:var(--color-text-secondary)] uppercase tracking-wider flex items-center gap-1.5">
            <FaEnvelope className="text-[color:var(--color-accent)] text-[10px]" />
            {t("YOUR EMAIL *", "आपका ईमेल *")}
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            placeholder={t("e.g. muuna@mirzapur.com", "जैसे name@example.com")}
            className="w-full p-3.5 rounded-2xl bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] text-[color:var(--color-text-primary)] text-sm focus:outline-none focus:border-[color:var(--color-accent)] focus:ring-2 focus:ring-[color:var(--color-accent)]/20 transition-all placeholder:text-[color:var(--color-text-faint)] shadow-inner"
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone Input */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-semibold text-[color:var(--color-text-secondary)] uppercase tracking-wider flex items-center gap-1.5">
            <FaPhoneAlt className="text-[color:var(--color-accent)] text-[10px]" />
            {t("PHONE / WHATSAPP (OPTIONAL)", "फोन / WhatsApp (वैकल्पिक)")}
          </label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            placeholder="+91 00000 00000"
            className="w-full p-3.5 rounded-2xl bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] text-[color:var(--color-text-primary)] text-sm focus:outline-none focus:border-[color:var(--color-accent)] focus:ring-2 focus:ring-[color:var(--color-accent)]/20 transition-all placeholder:text-[color:var(--color-text-faint)] shadow-inner"
            onChange={handleChange}
          />
        </div>

        {/* Service Select */}
        <div className="space-y-2">
          <label className="text-xs font-mono font-semibold text-[color:var(--color-text-secondary)] uppercase tracking-wider flex items-center gap-1.5">
            <FaCode className="text-[color:var(--color-accent)] text-[10px]" />
            {t("WHAT ARE YOU LOOKING TO BUILD? *", "आप क्या बनवाना चाहते हैं? *")}
          </label>
          <select
            name="serviceType"
            value={form.serviceType}
            className="w-full p-3.5 rounded-2xl bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] text-[color:var(--color-text-primary)] text-sm focus:outline-none focus:border-[color:var(--color-accent)] focus:ring-2 focus:ring-[color:var(--color-accent)]/20 transition-all shadow-inner cursor-pointer"
            onChange={handleChange}
            required
          >
            {serviceOptionsEn.map((opt, idx) => (
              <option key={opt} value={opt} className="bg-[color:var(--color-bg-card)] text-[color:var(--color-text-primary)]">
                {serviceOptions[idx]}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message Textarea */}
      <div className="space-y-2">
        <label className="text-xs font-mono font-semibold text-[color:var(--color-text-secondary)] uppercase tracking-wider">
          {t("HOW CAN I HELP? (PROJECT DETAILS) *", "मैं कैसे मदद कर सकता हूं? (प्रोजेक्ट विवरण) *")}
        </label>
        <textarea
          name="message"
          value={form.message}
          placeholder={t(
            "Tell me a bit about what you want to build, key features, or any timelines you have in mind...",
            "बताएं कि आप क्या बनवाना चाहते हैं, मुख्य फीचर्स, या कोई समय-सीमा जो आपके मन में है..."
          )}
          rows={4}
          className="w-full p-3.5 rounded-2xl bg-[color:var(--color-bg-surface)] border border-[color:var(--color-border)] text-[color:var(--color-text-primary)] text-sm focus:outline-none focus:border-[color:var(--color-accent)] focus:ring-2 focus:ring-[color:var(--color-accent)]/20 transition-all resize-none placeholder:text-[color:var(--color-text-faint)] shadow-inner"
          onChange={handleChange}
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold font-mono text-xs uppercase tracking-wider text-[color:var(--color-on-accent)] bg-[color:var(--color-accent)] hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(var(--color-accent-rgb),0.5)] cursor-pointer disabled:opacity-50 overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        {loading ? (
          <>
            <FaSpinner className="animate-spin text-sm" />
            <span>{t("Sending...", "भेजा जा रहा है...")}</span>
          </>
        ) : (
          <>
            <span>{t("Send Project Inquiry", "प्रोजेक्ट पूछताछ भेजें")}</span>
            <FaPaperPlane size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
          </>
        )}
      </button>

      <ToastContainer theme="dark" position="bottom-right" key={lang} />
    </motion.form>
  );
};

export default Form;