export interface GetMyProfile {
    success: boolean;
    message: string;
    data: {
        user: UserData
    };
}

export interface UserData {
    _id: string;
    id: string;
    name: string;
    username: string;
    email: string;
    dateOfBirth: string;
    gender: 'female' | 'male';
    photo: string;
    cover: string;
    bookmarks: string[];
    followers: string[];
    following: string[];
    createdAt: string;
    followersCount: number;
    followingCount: number;
    bookmarksCount: number;
}

export interface UserErrorResponse {
    success: false
    message: string
    errors: string
}

export type GetMyProfileRes = GetMyProfile | UserErrorResponse