import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { all } = this.props.notes
    return (
      <div>
        <h4>Start page</h4>
        <br />
        <Link to={`/note/3`}>link to note with id = 3</Link>

        {
          all.map((note, i) =>
            <div className="note-block" key={i}>
              <Link to={`/note/${note.filename}`}>link to note with filename = note.filename</Link> {/*disabled link, if data broken*/}
              <div>{note.title}</div>
              <div>{note.title === null && 'Data was broken. И фон такой грустный кароч'}</div>
              <div>{note.color}</div>
            </div>
          )
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ notes: state.notes })

export default connect(mapStateToProps)(Home)
