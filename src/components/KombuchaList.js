import React from "react";
import Kombucha from "./Kombucha";

const masterKombuchaList = [
  {
    name: 'Energy boost',
    flavor: 'ginger, lemon, pepper' 
  }
]

function KombuchaList(){
  return (
    <React.Fragment>
      <hr/>
      {masterKombuchaList.map((kombucha, index) =>
        <Kombucha name={kombucha.name}
        flavor={kombucha.flavor}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default KombuchaList;