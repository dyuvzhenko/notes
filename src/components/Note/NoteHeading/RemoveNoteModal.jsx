import React from 'react'
import { Modal, Button } from 'react-bootstrap'

const requiredConfirmString = 'confirm'

export default ({
  toggleModal, isNoteRemoveModalOpen,
  changeConfirmString, confirmString,
  removeNote, removeNoteErrorMsg
}) => (
  <div>
    <button
      className="btn note-remove-btn"
      onClick={() => toggleModal(true)}
    >Remove this Note</button>
    <Modal show={isNoteRemoveModalOpen} onHide={() => toggleModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm action</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <h4>Enter string "confirm" to field</h4>
          <input
            onChange={changeConfirmString}
            value={confirmString}
          />
        </div>
        {removeNoteErrorMsg}
      </Modal.Body>
      <Modal.Footer>
        <Button
          bsStyle="danger"
          onClick={removeNote}
          disabled={confirmString !== requiredConfirmString}
        >Delete Note
        </Button>
        <Button onClick={() => toggleModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
)
