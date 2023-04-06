import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Update = () => {
  const [id,setId] =useState(0);
  const [name,setName] =useState("");
  const [email,setEmail]=useState(" ");
  const navigate = useNavigate();
  useEffect(()=>{
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));

  },[])
  const handleUpdate=(e)=>{
    e.preventDefault();
  axios.put(`https://6420234282bea25f6dfac175.mockapi.io/cruid1/${id}`,
  {
    name :name,
    email : email
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
    <label for="exampleInputPassword1">Name</label>
    <input type="text" className="form-control"  placeholder="Name" 
    onChange={(e)=> setName(e.target.value)}
    value={name}/>
  </div>
  <div className="form-group">
    <label for="exampleInputEmail1">Add Items</label>
    <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" 
    onChange={(e)=> setEmail(e.target.value)}
    value={email}/>
    
  </div>
  
  
  <button type="submit" className="btn btn-primary mt-5" 
  onClick={handleUpdate}
  >Update</button>
</form>
    </div>
  )
}

export default Update
