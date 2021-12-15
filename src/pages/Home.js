import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from '../store/action/userAction';

export default function Home() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
    })

    return (
        <h1>List of users</h1>
    )
}
