import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { DropdownButton, MenuItem } from 'react-bootstrap'

import ColumnsList from './ColumnsList'
import { defaultBackgroundColor, validBackgroundColors } from '../../utils/note/validData'
import { getCurrentNote, resetStateCurrent, changeBackgroundColor } from '../../actions/current'

class Note extends Component {
  constructor(props) {
    super(props)
    this.changeBackgroundColor = this.changeBackgroundColor.bind(this)
  }

  componentWillMount() {
    this.props.getCurrentNote(this.props.match.params.filename)
  }

  componentWillUnmount() {
    this.props.resetStateCurrent()
  }

  changeBackgroundColor(colorObj) {
    this.props.changeBackgroundColor(colorObj)
  }

  render() {
    const { pending, data } = this.props.current
    return pending ? null : (
      <div className="note" style={{backgroundColor: data.data.settings.colorObj.color !== null ? data.data.settings.colorObj.color : defaultBackgroundColor}}>
        <div className="note-header">
          <h3>{data.data.title}</h3>
          <div className="note-change-color-btn">
            <DropdownButton style={{backgroundColor: 'white', color: 'black'}}
              title={'Change background color'}
              id={`changeColorBtn`}
              bsStyle={'primary'}
            >
              {validBackgroundColors.map((colorObj, i) =>
                <MenuItem key={i} onClick={() => this.changeBackgroundColor(colorObj)}>
                  {colorObj.name} <div className="note-header-color-example" style={{backgroundColor: colorObj.color}}></div>
                </MenuItem>
              )}
            </DropdownButton>
          </div>
          <button>Удалить эту доску (подтверждение в модалке с требованием ввести слово pass)</button>
        </div>

        <br />
        <ColumnsList columns={data.data.columns} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ current: state.current })

const mapDispatchToProps = (dispatch) => ({
  resetStateCurrent: () => dispatch(resetStateCurrent()),
  getCurrentNote: (filename) => dispatch(getCurrentNote(filename)),
  changeBackgroundColor: (colorObj) => dispatch(changeBackgroundColor(colorObj))
})

export default connect(mapStateToProps, mapDispatchToProps)(Note)
