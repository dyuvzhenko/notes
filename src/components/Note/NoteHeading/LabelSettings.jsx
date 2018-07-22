import React, { Component } from 'react'
import { Table, Modal, Button, Alert } from 'react-bootstrap'

import { validLabelColors } from '../../../utils/note/validData'

class LabelSettings extends Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this)
    this.saveChanges = this.saveChanges.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    const datasetForInputs = validLabelColors.map((e) => ({
      ...e, description: props.labelsDescription.find(_e => _e.colorObj.name === e.name).description
    }))
    this.state = {
      initLabelsDescription: props.labelsDescription,
      datasetForInputs: datasetForInputs,
      msgAfterRequest: null
    }
  }

  onChangeDescription(event, colorName) {
    const datasetForInputs = this.state.datasetForInputs.map(elem =>
      elem.name !== colorName ? elem : { ...elem, description: event.target.value }
    )
    this.setState({ datasetForInputs })
  }

  saveChanges() {
    const validArray = this.state.datasetForInputs.map(elem => ({
      description: elem.description,
      colorObj: {
        name: elem.name,
        color: elem.color
      }
    }))
    this.props.saveLabelsDescription(validArray, (err) => {
      this.setState({
        msgAfterRequest: {
          isSuccess: err ? 'danger' : 'success',
          text: err ? 'Some error happened!' : 'Changes has been saved!'
        }
      }, () => {
        setTimeout(() => this.setState({ msgAfterRequest: null }), 2000)
      })
    })
  }

  closeModal() {
    this.setState({
      initLabelsDescription: this.props.labelsDescription,
      datasetForInputs: validLabelColors.map((e) => ({
        ...e, description: this.props.labelsDescription.find(_e => _e.colorObj.name === e.name).description
      })),
      msgAfterRequest: null
    }, () => {
      this.props.toggleLabelSettingsModal(false)
    })
  }

  render() {
    const { datasetForInputs, msgAfterRequest } = this.state
    const { toggleLabelSettingsModal, isLabelSettingsOpen } = this.props
    return (
      <div>
        <button className="btn note-remove-btn" onClick={() => toggleLabelSettingsModal(true)}>
          Open Label Menu
        </button>
        <Modal show={isLabelSettingsOpen} onHide={() => toggleLabelSettingsModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Label Settings</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table>
              <thead>
                <tr>
                  <th>Color</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {datasetForInputs.map((elem, i) =>
                  <tr key={i}>
                    <td>
                      <div className="settings-label-color" style={{backgroundColor: elem.color}}>
                        {elem.name}
                      </div>
                    </td>
                    <td>
                      <div className="settings-label-description">
                        <input value={elem.description} onChange={(event) => this.onChangeDescription(event, elem.name)} />
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
            {msgAfterRequest &&
              <Alert bsStyle={msgAfterRequest.isSuccess}>
                {msgAfterRequest.text}
              </Alert>
            }
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="success" onClick={this.saveChanges}>
              Confirm changes
            </Button>
            <Button onClick={this.closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default LabelSettings
