import { Link, useNavigate } from "react-router-dom"
import AuthBackground from "@/components/auth/AuthBackground"
import AuthHeader from "@/components/auth/AuthHeader"
import AuthInput from "@/components/auth/AuthInput"
import AuthCard from "@/components/auth/AuthCard"
import SocialButton from "@/components/auth/SocialButton"
import { Regex } from 'lucide-react';
import ROUTES from "@/constants/routes.constants"
import { useForm } from 'react-hook-form'
import { loginSchema } from "@/schemas/login.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import type { LoginSchemaType } from "@/types/Auth.types"
import { useMutation } from "@tanstack/react-query"
import { loginApi } from "@/apis/auth.apis"
import { setToken } from "@/utils/tokens"
import { useState } from "react"
import { toast } from "sonner"
import { getErrorMessage } from "@/utils/getErrorMessage"
import { useTranslation } from "react-i18next"

export default function Login() {

  const { t } = useTranslation("auth");

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      "email": "",
      "password": "",
    },
    resolver: zodResolver(loginSchema)
  })

  const [apiError, setApiError] = useState("")

  const { isPending, mutate } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      toast.success(t("login.success"));
      navigate(ROUTES.FEED)
      setToken(data.data.token)
    },
    onError: (error) => {
      const msg = getErrorMessage(error)
      setApiError(msg)
    }
  })

  const handleLogin = (credentails: LoginSchemaType) => {
    mutate(credentails)
  }

  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        px-4
        py-8
        sm:px-6
        lg:px-8 "
    >
      <AuthBackground />

      <div
        className="
          mx-auto
          flex
          min-h-[calc(100vh-4rem)]
          w-full
          max-w-md
          items-center
          justify-center
        "
      >
        <AuthCard>

          <AuthHeader
            title={t("login.title")}
            description={t("login.description")}
          />

          {apiError && (
            <p className="text-red-500 pb-2 capitalize">
              {apiError}
            </p>
          )}

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">

            <AuthInput
              id="email"
              label={t('login.email')}
              type="email"
              placeholder={t("login.emailPlaceholder")}
              {...register('email')}
              error={errors.email?.message}
            />

            <AuthInput
              id="password"
              label={t('login.password')}
              type="password"
              placeholder={t('login.passwordPlaceholder')}
              {...register('password')}
              error={errors.password?.message}
            />

            <div
              className="
                flex
                items-center
                justify-between
                gap-3
                text-sm
              "
            >
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="
                    h-4
                    w-4
                    rounded
                    accent-primary
                  "
                />

                <span className="text-muted">
                  {t('login.rememberMe')}
                </span>
              </label>

              <Link
                to="#"
                className="
                  font-medium
                  text-primary
                  transition
                  hover:text-secondary
                "
              >
               {t('login.Forgot password?')}
              </Link>
            </div>

            <button
              type="submit"
              className="
                h-12
                w-full
                rounded-ui

                bg-linear-to-r
                from-primary
                to-secondary

                text-sm
                font-semibold
                text-white

                shadow-lg
                shadow-primary/20

                transition
                hover:brightness-110
                active:scale-[0.98]
              "
              disabled={isPending}
            >
              {isPending
                ? t("login.submitting")
                : t("login.submit")}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />

            <span className="text-xs text-muted">
              {t('login.divider')}
            </span>

            <div className="h-px flex-1 bg-border" />
          </div>

          <SocialButton icon={<Regex size={18} />}>
            {t('login.google')}
          </SocialButton>

          <p className="mt-6 text-center text-sm text-muted">
            {t('login.noAccount')}{" "}

            <Link
              to={ROUTES.REGISTER}
              className="
                font-semibold
                text-primary
                transition
                hover:text-secondary
              "
            >
              {t('login.createAccount')}
            </Link>
          </p>
        </AuthCard>
      </div>
    </main>
  )
}