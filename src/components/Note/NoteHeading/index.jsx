import React, { Component } from 'react'
import { DropdownButton, MenuItem, Modal, Button } from 'react-bootstrap'

import { validBackgroundColors } from '../../../utils/note/validData'

import ColorSettings from './ColorSettings'
// LabelSettings

class NoteHeading extends Component {
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
          <ColorSettings
            validBackgroundColors={validBackgroundColors}
            currentBackgroundColor={currentBackgroundColor}
            changeBackgroundColor={changeBackgroundColor}
            isNoteRemoveModalOpen={isNoteRemoveModalOpen}
            changeConfirmString={this.changeConfirmString}
            removeNoteErrorMsg={removeNoteErrorMsg}
            removeNote={this.props.removeNote}
            toggleModal={this.toggleModal}
            confirmString={confirmString}
          />
        </div>
      </div>
    )
  }
}

export default NoteHeading
