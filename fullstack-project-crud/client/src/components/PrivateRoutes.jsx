import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoutes = ({children}) =>{
    const {isAuth} = useSelector((data)=>data.auth)
    if(isAuth){
        return children
    }
    return <Navigate to={'/sign-in'} />
}