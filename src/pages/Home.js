import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUser } from '../store/reducers/usersReducer';

export default function Home() {
    const state = useSelector((state) => state.users);
    console.log(state.users);
    const dispatch = useDispatch();
    const inputRef = useRef('');
    const storeUser = (e) => {
        e.preventDefault();
        console.log(inputRef.current.value);
        dispatch(addUser(inputRef.current.value));
        inputRef.current.value = '';
    }
    return (

        <form onSubmit={storeUser}>
            <input type="text" name='' placeholder='Add User' ref={inputRef} />
            <input type="submit" value='Add User' />
        </form>

    )
}
