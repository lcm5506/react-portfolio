import React from "react";
import "./Modal.css";

function Modal(props) {
  return (
    <div className="mmodal" onClick={props.closeModal}>
      <div className="mmodal-container bg-dark">
        <div className="modal-close-btn" onClick={props.closeModal}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <h2 className="modal-header display-4 d2-text-shadow text-center mb-5 mt-5">
          {props.title}
        </h2>
        <div className="modal-body">
          {props.img ? (
            <a
              href={props.external ? props.external : props.git}
              target="_blank"
              rel="noopener noreferrer"
              class="modal-img-container"
            >
              {props.img}
            </a>
          ) : (
            ""
          )}
          <div className="modal-text">{props.text}</div>
          <div className="modal-links">
            {props.git && (
              <a
                href={props.git}
                className="modal-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-brands fa-github"></i> Source Code
              </a>
            )}
            {props.external && (
              <a
                href={props.external}
                className="modal-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fa-solid fa-up-right-from-square"></i> Open Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
