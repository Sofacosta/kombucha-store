import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKombuchaForm (props){
  
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
          type= "number"
          name='price'
          min='0'
          placeholder='Price' />
        <button type='submit'>Submit</button>
      </form>
    </React.Fragment>
  );
  function handleNewKombuchaFormSubmission(event) {
    event.preventDefault();
    props.onNewKombuchaCreation({names: event.target.names.value, flavor: event.target.flavor.value, price: event.target.price.value, id: v4()});
  }
}

  NewKombuchaForm.propTypes = {
    onNewKombuchaCreation: PropTypes.func
  };
export default NewKombuchaForm;