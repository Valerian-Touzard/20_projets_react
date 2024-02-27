import React, { useState } from "react";
import Modal from "./modal";
import "./style.css"

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  /**
   * Permet de changer le state "showModalPopup" pour cacher ou afficher le composant Modal
   */
  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  /**
   * Permet de fermer la modale
   */
  const onClose = () =>{
    setShowModalPopup(false);
  }

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && <Modal onClose={() => onClose} body={<div>Customize Body</div>} />}
    </div>
  );
};

export default ModalTest;
