import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img className='service-img' src={img} alt="" />
            <div className='p-4'>
                <h2>{name}</h2>
                <p className='text-danger'>Price: <strong>${price}</strong></p>
                <p><small>{description}</small></p>
                <button onClick={() => navigateToServiceDetail(id)} className='btn btn-danger'>Book: {name}</button>
            </div>
        </div>
    );
};

export default Service;