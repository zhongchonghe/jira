import { Table } from 'antd';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { User } from './search-panel'
interface Project {
    id: string,
    name: string,
    personId: string,
    pin: boolean,
    organization: string,

}

interface ListProps {
    list: Project[],
    users: User[]
}
export const List = ({ list, users }: ListProps) => {
    const columns  = [
        {
            title: '名称',
            key: 'id',
            // dataIndex: 'name',
            render: (value:any, project:any) => <Link to={String(project.id)}>{project.name}</Link>,
            // sorter:(a: { name: string; },b: { name: any; })=>a.name.localeCompare(b.name)
        },
        {
            title: '部门',
            dataIndex: 'organization',
            key: 'id',
            // sorter:(a: { name: string; },b: { name: any; })=>a.name.localeCompare(b.name)
        },
        {
            title: '负责人',
            render(value:any,project:any) {
                return <span>
                     {users.find((user) => user.id === project.personId)?.name || '未知'}
                </span>
            },
            key: 'id',

        },
        {
            title: '时间',
            render(value:any,project:any){
                return <span>
                    {project.created? dayjs(project.created).format('YYYY-MM-DD ') : '暂无'}
                    </span>

            }
        }
    ]
    return <Table pagination={false} columns={columns} dataSource={list} /> 
    // return (
    //     <table>
    //         <thead>
    //             <tr>
    //                 <th>名称</th>
    //                 <th>负责人</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {list.map((e) => (
    //                 <tr key={e.id}>
    //                     <td>{e.name}</td>
    //                     <td>{users.find((user) => user.id === e.personId)?.name || '未知'}</td>
    //                 </tr>
    //             ))}
    //         </tbody>
    //     </table>
    // );
};
