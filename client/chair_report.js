import { Meteor } from 'meteor/meteor';
import { React, Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class chairReport extends Component {
  constructor(props){
    super(props);
    this.state = { modal: false,name: '',team :'' ,country: ''};

    this.toggle = this.toggle.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle(){
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render () {
    return(
      <div>
        <h1>React Bootstrap Modal Example</h1>
      <Button color="success" onClick={this.toggle}>React Modal</Button>
      <Modal isOpen={this.state.modal}>
      <form onSubmit={this.handleSubmit}>
        <ModalHeader>IPL 2018</ModalHeader>
        <ModalBody>
        <div className="row">
          <div className="form-group col-md-4">
            <label>Name:</label>
            <input type="text" value={this.state.name} onChange={this.handleChangeName} className="form-control" />
          </div>
        </div>
        </ModalBody>
        <ModalFooter>
          <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
          <Button color="danger" onClick={this.toggle}>Cancel</Button>
        </ModalFooter>
        </form>
      </Modal>
      </div>
    );
  }
}

export default chairReport;
