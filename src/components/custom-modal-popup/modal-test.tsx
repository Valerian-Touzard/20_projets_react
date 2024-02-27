import React, { useState } from "react";
import Modal from "./modal";

const ModalTest = () => {
  const [showModalPopup, setShowModalPopup] = useState(false);

  /**
   * Permet de changer le state "showModalPopup" pour cacher ou afficher le composant Modal
   */
  const handleToggleModalPopup = () => {
    setShowModalPopup(!showModalPopup);
  };

  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
      {showModalPopup && <Modal />}
    </div>
  );
};

export default ModalTest;
