import React, { Component } from 'react'
import { DropdownButton, MenuItem, Button } from 'react-bootstrap'

import { validBackgroundColors } from '../../utils/note/validData'

export default ({ changeBackgroundColor, title }) => (
  <div className="note-header">
    <h3>{title}</h3>
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
