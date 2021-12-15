import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader';
import User from '../components/User';
import { getUsers } from '../store/action/userAction';

export default function Home() {
    const { users, loader } = useSelector((state) => state.users);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getUsers());
	}, []);

    return !loader ?
        <div className='container mt-5 shadow rounded-lg'>
            <table className="table table-responsive-md ">
            <thead>
                <tr>
                    <th scope="col">Sr No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Details</th>
                </tr>
            </thead>
            <tbody>
                {
                   users.map((user, index) => (
                    <User key={index} index={index} user={user} />
                    ))
                }
            </tbody>
        </table>
        </div>
        : <Loader/>
}
