import React from "react";
import PropTypes from 'prop-types';

function KombuchaDetail(props){
  const { kombucha, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Kombucha Details</h1>
      <p>{kombucha.flavor} Flavors</p>
      <p>{kombucha.names} Name</p>
      <p>{kombucha.quantity}</p>
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
