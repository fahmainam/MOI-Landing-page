


const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      features: "Features",
      services: "Services",
      faq: "FAQ",
      contact: "Contact",
      getStarted: "Get Started"
    },
    hero: {
      title: " Welcome to Metrash2",
      subtitle:
        "Available at Apple Store and Play Store.",
      ctaPrimary: "Download App",
      ctaSecondary: "Learn More"
    }
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      features: "الميزات",
      services: "الخدمات",
      faq: "الأسئلة الشائعة",
      contact: "تواصل معنا",
      getStarted: "ابدأ الآن"
    },
    hero: {
      title: " مرحبًا بك في متراش2",
      subtitle:
        "اكتشف قوة الذكاء الاصطناعي لأتمتة العمليات، وتحليل البيانات، وتحفيز الابتكار.",
      ctaPrimary: "ابدأ مجانًا",
      ctaSecondary: "اعرف المزيد"
    }
  }
};
let currentLang = localStorage.getItem("lang") || "en";

function applyLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const keys = el.getAttribute("data-i18n").split(".");
    let text = translations[lang];
    keys.forEach(k => text = text?.[k]);
    if (text) el.textContent = text;
  });

  // RTL handling
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("rtl", lang === "ar");

  document.getElementById("langLabel").textContent = lang === "ar" ? "EN" : "AR";

  localStorage.setItem("lang", lang);
}

document.getElementById("langToggle").addEventListener("click", () => {
  currentLang = currentLang === "en" ? "ar" : "en";
  applyLanguage(currentLang);
});

// Init
applyLanguage(currentLang);
