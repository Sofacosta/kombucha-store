import React from "react";
import Kombucha from "./Kombucha";
import PropTypes from "prop-types";

function KombuchaList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.kombuchaList.map((kombucha) =>
        <Kombucha
        whenKombuchaClicked = { props.onKombuchaSelection } 
        names={kombucha.names}
        flavor={kombucha.flavor}
        id={kombucha.id}
        key={kombucha.id}/>
      )}
    </React.Fragment>
  );
}

KombuchaList.propTypes = {
  kombuchaList: PropTypes.array,
  onKombuchaSelection: PropTypes.func
};

export default KombuchaList;