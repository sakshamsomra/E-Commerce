import React from "react";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { Link, redirect, Route, useNavigate } from "react-router-dom";




export default function Landing() {

    const navigate = useNavigate();

    axios.defaults.withCredentials = true;


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    
    

    const submitForm = () => {

        const formData = new FormData();
        formData.append('username', username);
        formData.append('password', password);
       

        axios.post("https://e-commerce-server-ewfplxmpn-sakshamsomra.vercel.app/api/login", formData).then((response) => {
            if (response.data.message) {
                alert(response.data.message);
            }
            else {
                alert(" Successfull login " + username);
                navigate("/home");
            }
        })
  
    }

    // const submitForm = () => {

        

    //     axios.post("https://e-commerce-server-up15kl0c2-sakshamsomra.vercel.app/api/login", {

    //         username: username,
    //         password: password,

    //     }).then((response) => {
    //         if (response.data.message) {
    //             alert(response.data.message);
    //         }
    //         else {
    //             alert(" Successfull login " + username);
    //             navigate("/home");
    //         }
    //     })

    // }

    useEffect( () => {

        axios.get("https://e-commerce-server-ewfplxmpn-sakshamsomra.vercel.app/api/login").then((response) => {
            console.log(response);
        })

    }, [])



    return (

        <>

            <div class="container1">
                <div class="cards">
                    <p class="singup">Log In</p>


                    <div class="inputBox">
                        <input type="text" required="required" onChange={(e) => {
                            setUsername(e.target.value)
                        }} />
                        <span>Username</span>
                    </div>

                    <div class="inputBox">
                        <input type="password" required="required" onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                        <span>Password</span>
                    </div>

                    <button type="button" class="enter" onClick={submitForm}>Enter</button>

                    <Link to={"/sign"} class="signin">Dont have an account? SignUp</Link>

                </div>
            </div>



        </>


    )
}

// import React from "react";
// import axios from "axios";
// import { useState, useRef, useEffect } from "react";
// import { Link, redirect, Route, useNavigate } from "react-router-dom";



// export default function Landing() {

//     const navigate = useNavigate();

//     axios.defaults.withCredentials = true;


//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const submitForm = () => {

//         axios.post("https://e-commerce-server-up15kl0c2-sakshamsomra.vercel.app/api/login", {

//             username: username,
//             password: password,

//         }).then((response) => {
//             if (response.data.message) {
//                 alert(response.data.message);
//             }
//             else {
//                 alert(" Successfull login " + username);
//                 navigate("/home");
//             }
//         })

//     }

//     useEffect(() => {

//         axios.get("https://e-commerce-server-up15kl0c2-sakshamsomra.vercel.app/api/login").then((response) => {
//             console.log(response);
//         })

//     }, [])



//     return (

//         <>

//             <form class="container1">
//                 <div class="cards">
//                     <p class="singup">Log In</p>


//                     <div class="inputBox">
//                         <input type="text" required="required" onChange={(e) => {
//                             setUsername(e.target.value)
//                         }} />
//                         <span>Username</span>
//                     </div>

//                     <div class="inputBox">
//                         <input type="password" required="required" onChange={(e) => {
//                             setPassword(e.target.value)
//                         }} />
//                         <span>Password</span>
//                     </div>

//                     <button type="button" class="enter" onClick={submitForm}>Enter</button>

//                 </div>
//             </form>



//         </>


//     )
// }
