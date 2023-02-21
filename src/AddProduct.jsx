import { useState } from "react";
import "./App.css";
import ImageSelector from "./ImageSelector";
import { FaRupeeSign } from "react-icons/fa";
import Categories from "./categories.json";

function AddProduct() {
  const [category, setCategory] = useState("Men");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <form className="form" action="submit">
      <p className="heading">Add a product</p>
      <div className="form-section">
        <div className="section">
          <p className="subheading">Title</p>
          <input type="text" placeholder="Name of your product"></input>
        </div>
        <div className="section">
          <p className="subheading">Category</p>
          <section className="flex-row dropdown-section">
            <select className="dropdown gender" name="gender" onChange={handleCategoryChange}>
              {Object.keys(Categories).map((val, id) => {
                return <option className='gender-option' key={id}>{val}</option>;
              })}
            </select>
            <select className="gender" name="gender">
              {category &&
                Categories[category].map((val, id) => {
                  return <option className='gender-option' key={id}>{val}</option>;
                })}
            </select>
          </section>
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
            <div>
              <FaRupeeSign />
              <input type="text" placeholder="Sale price"></input>
            </div>
            <div>
              <FaRupeeSign className="red" />
              <input
                type="text"
                placeholder="Compare at price (will be striked off)"
                className="red"
              ></input>
            </div>
          </section>
        </div>
        <br></br>
        <div className="section">
          <p className="subheading">Add media</p>
          4 images of 1:1 ratio recommended
          <br />
          <ImageSelector />
        </div>
        <div className="section btn-section">
          <button className="btn" type="submit" onClick={handleSubmit}>
            Add product
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddProduct;
