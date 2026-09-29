import type { GetMyProfile } from "@/types/user.types"
import axiosClient from "@/utils/axiosInterceptors"

export const getMyProfile = async ():Promise<GetMyProfile> => {
    const res = await axiosClient.get('users/profile-data')
    return res.data
}

