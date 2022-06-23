import { useAuth } from "context/auth-context"
import { ProjectListScreen } from "screens/project-list"
import { Button } from 'antd';
export const AuthenticatedApp=()=>{
    const {logout} = useAuth()
    return <div>
        {/* <button >登出</button> */}
        <Button type="primary" onClick={logout}>登出</Button>
         <ProjectListScreen />
    </div>
}