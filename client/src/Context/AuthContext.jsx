import axios from 'axios'
import React, {createContext, useEffect, useState} from 'react'
import { toast } from 'react-toastify'

export const AuthContext = createContext()

export const AuthProvider = (props) => {
    const [isAdmin, setIsAdmin] = useState(false)
    const [isUser, setIsUser] = useState(false)
    const [isLogin, setIsLogin] = useState(false)
    const [currentUser, setCurrentUser] = useState(false)
    const [token, setToken] = useState(false)
    const checkAuth = async () => {
      if(localStorage.getItem("CC_TOKEN") && localStorage.getItem("CC_STATUS")){
        let aToken = localStorage.getItem("CC_TOKEN")
        let aStatus = localStorage.getItem("CC_STATUS")
        setToken(aToken)
        setIsLogin(aStatus)
        if(aStatus){
          setIsLogin(true)
        }

        await axios.get('/api/auth/current/user', {
          headers:{
            Authorization:aToken
          }
        }).then(res => {
          setCurrentUser(res.data.user)
          if(res.data.user.role === "user") setIsUser(true)
          if(res.data.user.role === "admin") setIsAdmin(true)

        }).catch(err => toast.error(err.response.data.message))
      } else{
        setToken(false)
        setIsLogin(false)
        setIsUser(false)
        setCurrentUser(false)
        setIsAdmin(false)
        // access user info based on token
      }
    }

    useEffect(() => {
      checkAuth()

      // unmount
      return () => {
        checkAuth()
      }
    },[isUser, isAdmin])
  return (
    <AuthContext.Provider value={{isAdmin, isUser, isLogin,setIsLogin, currentUser, token, setToken, setIsUser, setCurrentUser, setIsAdmin}}>
        {props.children}
    </AuthContext.Provider>
  )
}