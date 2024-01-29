import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useSearchParams,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const ResetPassword = () => {
    const [token, setToken] = useState(false)
    const [params,setParams] = useSearchParams()
    useEffect(() => {
        setToken(params.get('token'))
    },[params])

    const fpass = useRef()
    const fcpass = useRef()
    const navigate = useNavigate()
    
    const submitHandler = async(e) => {
        e.preventDefault()
        try {   
            let fp = fpass.current.value
            let cp = fcpass.current.value
            if(fp !== cp){
                toast.warning('Password are not matched')
            } else{
                await axios.patch('/api/auth/password/update',{
                    password:fp
                },{
                    headers:{
                        Authorization:`${token}`
                    }
                }).then(res => {
                    toast.success(res.data.msg)
                    navigate('/login')
                })
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-secondary">Generate Password</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-12">
                <div className="card">
                    <div className="card-body">
                        <form action="" autoComplete='off' method='post' onSubmit={submitHandler}>
                            <div className="form-group mt-2">
                                <label htmlFor="">Password</label>
                                <input type="password" name="pass" id="pass" className='form-control' required ref={fpass}/>
                            </div>
                            <div className="form-group mt-2">
                                <label htmlFor="">Confirm Password</label>
                                <input type="password" name="cpass" id="cpass" className='form-control' ref={fcpass} required/>
                            </div>
                            <div className="form-group mt-2">
                                <input type="submit" name="submit" id="submit" value='Reset Password' className='form-control btn btn-secondary' required/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword