
import {
  Bookmark,
  Compass,
  House,
  LogOut,
  Settings,
  Users,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ROUTES from "@/constants/routes.constants";

const navigationItems = [
  {
    label: "feed",
    path: ROUTES.FEED,
    icon: House,
  },
  {
    label: "explore",
    path: "/explore",
    icon: Compass,
  },
  {
    label: "saved",
    path: ROUTES.SAVED,
    icon: Bookmark,
  },
  {
    label: "people",
    path: "/suggested-people",
    icon: Users,
  },
  {
    label: "settings",
    path: ROUTES.SETTINGS,
    icon: Settings,
  },
];

interface SidebarProps {
  isOpenSidebar: boolean
}

export default function Sidebar({ isOpenSidebar }: SidebarProps) {

  const { t } = useTranslation('notification');

  return (
    <aside className={`
      border-b border-border
      bg-background/90 backdrop-blur-md  px-3 py-6
      fixed inset-b-0 inset-s-0 z-40 w-72
      sm:w-auto sm:max-w-48
      sm:sticky sm:top-16 h-[calc(100vh-4rem)]
      lg:w-64 lg:border-b-0 lg:border-e lg:px-4 
      sm:translate-x-0 transition duration-150
      ${isOpenSidebar ? "translate-x-0"
        : "-translate-x-full rtl:translate-x-full"}
    `}>
      <nav className="flex flex-col gap-4">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) => `
                flex shrink-0 items-center gap-3
                rounded-xl px-4 py-3
                text-sm font-medium transition-colors
                ${isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted hover:bg-glass hover:text-foreground"
                }
              `}
            >
              <Icon size={20} />
              <span className="capitalize sm:hidden lg:block">{t(`${item.label}`)}</span>
            </NavLink>
          );
        })}

        <button type="button"
          className="flex shrink-0 items-center gap-3
                rounded-xl px-4 py-3
                text-sm font-medium transition-colors
                text-muted hover:bg-glass hover:text-red-500 cursor-pointer"
        >
          <LogOut />
          <span className="capitalize sm:hidden lg:block">{t('logout')}</span>
        </button>

      </nav>
    </aside>
  );
}