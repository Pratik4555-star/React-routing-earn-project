import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {userid} = useParams()
  return (
    <div  className=' relative flex justify-center m-3'>User:{userid}</div>
  )
}

export default User