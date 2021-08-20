import React from 'react';
import NewKombuchaForm from './NewKombuchaForm';
import KombuchaList from './KombuchaList';

class KombuchaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }
  

  render(){
    let currentlyVisibleState = null;
    let addKombuchaButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKombuchaForm />
    } else {
      currentlyVisibleState = <KombuchaList />
      addKombuchaButton = <button onClick={this.handleClick}>Add</button>
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addKombuchaButton }
      </React.Fragment>
    );
  }

}

export default KombuchaControl;