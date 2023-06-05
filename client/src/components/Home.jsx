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
import pan from './photos/pan.jpg'
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import { useSelector } from "react-redux";


export default function Home() {
    
    const [searchterm, setSearchterm] = useState("");

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
        
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" id="searchterm" placeholder="Search" aria-label="Search" onChange={(e) => {
                    setSearchterm(e.target.value);
                }} />

            </form>

        

            <div class="container1">
                <div class="card_box">
                    <p class="prem">Buy Premium for exclusive discounts</p>
                    
                    <span></span>
                </div>
            </div>
        
        
        <div className="line">Discounts</div>

            <div class="master">

            <div class="cardshow">
                <div class="card-top">
                    <p class="card__title">60% off on pizza</p>
                    <div class="rating">
                        
                    </div>
                </div>
                <div class="card__info">
                    <p class="episode__num">46Ep</p>
                    <p class="episode__type">Fantasy</p>
                </div>
                <div class="card__btns">
                    <button class="add-btn">+</button>
                    <button class="watch-btn">more</button>
                </div>
            </div>

            <div class="cardshow">
                <div class="card-top">
                    <p class="card__title">40% off on shakes</p>
                    <div class="rating">
                       
                    </div>
                </div>
                <div class="card__info">
                    <p class="episode__num">46Ep</p>
                    <p class="episode__type">Fantasy</p>
                </div>
                <div class="card__btns">
                    <button class="add-btn">+</button>
                    <button class="watch-btn">more</button>
                </div>
            </div>

            <div class="cardshow">
                <div class="card-top">
                    <p class="card__title">20% off on cakes</p>
                    <div class="rating">
                        
                    </div>
                </div>
                <div class="card__info">
                    <p class="episode__num">46Ep</p>
                    <p class="episode__type">Fantasy</p>
                </div>
                <div class="card__btns">
                    <button class="add-btn">+</button>
                    <button class="watch-btn">more</button>
                </div>
            </div>

            <div class="cardshow">
                <div class="card-top">
                    <p class="card__title">50% off on tikka</p>
                    <div class="rating">
                        
                    </div>
                </div>
                <div class="card__info">
                    <p class="episode__num">46Ep</p>
                    <p class="episode__type">Fantasy</p>
                </div>
                <div class="card__btns">
                    <button class="add-btn">+</button>
                    <button class="watch-btn">more</button>
                </div>
            </div>


            <div class="cardshow">
                <div class="card-top">
                    <p class="card__title">60% off on pizza</p>
                    <div class="rating">
                        
                    </div>
                </div>
                <div class="card__info">
                    <p class="episode__num">46Ep</p>
                    <p class="episode__type">Fantasy</p>
                </div>
                <div class="card__btns">
                    <button class="add-btn">+</button>
                    <button class="watch-btn">more</button>
                </div>
            </div>

            </div>




            <div className="line">Order Now</div>




           <div class="holder">

           {
                list && list.length > 0
                    ?
                    list.filter((val) => {
                            return searchterm.toLowerCase() === '' ? val : val.category.toLowerCase().includes(searchterm)
    
                        }).map((val) => {

                        return (





                            <div class="card" style={{ width: "18rem" }}>

                                <img src={pan} class="card-img-top" alt="..." />
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


           </div>

            





            <Footer />














        </>


    )

}
