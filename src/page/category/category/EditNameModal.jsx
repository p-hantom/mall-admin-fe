import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Name
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <input placeholder={props.prevName} 
                value={props.inputValue}
                onChange={e => props.changeValueHandler(e)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.confirmEdit}>Confirm</Button>
          <Button variant="dark" onClick={props.onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default MyVerticallyCenteredModal;