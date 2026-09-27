import type { LoginResponse, LoginSchemaType, RegisterResponse, RegisterSchemaType } from "@/types/Auth.types";
import axiosClient from "@/utils/axiosInterceptors";

export const loginApi = async (credientails: LoginSchemaType): Promise<LoginResponse> => {

    const res = await axiosClient.post('users/signin', credientails)

    return res.data
}

export const registerApi = async (credientails: RegisterSchemaType): Promise<RegisterResponse> => {

    const res = await axiosClient.post('users/signup', credientails)

    return res.data
}