import React from "react";
import PropTypes from 'prop-types';

function KombuchaDetail(props){
  const { kombucha } = props;
  return (
    <React.Fragment>
      <h1>Kombucha Details</h1>
      <p>{kombucha.flavor} Flavors</p>
      <p>{kombucha.names} Name</p>
      <p><em>{kombucha.price}</em></p>
      <hr/>
    </React.Fragment>
  );
}

KombuchaDetail.propTypes = {
  kombucha: PropTypes.object
};
export default KombuchaDetail;
