import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Update = () => {
  const [id,setId] =useState(0);
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [published, setPublished] = useState("")
  const navigate = useNavigate();
  useEffect(()=>{
    setId(localStorage.getItem("id"));
    setTitle(localStorage.getItem("title"));
    setAuthor(localStorage.getItem("author"));
    setPublished(localStorage.getItem("published"));

  },[])
  const handleUpdate=(e)=>{
    e.preventDefault();
  axios.put(`https://6420234282bea25f6dfac175.mockapi.io/cruid1/${id}`,
  {
    title: title,
    author :author,
    published: published
  }
  ).then(()=>{
     navigate("/read")
  })
  }
  return (
    <div className='container  border border-warning p-5 border-2 mb-5'>
      <div className='d-flex justify-content-between'> 
      <h2>Edit Data</h2>
      <Link to="/read"> 
        <button className='btn btn-primary'>Back</button>
        </Link>
      
        </div>
       <form className=''>
      <div className="form-group mb-5">
    <label for="exampleInputPassword1">Book Title</label>
    <input type="text" className="form-control"  placeholder="Name" 
    onChange={(e)=> setTitle(e.target.value)}
    value={title}/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Book Author</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" 
    onChange={(e)=> setAuthor(e.target.value)}
    value={author}/>
    
  </div>
   <div className="form-group mt-5">
    <label for="exampleInputEmail1">Year Published & ISBN</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" 
    onChange={(e)=> setPublished(e.target.value)}
    value={published}/>
    
  </div>
  
  
  <button type="submit" className="btn btn-primary mt-5" 
  onClick={handleUpdate}
  >Update</button>
</form>
    </div>
  )
}

export default Update
