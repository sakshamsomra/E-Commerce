import React from "react";
import { Link } from "react-router-dom";
import home from './photos/home.png'
import login from './photos/login.png'
import category from './photos/category.png'
import sell from './photos/sell.png'
import items from './photos/items.png'
import { useSelector } from "react-redux";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function Navbar() {


    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get("https://e-commerce-server-lake.vercel.app/api/username").then((response) => {


            setUser(response.data);
            console.log(response.data);

        });
    }, []); 


    const log = () => {

        axios.post("https://e-commerce-server-lake.vercel.app/api/logout", {


        }).then((response) => {
            if (response.data.message) {
                alert(response.data.message);
            }

        })

    }


    const amount = useSelector(state => state.amount)

    return (

        <>

            <nav class="navbar navbar-expand-lg " id="navbar">
                <div class="container-fluid">
                    <Link class="navbar-brand" to={'/home'}><img id="image" src={home} alt="" />{user}</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                            <li class="nav-item">
                                <Link class="nav-link" to={'/sell'}>  <img id="image" src={sell} alt="" />Sell</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" id="log" to={'/sign'}> <img id="image" src={login} alt="" /> Sign Up</Link>
                            </li>

                            <li class="nav-item">
                                <button id="logbutt" onClick={log}><Link class="nav-link" id="log" to={'/'}> <img id="image" src={login} alt="" /> Log Out</Link></button>
                            </li>


                            



                      



                            <li class="nav-item ">
                                <Link class="nav-link " id="log" to={'/cart'} role="button" > <img id="image" src={items} alt="" /> Cart ₹{amount}</Link>
                                {/* <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" href="#">Cart is empty</Link></li>

                                </ul> */}



                            </li>

                        </ul>
                       
                    </div>
                </div>
            </nav>


        </>


    )
}
