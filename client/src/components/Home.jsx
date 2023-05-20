import React from "react";

import axios from "axios";

import { BrowserRouter, Links, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import fruit from './photos/fruit.jpg'
import Footer from "./Footer";
import Navbar from "./Navbar";
import pizza from './photos/pizza.png'
import burger from './photos/burger.png'
import dosa from './photos/dosa.png'
import shake from './photos/shake.png'
import indian from './photos/indian.png'
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useSelector } from "react-redux";


export default function Home() {

    const dispatch = useDispatch();

    const amount = useSelector(state => state.amount)

    const submitForm = (name, price, qty, id) => {


        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('qty', qty);
        formData.append('id', id);

        axios.post("https://e-commerce-server-lake.vercel.app/api/addcart", formData).then(() => {
            alert('added to cart')
        })


    }


    const [list, setList] = useState([]);


    useEffect(() => {
        axios.get("https://e-commerce-server-lake.vercel.app/api/get").then((response) => {


            setList(response.data);

        });
    }, []);








    axios.defaults.withCredentials = true;

    useEffect(() => {

        axios.get("https://e-commerce-server-lake.vercel.app/api/login").then((response) => {
            console.log(response);
        })

    }, [])





    return (


        <>




            <Navbar />

            <div class="cont">
                <div class="cardg"> <img src={pizza} alt="" /> </div>
                <div class="cardg"><img src={burger} alt="" /></div>
                <div class="cardg"> <img src={dosa} alt="" /></div>
                <div class="cardg"><img src={shake} alt="" /></div>
                <div class="cardg"><img src={indian} alt="" /></div>


            </div>


           

            <div className="line">Order Now</div>






            {
                list && list.length > 0
                    ?
                    list.map((val) => {

                        return (





                            <div class="card" style={{ width: "18rem" }}>



                                <img src={fruit} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{val.prod_name}</h5>
                                    <p class="card-text">{val.price} Rs.</p>


                                </div>
                                <button class="btn btn-success" onClick={() => { { submitForm(val.prod_name, val.price, val.qty, val.id); dispatch(actionCreators.addMoney(val.price)) } }}> Add to cart</button>
                            </div>


                        )
                    })
                    :
                    "No data available"


            }





            <Footer />














        </>


    )

}
