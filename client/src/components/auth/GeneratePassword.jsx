import axios from 'axios'
import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const GeneratePassword = () => {
    const [valid, setValid] = useState(false)
    const femail = useRef()
    // validating email

    const validate = async () => {
        if(femail.current.value === null || femail.current.value === ''){
            toast.warning('User email field has to be filled')
        } else{
            await axios.post('/api/auth/verify/user', {
                email:femail.current.value
            }).then(res => {
                toast.success(res.data.msg)
                setValid(res.data.success)
            }).catch(err => toast.error(err.message.data.msg))
        }
    }

    // generate password
    const navigate = useNavigate()
    const genPassword = async() => {
        await axios.post('/api/auth/generate/password/link',{
            email:femail.current.value
        }).then(res => {
            toast.success(res.data.msg)
            navigate('/login')
        }).catch(err => toast.error(err.response.data.msg))
    }
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-secondary">Generate Password</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-sm-12">
                <div className="card">
                    <div className="card-body">
                        <div className="form-group mt-2">
                            <div className="input-group">
                                <input type="email" name="email" id="email" className="form-control" ref={femail}  required placeholder='Enter your regestered Email' readOnly={valid?true:false}/>
                                {
                                    valid? <button className="btn btn-success" onClick={genPassword}>Generate Password</button>:<button className="btn btn-secondary" onClick={validate}>Verify Email</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GeneratePassword