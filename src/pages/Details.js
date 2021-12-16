import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUser } from "../store/action/userAction";


const Details = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUser(id))
    }, []);

    return <h1>Details {id}</h1>
}

export default Details
