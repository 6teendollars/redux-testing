import { useSelector, useDispatch } from "react-redux"
import { logOut } from "redux/usersSlice"

export const UserMenu = () => {
    const dispatch = useDispatch()
    const login = useSelector(state => state.user.login)
return <div>{login}<button type="button" onClick={() => dispatch(logOut())}>log out</button></div>

}

