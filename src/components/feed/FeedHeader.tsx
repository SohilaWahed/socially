import { useTranslation } from "react-i18next";

export default function FeedHeader({name}:{name:string}) {

  const { t } = useTranslation('feed');

  return (
    <div className="mb-5">
      <h1 className="text-2xl font-bold tracking-tight text-foreground">
         {t("header.greeting", { name })}
        <span className="ml-2" aria-hidden="true">✨</span>
      </h1>

      <p className="mt-1 text-sm text-muted">
       {t("header.subtitle")}
      </p>
    </div>
  )
}
