import { Form, Input, Select } from "antd";


export interface User {
    id: string,
    name: string,
    email: string,
    title: string,
    organization: string,
    token: string
}

interface SeachPanelProps {
    users: User[],
    param: {
        name: string,
        personId: string
    },
    setParam: (param: SeachPanelProps['param']) => void;
}

export const SeachPanel = ({ users, param, setParam }: SeachPanelProps) => {
    return (
        <Form layout={"inline"} style={{margin:'2rem 0'}}>
            <Form.Item>
                <Input
                    placeholder="项目名"
                    type='text'
                    value={param.name}
                    onChange={(evt) =>
                        setParam({
                            ...param,
                            name: evt.target.value,
                        })
                    }
                />
            </Form.Item>
            <Form.Item>

                <Select
                    value={param.personId}
                    onChange={value =>
                        setParam({
                            ...param,
                            personId: value,
                        })
                    }>
                    <Select.Option value={param.name}>负责人</Select.Option>
                    {users.map((user) => (
                        <Select.Option key={user.id} value={user.id}>
                            {user.name}
                        </Select.Option>
                    ))}
                </Select>
            </Form.Item>
        </Form>
    );
};
