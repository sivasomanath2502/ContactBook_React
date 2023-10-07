import React from 'react';

const DeleteConfirmation = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className="ui dimmer modals page active">
      <div className="ui standard modal visible active">
        <div className="header">Are you sure you want to delete this contact?</div>
        <div className="actions">
          <div className="ui negative button" onClick={onClose}>
            Cancel
          </div>
          <div className="ui positive right labeled icon button" onClick={onConfirm}>
            OK
            <i className="checkmark icon"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteConfirmation;
