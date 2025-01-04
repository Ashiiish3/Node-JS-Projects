import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoutes = ({ children }) => {
    const { token } = useSelector((data) => data.auth)
    if (token) {
        return children
    }
    return <Navigate to={'/sign-in'} />
}