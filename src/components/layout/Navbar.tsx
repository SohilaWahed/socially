import ROUTES from "@/constants/routes.constants"
import { Bell, Layers, Moon, PanelsTopLeft, Search, Sun } from "lucide-react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useTheme } from "@/hooks/useTheme"
import type { Dispatch, SetStateAction } from "react"


interface NavbarProps {
  setIsOpenSidebar: Dispatch<SetStateAction<boolean>>
}
export default function Navbar({ setIsOpenSidebar }: NavbarProps) {

  const { theme, toggleTheme } = useTheme()
  const { t } = useTranslation('navigation')
  
  return (
    <header className="h-16 sticky top-0 z-40 
         bg-background/90 backdrop-blur-xl
         border-b border-border ">

      <div className=" mx-auto h-full max-w-screen-2xl flex items-center justify-between gap-4 px-4 sm-px-6">

        <div className="flex gap-2 items-center">

          {/* Menu bar */}
          <button type="button" aria-label="Open navigation menu"
            onClick={() => setIsOpenSidebar((prev) => !prev)}
            className=" flex size-10 shrink-0 items-center justify-center
                rounded-xl text-muted transition
                hover:bg-glass hover:text-foreground
                sm:hidden
              ">
            <PanelsTopLeft />
          </button>

          {/* Logo */}
          <Link to={ROUTES.FEED} className="flex shrink-0 items-center gap-2" aria-label="socially home">
            <span className="size-9 flex items-center justify-center rounded-ui
                bg-linear-to-br from-primary to-secondary text-white"
            >
              <Layers size={20} />
            </span>
            <span className=" text-lg font-bold tracking-tight text-foreground ">
              Socially
            </span>
          </Link>
        </div>

        {/* Search */}
        <div className="hidden sm:block w-full max-w-md">
          <label className=" h-10 flex items-center gap-2 rounded-ui
           border border-border bg-background 
           px-3 text-muted transition 
           focus-within:ring-4 focus-within: ring-primary/10">

            <Search size={18} />
            <input type="search" placeholder={t('search')} aria-label={t('search')}
              className="flex-1 bg-transparent text-sm text-foreground
              outline-none placeholder:text-muted
            "/>
          </label>
        </div>

        {/* Actions  */}
        <div className="flex items-center gap-2 shrink-0">

          {/* Theme */}
          <button type="button" onClick={() => toggleTheme()}
            className="relative size-10 flex items-center justify-center
                rounded-ui text-muted transition hover:text-foreground cursor-pointer "
          >
            {theme === 'light' ? <Moon size={21} /> : <Sun size={21} />}
          </button>

          {/* Notification */}
          <button type="button" aria-label={t("notifications")}
            className="relative size-10 flex items-center justify-center
                rounded-ui text-muted transition hover:text-foreground cursor-pointer "
          >
            <Bell size={21} />
            <span className="
              absolute inset-e-2 top-2 size-2
              rounded-full bg-accent
            " />
          </button>

          {/* Profile */}
          <Link to={ROUTES.PROFILE}>
            <Avatar className='bg-linear-br from-primary to-secondary'>
              <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
              <AvatarFallback className='bg-linear-to-br from-primary to-secondary text-white'>CN</AvatarFallback>
            </Avatar>
          </Link>

        </div>
      </div>
    </header>
  )
}
