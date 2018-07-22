import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import showdown from 'showdown'

class CardView extends Component {
  constructor(props) {
    super(props)
    const converter = new showdown.Converter()
    converter.setOption('simpleLineBreaks', true)
    this.state = {
      initTitle: props.card.title,
      initDescription: props.card.description,
      showedText: converter.makeHtml(props.card.description),

      isTitleEditing: false,
      isDescriptionEditing: false
    }
  }

  render() {
    const { labelsDescription } = this.props
    const { isDescriptionEditing } = this.state
    return (
      <Modal show={true} bsSize="large" onHide={() => this.props.toggleCardView(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{this.state.initTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="main-info">
            <div className="description">
              {
                !isDescriptionEditing ? (
                  <div dangerouslySetInnerHTML={{__html: this.state.showedText}} />
                ) : (
                  <div>...</div>
                )
              }
            </div>
            <div className="settings">
              <div className="selected-labels">
                {labelsDescription.map((e, i) =>
                  <div key={i} style={{backgroundColor: e.colorObj.color}}>
                    {e.description}
                  </div>
                )}
              </div>
              <div>
                {
                  isDescriptionEditing ?
                    <Button bsStyle="info">Show description</Button> :
                    <Button bsStyle="info">Edit description</Button>
                }
                <Button bsStyle="danger">Delete this card</Button>
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            bsStyle="primary"
            onClick={() => this.props.toggleCardView(false)}
          >Close</Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default CardView
