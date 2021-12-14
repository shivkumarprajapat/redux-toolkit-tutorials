import React from 'react'
import { useSelector } from 'react-redux'

export default function Home() {
    const state = useSelector((state)=>state.users);

    console.log(state)
    return <h1>Home Page</h1>

    
}
