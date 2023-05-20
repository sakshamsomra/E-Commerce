import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";


export default function Signup() {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")



    const submitForm = (event) => {

        event.preventDefault();

        const form = new FormData();
        form.append('email', email);
        form.append('username', username);
        form.append('password', password);

        axios.post("https://e-commerce-server-lake.vercel.app/api/users", form).then(() => {
            alert('success for insert');
        })

    }





    return (






        <>
            <Navbar />


            <form class="container1">
                <form class="cards">
                    <p class="singup">Sign Up</p>
                    <div class="inputBox1">
                        <input type="text" name="email" onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                        <span class="user">Email</span>
                    </div>

                    <div class="inputBox">
                        <input type="text" name="username" onChange={(e) => {
                            setUsername(e.target.value)
                        }} />
                        <span>Username</span>
                    </div>

                    <div class="inputBox">
                        <input type="password" name="password"  onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                        <span>Password</span>
                    </div>

                    <button class="enter" type="submit" onClick={submitForm}>Enter</button>

                </form>
            </form>

        </>




    )
}

// import React from "react";
// import { useEffect, useState } from 'react';
// import axios from "axios";
// import Navbar from "./Navbar";



// export default function Signup() {

//     const [email, setEmail] = useState("")
//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")






//     const submitForm = (event) => {

//         event.preventDefault();


//         const formData = new FormData();
//         formData.append('email', email);
//         formData.append('username', username);
//         formData.append('password', password);


//         axios.post("https://e-commerce-server-up15kl0c2-sakshamsomra.vercel.app/api/users", formData).then(() => {
//             alert('success for insert')
//         })

//     }



//     return (
//         <>

//             <Navbar />

//             <br />

//             <form>

//                 <form id="form" novalidate class="row g-3 needs-validation" enctype="multipart/form-data">
//                     <div class="col-md-4">
//                         <label for="validationCustom01" class="form-label" id="text">Product Name</label>
//                         <input type="text" class="form-control" id="validationCustom01" name="Prod_name" onChange={(e) => {
//                             setEmail(e.target.value)
//                         }} />
//                         <div class="valid-feedback">
//                             Looks good!
//                         </div>
//                     </div>





//                     <div class="col-md-4">
//                         <label for="validationCustomUsername" class="form-label" id="text">Description</label>
//                         <div class="input-group has-validation">

//                             <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" name="Description" onChange={(e) => {
//                                 setUsername(e.target.value)
//                             }} />

//                         </div>
//                     </div>

//                     <div class="col-md-4">
//                         <label for="validationCustomUsername" class="form-label" id="text">Price</label>
//                         <div class="input-group has-validation">
//                             <span class="input-group-text" id="inputGroupPrepend">Rs</span>
//                             <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" name="Price" onChange={(e) => {
//                                 setPassword(e.target.value)
//                             }} />

//                         </div>
//                     </div>

                    






//                     <div class="col-12">
//                         <button class="btn btn-primary" type="submit" onClick={submitForm} >Upload</button>

//                     </div>
//                 </form>

//             </form>

//         </>
//     )

// }
