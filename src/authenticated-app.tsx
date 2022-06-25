import { useAuth } from "context/auth-context"
import { ProjectListScreen } from "screens/project-list"
import { Button, Dropdown, Menu } from 'antd';
import styled from "@emotion/styled";
import { Row } from "components/lib";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { resetRoute, useDocumentTitle } from "utils";
import { Navigate, Route, Routes } from "react-router";
import { BrowserRouter as Router } from 'react-router-dom'
import { ProjectScreen } from "screens/project";
export const AuthenticatedApp = () => {
    const { logout, user } = useAuth()

    const menu = (
        < Menu items={
            [
                { key: '1', label: '退出登录', onClick: logout },
            ]} />
    )

    return <div>
        {/* <button >登出</button> */}
        <Header between={true}>
            <HeaderLeft gap={true}>
                <Button type={'link'} onClick={resetRoute}>
                <SoftwareLogo width={'18rem'} color={'rgb(38,132,255)'} />
                </Button>
                <h2>项目</h2>
                <h2>用户</h2>
            </HeaderLeft>
            <HeaderRight>
                <Dropdown overlay={<Menu>
                    <Menu.Item key={'logout'}>
                        <Button type="link" onClick={logout}>退出</Button>
                    </Menu.Item>
                </Menu>}>
                    <Button type="link" onClick={e => e.preventDefault()}> Hi, {user?.name}</Button>
                    {/* <a onClick={e=>e.preventDefault()}>
                        Hi, {user?.name}
                    </a> */}
                </Dropdown>
                {/* <Button type="primary" onClick={logout}>登出</Button> */}
            </HeaderRight>
        </Header>
        <Main>
            <Router>
            {/* <ProjectListScreen /> */}
                <Routes>
                    <Route path={'/projects'} element={<ProjectListScreen />} />
                    <Route path={'/projects/:projectId/*'} element={<ProjectScreen />} />
                    <Route path={'*'} element={<Navigate to={'/projects'}/>}/>

                </Routes>
            </Router>
        </Main>
    </div>
}


const Header = styled(Row)`
    height: 6rem;
    padding: 0 2rem;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
    z-index: 1;
`
const HeaderLeft = styled(Row)`
    
`
const HeaderRight = styled.div`
    
`
const Main = styled.main`
    height: calc(100vh - 6rem);
`