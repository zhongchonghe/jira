import { List } from "./list";
import { SeachPanel } from "./search-panel";
import React, { useEffect,useState } from 'react'

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
    const [param, setparam] = useState({
        name: "",
        personId: "",
    });
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(`${apiUrl}/projects`).then(async (res) => {
            if (res.ok) {
                setList(await res.json());
            }
        });
    }, [param]);

    useEffect(() => {
        fetch(`${apiUrl}/users`).then(async (res) => {
            if (res.ok) {
                setUsers(await res.json());
            }
        });
    }, [])
    
    return (
        <div>
            <SeachPanel param={param} setparam={setparam} users={users} />
            <List users={users} list={list} />
        </div>
    );
};
