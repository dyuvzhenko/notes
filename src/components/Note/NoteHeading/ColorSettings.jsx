import React, { Component } from 'react'
import { DropdownButton, MenuItem, Modal, Button } from 'react-bootstrap'

import { validBackgroundColors } from '../../../utils/note/validData'
const requiredConfirmString = 'confirm'

export default ({
  validBackgroundColors, currentBackgroundColor, changeBackgroundColor,
  toggleModal, isNoteRemoveModalOpen, removeNote, removeNoteErrorMsg,
  changeConfirmString, confirmString
}) => (
  <div>
    <DropdownButton
      style={{backgroundColor: 'white', color: 'black'}}
      title={'Change background color'}
      id={`changeColorBtn`}
      bsStyle={'primary'}
    >
      {validBackgroundColors.map((colorObj, i) =>
        <MenuItem
          key={i}
          onClick={() => changeBackgroundColor(colorObj)}
          style={{backgroundColor: currentBackgroundColor === colorObj.color ? '#e0e0e0' : 'white'}}
        >{colorObj.name} <div className="note-header-color-example" style={{backgroundColor: colorObj.color}}></div>
        </MenuItem>
      )}
    </DropdownButton>
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
