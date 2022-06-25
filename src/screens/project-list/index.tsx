import { List } from "./list";
import { SeachPanel } from "./search-panel";
import * as qs from "qs";
import { cleanObject, useMount, useDebounce, useDocumentTitle } from "utils/index";
import React, { useEffect, useState } from "react";
import { useHttp } from "utils/http";
import styled from "@emotion/styled";

const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: "",
        personId: "",
    });
    const [users, setUsers] = useState([]);
    const [list, setList] = useState([]);
    const debounceParam = useDebounce(param, 200);
    const client = useHttp();
    useEffect(() => {
        client("projects", { data: cleanObject(debounceParam) }).then(setList);
        // fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`).then(async (res) => {
        //     if (res.ok) {
        //         setList(await res.json());
        //     }
        // });
    }, [debounceParam]);

    useMount(() => {
        client("users").then(setUsers);
        // fetch(`${apiUrl}/users`).then(async (res) => {
        //     if (res.ok) {
        //         setUsers(await res.json());
        //     }
        // });
    });
    useDocumentTitle("项目列表",false)

    return (
        <Container>
            <SeachPanel param={param} setParam={setParam} users={users} />
            <List users={users} list={list} />
        </Container>
    );
};
const Container = styled.div`
    padding: 0 3.2rem;
`
