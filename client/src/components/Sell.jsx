import React from "react";
import { useEffect, useState } from 'react';
import axios from "axios";
import Navbar from "./Navbar";



export default function Sell() {

  const [prod_name, setProd_name] = useState("")
  const [category, setCategory] = useState("")
  const [file, setFile] = useState(null)
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [saleprice, setSaleprice] = useState("")
  const [qty, setQty] = useState("")



  const submitForm = (event) => {

    event.preventDefault();
    

    const formData = new FormData();
    formData.append('file', file);
    formData.append('prod_name', prod_name);
    formData.append('category', category);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('saleprice', saleprice);
    formData.append('qty', qty);


    axios.post("https://e-commerce-server-lake.vercel.app/api/items",formData).then(() => {
      alert('success for insert')
    })

  }



  return (
    <>

<Navbar/>

      <br />

      <form>

        <form  id="form" novalidate class="row g-3 needs-validation"  enctype="multipart/form-data">
          <div class="col-md-4">
            <label for="validationCustom01" class="form-label" id="text">Product Name</label>
            <input type="text" class="form-control" id="validationCustom01" name="Prod_name" onChange={(e) => {
              setProd_name(e.target.value)
            }} />
            <div class="valid-feedback">
              Looks good!
            </div>
          </div>


          <div class="col-md-4">
          <label for="validationCustom01" class="form-label" id="text">category</label>
            <select class="form-select" id='select' aria-label="Default select example" name="category" onChange={(e) => {
              setCategory(e.target.value)
            }} >
              <option selected>Open this select menu</option>
              <option value="Milk">Milk</option>
              <option value="Burger">Burger</option>
              <option value="Pizza">Pizza</option>
              <option value="Cholle">Cholle</option>
              <option value="Kulche">Kulche</option>
              <option value="Shake">Shake</option>
              <option value="Cake">Cake</option>
              <option value="Pasta">Pasta</option>
            </select>


          </div>



          
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label" id="text">Upload Image</label>
            <input type="file" class="form-control" id="validationCustom02" name="file" onChange={(e) => {
              setFile(e.target.files[0]);
            }}  />
          </div>
          <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label" id="text">Description</label>
            <div class="input-group has-validation">
              
              <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" name="Description" onChange={(e) => {
                setDescription(e.target.value)
              }} />

            </div>
          </div>

          <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label" id="text">Price</label>
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend">Rs</span>
              <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" name="Price" onChange={(e) => {
                setPrice(e.target.value)
              }} />

            </div>
          </div>

          <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label" id="text">Sale Price</label>
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend">Rs</span>
              <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" name="Saleprice" onChange={(e) => {
                setSaleprice(e.target.value)
              }} />

            </div>
          </div>

          <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label" id="text">Quantity</label>
            <div class="input-group has-validation">
              <span class="input-group-text" id="inputGroupPrepend">Rs</span>
              <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" name="qty" onChange={(e) => {
                setQty(e.target.value)
              }} />

            </div>
          </div>


          



          <div class="col-12">
            <button class="btn btn-primary" type="submit" onClick={submitForm} >Upload</button>

          </div>
        </form>

      </form>

    </>
  )

}
