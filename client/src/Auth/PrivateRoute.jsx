import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const PrivateRoute = () => {
    const context = useContext(AuthContext)
    const isLogin = context.isLogin
  return (
    <React.Fragment>
        {
            isLogin ? <Outlet></Outlet> : <Navigate to={'/login'}></Navigate>
        }
    </React.Fragment>
  )
}

export default PrivateRoute