import React, { useState } from 'react'
import Axios from "axios"
import { Link, useNavigate } from 'react-router-dom'

const Create = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [published, setPublished] = useState("")
  
  const history = useNavigate();

  const handleSubmit = (e)=>{
e.preventDefault();
    Axios.post(
      "https://6420234282bea25f6dfac175.mockapi.io/cruid1",
      {
        title: title,
        author :author,
        published: published
      }
    ).then(()=>{
      history("/read")
    })
    
  }
  
  return (
    <div className='container border border-warning p-5 border-2'>
      <div className='d-flex justify-content-between'> 
      <h2>To Do List</h2>
      <Link to="/read"> 
        <button className='btn btn-primary'>Show Data</button>
        </Link>
      
        </div>
      <form className=''>
      <div className="form-group mb-2">
    <label for="exampleInputPassword1" className='mb-3'>Book Title</label>
    <input type="text" className="form-control mb-4"  placeholder="Name" onChange={(e)=> setTitle(e.target.value)}/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1"  className='mb-3'>Book Author</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=> setAuthor(e.target.value)}/>
    
  </div>
  <div className="form-group mt-5">
    <label for="exampleInputEmail1"  className='mb-3'>Year published & ISBN</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" onChange={(e)=> setPublished(e.target.value)}/>
    
  </div>
  
  
  <button type="submit" className="btn btn-primary mt-5" onClick={handleSubmit}>Submit</button>
</form>
    </div>
  )  
  } 

export default Create
