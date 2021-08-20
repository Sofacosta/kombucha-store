import React from "react";
import PropTypes from "prop-types";

function Kombucha(props){
  return(
    <React.Fragment>
      <h3>{props.name}</h3>
      <h3>{props.flavor}</h3>
      <hr/>
    </React.Fragment>
  )
}

Kombucha.propTypes = {
  name: PropTypes.string,
  flavor: PropTypes.string,
}

export default Kombucha;