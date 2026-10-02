import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import arCommon from '@/locales/ar/common.json'
import enCommon from '@/locales/en/common.json'
import arNavigation from '@/locales/ar/navigation.json'
import enNavigation from '@/locales/en/navigation.json'
import arFeed from '@/locales/ar/feed.json'
import enFeed from '@/locales/en/feed.json'
import arAuth from '@/locales/ar/auth.json'
import enAuth from '@/locales/en/auth.json'

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                'common': enCommon,
                'navigation':enNavigation,
                'feed':enFeed,
                'auth':enAuth
            },
            ar: {
                'common': arCommon,
                'navigation':arNavigation,
                'feed':arFeed,
                'auth':arAuth
            }
        },
        lng: localStorage.getItem('lang') || 'en',
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n
