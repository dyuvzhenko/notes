import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import showdown from 'showdown'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

class CardView extends Component {
  constructor(props) {
    super(props)
    this.removeCard = this.removeCard.bind(this)
    this.updateCard = this.updateCard.bind(this)
    this.setLabel = this.setLabel.bind(this)

    this.onChangeCardTitle = this.onChangeCardTitle.bind(this)
    this.activateInput = this.activateInput.bind(this)
    this.onKeyPress = this.onKeyPress.bind(this)

    const converter = new showdown.Converter()
    converter.setOption('simpleLineBreaks', true)

    this.state = {
      initCardTitle: props.card.title,
      inputCardTitle: props.card.title || '',
      initCardDescription: props.card.description,
      inputCardDescription: props.card.description || '',
      showedText: converter.makeHtml(props.card.description),

      isTitleEditing: false,
      isDescriptionEditing: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.card.title !== this.state.initCardTitle) {
      this.setState({
        initCardTitle: nextProps.card.title,
        inputCardTitle: nextProps.card.title
      })
    }
  }

  removeCard() {
    const { columnNum, cardNum } = this.props
    this.props.removeCard(columnNum, cardNum)
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

  activateInput(isActivated) {
    this.setState({
      inputCardTitle: this.state.initCardTitle,
      isTitleEditing: isActivated
    })
    !isActivated && this.inputCardTitle.blur()
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      if (this.state.inputCardTitle === '') {
        e.preventDefault()
      } else {
        this.activateInput(false)
        this.updateCard({ ...this.props.card, title: this.state.inputCardTitle })
      }
    }
  }

  onChangeCardTitle(e) {
    this.setState({ inputCardTitle: e.target.value })
  }

  render() {
    const { card, labelsDescription } = this.props
    const { isDescriptionEditing } = this.state
    return (
      <Modal show={true} bsSize="large">
        <Modal.Header>
          <Modal.Title>
            <input
              className={'card-title ' + (this.state.isTitleEditing ? '' : 'active')}
              onFocus={() => this.activateInput(true)}
              onBlur={() => this.activateInput(false)}
              ref={c => this.inputCardTitle = c}
              onChange={this.onChangeCardTitle}
              onKeyPress={this.onKeyPress}
              value={this.state.inputCardTitle}
            />
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
                {isDescriptionEditing ? (
                  <div>
                    <Button bsStyle="danger">Return</Button>
                    <Button bsStyle="success">Save changes</Button>
                  </div>
                ) : (
                  <Button bsStyle="info">Edit description</Button>
                )}
                {!isDescriptionEditing &&
                  <Button bsStyle="danger" onClick={this.removeCard}>
                    Delete this card
                  </Button>
                }
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    )
  }
}

export default CardView
