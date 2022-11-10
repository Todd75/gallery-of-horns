import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.selectedBeast.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body id="modalbody">
                    

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.props.handleCloseModal}>Done</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default SelectedBeast