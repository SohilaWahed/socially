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

export default function Login() {

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
      toast.success("Login successfully")
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
            title="Welcome back"
            description="Sign in to continue to your account"
          />

          {apiError && (
            <p className="text-red-500 pb-2 capitalize">
              {apiError}
            </p>
          )}

          <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">

            <AuthInput
              id="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              {...register('email')}
              error={errors.email?.message}
            />

            <AuthInput
              id="password"
              label="Password"
              type="password"
              placeholder="••••••••"
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
                  Remember me
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
                Forgot password?
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
              {isPending ? "Singing In..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />

            <span className="text-xs text-muted">
              OR
            </span>

            <div className="h-px flex-1 bg-border" />
          </div>

          <SocialButton icon={<Regex size={18} />}>
            Continue with Google
          </SocialButton>

          <p className="mt-6 text-center text-sm text-muted">
            Don't have an account?{" "}

            <Link
              to={ROUTES.REGISTER}
              className="
                font-semibold
                text-primary
                transition
                hover:text-secondary
              "
            >
              Create account
            </Link>
          </p>
        </AuthCard>
      </div>
    </main>
  )
}