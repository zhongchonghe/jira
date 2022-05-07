import { constants } from "buffer"
import { useAuth } from "context/auth-context";
import { FormEvent } from "react"
const apiUrl = process.env.REACT_APP_API_URL;

export const RegisterScreen = () => {


    const {register,user} = useAuth()


    const handleSubmit = (event:any) => {
        event.preventDefault()
        // console.log('event', (event.currentTarget.elements[0] as HTMLInputElement).value)
        const username = event.currentTarget.elements[0].value
        const password = event.currentTarget.elements[1].value
        register({ username, password })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">用户名</label>
                <input type="text" id="{username}" />
            </div>
            <div>
                <label htmlFor="password">密码</label>
                <input type="password" id="{password}" />

            </div>
            <div>
                <button type={"submit"}>注册</button>
            </div>
        </form>
    )
}