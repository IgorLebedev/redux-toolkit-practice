import React from 'react';
import { useSelector } from 'react-redux';

export default () => {
    const lastName = useSelector(state => state.user.lastName);
    return <div className='font-bold'>{lastName}</div>
};
