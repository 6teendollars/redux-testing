import { useDispatch } from "react-redux"
import { logIn } from '../redux/usersSlice'
import { useNavigate } from "react-router-dom"



export const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const form = e.currentTarget
        // console.log(form.elements.login.value);
        dispatch(logIn(form.elements.login.value))
        e.currentTarget.reset()
        navigate("./dashboard", {replace: true})
    }
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name='login' />
          <button type="submit">Log in</button>
        </form> 
      </div>
    );
  }