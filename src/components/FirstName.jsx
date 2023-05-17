import React from 'react';
import { useSelector } from 'react-redux';

export default () => {
  const firstName = useSelector(state => state.user.firstName);
  return <div className='font-bold'>{firstName}</div>;
};
