import { useTranslation } from "react-i18next"
import { useEffect } from "react"
import AppRoutes from "./routes/AppRoutes"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import { useTheme } from "./hooks/useTheme";


const queryClient = new QueryClient()

function App() {

  const { i18n } = useTranslation()

  const { theme } = useTheme()

  useEffect(() => {
    const currentLang = i18n.language === 'en' ? 'en' : 'ar'
    const dir = currentLang === 'en' ? 'ltr' : 'rtl'
    const root = document.documentElement
    root.dir = dir
    root.lang = currentLang;
  }, [i18n.language])

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster theme={theme} />
        <AppRoutes />
      </QueryClientProvider>
    </>
  )
}

export default App
