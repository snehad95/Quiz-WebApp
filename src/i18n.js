import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to ExamSphere",
        home: "Home",
        about: "About",
        exams: "Exams",
        course: "Course",
        login: "Login",
        logout: "Logout",
        createAccount: "Create Account",
        search: "Search"
      }
    },
    hi: {
      translation: {
        welcome: "ExamSphere में आपका स्वागत है",
        home: "होम",
        about: "हमारे बारे में",
        exams: "परीक्षाएं",
        course: "कोर्स",
        login: "लॉगिन",
        logout: "लॉगआउट",
        createAccount: "खाता बनाएं",
        search: "खोजें"
      }
    }
  },

  // 👇 This remembers selected language
  lng: localStorage.getItem("lang") || "en",

  fallbackLng: "en",

  interpolation: {
    escapeValue: false
  }
});

export default i18n;