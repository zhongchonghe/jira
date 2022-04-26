import { List } from "./list";
import { SeachPanel } from "./search-panel";
import * as qs from 'qs'
import {cleanObject, useMount,useDebounce} from 'utils/index'
import React, { useEffect,useState } from 'react'

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: "",
        personId: "",
    });
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);
    const debounceParam = useDebounce(param,200)

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async (res) => {
            if (res.ok) {
                setList(await res.json());
            }
        });
    }, [debounceParam]);

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async (res) => {
            if (res.ok) {
                setUsers(await res.json());
            }
        });
    })
    
    return (
        <div>
            <SeachPanel param={param} setParam={setParam} users={users} />
            <List users={users} list={list} />
        </div>
    );
};
