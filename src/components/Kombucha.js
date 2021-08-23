import React from "react";
import PropTypes from "prop-types";

function Kombucha(props){
  return(
    <React.Fragment>
      <div onClick = {() => props.whenKombuchaClicked(props.id)}>
        <h3> Flavor: {props.flavor} </h3>
        <br></br>
        <p> Please click to see more information and availability of this kombucha</p>
      </div>
       <hr/>   
    </React.Fragment>
  );
}

Kombucha.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
  quantity: PropTypes.string,
  id: PropTypes.string,
  whenKombuchaClicked: PropTypes.func,
  whenRemoveKombuchaClicked: PropTypes.func
};
export default Kombucha;