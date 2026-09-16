import { useTranslation } from "react-i18next"
import { useEffect } from "react"

function App() {

  const { i18n } = useTranslation()

  useEffect(() => {
    const currentLang = i18n.language === 'en' ? 'en' : 'ar'
    const dir = currentLang === 'en' ? 'ltr' : 'rtl'
    document.documentElement.dir = dir
    document.documentElement.lang = currentLang;
  }, [i18n.language])

  return (
    <>
      <h1>Socially App</h1>
    </>
  )
}

export default App
