import AuthBackground from "@/components/auth/AuthBackground"
import AuthHeader from "@/components/auth/AuthHeader"
import AuthCard from "@/components/auth/AuthCard"
import { Link, useNavigate } from "react-router-dom"
import AuthInput from "@/components/auth/AuthInput"
import ROUTES from "@/constants/routes.constants"
import { registerSchema } from "@/schemas/login.schema"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import type { RegisterSchemaType } from "@/types/Auth.types"
import { registerApi } from "@/apis/auth.apis"
import { useMutation } from '@tanstack/react-query';
import { useState } from "react"
import { toast } from "sonner"
import { getErrorMessage } from "@/utils/getErrorMessage"
import { useTranslation } from "react-i18next"

export default function Register() {

 const { t } = useTranslation("auth");

  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterSchemaType>({
    defaultValues: {
      "name": "",
      "username": "",
      "email": "",
      "dateOfBirth": "",
      "gender": "male",
      "password": "",
      "rePassword": ""
    },
    resolver: zodResolver(registerSchema)
  })

  const [apiError, setApiError] = useState("")

  const {
    mutate,
    isPending,
  } = useMutation({
    mutationFn: registerApi,
    onSuccess: () => {
      toast.success(t('register.success'))
      navigate(ROUTES.LOGIN)
    },
    onError: (error) => {
      const msg = getErrorMessage(error)
      setApiError(msg)
    },
  })


  const handleRegister = (credentials: RegisterSchemaType) => {
    mutate(credentials)
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
        lg:px-8
      "
    >
      <AuthBackground />

      <div
        className="
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-2xl
          items-center
        "
      >
        <AuthCard>

          <AuthHeader
            title={t('register.title')}
            description={t('register.description')}
          />

          {apiError && (
            <p role="alert" className="text-red-500 pb-2 capitalize">
              {apiError}
            </p>
          )}

          <form
            onSubmit={handleSubmit(handleRegister)}
            className="
              grid
              grid-cols-1
              gap-5
              sm:grid-cols-2
            "
          >
            <AuthInput
              id="fullName"
              label={t('register.fullName')}
              type="text"
              placeholder={t('register.fullNamePlaceholder')}
              {...register('name')}
              error={errors.name?.message}
            />

            <AuthInput
              id="userName"
              label={t('register.username')}
              type="text"
              placeholder={t('register.usernamePlaceholder')}
              {...register('username')}
              error={errors.username?.message}
            />

            <AuthInput
              id="email"
              label={t('register.email')}
              type="email"
              placeholder={t('register.emailPlaceholder')}
              className="col-span-2"
              {...register('email')}
              error={errors.email?.message}
            />

            <AuthInput
              id="password"
              label={t('register.password')}
              type="password"
              placeholder="••••••••"
              {...register('password')}
              error={errors.password?.message}
            />

            <AuthInput
              id="rePassword"
              label={t('register.confirmPassword')}
              type="password"
              placeholder="••••••••"
              {...register('rePassword')}
              error={errors.rePassword?.message}
            />

            <AuthInput
              id="dateOfBirth"
              label={t('register.dateOfBirth')}
              type="date"
              {...register('dateOfBirth')}
              error={errors.dateOfBirth?.message}
            />

            {/* Gender */}
            <div className="space-y-2">
              <label
                htmlFor="gender"
                className="
                  text-sm
                  font-medium
                  text-foreground
                ">
                {t('register.gender')}
              </label>

              <select
                id="gender"
                className="
                  h-12
                  w-full
                  rounded-ui

                  border
                  border-glass-border
                  bg-glass

                  px-4

                  text-sm
                  text-foreground
                 
                  outline-none
                  transition

                  focus:border-primary
                  focus:ring-4
                  focus:ring-primary/10
                "
                {...register('gender')}
              >
                <option value="" className="text-black">
                  {t('register.selectGender')}
                </option>

                <option value="male" className="text-black">
                 {t('register.male')}
                </option>

                <option value="female" className="text-black">
                  {t('register.female')}
                </option>
              </select>
              {errors.gender &&
               <p role="alert" className="text-xs text-red-500">
                {errors.gender.message}
                </p>}
            </div>

            {/* Terms */}
            <div className="sm:col-span-2">
              <label className="flex items-start gap-3">
                <input
                  type="checkbox"
                  className="
                    mt-1
                    h-4
                    w-4
                    rounded
                    accent-primary
                  "
                />

                <span
                  className="
                    text-sm
                    leading-6
                    text-muted
                  "
                >
                  {t('register.terms')}{" "}

                  <Link
                    to="#"
                    className="
                      font-medium
                      text-primary
                      hover:text-secondary
                    "
                  >
                    {t('register.termsOfService')}
                  </Link>

                  {" "}{t('register.and')}{" "}

                  <Link
                    to="#"
                    className="
                      font-medium
                      text-primary
                      hover:text-secondary
                    "
                  >
                    {t('register.privacyPolicy')}
                  </Link>
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="
                h-12
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

                sm:col-span-2
              "
              disabled={isPending}
            >
              {isPending ? t('register.submitting') : t('register.submit') }
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted">
            {t('register.hasAccount')}{" "}
            <Link
              to={ROUTES.LOGIN}
              className="
                font-semibold
                text-primary
                transition
                hover:text-secondary
              "
            >
              {t('register.signIn')}
            </Link>
          </p>
        </AuthCard>
      </div>
    </main>
  )
}