import React, { useState, useRef } from "react";
import Modal from "./Modal";

function Card(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const modal = useRef();
  const handleCloseModal = () => setModalOpen(false);
  return (
    <>
      <div
        className={props.className ? `card ${props.className}` : "card"}
        onClick={() => {
          console.log("clicked");
          setModalOpen((prev) => !prev);
        }}
      >
        {props.img}
        <div className="card-body">
          {props.title && (
            <h3 className="card-title font-weight-bold font-italic">
              {props.title}
            </h3>
          )}
          {props.text && (
            <p className="card-text font-weight-light">{props.text}</p>
          )}
          {props.git && (
            <a
              href={props.git}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-brands fa-github"></i> Source Code
            </a>
          )}
          {props.external && (
            <a
              href={props.external}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa-solid fa-up-right-from-square"></i> Open Project
            </a>
          )}
        </div>
      </div>
      {props.modalEnable && modalOpen && (
        <Modal
          img={props.img}
          title={props.title}
          text={props.text}
          git={props.git}
          external={props.external}
          closeModal={handleCloseModal}
          ref={modal}
        />
      )}
    </>
  );
}

export default Card;
