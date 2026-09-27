
import ROUTES from "@/constants/routes.constants"
import AuthLayout from "@/pages/auth/AuthLayout"
import Login from "@/pages/auth/login/Login"
import Register from "@/pages/auth/register/Register"
import Feed from "@/pages/main/feed/Feed"
import MainLayout from "@/pages/main/MainLayout"
import NotFound from "@/pages/main/notFound/NotFound"
import PostDetails from "@/pages/main/postDetails/PostDetails"
import Saved from "@/pages/main/saved/Saved"
import Settings from "@/pages/main/settings/Settings"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import ProtectedRoute from "./ProtectedRoute"
export default function AppRoutes() {

  const routes = createBrowserRouter([
    {
      element: <AuthLayout />, children: [
        { path: ROUTES.LOGIN, element: <Login /> },
        { path: ROUTES.REGISTER, element: <Register /> }
      ]
    },
    {
      element: <ProtectedRoute />, children: [
        {
          element: <MainLayout />, children: [
            { index: true, element: <Feed /> },
            { path: ROUTES.FEED, element: <Feed /> },
            { path: ROUTES.POST_DETAILS, element: <PostDetails /> },
            { path: ROUTES.SAVED, element: <Saved /> },
            { path: ROUTES.SETTINGS, element: <Settings /> }
          ]
        }
      ]
    },
    { path: '*', element: <NotFound /> }
  ])

  return (
    <RouterProvider router={routes} />
  )
}
