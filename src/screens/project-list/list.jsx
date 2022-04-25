export const List = ({ list, users }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>负责人</th>
                </tr>
            </thead>
            <tbody>
                {list.map((e) => (
                    <tr key={e.id}>
                        <td>{e.name}</td>
                        <td>{users.find((user) => user.id === e.personId)?.name ||'未知'}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
