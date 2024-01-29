import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'

const FileUpload = () => {

    const [files, setFiles] = useState(false)
    const [loader, setLoader] = useState(false)
    const {token} = useContext(AuthContext)
    const navigate = useNavigate()
    const fileHandler = async (e) => {
        e.preventDefault()
        try {
            const fileData = e.target.files[0]  
            console.log(fileData)  
            if(!fileData){
                toast.warning('File input should not be empty')
            }else if(fileData.size > 10 * 1024 * 1024){
                toast.warning('File size must be below 10mb')
            }else{
                setFiles(fileData)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }
    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            let formData = new FormData()
            formData.append('product', files)
            setLoader(true)

            await axios.post('/api/file/upload',formData,{
                headers:{
                    'Content-Type':'multipart/form-data',
                    Authorization:token
                }
            }).then(res => {
                setLoader(false)
                setFiles(false)
                toast.success(res.data.msg)
                navigate('/user/dashboard')
            }).catch(err => {
                setLoader(false)
                setFiles(false)
                toast.error(err.response.data.msg)})
        } catch (error) {
            toast.error(error.message)
        }
    }
  return (
    <div className='container'>
        <div className="row">
            <div className="col-md-12 text-center">
                <h3 className="display-3 text-secondary">
                File Upload
                </h3>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-md-4 offset-md-4 col-lg-4 offset-lg-4 col-sm-12">
                <div className="card bg-body-secondary  d-flex align-items-center justify-content-center" >
                    <div className="card-body">
                        {
                            loader ? (
                                <div class="d-flex justify-content-center" style={{height:'4rem'}}>
                                    <div class="spinner-grow" role="status">
                                        <span class="sr-only"></span>
                                    </div>
                                </div>
                            ) :  <form action="" onSubmit={submitHandler}>
                            <div className="form-group my-2 ">
                                <input type="file" name="product" className='form-control' id="product" required hidden onChange={fileHandler}/>
                                <label htmlFor="product"><h3>{files ? files.name : 'Upload File'}</h3></label><i className="bi bi-cloud-upload ms-2 fs-2"></i>
                            </div>
                            <div className="form-group my-2 d-flex justify-content-center">
                                <input type="submit" value="Upload" className='btn btn-info px-5' />
                            </div>
                        </form>
                        }
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FileUpload