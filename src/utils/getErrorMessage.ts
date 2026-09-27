import axios from "axios";

export interface ServerError {
    success?: boolean;
    message?: string;
    errors?: string | Record<string, string[]>;
}

export const getErrorMessage = (error: unknown, fallbackMessage = 'Something went wrong'): string => {
    if (axios.isAxiosError<ServerError>(error)) {
        if (error.response?.data.message) {
            return error.response.data.message
        }
        return error.message
    }
    if (error instanceof Error) {
        return error.message;
    }
    return fallbackMessage;
}