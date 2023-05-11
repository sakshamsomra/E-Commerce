import React from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";


export default function Signup() {

    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")



    const submitForm = () => {

        axios.post("http://sql12.freesqldatabase.com:3306/api/users", {

            email: email,
            username: username,
            password: password,






        }).then(() => {
            alert('success for insert')
        })

    }





    return (

        




        <>
        <Navbar/>


            <div class="container1">
                <div class="cards">
                    <p class="singup">Sign Up</p>
                    <div class="inputBox1">
                        <input type="text" required="required" onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                        <span class="user">Email</span>
                    </div>

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

                    <button class="enter" onClick={submitForm}>Enter</button>

                </div>
            </div>

        </>




    )
}