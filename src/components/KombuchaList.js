import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";

function KombuchaList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.kombuchaList.map((kombucha, index) =>
        <Kombucha names={kombucha.names}
        flavor={kombucha.flavor}
        key={index}/>
      )}
    </React.Fragment>
  );
}

KombuchaList.propTypes = {
  kombuchaList: PropTypes.array
};

export default KombuchaList;