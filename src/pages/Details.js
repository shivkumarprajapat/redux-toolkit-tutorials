import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import { getUser } from '../store/action/userAction';
const Details = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { loader, user } = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(getUser(id));
    }, []);
    return !loader ? (
        <div className='container mt-5'>
            <Link to='/' className='btn btn-dark mb-3'>
                Go Back
            </Link>
            <div className='card shadow rounded-lg border-0'>
                <div className='card-header'>
                    <h3>
                        <span className='text-info'>{user.name}</span> details
                    </h3>
                </div>
                <div className='card-body'>
                    <div className='row mb-2'>
                        <div className='col-3'>Name</div>
                        <div className='col-9 text-end'>{user.name}</div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-3'>Email</div>
                        <div className='col-9 text-end'>{user.email}</div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-3'>Username</div>
                        <div className='col-9 text-end'>{user.username}</div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-3'>Website</div>
                        <div className='col-9 text-end'>{user.website}</div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-3'>Phone</div>
                        <div className='col-9 text-end'>{user.phone}</div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <Loader />
    );
};
export default Details;