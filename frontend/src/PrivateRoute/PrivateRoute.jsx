import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation,Navigate } from 'react-router-dom';
import { Spinner } from 'flowbite-react';


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(loading){
        return <div className='text-center'>
 <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example h-30" />
      </div>
        </div>
    }
    if(user){
        return children;
    }
  return (
    <Navigate to="/login" state={{from:location}} replace>

    </Navigate>
  )
}

export default PrivateRoute