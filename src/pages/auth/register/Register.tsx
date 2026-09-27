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

export default function Register() {


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
        toast.success("Account created successfully")
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
            title="Create your account"
            description="Join the community and start sharing"
          />

          {apiError && (
            <p className="text-red-500 pb-2 capitalize">
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
              label="Full name"
              type="text"
              placeholder="Sohila Waheed"
              {...register('name')}
              error={errors.name?.message}
            />

            <AuthInput
              id="userName"
              label="Username"
              type="text"
              placeholder="@Sola"
              {...register('username')}
              error={errors.username?.message}
            />

            <AuthInput
              id="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              className="col-span-2"
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

            <AuthInput
              id="rePassword"
              label="Confirm password"
              type="password"
              placeholder="••••••••"
              {...register('rePassword')}
              error={errors.rePassword?.message}
            />

            <AuthInput
              id="dateOfBirth"
              label="Date of birth"
              type="date"
              {...register('dateOfBirth')}
              error={errors.dateOfBirth?.message}
            />

            {/* Gender */}
            <div className="space-y-2">
              <label
                className="
                  text-sm
                  font-medium
                  text-foreground
                ">
                Gender
              </label>

              <select
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
                  Select gender
                </option>

                <option value="male" className="text-black">
                  Male
                </option>

                <option value="female" className="text-black">
                  Female
                </option>
              </select>
              {errors.gender && <p className="text-xs text-red-500">{errors.gender.message}</p>}
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
                  I agree to the{" "}

                  <Link
                    to="#"
                    className="
                      font-medium
                      text-primary
                      hover:text-secondary
                    "
                  >
                    Terms of Service
                  </Link>

                  {" "}and{" "}

                  <Link
                    to="#"
                    className="
                      font-medium
                      text-primary
                      hover:text-secondary
                    "
                  >
                    Privacy Policy
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
              {isPending ? "Creating account..." : "Create account"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted">
            Already have an account?{" "}

            <Link
              to={ROUTES.LOGIN}
              className="
                font-semibold
                text-primary
                transition
                hover:text-secondary
              "
            >
              Sign in
            </Link>
          </p>
        </AuthCard>
      </div>
    </main>
  )
}