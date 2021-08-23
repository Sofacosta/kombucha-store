import React from "react";
import PropTypes from 'prop-types';

function KombuchaDetail(props){
  const { kombucha, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h2>Kombucha Details</h2>
      <p>Name: {kombucha.names}</p>
      <p>Flavor: {kombucha.flavor}</p>
      <p>Price per pint glass: ${kombucha.price}</p>
      <p>Remaining pints: {kombucha.pintsRemaining}</p>
      <button onClick={ () => onClickingDelete(kombucha.id)}>Delete kombucha keg</button>
      <hr/>
      
    </React.Fragment>
  );
}

KombuchaDetail.propTypes = {
  kombucha: PropTypes.object,
  onClickingDelete: PropTypes.func,
};
export default KombuchaDetail;
