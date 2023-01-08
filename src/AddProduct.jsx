import { useState } from 'react'
import './App.css'

function AddProduct() {

  return (
      <form className='form' action='submit'>
        <p className='heading'>Add a product</p>
        <div className='form-section'>
          <div className='section'>
            <p className='subheading'>Title</p>
            <input type='text' placeholder='Name of your product'></input>
          </div>
          <div className='section'>
            <p className='subheading'>Description</p>
            <textarea type='text' placeholder='Describe your product in about 250 words'></textarea>
          </div>
            
          
        </div>
      </form>
  )
}

export default AddProduct
