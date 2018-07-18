import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import { defaultBackgroundColor } from '../../utils/note/validData'
import { createExampleNote, createEmptyNote } from '../../actions/create'
import { getNotesList } from '../../actions/notes'
import { history } from '../../utils/history'

class Home extends Component {
  constructor(props) {
    super(props)
    this.goToNotePage = this.goToNotePage.bind(this)
    this.createEmptyNote = this.createEmptyNote.bind(this)
    this.createExampleNote = this.createExampleNote.bind(this)
    this.state = {
      listShouldBeUpdated: true
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.listShouldBeUpdated === true) {
      this.setState(
        { listShouldBeUpdated: false },
        () => this.props.getNotesList()
      )
    }
  }

  goToNotePage(note) {
    if (note.title !== null) {
      history.push({ pathname: `/note/${note.filename}` })
    }
  }

  createEmptyNote() {
    this.props.createEmptyNote()
    this.setState({ listShouldBeUpdated: true })
  }

  createExampleNote() {
    this.props.createExampleNote()
    this.setState({ listShouldBeUpdated: true })
  }

  render() {
    const { all, pending } = this.props.notes
    return (
      <div className="home">
        <h4>Home page</h4>
        <div className="home-up-btn">
          <Button disabled={pending} bsStyle="primary" onClick={this.createExampleNote}>Create example note</Button>
          <Button disabled={pending} bsStyle="primary" onClick={this.createEmptyNote}>Create empty note</Button>
        </div>
        <br />
        <div className="col-12">
          <div className="home-wrap">
          {all.map((note, i) =>
            <div className="col-6" key={i}>
              <div className="home-note-block"
                style={{backgroundColor: note.colorObj.color !== null ? note.colorObj.color : defaultBackgroundColor}}
                onClick={() => this.goToNotePage(note)}
                disabled={note.title === null}
              >
                {note.title !== null ?
                  <div className="title">{note.title}</div> :
                  <div>
                    <div className="title-error">Data was broken!</div>
                    <div>(Note is not available)</div>
                  </div>
                }
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  create: state.create, /* just for rerender component */
  notes: state.notes
})

const mapDispatchToProps = (dispatch) => ({
  createExampleNote: () => dispatch(createExampleNote()),
  createEmptyNote: () => dispatch(createEmptyNote()),
  getNotesList: () => dispatch(getNotesList())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
