import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";

export const setupI18n = () =>
    i18n.use(initReactI18next).init({
        ns: ["en"],
        resources: {
            en: { en },
        },
        lng: "en",
        interpolation: {
            escapeValue: false,
        },
    });
