import React from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'

import { validBackgroundColors } from '../../../utils/note/validData'

export default ({
  currentBackgroundColor,
  changeBackgroundColor
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
  </div>
)
