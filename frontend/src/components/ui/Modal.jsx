import React from "react";
let isOpen = true;

const Modal = ({ isOpen, children }) => {
  return isOpen ? (
    <div>
      <div className="overlay-style"></div>
      <div className="modal-style">{children}</div>
    </div>
  ) : null;
};

export default Modal;
