import i18n from "@/libs/i18n"

type Lang = 'ar' | 'en'

export const toggleLanguage = (currentLang: Lang) => {
    const nextLang = currentLang === 'en' ? 'ar' : 'en'
    i18n.changeLanguage(nextLang)
    localStorage.setItem('lang' , nextLang)
} 