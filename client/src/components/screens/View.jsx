import React, { useCallback, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const View = () => {
  const [file, setFile] = useState(false)
  const {token} = useContext(AuthContext)
  const params = useParams()
  const url = 'https://restapi-ic3z.onrender.com'
  const readFile = useCallback(() => {
    const readData = async () => {
      await axios.get(`/api/file/single/${params.id}`,{
        headers:{
          Authorization:token
        }
      }).then(res => {
        setFile(res.data.file)
      }).catch(err => toast.error(err.response.data.msg))
    }
    readData()
  },[])
  useEffect(() => {
    readFile()
  })
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12 text-center">
                View Document
            </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body w-100">
                {
                  file.extName === '.PNG' ||file.extName === '.png'  || file.extName === '.jpg' || file.extName === '.jpeg' ?<img src={`${url}/${file.newName}`} type="" className='img-fluid'/> : null
                }
                {
                  file.extName === '.pdf' ? <embed src={`${url}/${file.newName}`} style={{height:"80vh", width:'100vw'}} type="" className='img-fluid'/> : null
                }
                {
                  file.extName === '.ppt' ||file.extName === '.pptx'  || file.extName === '.doc' || file.extName === '.docx' ? <iframe src={`https://view.officeapps.live.com/op/embed.aspx?src=${url}/${file.newName}`} style={{height:"80vh", width:'100vw'}} type="" className='card-img-top'/> : null
                }
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default View