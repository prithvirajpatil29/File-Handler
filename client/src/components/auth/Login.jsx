import React, {useState, useRef, useContext} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { AuthContext } from '../../Context/AuthContext';

const Login = () => {
  const context = useContext(AuthContext)
  const setIsLogin = context.setIsLogin
  const setToken = context.setToken
  const [view, setView] = useState('email');
  const femail = useRef()
  const fmobile = useRef()
  const fpassword = useRef()

  const navigate = useNavigate()

  const viewHandler = (val) => {
    setView(val)
  }

  const submitHandler =async (e) => {
    e.preventDefault();
    try {
      if(view === 'email'){
        let data = {
          email : femail.current.value,
          password : fpassword.current.value
        }
        console.log('email login ' ,data)
        authenticateUser(data)
      } else{
        let data = {
          mobile : fmobile.current.value,
          password : fpassword.current.value
        }
        console.log('mobile login ' ,data)
        authenticateUser(data)
      }
      
    } catch (error) {
      toast.error(error)
    }
  }
  const authenticateUser = async(user) => {
    await axios.post('/api/auth/login', user).then(res => {
      toast.success(res.data.msg)
      setIsLogin(res.data.success)
      setToken(res.data.token)
      localStorage.setItem('CC_TOKEN', res.data.authToken)
      localStorage.setItem('CC_STATUS', res.data.success)
      window.location.href = '/'
      navigate('/')
    }).catch(err => toast.error(err.response.data.msg))
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-12 text-center mt-3">
          <h3 className="display-3 text-secondary">Login</h3>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <div className="btn-group d-flex justify-content-center">
                <button className="btn btn-info" onClick={() => viewHandler('email')}>Email</button>
                <button className="btn btn-danger " onClick={() => viewHandler('mobile')}>Mobile</button>
              </div>
            </div>
            <div className="card-body">
              <form action="" onSubmit={submitHandler}>
                {view === 'email'?
                (<div className="form-group mt-2">
                  <label htmlFor="">Email</label>
                  <input type="email" name="email" id="email" className='form-control' required ref={femail} />
                </div>) 
                 :(<div className="form-group mt-2">
                  <label htmlFor="">Mobile</label>
                  <input type="number" name="mobile" id="mobile" className='form-control' required ref={fmobile}/>
                </div>)}
                <div className="form-group mt-2">
                  <label htmlFor="">Password</label>
                  <input type="password" name="password" id="password" className='form-control' required ref={fpassword} />
                </div>
                <div className="form-group mt-2">
                  <input type="submit" value="Login" className='form-control btn btn-outline-info mt' />
                </div>
              </form>
            </div>
            <div className="card-footer d-flex justify-content-between">
            <div className="text-start text-info">
              <NavLink to={'/generate/password'}>
                <strong>Forgot Password</strong>
              </NavLink>
            </div>
              <p className="text-end"><b className='me-2'>Are you a new user</b>
                <NavLink to={'/register'} className={'text-danger'}>Register Here</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login