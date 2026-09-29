import type { User } from "./Auth.types"


export interface Story {
    id: string
    user: User
    content: string
    image?: string
    createdAt: string,
    isViewed:boolean
}