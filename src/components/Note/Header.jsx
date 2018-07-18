import React, { Component } from 'react'
import { DropdownButton, MenuItem, Button } from 'react-bootstrap'

import { validBackgroundColors } from '../../utils/note/validData'

class Header extends Component {
  constructor(props) {
    super(props)
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.activateInput = this.activateInput.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)
    this.state = {
      titleValue: props.title || '',
      titleIsActivated: false
    }
  }

  onChangeTitle(e) {
    this.setState({ titleValue: e.target.value })
  }

  activateInput(isActivated) {
    this.setState({ titleIsActivated: isActivated })
    !isActivated && this.inputTitle.blur()
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.activateInput(false)
      this.props.changeTitle(this.state.titleValue)
    }
  }

  render() {
    const { changeBackgroundColor, title } = this.props
    const { titleValue, titleIsActivated } = this.state
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
              <MenuItem key={i} onClick={() => changeBackgroundColor(colorObj)}>
                {colorObj.name} <div className="note-header-color-example" style={{backgroundColor: colorObj.color}}></div>
              </MenuItem>
            )}
          </DropdownButton>
          <Button>Удалить эту доску</Button>
          {/* (подтверждение в модалке с требованием ввести слово pass или confirm) */}
        </div>
      </div>
    )
  }
}

export default Header
