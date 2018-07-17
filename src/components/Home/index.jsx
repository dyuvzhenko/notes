import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { history } from '../../utils/history'

class Home extends Component {
  constructor(props) {
    super(props)
    this.goToNotePage = this.goToNotePage.bind(this)
  }

  goToNotePage(note) {
    if (note.title === null) {
      return
    }
    history.push({ pathname: `/note/${note.filename}` })
  }

  render() {
    const { all } = this.props.notes
    console.log(all)
    return (
      <div className="home">
        <h4>Home page</h4>
        <br />
        <div className="col-12">
          <div className="wrap">
          {all.map((note, i) =>
            <div className="col-6" key={i}>
              <div className="note-block" onClick={() => this.goToNotePage(note)} disabled={note.title === null}>
                <Link to={`/note/${note.filename}`} disabled={note.title === null}>link to note with filename = {note.filename}</Link> {/*disabled link, if data broken*/}
                <div>{note.title}</div>
                <div>{note.title === null && 'Data was broken. И фон такой грустный кароч'}</div>
                <div>{note.color}</div>
              </div>
            </div>
          )}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ notes: state.notes })

export default connect(mapStateToProps)(Home)
