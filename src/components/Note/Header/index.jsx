import React, { Component } from 'react'
import { DropdownButton, MenuItem, Modal, Button } from 'react-bootstrap'

import { validBackgroundColors } from '../../../utils/note/validData'

class Header extends Component {
  constructor(props) {
    super(props)
    this.changeConfirmString = this.changeConfirmString.bind(this)
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.activateInput = this.activateInput.bind(this)
    this.toggleModal = this.toggleModal.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
    this.requiredConfirmString = 'confirm'
    this.state = {
      confirmString: '',
      isNoteRemoveModalOpen: false,
      titleValue: props.title || '',
      titleIsActivated: false,
      initTitle: props.title
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.title !== this.state.initTitle) {
      this.setState({
        initTitle: nextProps.title,
        titleValue: nextProps.title
      })
    }
  }

  onChangeTitle(e) {
    this.setState({ titleValue: e.target.value })
  }

  activateInput(isActivated) {
    this.setState({
      titleValue: this.state.initTitle,
      titleIsActivated: isActivated
    })
    !isActivated && this.inputTitle.blur()
  }

  toggleModal(isOpen) {
    this.setState({ isNoteRemoveModalOpen: isOpen })
  }

  changeConfirmString(e) {
    this.setState({ confirmString: e.target.value })
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      if (this.state.titleValue === '') {
        e.preventDefault()
      } else {
        this.activateInput(false)
        this.props.changeTitle(this.state.titleValue)
      }
    }
  }

  render() {
    const { changeBackgroundColor, currentBackgroundColor, removeNoteErrorMsg } = this.props
    const { titleValue, titleIsActivated, confirmString, isNoteRemoveModalOpen } = this.state
    return (
      <div className="note-header">
        <input
          className={titleIsActivated ?
            'note-header-active-input-title' :
            'note-header-inactive-input-title'
          }
          onFocus={() => this.activateInput(true)}
          onBlur={() => this.activateInput(false)}
          ref={c => this.inputTitle = c}
          onChange={this.onChangeTitle}
          onKeyPress={this.onKeyPress}
          value={titleValue}
        />
        <div className="note-header-right-panel">
          <DropdownButton style={{backgroundColor: 'white', color: 'black'}}
            title={'Change background color'}
            id={`changeColorBtn`}
            bsStyle={'primary'}
          >
            {validBackgroundColors.map((colorObj, i) =>
              <MenuItem key={i} onClick={() => changeBackgroundColor(colorObj)} style={{backgroundColor: currentBackgroundColor === colorObj.color ? '#e0e0e0' : 'white'}}>
                {colorObj.name} <div className="note-header-color-example" style={{backgroundColor: colorObj.color}}></div>
              </MenuItem>
            )}
          </DropdownButton>
          <button className="btn note-remove-btn" onClick={() => this.toggleModal(true)}>Remove this Note</button>
          <Modal show={isNoteRemoveModalOpen} onHide={() => this.toggleModal(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Confirm action</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <h4>Enter string "confirm" to field</h4>
                <input onChange={this.changeConfirmString} value={confirmString} />
              </div>
              {removeNoteErrorMsg}
            </Modal.Body>
            <Modal.Footer>
              <Button
                bsStyle="danger"
                onClick={this.props.removeNote}
                disabled={confirmString !== this.requiredConfirmString}
              >Delete Note
              </Button>
              <Button onClick={() => this.toggleModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Header
