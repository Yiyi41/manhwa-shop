import React from "react";
import "./Modal.css";

const Modal = ({ modalOpen, setModalOpen }) => {
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    modalOpen && (
      <div className="modal-container">
        <div className="modal-content">
          <span className="close-button" onClick={closeModal}>
            Close
          </span>
          <p className="modal-message">
            L'article est ajouté dans votre panier !
          </p>
        </div>
      </div>
    )
  );
};

export default Modal;
