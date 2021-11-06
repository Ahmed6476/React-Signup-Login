import * as React from 'react';
import './dashboard.css'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { baseUrl } from "../../core"
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
// import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Formik, Field, Form, useFormik } from "formik";
import { IconContext } from 'react-icons';
import { GlobalContext } from './../../context/Context';
import { useContext } from "react";


function Home() {


    let { state, dispatch } = useContext(GlobalContext);

    const [profile, setProfile] = useState({})

    useEffect(() => {

        axios.get(`${baseUrl}/api/v1/profile`, {
            withCredentials: true
        })
            .then((res) => {
                console.log("res +++: ", res.data);
                setProfile(res.data)
            })
    }, [])


  let history = useHistory()

//   const [todo, settodo] = useState([])

//   useEffect(() => {

//     const Title = localStorage.getItem('title')
//     console.log(Title);
//     axios.get(`${baseUrl}/api/v1/posts`, {
//       title: Title
//     })
//       .then((res) => {
//         let data = res.data
//         settodo(data);
//         console.log(todo);
//       })
//       .catch((err) => {
//         console.log(err.message);
//       })

//     return () => {
//       console.log("cleanup")
//     };
//   }, []);


//   const [info, setinfo] = useState([]);
//   useEffect(() => {
//     const Email = localStorage.getItem('email')
//     console.log(Email);
//     axios.post(`${baseUrl}/api/v1/profile`, {
//       email: Email
//     })
//       .then((res) => {
//         let info = res.data
//         setinfo(info)
//         console.log(info)
//       })
//       .catch((err) => {
//         console.log(err.message);
//       })
//     return () => {
//       console.log('Data Removed')
//     }
//   }, [])




  const formik = useFormik({
    initialValues: {
      title: '',
      description: '',
    },
    onSubmit: onSubmitFunction
  });




  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);



  function onSubmitFunction(values) {
    console.log("values: ", values)
    axios.post(`${baseUrl}/api/v1/create`, {
      title: values.title,
      description: values.description
    })
      .then((response) => {
        console.log(response.data);
        const title = values.title;
        localStorage.setItem('title', title)

      }).catch((error) => {
        console.log(error);
      })
  }


  return (


    <div>

      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose style={{ color: 'white', marginLeft: '220px' }} />
              </Link>
            </li>
            
              
                <li  className='style'>

                  {/* {item.icon} */}
                  <span style={{ color: 'white', fontSize: '20px' }}>Name: <br /> {profile.name}</span>
                  <br /><br />
                  <span style={{ color: 'white', fontSize: '20px' }}>Email:<br /> {profile.email}</span>
                  <br /><br />
                  {/* <span style={{ color: 'white', fontSize: '20px' }}><Button variant="outlined" onClick={() => { history.push("/signup") }}>Back to Signup</Button></span> */}
                  <br /><br />
                  <span style={{ color: 'white', fontSize: '20px' }}><Button variant="outlined" onClick={() => {
                axios.post(`${baseUrl}/api/v1/logout`,{}, {
                    withCredentials: true
                })
                    .then((res) => {
                        console.log("res +++: ", res.data);

                        dispatch({
                            type: "USER_LOGOUT"
                        })
                    })
            }}>Logout</Button></span>
              
                </li>
              );
        
          </ul>
        </nav>
      </IconContext.Provider>


      

    </div>



  )






}

export default Home;


// import axios from 'axios';
// import { useState, useEffect, useRef } from "react"
// import { baseUrl } from "./../../core"
// import { GlobalContext } from './../../context/Context';
// import { useContext } from "react";

// function Home() {

//     let { state, dispatch } = useContext(GlobalContext);

//     const [profile, setProfile] = useState({})

//     useEffect(() => {

//         axios.get(`${baseUrl}/api/v1/profile`, {
//             withCredentials: true
//         })
//             .then((res) => {
//                 console.log("res +++: ", res.data);
//                 setProfile(res.data)
//             })
//     }, [])


//     return (
//         <>
//             <h1> Profile Page </h1>
//             <p>{profile.name}</p>
//             <p>{JSON.stringify(profile.email)}</p>
//             <p>{JSON.stringify(profile._id)}</p>

//             <button onClick={() => {
//                 axios.get(`${baseUrl}/api/v1/profile`, {
//                     withCredentials: true
//                 })
//                     .then((res) => {
//                         console.log("res +++: ", res.data);
//                         setProfile(res.data)
//                     })
//             }} >get profile</button>

//             <button onClick={() => {
//                 axios.post(`${baseUrl}/api/v1/logout`,{}, {
//                     withCredentials: true
//                 })
//                     .then((res) => {
//                         console.log("res +++: ", res.data);

//                         dispatch({
//                             type: "USER_LOGOUT"
//                         })
//                     })
//             }} >Logout</button>
//         </>
//     );
// }

// export default Home;