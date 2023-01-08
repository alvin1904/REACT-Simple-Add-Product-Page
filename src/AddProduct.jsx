import { useState } from "react";
import "./App.css";
import ImageSelector from "./ImageSelector";

function AddProduct() {
  return (
    <form className="form" action="submit">
      <p className="heading">Add a product</p>
      <div className="form-section">
        <div className="section">
          <p className="subheading">Title</p>
          <input type="text" placeholder="Name of your product"></input>
        </div>
        <div className="section">
          <p className="subheading">Description</p>
          <textarea
            type="text"
            placeholder="Describe your product in about 250 words"
          ></textarea>
        </div>
        <div className="section">
          <p className="subheading">Price</p>
          <section className="flex-row">
            <input type="text" placeholder="Sale price"></input>
            <input type="text" placeholder="Compare at price (will be striked off)"></input>
          </section>
        </div>
        <div className="section">
          <p className="subheading">Add media</p>
            4 images of 1:1 ratio recommended<br/>
          <ImageSelector />
        </div>
      </div>
    </form>
  );
}

export default AddProduct;
