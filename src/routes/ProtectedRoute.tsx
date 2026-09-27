import ROUTES from "@/constants/routes.constants";
import { getToken } from "@/utils/tokens";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {

    const token:string|null = getToken()

    if (!token) {
        return <Navigate to={ROUTES.LOGIN} replace />
    }

    return <Outlet />
}
