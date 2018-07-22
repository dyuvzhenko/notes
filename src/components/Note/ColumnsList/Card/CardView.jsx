import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import showdown from 'showdown'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

class CardView extends Component {
  constructor(props) {
    super(props)
    this.updateCard = this.updateCard.bind(this)
    this.setLabel = this.setLabel.bind(this)

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

  removeCard() {
    // this.props.removeCard()
  }

  updateCard(card) {
    /* method for all changes (title, description, labels, messages) */
    const { columnNum, cardNum } = this.props
    this.props.changeCard(columnNum, cardNum, card)
  }

  setLabel(selectedLabel) {
    const { card } = this.props
    let labels = []
    if (card.labels.find(e => e.name === selectedLabel.colorObj.name)) { // remove
      labels = card.labels.filter(e => e.name === selectedLabel.colorObj.name ? null : e)
    } else { // add
      labels = [...card.labels, selectedLabel.colorObj]
    }

    this.updateCard({ ...card, labels })
  }

  render() {
    const { card, labelsDescription } = this.props
    const { isDescriptionEditing } = this.state
    console.log('!', this.props)
    return (
      <Modal show={true} bsSize="large">
        <Modal.Header>
          <Modal.Title>
            <span className="card-title">
              {this.state.initTitle}
            </span>
            <div style={{float: 'right'}}>
              <Button bsStyle="danger" onClick={() => this.props.toggleCardView(false)}>
                Close
              </Button>
            </div>
          </Modal.Title>
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
                {labelsDescription.map((e, i) => e.description === '' ? null :
                  <div key={i} style={{backgroundColor: e.colorObj.color}} onClick={() => this.setLabel(e)}>
                    <div className="active-label">
                      {card.labels.find(_e => _e.name === e.colorObj.name) &&
                        <FontAwesomeIcon icon={faCheckCircle} color="inherit" />
                      }
                    </div>
                    {e.description}
                  </div>
                )}
              </div>
              <div className="control-buttons">
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
      </Modal>
    )
  }
}

export default CardView
