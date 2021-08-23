import React from 'react';
import NewKombuchaForm from './NewKombuchaForm';
import KombuchaList from './KombuchaList';
import KombuchaDetail from './KombuchaDetail';

class KombuchaControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKombuchaList: [],
      selectedKombucha: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKombucha != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKombucha: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }
  handleAddingNewKombuchaToList = (newKombucha) => {
    const newMasterKombuchaList = this.state.masterKombuchaList.concat(newKombucha);
    this.setState({
      masterKombuchaList: newMasterKombuchaList,
      formVisibleOnPage: false});
  }

  handleChangingSelectedKombucha = (id) => {
    const selectedKombucha = this.state.masterKombuchaList.filter(kombucha => kombucha.id === id)[0];
    this.setState({selectedKombucha: selectedKombucha});
  }

  handleDeletingKombucha = (id) => {
    const newMasterKombuchaList = this.state.masterKombuchaList.filter(kombucha => kombucha.id != id);
    this.setState({
      masterKombuchaList: newMasterKombuchaList,
      selectedKombucha: null
    });
  }

  handleRemovingPint = (id) => {
    const selectedKombucha = this.state.masterKombuchaList.filter(kombucha => kombucha.id === id)[0];
    const updatedKombucha = {name: selectedKombucha.name, pintsRemaining: selectedKombucha.pintsRemaining -1, id: selectedKombucha.id };
    const kombuchaIndex = this.state.masterKombuchaList.indexOf(selectedKombucha);
    const startMasterKombuchaList = this.state.masterKombuchaList.slice(0, kombuchaIndex);
    const endMasterKombuchaList = this.state.masterKombuchaList.slice(kombuchaIndex +1);
    const editedMasterKombuchaList = startMasterKombuchaList.concat(updatedKombucha).concat(endMasterKombuchaList);
    if (selectedKombucha.pintsRemaining > 0) {
      this.setState({masterKombuchaList: editedMasterKombuchaList});
    }   
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKombucha !=null) {
      currentlyVisibleState = 
      <KombuchaDetail 
        kombucha = {this.state.selectedKombucha}
        onClickingDelete={this.handleDeletingKombucha} />
        buttonText = "Return to Kombucha List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKombuchaForm onNewKombuchaCreation={this.handleAddingNewKombuchaToList} />;
      buttonText = "Return to Kombucha List";
    } else {
      currentlyVisibleState = 
      <KombuchaList
       kombuchaList={this.state.masterKombuchaList} 
       onKombuchaSelection={this.handleChangingSelectedKombucha} />;
      buttonText = "Add Kombucha";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default KombuchaControl;