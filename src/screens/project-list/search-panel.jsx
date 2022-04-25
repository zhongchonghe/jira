export const SeachPanel = ({ users, param, setparam }) => {
    return (
        <form>
            <div>
                <input
                    type='text'
                    value={param.name}
                    onChange={(evt) =>
                        setparam({
                            ...param,
                            name: evt.target.value,
                        })
                    }
                />
                <select
                    value={param.personId}
                    onChange={(evt) =>
                        setparam({
                            ...param,
                            personId: evt.target.value,
                        })
                    }>
                    <option value={users.id}>负责人</option>
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
