import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'
const useRedirect = () => {
    const navigate = useNavigate()
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    useEffect(()=> {
        if(!isLoggedIn){
            navigate('./login', {replace: true})
        }
    }, [isLoggedIn, navigate])
    return <header>Dashboard</header>
}
export const DashboardPage = ()  => {
useRedirect()
    
}
