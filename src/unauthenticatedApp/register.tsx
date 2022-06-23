import { Button, Form, Input } from "antd";
import { constants } from "buffer"
import { useAuth } from "context/auth-context";
import { FormEvent } from "react"
import { LongButton } from "unauthenticatedApp";
const apiUrl = process.env.REACT_APP_API_URL;

export const RegisterScreen = () => {


    const { register, user } = useAuth()


    const handleSubmit = (values:{ username:string, password:string }) => {
        register(values)
    }
    
    return (
        <Form onFinish={handleSubmit}>
            <Form.Item name='username'>
                <Input type="text" placeholder="请输入用户名" id="username" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: '请输入用户名' }]}>
                <Input type="text" placeholder="请输入密码" id="password" />
            </Form.Item>
            <Form.Item >
                <LongButton htmlType="submit" type={"primary"}>注册</LongButton>
            </Form.Item>
        </Form>



    )
}