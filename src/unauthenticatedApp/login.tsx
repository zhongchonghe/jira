import { constants } from "buffer"
import { useAuth } from "context/auth-context";
import { FormEvent } from "react"
import { Button, Form, Input } from 'antd';
import { LongButton } from "unauthenticatedApp";
const apiUrl = process.env.REACT_APP_API_URL;

export const LoginScreen = () => {
    const { login, user } = useAuth()

    const handleSubmit = (values: {username:string,password:string}) => {
        login(values)
    }

    return (
        <Form onFinish={handleSubmit}>
            {
                user ? <div>
                    登录成功, 用户名: {user?.name}
                </div> : null
            }
            <Form.Item name='username' rules={[{required:true,message:'请输入用户名'}]}>
                {/* <label htmlFor="username">用户名</label> */}
                {/* <input type="text" id="{username}" /> */}
                <Input type="text" placeholder="请输入用户名"  id="username"/>
            </Form.Item>
            <Form.Item name="password" rules={[{required:true,message:'请输入用户名'}]}>
                {/* <label htmlFor="password">密码</label> */}
                {/* <input type="password" id="{password}" /> */}
                <Input type="text" placeholder="请输入密码"  id="password"/>

            </Form.Item>
            <Form.Item>
                <LongButton htmlType="submit" type={"primary"}>登录</LongButton>
            </Form.Item>
        </Form>
    )
}