import React,{useEffect ,  useState} from 'react';
import { Outlet, Link , useNavigate } from "react-router-dom";
import axios from 'axios';


const Notification = () => {
  const navigate = useNavigate();
  const [products , setProducts] = useState("");

 
useEffect(()=>{
const fetchdata=async()=>{
  const data = await axios.get('/jobavai');
  console.log(data);
  setProducts(data);
};
fetchdata();
},[]);
  return (
    <div>
        <>
        {/* <button type="button" className="btn btn-primary  float-end bi bi-gear-wide">
    <Link className="text-light" to="/sett">
      Settings
    </Link>
  </button> */}
  <button
    type="button"
    className="btn btn-dark float-end bi bi-box-arrow-right"
  >
    <Link className="text-light" to="/login">
      LOGOUT
    </Link>
  </button>
  <div className="offcanvas offcanvas-start" id="demo">
    <div className="offcanvas-header">
      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
    </div>
    <div className="offcanvas-body">
      <Link className="nav-link text-dark" to="/jobsavai">
        <strong>JOBS AVAILABLE</strong>
      </Link>
      <hr />
      <Link className="nav-link text-dark" to="/notif">
        <strong>NOTIFICATIONS</strong>
      </Link>
    </div>
  </div>
  <div className="container-fluid mt-3">
    <button
      className="btn btn-primary bi bi-funnel"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#demo"
    >
      FILTERS
    </button>
  </div>
  <center>
    <h1>NOTIFICATIONS</h1>
  </center>
  <div className="box" style={{  backgroundColor: "rgb(286, 255, 196)"  }}>
    
   

    {
        products && products?.data.map((product)=>(
         <>
         <strong>
     
    </strong>
          
          <p> <i className="bi bi-bell-fill" />YOU HAVE A NEW FACULTY POST FROM  {product.instname} INSTITUTE. 
          <Link to="/apply">Click here to apply</Link></p>
          
         </>
        ))}

    
    
   
  </div>
  <br />
  {/* <div className="box" style={{ backgroundColor: "rgb(216, 255, 196)" }}>
    <strong>
      <i className="bi bi-bell-fill" />
    </strong>
    YOU HAVE A NEW FACULTY POST FROM NGIT INSTITUTE.
    <a href="#">Click here to apply</a>
  </div> */}
  <br />
  <br />
  <img
    className="float-end"
    width="500px"
    src="https://img.freepik.com/free-vector/push-notifications-concept-illustration_114360-4986.jpg?w=2000"
  />
</>
      <Outlet />

    </div>
  )
};

export default Notification;
