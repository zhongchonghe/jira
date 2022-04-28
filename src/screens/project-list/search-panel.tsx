

export interface User {
    id: string,
    name: string,
    email: string,
    title: string,
    organization: string,
    token:string
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
        <form>
            <div>
                <input
                    type='text'
                    value={param.name}
                    onChange={(evt) =>
                        setParam({
                            ...param,
                            name: evt.target.value,
                        })
                    }
                />
                <select
                    value={param.personId}
                    onChange={(evt) =>
                        setParam({
                            ...param,
                            personId: evt.target.value,
                        })
                    }>
                    <option value={param.name}>负责人</option>
                    {users.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    );
};
