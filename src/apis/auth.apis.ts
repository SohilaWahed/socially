import type { AuthResponse, LoginSchemaType, RegisterSchemaType } from "@/types/Auth.types";
import axiosClient from "@/utils/axiosInterceptors";

export const loginApi = async (credientails: LoginSchemaType): Promise<AuthResponse> => {

    const res = await axiosClient.post('users/signin', credientails)

    return res.data
}

export const registerApi = async (credientails: RegisterSchemaType): Promise<AuthResponse> => {

    const res = await axiosClient.post('users/signup', credientails)

    return res.data
}