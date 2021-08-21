import React from "react";
import { v4 } from 'uuid';

function NewKombuchaForm (){
  

  return (
    <React.Fragment>
      <form onSubmit={handleNewKombuchaFormSubmission}>
        <input
          type='text'
          name='names'
          placeholder='Name' />
        <input
          type='text'
          name='flavor'
          placeholder='Flavor' />
        <input
          type= "num"
          name='price'
          placeholder='Price' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
  function handleNewKombuchaFormSubmission(event) {
    event.preventDefault();
    console.log(event.target.names.value);
    console.log(event.target.location.value);
    console.log(event.target.price.value);
  }

}
export default NewKombuchaForm;