import React,{useEffect ,  useState} from 'react';
import axios, {isCancel, AxiosError} from 'axios';
import { Outlet, Link , useNavigate } from "react-router-dom";
// import User from '../../../../backend/server/model/userSchema';

const Profile = () => {

    
    const navigate = useNavigate();
    const [userData , setUserData] = useState(null);
    

    const callAboutPage = async() =>{
  try{
const res = await  fetch('/jobavai',{
  method: "GET",
  headers:{
    Accept:"application/json",
    "Content-Type":"application/json"
  },
  credentials:"include"
});
const data = await res.json();
console.log(data);
setUserData(data);     
if(!res.status ===200){ 
  const error = new Error(res.error);
  throw error;
 }
  }
 catch(err){
    console.log(err);

// navigate('/signin'); 
  }
 } 
 useEffect(()=>{
  callAboutPage();
 }, []);

  return (
//     <div>
//         <br/>  <br/>
//         <form  method='GET'>
//             <br/>
//         <div className='col-md-2 float-end'>
//             <input type="text" className='edit-btn' value="Edit Profile"></input>
//           </div>


//           <center>
//           <div className='profile-head'>
//                     <h5>MADIRE PRIYANKA
//                    {/* <h6>DEVELOPER</h6> */}
                        
//                     </h5>
                    
//             </div>

//           </center>
         

//          <div className='col-md-8 pl-5 about-info'>
//             <div className='tab-content profile-tab' id = 'myTabContent'>
//                 <div className='tab-pane fade show active' id="home" >
                    
//                     <div className='row'>
//                         <div className='col-md-6'>
//                         <label>NAME</label>

//                         </div>
//                         <div className='col-md-6'>
// <p>
//     {/* {userData.name} */}
//     {/* PRIYANKA */}
// </p>
//                         </div>
//                     </div>
//                     <div className='row'>
//                         <div className='col-md-6'>
//                         <label>Email</label>

//                         </div>
//                         <div className='col-md-6'>
// <p>
//     priyanka01@gmail.com
// </p>
//                         </div>
//                     </div>
//                     <div className='row'>
//                         <div className='col-md-6'>
//                         <label>Mobile number</label>

//                         </div>
//                         <div className='col-md-6'>
// <p>
//     7845129632
// </p>
//                         </div>
//                     </div>
//                     <div className='row'>
//                         <div className='col-md-6'>
//                         <label>Qualification</label>

//                         </div>
//                         <div className='col-md-6'>
// <p>
//     B.Tech
// </p>
//                         </div>
//                     </div>


//                     <div className='row'>
//                         <div className='col-md-6'>
//                         <label>Experience</label>

//                         </div>
//                         <div className='col-md-6'>
// <p>
//     2 years
// </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//          </div>
         
//         </form>

//       </div>
<>

 {/* {userData && userData?.data.map((User)=> */}
       <>

       {/* {userData && userData?.data.map((users)=>  */}
         <table>
         <tbody>
           <tr>
             <th>Name</th>
             <th>Email</th>
             <th>Number</th>
             <th>Qualification</th>
             <th>Experience</th>
           </tr>
           <tr>
             <td>users.name</td>
             <td>userData.email</td>
             <td>userData.phone</td>
             <td>userData.qualification</td>
             <td>userData.experience</td>
           </tr>
         </tbody>
       </table>
       {/* )} */}
       
       {/* )} */}
          
      


</>

{/* </Main> */}
</>
   
  )
}

export default Profile
